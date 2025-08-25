"use client";

interface CustomTextareaProps {
  id: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder: string;
  required?: boolean;
  rows?: number;
  className?: string;
}

export function CustomTextarea({
  id,
  name,
  value,
  onChange,
  placeholder,
  required = false,
  rows = 6,
  className = ''
}: CustomTextareaProps) {
  return (
    <textarea
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      rows={rows}
      className={`w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-green-600 focus:ring-2 focus:ring-green-200 transition-all duration-300 resize-none ${className}`}
      style={{ 
        outline: 'none',
        boxShadow: 'none',
        MozOutline: 'none',
        WebkitAppearance: 'none',
        MozAppearance: 'textfield'
      }}
      onFocus={(e) => {
        e.target.style.outline = 'none';
        e.target.style.boxShadow = '0 0 0 2px rgb(187 247 208), 0 0 0 1px rgb(34 197 94)';
        e.target.style.borderColor = 'rgb(34 197 94)';
      }}
      onBlur={(e) => {
        e.target.style.boxShadow = 'none';
        e.target.style.borderColor = 'rgb(209 213 219)';
      }}
    />
  );
}