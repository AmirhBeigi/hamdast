/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MahamSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MahamSvgIcon(props: MahamSvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 932 1021"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M376.318 24.038c55.495-32.05 123.868-32.05 179.364 0l286.636 165.54C897.813 221.628 932 280.859 932 344.959v331.082c0 64.1-34.187 123.331-89.682 155.381l-286.636 165.54c-55.496 32.048-123.869 32.048-179.364 0L89.682 831.422C34.187 799.372 0 740.141 0 676.041V344.959c0-64.1 34.187-123.331 89.682-155.381l286.636-165.54z"
        }
        fill={"#272B30"}
      ></path>

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M674.163 353.216c8.861-2.15 17.398 4.563 17.398 13.682v290.866c0 15.526-12.586 28.113-28.112 28.113h-53.393c-15.526 0-28.112-12.587-28.112-28.113V366.898c0-9.119 8.537-15.832 17.399-13.682l30.78 7.47a28.117 28.117 0 0013.259 0l30.781-7.47zM323.677 581.597c15.526 0 28.112 12.587 28.112 28.113l.001 48.054c0 15.526-12.587 28.113-28.113 28.113h-53.393c-15.526 0-28.112-12.587-28.112-28.113V609.71c0-15.526 12.586-28.113 28.112-28.113h53.393z"
        }
        fill={"#fff"}
      ></path>

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M312.261 370.491c4.036-8.871 15.647-11.057 22.633-4.26l253.88 247.006-58.796 54.689c-10.969 10.203-28.013 10.012-38.75-.435L258.14 440.714c-7.413-7.213-4.778-19.69 4.919-23.289l22.545-8.369a28.117 28.117 0 0015.806-14.714l10.851-23.851z"
        }
        fill={"#fff"}
      ></path>
    </svg>
  );
}

export default MahamSvgIcon;
/* prettier-ignore-end */
