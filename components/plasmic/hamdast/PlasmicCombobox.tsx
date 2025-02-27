// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: bE9NMB942w5e6uFrcCxfJN
// Component: sNfr46nD9HFq

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
import plasmic_paziresh_24_design_system_css from "../paziresh_24_design_system/plasmic.module.css"; // plasmic-import: 6HBcNwr8dz9LuS1Qe36xa5/projectcss
import plasmic_ravi_design_system_css from "../ravi_design_system/plasmic.module.css"; // plasmic-import: pkMLinFwM9pzwv5S5KpiAu/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: bE9NMB942w5e6uFrcCxfJN/projectcss
import sty from "./PlasmicCombobox.module.css"; // plasmic-import: sNfr46nD9HFq/css

createPlasmicElementProxy;

export type PlasmicCombobox__VariantMembers = {
  type: "soft" | "plain";
};
export type PlasmicCombobox__VariantsArgs = {
  type?: SingleChoiceArg<"soft" | "plain">;
};
type VariantPropType = keyof PlasmicCombobox__VariantsArgs;
export const PlasmicCombobox__VariantProps = new Array<VariantPropType>("type");

export type PlasmicCombobox__ArgsType = {
  placeholder?: string;
  showLabel?: boolean;
  showDescription?: boolean;
  initialSelectedKey?: "Dynamic options";
  autoFocus?: boolean;
  inputDisplayValue?: string;
  disabled?: boolean;
  ariaLabel?: string;
  readOnly?: boolean;
};
type ArgPropType = keyof PlasmicCombobox__ArgsType;
export const PlasmicCombobox__ArgProps = new Array<ArgPropType>(
  "placeholder",
  "showLabel",
  "showDescription",
  "initialSelectedKey",
  "autoFocus",
  "inputDisplayValue",
  "disabled",
  "ariaLabel",
  "readOnly"
);

export type PlasmicCombobox__OverridesType = {
  root?: Flex__<"div">;
};

export interface DefaultComboboxProps {
  placeholder?: string;
  showLabel?: boolean;
  showDescription?: boolean;
  initialSelectedKey?: "Dynamic options";
  autoFocus?: boolean;
  inputDisplayValue?: string;
  disabled?: boolean;
  ariaLabel?: string;
  readOnly?: boolean;
  type?: SingleChoiceArg<"soft" | "plain">;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicCombobox__RenderFunc(props: {
  variants: PlasmicCombobox__VariantsArgs;
  args: PlasmicCombobox__ArgsType;
  overrides: PlasmicCombobox__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {
          placeholder: "Select an item",
          showLabel: true,
          showDescription: false
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

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "type",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.type
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });

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
        plasmic_paziresh_24_design_system_css.plasmic_tokens,
        plasmic_ravi_design_system_css.plasmic_tokens,
        sty.root,
        {
          [sty.roottype_plain]: hasVariant($state, "type", "plain"),
          [sty.roottype_soft]: hasVariant($state, "type", "soft")
        }
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
  PlasmicCombobox__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicCombobox__VariantsArgs;
    args?: PlasmicCombobox__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicCombobox__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicCombobox__ArgsType,
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
          internalArgPropNames: PlasmicCombobox__ArgProps,
          internalVariantPropNames: PlasmicCombobox__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicCombobox__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicCombobox";
  } else {
    func.displayName = `PlasmicCombobox.${nodeName}`;
  }
  return func;
}

export const PlasmicCombobox = Object.assign(
  // Top-level PlasmicCombobox renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicCombobox
    internalVariantProps: PlasmicCombobox__VariantProps,
    internalArgProps: PlasmicCombobox__ArgProps
  }
);

export default PlasmicCombobox;
/* prettier-ignore-end */
