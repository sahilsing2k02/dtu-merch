import type { DetailedHTMLProps, HTMLAttributes } from "react";

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "dtu-hoodie": DetailedHTMLProps<
        HTMLAttributes<HTMLElement> & {
          price?: string | number;
          currency?: string;
          seal?: string;
        },
        HTMLElement
      >;
    }
  }
}
