// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: bE9NMB942w5e6uFrcCxfJN
// Component: 2PK-FoCRAbzn

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: bE9NMB942w5e6uFrcCxfJN/projectcss
import sty from "./PlasmicRangeSlider.module.css"; // plasmic-import: 2PK-FoCRAbzn/css

createPlasmicElementProxy;

export type PlasmicRangeSlider__VariantMembers = {};
export type PlasmicRangeSlider__VariantsArgs = {};
type VariantPropType = keyof PlasmicRangeSlider__VariantsArgs;
export const PlasmicRangeSlider__VariantProps = new Array<VariantPropType>();

export type PlasmicRangeSlider__ArgsType = {
  showLabel?: boolean;
  showOutputText?: boolean;
  showDescription?: boolean;
  outputText?: string;
  minValue?: number;
  maxValue?: number;
  step?: number;
  filled?: boolean;
  initialValue?: any;
  disabled?: boolean;
  ariaLabel?: string;
};
type ArgPropType = keyof PlasmicRangeSlider__ArgsType;
export const PlasmicRangeSlider__ArgProps = new Array<ArgPropType>(
  "showLabel",
  "showOutputText",
  "showDescription",
  "outputText",
  "minValue",
  "maxValue",
  "step",
  "filled",
  "initialValue",
  "disabled",
  "ariaLabel"
);

export type PlasmicRangeSlider__OverridesType = {
  root?: Flex__<"div">;
};

export interface DefaultRangeSliderProps {
  showLabel?: boolean;
  showOutputText?: boolean;
  showDescription?: boolean;
  outputText?: string;
  minValue?: number;
  maxValue?: number;
  step?: number;
  filled?: boolean;
  initialValue?: any;
  disabled?: boolean;
  ariaLabel?: string;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicRangeSlider__RenderFunc(props: {
  variants: PlasmicRangeSlider__VariantsArgs;
  args: PlasmicRangeSlider__ArgsType;
  overrides: PlasmicRangeSlider__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {
          showLabel: true,
          showOutputText: true,
          showDescription: false,
          filled: true,
          initialValue: [25, 75]
        },
        Object.fromEntries(
          Object.entries(props.args).filter(([_, v]) => v !== undefined)
        )
      ),
    [props.args]
  );

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        sty.root
      )}
    />
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicRangeSlider__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicRangeSlider__VariantsArgs;
    args?: PlasmicRangeSlider__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicRangeSlider__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicRangeSlider__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicRangeSlider__ArgProps,
          internalVariantPropNames: PlasmicRangeSlider__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicRangeSlider__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicRangeSlider";
  } else {
    func.displayName = `PlasmicRangeSlider.${nodeName}`;
  }
  return func;
}

export const PlasmicRangeSlider = Object.assign(
  // Top-level PlasmicRangeSlider renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicRangeSlider
    internalVariantProps: PlasmicRangeSlider__VariantProps,
    internalArgProps: PlasmicRangeSlider__ArgProps
  }
);

export default PlasmicRangeSlider;
/* prettier-ignore-end */