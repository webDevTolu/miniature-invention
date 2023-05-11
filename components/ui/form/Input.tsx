import { useEffect, useRef, useState } from "react";

interface InputProps {
  type: "email" | "text";
  required?: boolean;
  label?: string;
  name: string;
  placeholder?: string;
  style?: "flat" | "round" | "pill";
  onChange: (value: string) => void
}

export const Input = ({
  type,
  label,
  name,
  placeholder,
  required,
  style,
  onChange
}: InputProps) => {
  const [isValid, setIsValid] = useState<boolean>(true);
  const [errorText, setErrorText] = useState<string>("");
  // const [isInputEmpty, setIsInputEmpty] = useState<boolean>(true);
  const inputRef = useRef<HTMLInputElement>(null);

    const roundedStyles: string = `${
    style === "pill"
      ? "rounded-full"
      : style === "flat"
      ? "rounded-none"
      : style === "round"
      ? "rounded-lg"
      : "rounded"
  }`;

  // validate function to render error/help text
  const validateInput = (value: string): boolean => {
    if (type === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const isEmailValid = emailRegex.test(value)
      setIsValid(isEmailValid)
      setErrorText(isEmailValid ? '' : 'Please enter a valid email address')
      return isEmailValid;
    }
     if (type === "text") {
    const trimmedText = value.trim();
    const isTextValid = trimmedText.length > 5;
    setIsValid(isTextValid);
    setErrorText(isTextValid ? "" : "Please enter at least 5 characters.");
    return isTextValid;
  }
    return true;
  };

  const handleChange = () => {
    const value = inputRef.current?.value || ''
    validateInput(value)
    onChange(value)
  }

  // useEffect(() => {
  //   setIsInputEmpty(inputRef.current?.value)
  // }, [])

  // TODO: style input form
  return (
    <div className="w-full flex flex-col gap-1 items-start">
      <div className="flex flex-col gap-2 items-start">
        {label && <label htmlFor={name}>{label}</label>}
        <input
          type={type}
          id={name}
          name={name}
          placeholder={placeholder}
          required={required}
          onChange={handleChange}
          ref={inputRef}
          className={`${roundedStyles} text-black`}
        />
      </div>
      {!isValid && (
        <span className="text-sm font-semibold text-red-600">{errorText}</span>
      )}
    </div>
  );
};

