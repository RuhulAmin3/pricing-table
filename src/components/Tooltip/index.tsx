// External Imports
import { useState } from "react";

// Internal Imports
import {
  TooltipContainer,
  TooltipTrigger,
  TooltipContent,
} from "./styled.tooltip";

interface TooltipProps {
  content: string;
  children: React.ReactNode;
  isInfo?: boolean;
}

const Tooltip = ({ content, children, isInfo = false }: TooltipProps) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <TooltipContainer>
      <TooltipTrigger
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
      >
        {children}
      </TooltipTrigger>
      <TooltipContent
        $isInfo={isInfo}
        $isVisible={isVisible}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </TooltipContainer>
  );
};

export default Tooltip;
