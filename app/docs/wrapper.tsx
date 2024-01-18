import { ToC } from "./toc";
export function Doc({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <>
      <ToC>{children}</ToC>
      {children}
    </>
  );
}
