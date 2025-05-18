import type React from "react";
import { useState, useRef, useEffect } from "react";
import {
  ChevronIcon,
  DropdownButton,
  DropdownContainer,
  DropdownItem,
  DropdownMenu,
} from "./styled.dropdown";

interface DropdownOption {
  value: string | number;
  label: string;
}

interface DropdownProps {
  options: DropdownOption[];
  value: string | number;
  onChange: (value: string | number) => void;
  placeholder?: string;
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  value,
  onChange,
  placeholder = "Select an option",
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find((option) => option.value === value);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option: DropdownOption) => {
    onChange(option.value);
    setIsOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <DropdownContainer ref={dropdownRef}>
      <DropdownButton onClick={handleToggle}>
        <span dangerouslySetInnerHTML={{ __html: selectedOption?.label }} />
        <ChevronIcon $isOpen={isOpen} />
      </DropdownButton>

      <DropdownMenu $isOpen={isOpen}>
        {options.map((option) => (
          <DropdownItem
            key={option.value}
            $isSelected={option.value === value}
            onClick={() => handleSelect(option)}
            dangerouslySetInnerHTML={{ __html: option.label }}
          />
        ))}
      </DropdownMenu>
    </DropdownContainer>
  );
};

export default Dropdown;
