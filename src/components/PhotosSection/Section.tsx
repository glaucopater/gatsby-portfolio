import React from "react";
import { SCSection } from "./styles";

export interface Props {
  variant?: "light" | "dark";
  [propName: string]: any; // TODO: Extend type of `Box`
}

const Section = ({ variant, ...props }: Props) => (
  <SCSection {...props} />
);

export default Section;
