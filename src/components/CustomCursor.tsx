import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    const handleHoverStart = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.classList.contains("hoverable")
      ) {
        setIsHovering(true);
      }
    };

    const handleHoverEnd = () => setIsHovering(false);

    document.addEventListener("mousemove", updatePosition);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseover", handleHoverStart);
    document.addEventListener("mouseout", handleHoverEnd);

    return () => {
      document.removeEventListener("mousemove", updatePosition);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseover", handleHoverStart);
      document.removeEventListener("mouseout", handleHoverEnd);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer ring */}
      <div
        className="fixed pointer-events-none z-[9999] transition-transform duration-150 ease-out"
        style={{
          left: position.x - (isHovering ? 24 : 16),
          top: position.y - (isHovering ? 24 : 16),
          width: isHovering ? 48 : 32,
          height: isHovering ? 48 : 32,
        }}
      >
        <div
          className={`w-full h-full rounded-full border-2 border-primary transition-all duration-200 ${
            isHovering ? "scale-125 border-accent" : ""
          }`}
          style={{
            boxShadow: isHovering
              ? "0 0 20px hsl(150 100% 50% / 0.8), 0 0 40px hsl(150 100% 50% / 0.4)"
              : "0 0 15px hsl(195 100% 50% / 0.6), 0 0 30px hsl(195 100% 50% / 0.3)",
          }}
        />
      </div>
      {/* Inner dot */}
      <div
        className="fixed pointer-events-none z-[9999]"
        style={{
          left: position.x - 3,
          top: position.y - 3,
          width: 6,
          height: 6,
        }}
      >
        <div
          className={`w-full h-full rounded-full transition-colors duration-200 ${
            isHovering ? "bg-accent" : "bg-primary"
          }`}
        />
      </div>
    </>
  );
};

export default CustomCursor;
