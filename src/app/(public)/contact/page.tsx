import { contactCopy } from "@/lib/copy/pages/contact";

export default function Contact() {
  return (
    <div className="min-h-screen">
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {contactCopy.header.title}
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            {contactCopy.header.description}
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <form className="bg-white p-8 rounded-lg shadow-lg border">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                  {contactCopy.form.fields.firstName.label}
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                  {contactCopy.form.fields.lastName.label}
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            
            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                {contactCopy.form.fields.email.label}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                {contactCopy.form.fields.company.label}
              </label>
              <input
                type="text"
                id="company"
                name="company"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-2">
                {contactCopy.form.fields.projectType.label}
              </label>
              <select
                id="projectType"
                name="projectType"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">{contactCopy.form.fields.projectType.placeholder}</option>
                {contactCopy.form.fields.projectType.options.map((option) => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </select>
            </div>
            
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                {contactCopy.form.fields.message.label}
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder={contactCopy.form.fields.message.placeholder}
              ></textarea>
            </div>
            
            <div className="mb-6">
              <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                {contactCopy.form.fields.budget.label}
              </label>
              <select
                id="budget"
                name="budget"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">{contactCopy.form.fields.budget.placeholder}</option>
                {contactCopy.form.fields.budget.options.map((option) => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </select>
            </div>
            
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors font-medium"
            >
              {contactCopy.form.submitButton}
            </button>
          </form>
          
          <div className="mt-12 text-center">
            <h3 className="text-lg font-semibold mb-4">{contactCopy.contactInfo.title}</h3>
            <div className="flex flex-col sm:flex-row justify-center gap-6 text-gray-600">
              <a href={`mailto:${contactCopy.contactInfo.email}`} className="hover:text-blue-600 transition-colors">
                {contactCopy.contactInfo.email}
              </a>
              <a href={`tel:${contactCopy.contactInfo.phone.replace(/[^0-9+]/g, '')}`} className="hover:text-blue-600 transition-colors">
                {contactCopy.contactInfo.phone}
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}