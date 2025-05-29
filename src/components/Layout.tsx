import { type ReactNode } from "react";

export const Layout = (props: { children?: ReactNode }) => {
  return (
    <>
      <header>
        <h1>Fashion Theme Generator</h1>
      </header>
      <main>{props.children}</main>
    </>
  );
};
