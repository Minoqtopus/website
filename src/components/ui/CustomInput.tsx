"use client";

interface CustomInputProps {
  id: string;
  name: string;
  type?: 'text' | 'email';
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  required?: boolean;
  className?: string;
}

export function CustomInput({
  id,
  name,
  type = 'text',
  value,
  onChange,
  placeholder,
  required = false,
  className = ''
}: CustomInputProps) {
  return (
    <input
      type={type}
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      className={`w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-green-600 focus:ring-2 focus:ring-green-200 transition-all duration-300 ${className}`}
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