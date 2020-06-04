import React from "react";

export interface Props {
  variant?: "light" | "dark";
  [propName: string]: any; // TODO: Extend type of `Box`
}

const Section = ({ variant, ...props }: Props) => (
  <section {...props}></section>
);

export default Section;
