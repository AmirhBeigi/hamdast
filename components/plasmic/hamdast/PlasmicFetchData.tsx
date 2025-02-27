// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: bE9NMB942w5e6uFrcCxfJN
// Component: -UcPqMSXVAGv

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

import { SideEffect } from "@plasmicpkgs/plasmic-basic-components";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_paziresh_24_design_system_css from "../paziresh_24_design_system/plasmic.module.css"; // plasmic-import: 6HBcNwr8dz9LuS1Qe36xa5/projectcss
import plasmic_ravi_design_system_css from "../ravi_design_system/plasmic.module.css"; // plasmic-import: pkMLinFwM9pzwv5S5KpiAu/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: bE9NMB942w5e6uFrcCxfJN/projectcss
import sty from "./PlasmicFetchData.module.css"; // plasmic-import: -UcPqMSXVAGv/css

createPlasmicElementProxy;

export type PlasmicFetchData__VariantMembers = {};
export type PlasmicFetchData__VariantsArgs = {};
type VariantPropType = keyof PlasmicFetchData__VariantsArgs;
export const PlasmicFetchData__VariantProps = new Array<VariantPropType>();

export type PlasmicFetchData__ArgsType = {
  children?: React.ReactNode;
  loadingStatus?: React.ReactNode;
  url?: string;
  onDataChange?: (val: string) => void;
  onLoadingChange?: (val: string) => void;
  enabled?: boolean;
};
type ArgPropType = keyof PlasmicFetchData__ArgsType;
export const PlasmicFetchData__ArgProps = new Array<ArgPropType>(
  "children",
  "loadingStatus",
  "url",
  "onDataChange",
  "onLoadingChange",
  "enabled"
);

export type PlasmicFetchData__OverridesType = {
  root?: Flex__<"div">;
  sideEffect?: Flex__<typeof SideEffect>;
};

