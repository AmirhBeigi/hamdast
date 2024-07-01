// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: bE9NMB942w5e6uFrcCxfJN
// Component: KTPu1eZupEdG

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

import projectcss from "./plasmic.module.css"; // plasmic-import: bE9NMB942w5e6uFrcCxfJN/projectcss
import sty from "./PlasmicAuthProvider.module.css"; // plasmic-import: KTPu1eZupEdG/css

import Icon15Icon from "./icons/PlasmicIcon__Icon15"; // plasmic-import: rQsx35tf_bcf/icon

createPlasmicElementProxy;

export type PlasmicAuthProvider__VariantMembers = {};
export type PlasmicAuthProvider__VariantsArgs = {};
type VariantPropType = keyof PlasmicAuthProvider__VariantsArgs;
export const PlasmicAuthProvider__VariantProps = new Array<VariantPropType>();

export type PlasmicAuthProvider__ArgsType = {
  onUserChange?: (val: string) => void;
  onAppsChange?: (val: string) => void;
  children?: React.ReactNode;
};
type ArgPropType = keyof PlasmicAuthProvider__ArgsType;
export const PlasmicAuthProvider__ArgProps = new Array<ArgPropType>(
  "onUserChange",
  "onAppsChange",
  "children"
);

export type PlasmicAuthProvider__OverridesType = {
  root?: Flex__<"div">;
  sideEffect?: Flex__<typeof SideEffect>;
  freeBox?: Flex__<"div">;
  svg?: Flex__<"svg">;
};

