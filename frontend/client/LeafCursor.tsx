import { useEffect, useState } from "react";

export default function LeafCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.tagName === "INPUT" ||
        target.closest("button") ||
        target.closest("a") ||
        target.closest("input")
      ) {
        setIsHovering(true);
      }
    };

    const handleMouseLeave = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.tagName === "INPUT" ||
        target.closest("button") ||
        target.closest("a") ||
        target.closest("input")
      ) {
        setIsHovering(false);
      }
    };

    const handleMouseDown = () => {
      setIsClicking(true);
    };

    const handleMouseUp = () => {
      setIsClicking(false);
    };

    const handleMouseEnterPage = () => {
      setIsVisible(true);
    };

    const handleMouseLeavePage = () => {
      setIsVisible(false);
    };

    // Add event listeners
    document.addEventListener("mousemove", updatePosition);
    document.addEventListener("mouseover", handleMouseEnter);
    document.addEventListener("mouseout", handleMouseLeave);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseenter", handleMouseEnterPage);
    document.addEventListener("mouseleave", handleMouseLeavePage);

    return () => {
      document.removeEventListener("mousemove", updatePosition);
      document.removeEventListener("mouseover", handleMouseEnter);
      document.removeEventListener("mouseout", handleMouseLeave);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseenter", handleMouseEnterPage);
      document.removeEventListener("mouseleave", handleMouseLeavePage);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={`leaf-cursor ${isHovering ? "hover" : ""} ${
        isClicking ? "click" : ""
      }`}
      style={{
        left: position.x,
        top: position.y,
      }}
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17 8C8 10 5.9 16.17 3.82 21.34l1.06.82C6.16 17.4 9 14 17 8z"
          fill="rgb(34, 197, 94)"
        />
        <path
          d="M3.5 12.5c0 4.14 3.36 7.5 7.5 7.5h6.5c2.21 0 4-1.79 4-4V9.5c0-4.14-3.36-7.5-7.5-7.5S6.5 5.36 6.5 9.5c0 1.38.37 2.68 1.02 3.8l-4.02.2z"
          fill="rgb(34, 197, 94)"
        />
      </svg>
    </div>
  );
}
