import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { useEffect } from 'react';
import { initAnalytics } from './lib/analytics';

function App() {
  useEffect(() => {
    initAnalytics();
  }, []);

  return <RouterProvider router={router} />;
}

export default App;