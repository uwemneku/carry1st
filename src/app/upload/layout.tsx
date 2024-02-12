import { PropsWithChildren } from "react";

function Layout({ children }: PropsWithChildren) {
  return <div className="max-w-xl mx-auto pb-20">{children}</div>;
}

export default Layout;
