// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: bE9NMB942w5e6uFrcCxfJN
// Component: 07VZfuNk1JDL

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

import { Reveal } from "@plasmicpkgs/react-awesome-reveal";
import { SideEffect } from "@plasmicpkgs/plasmic-basic-components";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_paziresh_24_design_system_css from "../paziresh_24_design_system/plasmic.module.css"; // plasmic-import: 6HBcNwr8dz9LuS1Qe36xa5/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: bE9NMB942w5e6uFrcCxfJN/projectcss
import sty from "./PlasmicRecordCard.module.css"; // plasmic-import: 07VZfuNk1JDL/css

createPlasmicElementProxy;

export type PlasmicRecordCard__VariantMembers = {};
export type PlasmicRecordCard__VariantsArgs = {};
type VariantPropType = keyof PlasmicRecordCard__VariantsArgs;
export const PlasmicRecordCard__VariantProps = new Array<VariantPropType>();

export type PlasmicRecordCard__ArgsType = {
  name?: string;
  family?: string;
  isDoctor?: boolean;
  events?: any;
  date?: string;
};
type ArgPropType = keyof PlasmicRecordCard__ArgsType;
export const PlasmicRecordCard__ArgProps = new Array<ArgPropType>(
  "name",
  "family",
  "isDoctor",
  "events",
  "date"
);

export type PlasmicRecordCard__OverridesType = {
  root?: Flex__<"div">;
  sideEffect?: Flex__<typeof SideEffect>;
};

