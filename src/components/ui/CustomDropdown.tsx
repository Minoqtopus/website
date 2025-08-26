"use client";

import { useState, useRef, useEffect } from 'react';

interface CustomDropdownProps {
  id: string;
  name: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  options: readonly string[];
  required?: boolean;
}

export function CustomDropdown({ 
  id, 
  name, 
  value, 
  onChange, 
  placeholder, 
  options, 
  required = false 
}: CustomDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        // Remove focus styling
        if (buttonRef.current) {
          buttonRef.current.style.boxShadow = 'none';
          buttonRef.current.style.borderColor = 'rgb(209 213 219)';
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (option: string) => {
    onChange(option);
    setIsOpen(false);
  };

  const handleFocus = () => {
    if (buttonRef.current) {
      buttonRef.current.style.outline = 'none';
      buttonRef.current.style.boxShadow = '0 0 0 2px rgb(187 247 208), 0 0 0 1px rgb(34 197 94)';
      buttonRef.current.style.borderColor = 'rgb(34 197 94)';
    }
  };

  const handleBlur = (e: React.FocusEvent) => {
    // Only blur if we're not clicking inside the dropdown
    const relatedTarget = e.relatedTarget as HTMLElement;
    if (!dropdownRef.current?.contains(relatedTarget)) {
      if (buttonRef.current) {
        buttonRef.current.style.boxShadow = 'none';
        buttonRef.current.style.borderColor = 'rgb(209 213 219)';
      }
    }
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-green-600 focus:ring-2 focus:ring-green-200 transition-all duration-300 bg-white text-left flex items-center justify-between"
        style={{ 
          outline: 'none',
          boxShadow: 'none',
          MozOutline: 'none',
          WebkitAppearance: 'none'
        }}
        onFocus={handleFocus}
        onBlur={handleBlur}
      >
        <span className={value ? "text-gray-900" : "text-gray-400"}>
          {value || placeholder}
        </span>
        <svg
          className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
            isOpen ? 'transform rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-xl shadow-lg max-h-60 overflow-auto">
          {options.map((option, index) => (
            <button
              key={option}
              type="button"
              onClick={() => handleSelect(option)}
              className={`w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors duration-200 ${
                index === 0 ? 'rounded-t-xl' : ''
              } ${index === options.length - 1 ? 'rounded-b-xl' : ''}`}
            >
              {option}
            </button>
          ))}
        </div>
      )}
      
      {/* Hidden input for form validation */}
      <input
        type="hidden"
        id={id}
        name={name}
        value={value}
        required={required}
      />
    </div>
  );
}