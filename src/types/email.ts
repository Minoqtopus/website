export interface EmailConfig {
  serviceId: string;
  templateId: string;
  publicKey: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  projectType: string;
  budget: string;
  message: string;
}

export interface EmailServiceResponse {
  status: number;
  text: string;
}