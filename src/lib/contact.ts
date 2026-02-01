// Client-side form handler for static Astro sites
// This replaces server-side actions for contact forms

interface ContactFormData {
  email: string;
  name?: string;
  company?: string;
  message?: string;
  type: 'contact' | 'newsletter';
}

export async function submitContactForm(data: ContactFormData): Promise<{ success: boolean; message: string }> {
  // For static sites, you'll need to use a form backend service
  // Options: Formspree, Netlify Forms, Basin, or a serverless function
  
  // Example using Formspree (replace with your endpoint):
  // const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  
  // Example using a serverless function endpoint:
  // const response = await fetch('/api/contact', {
  
  // For now, we'll simulate success and log the data
  console.log('Form submission:', data);
  
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  return {
    success: true,
    message: 'Message sent successfully'
  };
}

// Alternative: Use a third-party service like Formspree
// 1. Sign up at https://formspree.io
// 2. Create a form and get your endpoint URL
// 3. Replace the URL below:

export async function submitToFormspree(data: ContactFormData, formId: string): Promise<{ success: boolean; message: string }> {
  try {
    const response = await fetch(`https://formspree.io/f/${formId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(data)
    });
    
    if (response.ok) {
      return {
        success: true,
        message: 'Thank you! We\'ll be in touch within 24 hours.'
      };
    } else {
      throw new Error('Form submission failed');
    }
  } catch (error) {
    console.error('Error submitting form:', error);
    return {
      success: false,
      message: 'Something went wrong. Please try again.'
    };
  }
}
