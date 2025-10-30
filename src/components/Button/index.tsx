import type React from "react";
import "../Button/button.css";

interface ButtonProps {
  classs: string;
  children: React.ReactNode;
  action: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
export default function Button({ classs, children, action }: ButtonProps) {
  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    return action(e);
  }
  return (
    <button className={classs} onClick={handleClick}>
      {children}
    </button>
  );
}
