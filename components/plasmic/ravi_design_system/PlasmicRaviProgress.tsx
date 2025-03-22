// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: pkMLinFwM9pzwv5S5KpiAu
// Component: ku1RVOULmrFB

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

import plasmic_paziresh_24_design_system_css from "../paziresh_24_design_system/plasmic.module.css"; // plasmic-import: 6HBcNwr8dz9LuS1Qe36xa5/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: pkMLinFwM9pzwv5S5KpiAu/projectcss
import sty from "./PlasmicRaviProgress.module.css"; // plasmic-import: ku1RVOULmrFB/css

createPlasmicElementProxy;

export type PlasmicRaviProgress__VariantMembers = {};
export type PlasmicRaviProgress__VariantsArgs = {};
type VariantPropType = keyof PlasmicRaviProgress__VariantsArgs;
export const PlasmicRaviProgress__VariantProps = new Array<VariantPropType>();

export type PlasmicRaviProgress__ArgsType = {
  lable?: string;
  value?: number;
};
type ArgPropType = keyof PlasmicRaviProgress__ArgsType;
export const PlasmicRaviProgress__ArgProps = new Array<ArgPropType>(
  "lable",
  "value"
);

export type PlasmicRaviProgress__OverridesType = {
  root?: Flex__<"div">;
  progressBar?: Flex__<"div">;
};

export interface DefaultRaviProgressProps {
  lable?: string;
  value?: number;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicRaviProgress__RenderFunc(props: {
  variants: PlasmicRaviProgress__VariantsArgs;
  args: PlasmicRaviProgress__ArgsType;
  overrides: PlasmicRaviProgress__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {},
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
        plasmic_paziresh_24_design_system_css.plasmic_tokens,
        sty.root
      )}
    >
      <Stack__
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__sxzuF)}
        dir={"rtl"}
      >
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text___5S9Fe
          )}
        >
          <React.Fragment>
            {(() => {
              try {
                return $props.lable;
              } catch (e) {
                if (
                  e instanceof TypeError ||
                  e?.plasmicType === "PlasmicUndefinedDataError"
                ) {
                  return "";
                }
                throw e;
              }
            })()}
          </React.Fragment>
        </div>
        <Stack__
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__qGqLo)}
        >
          <div
            data-plasmic-name={"progressBar"}
            data-plasmic-override={overrides.progressBar}
            className={classNames(projectcss.all, sty.progressBar)}
          >
            <div
              className={classNames(projectcss.all, sty.freeBox__qg2Oz)}
              style={(() => {
                try {
                  return {
                    width: $props.value ? $props.value * 20 + "%" : 0
                  };
                } catch (e) {
                  if (
                    e instanceof TypeError ||
                    e?.plasmicType === "PlasmicUndefinedDataError"
                  ) {
                    return undefined;
                  }
                  throw e;
                }
              })()}
            />
          </div>
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text___7VK65
            )}
          >
            <React.Fragment>
              {(() => {
                try {
                  return $props.value ? Number($props.value)?.toFixed(1) : 0;
                } catch (e) {
                  if (
                    e instanceof TypeError ||
                    e?.plasmicType === "PlasmicUndefinedDataError"
                  ) {
                    return "";
                  }
                  throw e;
                }
              })()}
            </React.Fragment>
          </div>
        </Stack__>
      </Stack__>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "progressBar"],
  progressBar: ["progressBar"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  progressBar: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicRaviProgress__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicRaviProgress__VariantsArgs;
    args?: PlasmicRaviProgress__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicRaviProgress__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicRaviProgress__ArgsType,
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
          internalArgPropNames: PlasmicRaviProgress__ArgProps,
          internalVariantPropNames: PlasmicRaviProgress__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicRaviProgress__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicRaviProgress";
  } else {
    func.displayName = `PlasmicRaviProgress.${nodeName}`;
  }
  return func;
}

export const PlasmicRaviProgress = Object.assign(
  // Top-level PlasmicRaviProgress renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    progressBar: makeNodeComponent("progressBar"),

    // Metadata about props expected for PlasmicRaviProgress
    internalVariantProps: PlasmicRaviProgress__VariantProps,
    internalArgProps: PlasmicRaviProgress__ArgProps
  }
);

export default PlasmicRaviProgress;
/* prettier-ignore-end */
