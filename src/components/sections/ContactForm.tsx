"use client";

import { useState } from 'react';
import { ScrollReveal, CustomDropdown, CustomInput, CustomTextarea } from "@/components/ui";
import { contactCopy } from "@/lib/content/pages/contact";

export function ContactForm() {
  const { form } = contactCopy;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    // Simulate form submission
    // In production, replace with actual API call
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        projectType: '',
        budget: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleDropdownChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <section id="contact-form" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal delay={0.1}>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black mb-4 text-gray-900 font-display">
              {form.title}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {form.subtitle}
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="max-w-3xl mx-auto">
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-8">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    {form.fields.name.label}
                  </label>
                  <CustomInput
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={form.fields.name.placeholder}
                    required={form.fields.name.required}
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    {form.fields.email.label}
                  </label>
                  <CustomInput
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={form.fields.email.placeholder}
                    required={form.fields.email.required}
                  />
                </div>

                {/* Company Field */}
                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                    {form.fields.company.label}
                  </label>
                  <CustomInput
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder={form.fields.company.placeholder}
                    required={form.fields.company.required}
                  />
                </div>

                {/* Project Type Field */}
                <div>
                  <label htmlFor="projectType" className="block text-sm font-semibold text-gray-700 mb-2">
                    {form.fields.projectType.label}
                  </label>
                  <CustomDropdown
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={(value) => handleDropdownChange('projectType', value)}
                    placeholder={form.fields.projectType.placeholder}
                    options={form.fields.projectType.options}
                    required={form.fields.projectType.required}
                  />
                </div>

                {/* Budget Field */}
                <div className="md:col-span-2">
                  <label htmlFor="budget" className="block text-sm font-semibold text-gray-700 mb-2">
                    {form.fields.budget.label}
                  </label>
                  <CustomDropdown
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={(value) => handleDropdownChange('budget', value)}
                    placeholder={form.fields.budget.placeholder}
                    options={form.fields.budget.options}
                    required={form.fields.budget.required}
                  />
                </div>
              </div>

              {/* Message Field */}
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  {form.fields.message.label}
                </label>
                <CustomTextarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={form.fields.message.placeholder}
                  required={form.fields.message.required}
                  rows={6}
                />
              </div>

              {/* Status Messages */}
              {status === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-700 rounded-xl">
                  {form.successMessage}
                </div>
              )}
              
              {status === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-xl">
                  {form.errorMessage}
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-green-700 hover:bg-green-800 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? 'Sending...' : form.submitButton}
              </button>
            </form>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}