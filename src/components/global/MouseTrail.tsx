"use client";
import React, { useState, useEffect } from "react";

const MouseTrail = ({ children }: { children: any }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const updatePosition = (clientX, clientY) => {
      setPosition({ x: clientX, y: clientY });
    };

    const onMouseMove = (e) => {
      updatePosition(e.clientX, e.clientY);
    };

    const onTouchMove = (e) => {
      const touch = e.touches[0];
      updatePosition(touch.clientX, touch.clientY);
    };

    const onMouseDown = () => {
      setClicked(true);
    };

    const onMouseUp = () => {
      setClicked(false);
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("touchmove", onTouchMove);
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);
    document.addEventListener("touchstart", onMouseDown);
    document.addEventListener("touchend", onMouseUp);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("touchmove", onTouchMove);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("touchstart", onMouseDown);
      document.removeEventListener("touchend", onMouseUp);
    };
  }, []);

  return (
    <>
      <div
        style={{
          position: "fixed",
          left: position.x,
          top: position.y,
          height: clicked ? "36px" : "24px",
          width: clicked ? "36px" : "24px",
          borderRadius: "50%",
          transition: "transform 0.3s ease-out",
          backgroundColor: "rgba(0, 65, 255, 0.2)",
          transform: `translate(-50%, -50%)`,
          boxShadow: `0 0 24px 0 rgba(0, 65, 255, 0.7)`,
          pointerEvents: "none",
          zIndex: 999,
        }}
      />
      {children}
    </>
  );
};

export default MouseTrail;
