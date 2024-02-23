import { useState } from "react";
import './tooltip.css';

const Tooltip = (props) => {
  const [active, setActive] = useState(false);

  const showTip = () => {
    setActive(true);
  };

  const hideTip = () => {
    setActive(false);
  };

  return (
    <div
      className="inline-block relative w-full"
      onMouseEnter={showTip}
      onMouseLeave={hideTip}
    >
      {props.children}
      {active && props.content != ".." && (
        <div className="tool-tip absolute rounded-sm left-2/4 -translate-x-2/4 p-1.5 text-white bg-gray-950 text-sm z-50 whitespace-nowrap bottom-16">
          {props.content}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