export interface DefaultFetchDataProps {
  children?: React.ReactNode;
  loadingStatus?: React.ReactNode;
  url?: string;
  onDataChange?: (val: string) => void;
  onLoadingChange?: (val: string) => void;
  enabled?: boolean;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicFetchData__RenderFunc(props: {
  variants: PlasmicFetchData__VariantsArgs;
  args: PlasmicFetchData__ArgsType;
  overrides: PlasmicFetchData__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {
          enabled: true
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

  const $globalActions = useGlobalActions?.();

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "data",
        type: "readonly",
        variableType: "object",
        initFunc: ({ $props, $state, $queries, $ctx }) => ({}),

        onChangeProp: "onDataChange"
      },
      {
        path: "loading",
        type: "readonly",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => false,

        onChangeProp: "onLoadingChange"
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
        sty.root
      )}
    >
      <SideEffect
        data-plasmic-name={"sideEffect"}
        data-plasmic-override={overrides.sideEffect}
        className={classNames("__wab_instance", sty.sideEffect)}
        deps={(() => {
          try {
            return [$props.url, $props.enabled];
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
        onMount={async () => {
          const $steps = {};

          $steps["updateData2"] = true
            ? (() => {
                const actionArgs = {
                  variable: {
                    objRoot: $state,
                    variablePath: ["loading"]
                  },
                  operation: 0,
                  value: true
                };
                return (({ variable, value, startIndex, deleteCount }) => {
                  if (!variable) {
                    return;
                  }
                  const { objRoot, variablePath } = variable;

                  $stateSet(objRoot, variablePath, value);
                  return value;
                })?.apply(null, [actionArgs]);
              })()
            : undefined;
          if (
            $steps["updateData2"] != null &&
            typeof $steps["updateData2"] === "object" &&
            typeof $steps["updateData2"].then === "function"
          ) {
            $steps["updateData2"] = await $steps["updateData2"];
          }

          $steps["fetchData"] =
            $props.url && $props.enabled
              ? (() => {
                  const actionArgs = {
                    args: [
                      undefined,
                      (() => {
                        try {
                          return $props.url;
                        } catch (e) {
                          if (
                            e instanceof TypeError ||
                            e?.plasmicType === "PlasmicUndefinedDataError"
                          ) {
                            return undefined;
                          }
                          throw e;
                        }
                      })()
                    ]
                  };
                  return $globalActions["Fragment.apiRequest"]?.apply(null, [
                    ...actionArgs.args
                  ]);
                })()
              : undefined;
          if (
            $steps["fetchData"] != null &&
            typeof $steps["fetchData"] === "object" &&
            typeof $steps["fetchData"].then === "function"
          ) {
            $steps["fetchData"] = await $steps["fetchData"];
          }

          $steps["updateData"] = !!$steps.fetchData?.data
            ? (() => {
                const actionArgs = {
                  variable: {
                    objRoot: $state,
                    variablePath: ["data"]
                  },
                  operation: 0,
                  value: $steps.fetchData.data
                };
                return (({ variable, value, startIndex, deleteCount }) => {
                  if (!variable) {
                    return;
                  }
                  const { objRoot, variablePath } = variable;

                  $stateSet(objRoot, variablePath, value);
                  return value;
                })?.apply(null, [actionArgs]);
              })()
            : undefined;
          if (
            $steps["updateData"] != null &&
            typeof $steps["updateData"] === "object" &&
            typeof $steps["updateData"].then === "function"
          ) {
            $steps["updateData"] = await $steps["updateData"];
          }

          $steps["updateData3"] = $props.enabled
            ? (() => {
                const actionArgs = {
                  variable: {
                    objRoot: $state,
                    variablePath: ["loading"]
                  },
                  operation: 0,
                  value: false
                };
                return (({ variable, value, startIndex, deleteCount }) => {
                  if (!variable) {
                    return;
                  }
                  const { objRoot, variablePath } = variable;

                  $stateSet(objRoot, variablePath, value);
                  return value;
                })?.apply(null, [actionArgs]);
              })()
            : undefined;
          if (
            $steps["updateData3"] != null &&
            typeof $steps["updateData3"] === "object" &&
            typeof $steps["updateData3"].then === "function"
          ) {
            $steps["updateData3"] = await $steps["updateData3"];
          }
        }}
      />

      {(() => {
        try {
          return $state.loading || !$props.enabled;
        } catch (e) {
          if (
            e instanceof TypeError ||
            e?.plasmicType === "PlasmicUndefinedDataError"
          ) {
            return true;
          }
          throw e;
        }
      })()
        ? renderPlasmicSlot({
            defaultContents: null,
            value: args.loadingStatus
          })
        : null}
      {(() => {
        try {
          return !$state.loading && $props.enabled;
        } catch (e) {
          if (
            e instanceof TypeError ||
            e?.plasmicType === "PlasmicUndefinedDataError"
          ) {
            return true;
          }
          throw e;
        }
      })()
        ? renderPlasmicSlot({
            defaultContents: null,
            value: args.children
          })
        : null}
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "sideEffect"],
  sideEffect: ["sideEffect"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  sideEffect: typeof SideEffect;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicFetchData__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicFetchData__VariantsArgs;
    args?: PlasmicFetchData__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicFetchData__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicFetchData__ArgsType,
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
          internalArgPropNames: PlasmicFetchData__ArgProps,
          internalVariantPropNames: PlasmicFetchData__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicFetchData__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicFetchData";
  } else {
    func.displayName = `PlasmicFetchData.${nodeName}`;
  }
  return func;
}

export const PlasmicFetchData = Object.assign(
  // Top-level PlasmicFetchData renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    sideEffect: makeNodeComponent("sideEffect"),

    // Metadata about props expected for PlasmicFetchData
    internalVariantProps: PlasmicFetchData__VariantProps,
    internalArgProps: PlasmicFetchData__ArgProps
  }
);

export default PlasmicFetchData;
/* prettier-ignore-end */
