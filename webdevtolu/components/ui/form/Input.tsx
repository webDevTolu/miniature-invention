import { useRef, useState } from "react";

interface InputProps {
  type: "email" | "text";
  required?: boolean;
  label: string;
  name: string;
  placeholder?: string;
  onChange: (value: string, name: string) => void;
  showLabel?: boolean;
  style: "flat" | "round" | "pill";
}

const Input = ({
  type,
  label,
  name,
  placeholder,
  required,
  onChange,
  showLabel,
}: InputProps) => {
  const [isValid, setIsValid] = useState<boolean>(false);
  const [errorText, setErrorText] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  const validateInput = (value: string): boolean => {
    return false;
  };

  const handleChange = () => {
    const value = inputRef.current?.value || "";
    const isInputValid = validateInput(value);
    setIsValid(isInputValid);
    onChange(value, name);
  };

  return (
    <div className="w-full flex flex-col gap-1 items-start">
      <div className="flex flex-col gap-2 items-start">
        {showLabel && <label htmlFor={label}>{label}</label>}
        <input
          type={type}
          id={label}
          name={name}
          placeholder={placeholder}
          required={required}
          ref={inputRef}
          onChange={handleChange}
        />
      </div>
      {!isValid && (
        <span className="text-sm font-semibold text-red-600">{errorText}</span>
      )}
    </div>
  );
};

export default Input;
