import emailjs from '@emailjs/browser';

interface EmailConfig {
  serviceId: string;
  templateId: string;
  publicKey: string;
}

interface EmailFormData {
  name: string;
  email: string;
  company: string;
  projectType: string;
  budget: string;
  message: string;
  'g-recaptcha-response'?: string;
}

export class EmailService {
  private static config: EmailConfig | null = null;

  static initialize(config: EmailConfig): void {
    this.config = config;
    emailjs.init(config.publicKey);
  }

  static async sendContactForm(formData: EmailFormData, recaptchaToken?: string): Promise<void> {
    if (!this.config) {
      throw new Error('EmailService not initialized. Call initialize() first.');
    }

    const templateParams: Record<string, string> = {
      from_name: formData.name,
      from_email: formData.email,
      company: formData.company || 'Not specified',
      project_type: formData.projectType,
      budget: formData.budget,
      message: formData.message,
    };

    // Only add reCAPTCHA token if it exists
    if (recaptchaToken) {
      templateParams['g-recaptcha-response'] = recaptchaToken;
    }

    try {
      const response = await emailjs.send(
        this.config.serviceId,
        this.config.templateId,
        templateParams
      );

      if (response.status !== 200) {
        throw new Error(`Email send failed with status: ${response.status}`);
      }
    } catch (error) {
      console.error('EmailService error:', error);
      throw new Error('Failed to send email. Please try again later.');
    }
  }
}