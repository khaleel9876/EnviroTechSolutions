import { useState } from 'react';
import { validateEmail, validatePhone, validateRequired } from '../lib/validators';
import { sendEnquiry } from '../lib/email';
import { trackEvent } from '../lib/analytics';

function ContactForm({ variant = 'full' }) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    services: [],
    message: '',
    consent: false,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const serviceOptions = [
    { value: 'testing', label: 'Environmental Testing' },
    { value: 'consultancy', label: 'Environmental Consultancy' },
    { value: 'management', label: 'Waste & Wastewater Management' },
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (name === 'services') {
      const newServices = checked
        ? [...formData.services, value]
        : formData.services.filter((s) => s !== value);
      setFormData({ ...formData, services: newServices });
    } else {
      setFormData({
        ...formData,
        [name]: type === 'checkbox' ? checked : value,
      });
    }

    // Clear error for this field
    if (errors[name]) {
      setErrors({ ...errors, [name]: null });
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!validateRequired(formData.name)) {
      newErrors.name = 'Name is required';
    }

    if (!validateEmail(formData.email)) {
      newErrors.email = 'Valid email is required';
    }

    if (!validatePhone(formData.phone)) {
      newErrors.phone = 'Valid phone number is required';
    }

    if (!validateRequired(formData.message)) {
      newErrors.message = 'Message is required';
    }

    if (formData.services.length === 0) {
      newErrors.services = 'Please select at least one service';
    }

    if (!formData.consent) {
      newErrors.consent = 'You must agree to the privacy policy';
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const newErrors = validate();
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await sendEnquiry(formData);
      trackEvent('form_submission', { form_type: 'contact' });
      
      setSubmitStatus('success');
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        services: [],
        message: '',
        consent: false,
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      {/* Name */}
      <div>
        <label htmlFor="name" className="label">
          Full Name <span className="text-red-600">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`input ${errors.name ? 'border-red-500' : ''}`}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? 'name-error' : undefined}
        />
        {errors.name && (
          <p id="name-error" className="mt-1 text-sm text-red-600" role="alert">
            {errors.name}
          </p>
        )}
      </div>

      {/* Company */}
      <div>
        <label htmlFor="company" className="label">
          Company/Organization
        </label>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          className="input"
        />
      </div>

      {/* Email and Phone */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="email" className="label">
            Email Address <span className="text-red-600">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`input ${errors.email ? 'border-red-500' : ''}`}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'email-error' : undefined}
          />
          {errors.email && (
            <p id="email-error" className="mt-1 text-sm text-red-600" role="alert">
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="label">
            Phone Number <span className="text-red-600">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={`input ${errors.phone ? 'border-red-500' : ''}`}
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? 'phone-error' : undefined}
          />
          {errors.phone && (
            <p id="phone-error" className="mt-1 text-sm text-red-600" role="alert">
              {errors.phone}
            </p>
          )}
        </div>
      </div>

      {/* Services */}
      <div>
        <fieldset>
          <legend className="label">
            Services of Interest <span className="text-red-600">*</span>
          </legend>
          <div className="space-y-3 mt-2">
            {serviceOptions.map((option) => (
              <label key={option.value} className="flex items-center">
                <input
                  type="checkbox"
                  name="services"
                  value={option.value}
                  checked={formData.services.includes(option.value)}
                  onChange={handleChange}
                  className="rounded border-accent-300 text-primary-600 focus:ring-primary-500"
                />
                <span className="ml-3 text-accent-700">{option.label}</span>
              </label>
            ))}
          </div>
          {errors.services && (
            <p className="mt-1 text-sm text-red-600" role="alert">
              {errors.services}
            </p>
          )}
        </fieldset>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="label">
          Message <span className="text-red-600">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          className={`input ${errors.message ? 'border-red-500' : ''}`}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'message-error' : undefined}
        />
        {errors.message && (
          <p id="message-error" className="mt-1 text-sm text-red-600" role="alert">
            {errors.message}
          </p>
        )}
      </div>

      {/* Consent */}
      <div>
        <label className="flex items-start">
          <input
            type="checkbox"
            name="consent"
            checked={formData.consent}
            onChange={handleChange}
            className="rounded border-accent-300 text-primary-600 focus:ring-primary-500 mt-1"
            aria-invalid={!!errors.consent}
            aria-describedby={errors.consent ? 'consent-error' : undefined}
          />
          <span className="ml-3 text-sm text-accent-700">
            I agree to the privacy policy and consent to being contacted regarding my enquiry. <span className="text-red-600">*</span>
          </span>
        </label>
        {errors.consent && (
          <p id="consent-error" className="mt-1 text-sm text-red-600" role="alert">
            {errors.consent}
          </p>
        )}
      </div>

      {/* Submit Status */}
      {submitStatus === 'success' && (
        <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800" role="alert">
          Thank you for your enquiry! We will get back to you within 24 hours.
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-800" role="alert">
          There was an error submitting your enquiry. Please try again or contact us directly.
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-primary w-full"
      >
        {isSubmitting ? (
          <>
            <span className="spinner mr-2" />
            Submitting...
          </>
        ) : (
          'Submit Enquiry'
        )}
      </button>
    </form>
  );
}

export default ContactForm;