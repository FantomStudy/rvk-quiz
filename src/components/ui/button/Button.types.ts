import type { LinkComponentProps } from "@tanstack/react-router";
import type { ComponentProps } from "react";

interface ButtonBaseProps {
  variant?: "danger" | "outline" | "primary";
  size?: "s" | "m";
}

export type ButtonProps = ButtonBaseProps & ComponentProps<"button">;

export type ButtonLinkProps = ButtonBaseProps & LinkComponentProps;
