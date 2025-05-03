/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon35IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon35Icon(props: Icon35IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      stroke={"currentColor"}
      strokeWidth={"2"}
      strokeLinecap={"round"}
      strokeLinejoin={"round"}
      className={classNames(
        "plasmic-default__svg",
        className,
        "lucide lucide-fingerprint-icon lucide-fingerprint"
      )}
      viewBox={"0 0 24 24"}
      height={"1em"}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M12 10a2 2 0 00-2 2c0 1.02-.1 2.51-.26 4M14 13.12c0 2.38 0 6.38-1 8.88m4.29-.98c.12-.6.43-2.3.5-3.02M2 12a10 10 0 0118-6M2 16h.01m19.79 0c.2-2 .131-5.354 0-6"
        }
      ></path>

      <path
        d={
          "M5 19.5C5.5 18 6 15 6 12a6 6 0 01.34-2m2.31 12c.21-.66.45-1.32.57-2M9 6.8a6 6 0 019 5.2v2"
        }
      ></path>
    </svg>
  );
}

export default Icon35Icon;
/* prettier-ignore-end */
