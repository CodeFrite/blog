import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: (props) => (
      <>
        <h1 style={{ color: "red" }} {...props} />
        <br />
      </>
    ),
    ...components,
  };
}
