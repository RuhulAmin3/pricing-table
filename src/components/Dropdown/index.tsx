// Internal Imports
import { extractVisitorCount } from "../../store/utils";
import type { Variant } from "../../types/pricing.types";
import { useDropdown } from "./useDropdown";
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
  variant: Variant;
}

const Dropdown = ({ options, value, onChange, variant }: DropdownProps) => {
  const { isOpen, toggle, close, dropdownRef } = useDropdown();

  const selectedOption = options.find((option) => option.value === value);

  const handleSelect = (option: DropdownOption) => {
    onChange(option.value);
    close();
  };

  return (
    <DropdownContainer ref={dropdownRef}>
      <DropdownButton $variant={variant} onClick={toggle}>
        <span>
          {`Up to ${extractVisitorCount(
            selectedOption?.label || ""
          )} visitors/month`}
        </span>
        <ChevronIcon $isOpen={isOpen} />
      </DropdownButton>

      <DropdownMenu $isOpen={isOpen}>
        {options.map((option) => (
          <DropdownItem
            key={option.value}
            $variant={variant}
            $isSelected={option.value === value}
            onClick={() => handleSelect(option)}
          >
            {`Up to ${extractVisitorCount(option.label)} visitors/month`}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </DropdownContainer>
  );
};

export default Dropdown;
