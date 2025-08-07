import type { LinkComponentProps } from "@tanstack/react-router";
import type { ComponentProps } from "react";

interface ButtonBaseProps {
  size?: "m" | "s";
  variant?: "danger" | "outline" | "primary";
}

export type ButtonProps = ButtonBaseProps & ComponentProps<"button">;

export type ButtonLinkProps = ButtonBaseProps & LinkComponentProps;