export interface DefaultAuthProviderProps {
  onUserChange?: (val: string) => void;
  onAppsChange?: (val: string) => void;
  children?: React.ReactNode;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicAuthProvider__RenderFunc(props: {
  variants: PlasmicAuthProvider__VariantsArgs;
  args: PlasmicAuthProvider__ArgsType;
  overrides: PlasmicAuthProvider__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

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
        path: "user",
        type: "readonly",
        variableType: "object",
        initFunc: ({ $props, $state, $queries, $ctx }) => ({}),

        onChangeProp: "onUserChange"
      },
      {
        path: "apps",
        type: "readonly",
        variableType: "array",
        initFunc: ({ $props, $state, $queries, $ctx }) => [],

        onChangeProp: "onAppsChange"
      },
      {
        path: "error",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => false
      },
      {
        path: "loading",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) =>
          (() => {
            try {
              return typeof window !== "undefined" ? !window.data?.user : true;
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
        sty.root
      )}
    >
      <SideEffect
        data-plasmic-name={"sideEffect"}
        data-plasmic-override={overrides.sideEffect}
        className={classNames("__wab_instance", sty.sideEffect)}
        deps={[]}
        onMount={async () => {
          const $steps = {};

          $steps["getProfileInWindow"] = !!window.data?.user?.id
            ? (() => {
                const actionArgs = {
                  variable: {
                    objRoot: $state,
                    variablePath: ["user"]
                  },
                  operation: 0,
                  value: window.data?.user
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
            $steps["getProfileInWindow"] != null &&
            typeof $steps["getProfileInWindow"] === "object" &&
            typeof $steps["getProfileInWindow"].then === "function"
          ) {
            $steps["getProfileInWindow"] = await $steps["getProfileInWindow"];
          }

          $steps["getAppsInWindow"] =
            window?.data?.apps?.length > 0
              ? (() => {
                  const actionArgs = {
                    variable: {
                      objRoot: $state,
                      variablePath: ["apps"]
                    },
                    operation: 0,
                    value: window.data?.apps
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
            $steps["getAppsInWindow"] != null &&
            typeof $steps["getAppsInWindow"] === "object" &&
            typeof $steps["getAppsInWindow"].then === "function"
          ) {
            $steps["getAppsInWindow"] = await $steps["getAppsInWindow"];
          }

          $steps["loadingStart"] =
            !$state.user && !$state.apps
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
            $steps["loadingStart"] != null &&
            typeof $steps["loadingStart"] === "object" &&
            typeof $steps["loadingStart"].then === "function"
          ) {
            $steps["loadingStart"] = await $steps["loadingStart"];
          }

          $steps["getProfile"] = !$state.user?.id
            ? (() => {
                const actionArgs = {
                  args: [
                    undefined,
                    "https://hamdast.paziresh24.com/api/v1/profile"
                  ]
                };
                return $globalActions["Fragment.apiRequest"]?.apply(null, [
                  ...actionArgs.args
                ]);
              })()
            : undefined;
          if (
            $steps["getProfile"] != null &&
            typeof $steps["getProfile"] === "object" &&
            typeof $steps["getProfile"].then === "function"
          ) {
            $steps["getProfile"] = await $steps["getProfile"];
          }

          $steps["updateUser"] = !!$steps.getProfile?.data
            ? (() => {
                const actionArgs = {
                  variable: {
                    objRoot: $state,
                    variablePath: ["user"]
                  },
                  operation: 0,
                  value: $steps.getProfile?.data
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
            $steps["updateUser"] != null &&
            typeof $steps["updateUser"] === "object" &&
            typeof $steps["updateUser"].then === "function"
          ) {
            $steps["updateUser"] = await $steps["updateUser"];
          }

          $steps["errorProfile"] =
            $steps.getProfile?.status != 200 &&
            !$state.user?.id &&
            !$state.apps?.length > 0
              ? (() => {
                  const actionArgs = {
                    variable: {
                      objRoot: $state,
                      variablePath: ["error"]
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
            $steps["errorProfile"] != null &&
            typeof $steps["errorProfile"] === "object" &&
            typeof $steps["errorProfile"].then === "function"
          ) {
            $steps["errorProfile"] = await $steps["errorProfile"];
          }

          $steps["getApps"] = !!$steps.getProfile?.data
            ? (() => {
                const actionArgs = {
                  args: [
                    undefined,
                    "https://hamdast.paziresh24.com/api/v1/apps"
                  ]
                };
                return $globalActions["Fragment.apiRequest"]?.apply(null, [
                  ...actionArgs.args
                ]);
              })()
            : undefined;
          if (
            $steps["getApps"] != null &&
            typeof $steps["getApps"] === "object" &&
            typeof $steps["getApps"].then === "function"
          ) {
            $steps["getApps"] = await $steps["getApps"];
          }

          $steps["updateApps"] =
            !!$steps.getProfile?.data && !!$steps.getApps?.data
              ? (() => {
                  const actionArgs = {
                    variable: {
                      objRoot: $state,
                      variablePath: ["apps"]
                    },
                    operation: 0,
                    value: $steps.getApps.data
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
            $steps["updateApps"] != null &&
            typeof $steps["updateApps"] === "object" &&
            typeof $steps["updateApps"].then === "function"
          ) {
            $steps["updateApps"] = await $steps["updateApps"];
          }

          $steps["loadingStop2"] =
            !!$steps.getProfile?.data && !!$steps.getApps?.data
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
            $steps["loadingStop2"] != null &&
            typeof $steps["loadingStop2"] === "object" &&
            typeof $steps["loadingStop2"].then === "function"
          ) {
            $steps["loadingStop2"] = await $steps["loadingStop2"];
          }

          $steps["setInWindow"] =
            !!$steps.getProfile?.data && !!$steps.getApps?.data
              ? (() => {
                  const actionArgs = {
                    customFunction: async () => {
                      return (window.data = {
                        user: $steps.getProfile.data,
                        apps: $steps.getApps.data
                      });
                    }
                  };
                  return (({ customFunction }) => {
                    return customFunction();
                  })?.apply(null, [actionArgs]);
                })()
              : undefined;
          if (
            $steps["setInWindow"] != null &&
            typeof $steps["setInWindow"] === "object" &&
            typeof $steps["setInWindow"].then === "function"
          ) {
            $steps["setInWindow"] = await $steps["setInWindow"];
          }
        }}
      />

      {(() => {
        try {
          return $state.loading || $state.error;
        } catch (e) {
          if (
            e instanceof TypeError ||
            e?.plasmicType === "PlasmicUndefinedDataError"
          ) {
            return true;
          }
          throw e;
        }
      })() ? (
        <div
          data-plasmic-name={"freeBox"}
          data-plasmic-override={overrides.freeBox}
          className={classNames(projectcss.all, sty.freeBox)}
        >
          <Icon15Icon
            data-plasmic-name={"svg"}
            data-plasmic-override={overrides.svg}
            className={classNames(projectcss.all, sty.svg)}
            role={"img"}
          />
        </div>
      ) : null}
      {(() => {
        try {
          return !$state.loading && !$state.error;
        } catch (e) {
          if (
            e instanceof TypeError ||
            e?.plasmicType === "PlasmicUndefinedDataError"
          ) {
            return false;
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
  root: ["root", "sideEffect", "freeBox", "svg"],
  sideEffect: ["sideEffect"],
  freeBox: ["freeBox", "svg"],
  svg: ["svg"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  sideEffect: typeof SideEffect;
  freeBox: "div";
  svg: "svg";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicAuthProvider__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicAuthProvider__VariantsArgs;
    args?: PlasmicAuthProvider__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicAuthProvider__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicAuthProvider__ArgsType,
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
          internalArgPropNames: PlasmicAuthProvider__ArgProps,
          internalVariantPropNames: PlasmicAuthProvider__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicAuthProvider__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicAuthProvider";
  } else {
    func.displayName = `PlasmicAuthProvider.${nodeName}`;
  }
  return func;
}

export const PlasmicAuthProvider = Object.assign(
  // Top-level PlasmicAuthProvider renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    sideEffect: makeNodeComponent("sideEffect"),
    freeBox: makeNodeComponent("freeBox"),
    svg: makeNodeComponent("svg"),

    // Metadata about props expected for PlasmicAuthProvider
    internalVariantProps: PlasmicAuthProvider__VariantProps,
    internalArgProps: PlasmicAuthProvider__ArgProps
  }
);

export default PlasmicAuthProvider;
/* prettier-ignore-end */
