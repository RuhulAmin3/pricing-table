import { memo } from "react";

// Button style configurations based on variant
const BUTTON_VARIANTS = {
  primary: {
    backgroundColor: "blue",
    color: "white",
  },
  secondary: {
    backgroundColor: "gray",
    color: "black",
  },
  "icon-arrow-primary": {
    backgroundColor: "blue",
    color: "white",
    hasIcon: true,
    iconType: "arrow",
  },
  "icon-arrow-secondary": {
    backgroundColor: "gray",
    color: "black",
    hasIcon: true,
    iconType: "arrow",
  },
  default: {},
};

// Arrow icon component
export const ArrowIcon = memo(() => (
  <span className="button-icon button-icon-arrow">→</span>
));

// Main reusable Button component
export const Button = memo(
  ({
    variant = "default",
    children,
    onClick,
    className = "",
    ...restProps
  }) => {
    // Get style configuration based on variant
    const variantConfig = BUTTON_VARIANTS[variant] || BUTTON_VARIANTS.default;

    // Determine if button has an icon and what type
    const { hasIcon, iconType } = variantConfig;

    // Build button style from variant configuration
    const buttonStyle = {
      backgroundColor: variantConfig.backgroundColor,
      color: variantConfig.color,
    };

    // Build complete className
    const buttonClassName = `button button-${variant} ${className}`.trim();

    return (
      <button
        className={buttonClassName}
        style={buttonStyle}
        onClick={onClick}
        {...restProps}
      >
        {hasIcon && iconType === "arrow" && <ArrowIcon />}
        {children}
      </button>
    );
  }
);

// Button demo component to showcase different button variants
export const ButtonDemo = () => {
  const handleClick = () => {
    console.log("Button clicked!");
  };

  return (
    <div>
      {/* Button with different variant */}
      <Button variant="primary" onClick={handleClick}>
        Primary Button
      </Button>

      <Button variant="secondary" onClick={handleClick}>
        Secondary Button
      </Button>

      <Button onClick={handleClick}>Default Button</Button>

      {/* Button with arrow icon */}
      <Button variant="icon-arrow-primary" onClick={handleClick}>
        Primary with Arrow
      </Button>

      <Button variant="icon-arrow-secondary" onClick={handleClick}>
        Secondary with Arrow
      </Button>

      {/* Button with custom style */}
      <Button
        variant="primary"
        onClick={handleClick}
        style={{ borderRadius: "8px", padding: "12px 24px" }}
      >
        Custom Primary
      </Button>
    </div>
  );
};
