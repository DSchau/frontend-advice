import React from "react";
import styled from "react-emotion";

const Link = styled("a")({
  backgroundColor: "white",
  color: "#7795f8"
});

export function ButtonLink({ children, href, ...rest }) {
  return (
    <Link href={href} {...rest}>
      {children}
    </Link>
  );
}
