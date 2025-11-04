export const sendEnquiry = async (formData) => {
  // Simulate API call
  console.log('[Email] Sending enquiry:', formData);

  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1500));

  // Mock successful response
  return {
    success: true,
    message: 'Enquiry submitted successfully',
    enquiryId: `ENQ-${Date.now()}`,
  };
};