export interface DefaultRecordCardProps {
  name?: string;
  family?: string;
  isDoctor?: boolean;
  events?: any;
  date?: string;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicRecordCard__RenderFunc(props: {
  variants: PlasmicRecordCard__VariantsArgs;
  args: PlasmicRecordCard__ArgsType;
  overrides: PlasmicRecordCard__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {
          isDoctor: false
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
        path: "isOpen",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => false
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
        sty.root
      )}
      dir={"rtl"}
    >
      <Stack__
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__h8ZUn)}
        onClick={async event => {
          const $steps = {};

          $steps["updateIsOpen"] = true
            ? (() => {
                const actionArgs = {
                  variable: {
                    objRoot: $state,
                    variablePath: ["isOpen"]
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
            $steps["updateIsOpen"] != null &&
            typeof $steps["updateIsOpen"] === "object" &&
            typeof $steps["updateIsOpen"].then === "function"
          ) {
            $steps["updateIsOpen"] = await $steps["updateIsOpen"];
          }
        }}
      >
        <Stack__
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__h12EY)}
        >
          <Stack__
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__cI6Rn)}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text___6KHEj
              )}
            >
              <React.Fragment>
                {(() => {
                  try {
                    return `${$props.name} ${$props.family}`;
                  } catch (e) {
                    if (
                      e instanceof TypeError ||
                      e?.plasmicType === "PlasmicUndefinedDataError"
                    ) {
                      return "\u0646\u06cc\u0645\u0627 \u062f\u0633\u062a\u06af\u06cc\u0631";
                    }
                    throw e;
                  }
                })()}
              </React.Fragment>
            </div>
            {(() => {
              try {
                return $props.isDoctor;
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
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__oWPp
                )}
              >
                {"\u067e\u0632\u0634\u06a9"}
              </div>
            ) : null}
          </Stack__>
        </Stack__>
        <Stack__
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__x5Bsa)}
        >
          <Stack__
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox___6CYPe)}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__uqS9C
              )}
            >
              <React.Fragment>
                {(() => {
                  try {
                    return $props.date;
                  } catch (e) {
                    if (
                      e instanceof TypeError ||
                      e?.plasmicType === "PlasmicUndefinedDataError"
                    ) {
                      return "\u06f3\u06f1 \u062e\u0631\u062f\u0627\u062f \u06f0\u06f4:\u06f2\u06f0 \u0628.\u0638";
                    }
                    throw e;
                  }
                })()}
              </React.Fragment>
            </div>
          </Stack__>
        </Stack__>
      </Stack__>
      {(() => {
        try {
          return $state.isOpen;
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
        <div className={classNames(projectcss.all, sty.freeBox__ocrOb)}>
          {(() => {
            try {
              return $state.isOpen;
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
            <Reveal
              cascade={false}
              className={classNames("__wab_instance", sty.reveal__pgdoZ)}
              effect={"fade"}
              triggerOnce={true}
            >
              <div
                className={classNames(projectcss.all, sty.freeBox___1E7WC)}
                onClick={async event => {
                  const $steps = {};

                  $steps["updateIsOpen"] = true
                    ? (() => {
                        const actionArgs = {
                          variable: {
                            objRoot: $state,
                            variablePath: ["isOpen"]
                          },
                          operation: 0,
                          value: false
                        };
                        return (({
                          variable,
                          value,
                          startIndex,
                          deleteCount
                        }) => {
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
                    $steps["updateIsOpen"] != null &&
                    typeof $steps["updateIsOpen"] === "object" &&
                    typeof $steps["updateIsOpen"].then === "function"
                  ) {
                    $steps["updateIsOpen"] = await $steps["updateIsOpen"];
                  }
                }}
              />
            </Reveal>
          ) : null}
          {(() => {
            try {
              return $state.isOpen;
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
            <Reveal
              className={classNames("__wab_instance", sty.reveal__g1KxY)}
              direction={"up"}
              duration={500}
              effect={"slide"}
              triggerOnce={true}
            >
              <div className={classNames(projectcss.all, sty.freeBox__duwmQ)}>
                <div className={classNames(projectcss.all, sty.freeBox__dyKds)}>
                  <SideEffect
                    data-plasmic-name={"sideEffect"}
                    data-plasmic-override={overrides.sideEffect}
                    className={classNames("__wab_instance", sty.sideEffect)}
                    onMount={async () => {
                      const $steps = {};

                      $steps["runCode"] = true
                        ? (() => {
                            const actionArgs = {
                              customFunction: async () => {
                                return (() => {
                                  window.isReadyPlayer = null;
                                  return setTimeout(() => {
                                    if (window.isReadyPlayer == null) {
                                      window.isReadyPlayer = new rrwebPlayer({
                                        target:
                                          document.querySelector(
                                            "#player-hamdast"
                                          ),
                                        props: { events: $props.events }
                                      });
                                    }
                                  }, 3000);
                                })();
                              }
                            };
                            return (({ customFunction }) => {
                              return customFunction();
                            })?.apply(null, [actionArgs]);
                          })()
                        : undefined;
                      if (
                        $steps["runCode"] != null &&
                        typeof $steps["runCode"] === "object" &&
                        typeof $steps["runCode"].then === "function"
                      ) {
                        $steps["runCode"] = await $steps["runCode"];
                      }
                    }}
                  />

                  <div
                    className={classNames(projectcss.all, sty.freeBox__oEar)}
                    id={"player-hamdast"}
                  />
                </div>
              </div>
            </Reveal>
          ) : null}
        </div>
      ) : null}
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
  PlasmicRecordCard__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicRecordCard__VariantsArgs;
    args?: PlasmicRecordCard__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicRecordCard__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicRecordCard__ArgsType,
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
          internalArgPropNames: PlasmicRecordCard__ArgProps,
          internalVariantPropNames: PlasmicRecordCard__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicRecordCard__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicRecordCard";
  } else {
    func.displayName = `PlasmicRecordCard.${nodeName}`;
  }
  return func;
}

export const PlasmicRecordCard = Object.assign(
  // Top-level PlasmicRecordCard renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    sideEffect: makeNodeComponent("sideEffect"),

    // Metadata about props expected for PlasmicRecordCard
    internalVariantProps: PlasmicRecordCard__VariantProps,
    internalArgProps: PlasmicRecordCard__ArgProps
  }
);

export default PlasmicRecordCard;
/* prettier-ignore-end */
