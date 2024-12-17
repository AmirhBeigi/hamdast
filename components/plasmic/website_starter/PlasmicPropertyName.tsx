// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 7SNMkB8UMukVgcWJYokeAQ
// Component: 35iXAFb28kzU

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

import { DataFetcher } from "@plasmicpkgs/plasmic-query";
import { Popover } from "@/fragment/components/popover"; // plasmic-import: qrBHkWyQBUyo/codeComponent
import { AntdSingleCollapse } from "@plasmicpkgs/antd5/skinny/registerCollapse";
import { singleCollapseHelpers as AntdSingleCollapse_Helpers } from "@plasmicpkgs/antd5/skinny/registerCollapse";
import { Fetcher } from "@plasmicapp/react-web/lib/data-sources";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: 7SNMkB8UMukVgcWJYokeAQ/projectcss
import sty from "./PlasmicPropertyName.module.css"; // plasmic-import: 35iXAFb28kzU/css

createPlasmicElementProxy;

export type PlasmicPropertyName__VariantMembers = {};
export type PlasmicPropertyName__VariantsArgs = {};
type VariantPropType = keyof PlasmicPropertyName__VariantsArgs;
export const PlasmicPropertyName__VariantProps = new Array<VariantPropType>();

export type PlasmicPropertyName__ArgsType = {};
type ArgPropType = keyof PlasmicPropertyName__ArgsType;
export const PlasmicPropertyName__ArgProps = new Array<ArgPropType>();

export type PlasmicPropertyName__OverridesType = {
  root?: Flex__<typeof DataFetcher>;
  httpRestApiFetcher?: Flex__<typeof DataFetcher>;
  columns?: Flex__<"div">;
  column?: Flex__<"div">;
  fragmentPopover?: Flex__<typeof Popover>;
  collapse?: Flex__<typeof AntdSingleCollapse>;
};

export interface DefaultPropertyNameProps {
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicPropertyName__RenderFunc(props: {
  variants: PlasmicPropertyName__VariantsArgs;
  args: PlasmicPropertyName__ArgsType;
  overrides: PlasmicPropertyName__OverridesType;
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

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "collapse.open",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,

        onMutate: generateOnMutateForSpec("open", AntdSingleCollapse_Helpers)
      },
      {
        path: "fragmentPopover.open",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => false,

        refName: "fragmentPopover"
      },
      {
        path: "propertyId2",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => ""
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
    <DataFetcher
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        "__wab_instance",
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        plasmic_plasmic_rich_components_css.plasmic_tokens,
        sty.root
      )}
      dataName={"fetchedData"}
      errorDisplay={
        <DataCtxReader__>{$ctx => "Error fetching data"}</DataCtxReader__>
      }
      errorName={"fetchError"}
      headers={{
        "Content-Type": "application/json",
        Accept: "application/json",
        "xc-token": "ty7cwczW_JDC0VQq8sEBJtu6E1e3_mX-kpa4d9TJ"
      }}
      loadingDisplay={<DataCtxReader__>{$ctx => "Loading..."}</DataCtxReader__>}
      method={"GET"}
      noLayout={false}
      url={(() => {
        try {
          return "https://app.nocodb.com/api/v2/tables/m89hemnlwsfji74/records?where=%28id%2Ceq%2C466%29&limit=25&shuffle=0&offset=0";
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
    >
      <DataCtxReader__>
        {$ctx => (
          <React.Fragment>
            <DataFetcher
              data-plasmic-name={"httpRestApiFetcher"}
              data-plasmic-override={overrides.httpRestApiFetcher}
              className={classNames("__wab_instance", sty.httpRestApiFetcher)}
              dataName={"fetchedData"}
              errorDisplay={
                <DataCtxReader__>
                  {$ctx => "Error fetching data"}
                </DataCtxReader__>
              }
              errorName={"fetchError"}
              headers={{
                "Content-Type": "application/json",
                Accept: "application/json",
                "xc-token": "ty7cwczW_JDC0VQq8sEBJtu6E1e3_mX-kpa4d9TJ"
              }}
              loadingDisplay={
                <DataCtxReader__>{$ctx => "Loading..."}</DataCtxReader__>
              }
              method={"GET"}
              noLayout={false}
              url={(() => {
                try {
                  return "https://app.nocodb.com/api/v2/tables/mzzo3ht0dlhagzr/records?where=%28user_id%2Ceq%2C466%29&limit=25&shuffle=0&offset=0";
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
            >
              <DataCtxReader__>
                {$ctx => (
                  <div
                    className={classNames(projectcss.all, sty.freeBox__zyRLp)}
                    dir={"rtl"}
                  >
                    <div
                      data-plasmic-name={"columns"}
                      data-plasmic-override={overrides.columns}
                      className={classNames(projectcss.all, sty.columns)}
                    >
                      <div
                        data-plasmic-name={"column"}
                        data-plasmic-override={overrides.column}
                        className={classNames(projectcss.all, sty.column)}
                      >
                        <Popover
                          data-plasmic-name={"fragmentPopover"}
                          data-plasmic-override={overrides.fragmentPopover}
                          className={classNames(
                            "__wab_instance",
                            sty.fragmentPopover
                          )}
                          content={
                            <div
                              className={classNames(
                                projectcss.all,
                                sty.freeBox__xWr2Q
                              )}
                            >
                              {(_par =>
                                !_par
                                  ? []
                                  : Array.isArray(_par)
                                  ? _par
                                  : [_par])(
                                (() => {
                                  try {
                                    return $ctx.fetchedData.list;
                                  } catch (e) {
                                    if (
                                      e instanceof TypeError ||
                                      e?.plasmicType ===
                                        "PlasmicUndefinedDataError"
                                    ) {
                                      return [];
                                    }
                                    throw e;
                                  }
                                })()
                              ).map((__plasmic_item_0, __plasmic_idx_0) => {
                                const currentItem = __plasmic_item_0;
                                const currentIndex = __plasmic_idx_0;
                                return (
                                  <div
                                    className={classNames(
                                      projectcss.all,
                                      sty.freeBox__hUpT
                                    )}
                                    key={currentIndex}
                                    onClick={async event => {
                                      const $steps = {};

                                      $steps["updatePropertyId2"] = true
                                        ? (() => {
                                            const actionArgs = {
                                              variable: {
                                                objRoot: $state,
                                                variablePath: ["propertyId2"]
                                              },
                                              operation: 0,
                                              value: currentItem.id
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
                                              const { objRoot, variablePath } =
                                                variable;

                                              $stateSet(
                                                objRoot,
                                                variablePath,
                                                value
                                              );
                                              return value;
                                            })?.apply(null, [actionArgs]);
                                          })()
                                        : undefined;
                                      if (
                                        $steps["updatePropertyId2"] != null &&
                                        typeof $steps["updatePropertyId2"] ===
                                          "object" &&
                                        typeof $steps["updatePropertyId2"]
                                          .then === "function"
                                      ) {
                                        $steps["updatePropertyId2"] =
                                          await $steps["updatePropertyId2"];
                                      }
                                    }}
                                  >
                                    <div
                                      className={classNames(
                                        projectcss.all,
                                        projectcss.__wab_text,
                                        sty.text__vsvCd
                                      )}
                                      dir={"rtl"}
                                      onClick={async event => {
                                        const $steps = {};

                                        $steps["updatePropertyId2"] = true
                                          ? (() => {
                                              const actionArgs = {
                                                variable: {
                                                  objRoot: $state,
                                                  variablePath: ["propertyId2"]
                                                },
                                                operation: 0
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
                                                const {
                                                  objRoot,
                                                  variablePath
                                                } = variable;

                                                $stateSet(
                                                  objRoot,
                                                  variablePath,
                                                  value
                                                );
                                                return value;
                                              })?.apply(null, [actionArgs]);
                                            })()
                                          : undefined;
                                        if (
                                          $steps["updatePropertyId2"] != null &&
                                          typeof $steps["updatePropertyId2"] ===
                                            "object" &&
                                          typeof $steps["updatePropertyId2"]
                                            .then === "function"
                                        ) {
                                          $steps["updatePropertyId2"] =
                                            await $steps["updatePropertyId2"];
                                        }
                                      }}
                                    >
                                      <React.Fragment>
                                        {(() => {
                                          try {
                                            return currentItem.property_name;
                                          } catch (e) {
                                            if (
                                              e instanceof TypeError ||
                                              e?.plasmicType ===
                                                "PlasmicUndefinedDataError"
                                            ) {
                                              return "";
                                            }
                                            throw e;
                                          }
                                        })()}
                                      </React.Fragment>
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          }
                          onOpenChange={async (...eventArgs: any) => {
                            generateStateOnChangeProp($state, [
                              "fragmentPopover",
                              "open"
                            ]).apply(null, eventArgs);

                            if (eventArgs.length > 1 && eventArgs[1]) {
                              return;
                            }
                          }}
                          open={generateStateValueProp($state, [
                            "fragmentPopover",
                            "open"
                          ])}
                          ref={ref => {
                            $refs["fragmentPopover"] = ref;
                          }}
                          trigger={
                            <div
                              className={classNames(
                                projectcss.all,
                                sty.freeBox__uiJtD
                              )}
                            >
                              <div
                                className={classNames(
                                  projectcss.all,
                                  sty.freeBox__dFaIx
                                )}
                                onClick={async event => {
                                  const $steps = {};

                                  $steps["updateCollapseOpen"] = true
                                    ? (() => {
                                        const actionArgs = {
                                          variable: {
                                            objRoot: $state,
                                            variablePath: ["collapse", "open"]
                                          },
                                          operation: 0
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
                                          const { objRoot, variablePath } =
                                            variable;

                                          $stateSet(
                                            objRoot,
                                            variablePath,
                                            value
                                          );
                                          return value;
                                        })?.apply(null, [actionArgs]);
                                      })()
                                    : undefined;
                                  if (
                                    $steps["updateCollapseOpen"] != null &&
                                    typeof $steps["updateCollapseOpen"] ===
                                      "object" &&
                                    typeof $steps["updateCollapseOpen"].then ===
                                      "function"
                                  ) {
                                    $steps["updateCollapseOpen"] = await $steps[
                                      "updateCollapseOpen"
                                    ];
                                  }
                                }}
                              >
                                <div
                                  className={classNames(
                                    projectcss.all,
                                    projectcss.__wab_text,
                                    sty.text__ieLs
                                  )}
                                  dir={"rtl"}
                                >
                                  <React.Fragment>
                                    {(() => {
                                      try {
                                        return $ctx.fetchedData.list[0]
                                          .property_name;
                                      } catch (e) {
                                        if (
                                          e instanceof TypeError ||
                                          e?.plasmicType ===
                                            "PlasmicUndefinedDataError"
                                        ) {
                                          return "\u0648\u06cc\u0644\u0627 \u0631\u0646\u062a\u0627\u0645\u0648\u0646";
                                        }
                                        throw e;
                                      }
                                    })()}
                                  </React.Fragment>
                                </div>
                                {(() => {
                                  try {
                                    return $state.fragmentPopover.open == false;
                                  } catch (e) {
                                    if (
                                      e instanceof TypeError ||
                                      e?.plasmicType ===
                                        "PlasmicUndefinedDataError"
                                    ) {
                                      return true;
                                    }
                                    throw e;
                                  }
                                })() ? (
                                  <PlasmicImg__
                                    alt={""}
                                    className={classNames(sty.img__hujfP)}
                                    displayHeight={"15px"}
                                    displayMaxHeight={"none"}
                                    displayMaxWidth={"100%"}
                                    displayMinHeight={"0"}
                                    displayMinWidth={"0"}
                                    displayWidth={"15px"}
                                    loading={"lazy"}
                                    onClick={async event => {
                                      const $steps = {};
                                    }}
                                    src={{
                                      src: "/plasmic/website_starter/images/chevronDownSvg.svg",
                                      fullWidth: 20,
                                      fullHeight: 20,
                                      aspectRatio: 1
                                    }}
                                  />
                                ) : null}
                                {(() => {
                                  try {
                                    return $state.fragmentPopover.open == true;
                                  } catch (e) {
                                    if (
                                      e instanceof TypeError ||
                                      e?.plasmicType ===
                                        "PlasmicUndefinedDataError"
                                    ) {
                                      return false;
                                    }
                                    throw e;
                                  }
                                })() ? (
                                  <PlasmicImg__
                                    alt={""}
                                    className={classNames(sty.img__vwXoO)}
                                    displayHeight={"15px"}
                                    displayMaxHeight={"none"}
                                    displayMaxWidth={"100%"}
                                    displayMinHeight={"0"}
                                    displayMinWidth={"0"}
                                    displayWidth={"15px"}
                                    loading={"lazy"}
                                    src={{
                                      src: "/plasmic/website_starter/images/chevronUpSvg.svg",
                                      fullWidth: 20,
                                      fullHeight: 20,
                                      aspectRatio: 1
                                    }}
                                  />
                                ) : null}
                              </div>
                            </div>
                          }
                        />
                      </div>
                    </div>
                  </div>
                )}
              </DataCtxReader__>
            </DataFetcher>
            {(() => {
              const child$Props = {
                bordered: true,
                className: classNames("__wab_instance", sty.collapse),
                label2: (
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__sBmWv
                    )}
                  >
                    <React.Fragment>
                      {(() => {
                        try {
                          return $ctx.fetchedData.list[0].property_name;
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
                ),
                onChange: async (...eventArgs: any) => {
                  generateStateOnChangePropForCodeComponents(
                    $state,
                    "open",
                    ["collapse", "open"],
                    AntdSingleCollapse_Helpers
                  ).apply(null, eventArgs);

                  if (eventArgs.length > 1 && eventArgs[1]) {
                    return;
                  }
                },
                open: generateStateValueProp($state, ["collapse", "open"]),
                showArrow: true
              };
              initializeCodeComponentStates(
                $state,
                [
                  {
                    name: "open",
                    plasmicStateName: "collapse.open"
                  }
                ],
                [],
                AntdSingleCollapse_Helpers ?? {},
                child$Props
              );

              return (
                <AntdSingleCollapse
                  data-plasmic-name={"collapse"}
                  data-plasmic-override={overrides.collapse}
                  {...child$Props}
                >
                  {(_par => (!_par ? [] : Array.isArray(_par) ? _par : [_par]))(
                    [2, 3, 4]
                  ).map((__plasmic_item_0, __plasmic_idx_0) => {
                    const currentItem = __plasmic_item_0;
                    const currentIndex = __plasmic_idx_0;
                    return (
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__hxVp8
                        )}
                        key={currentIndex}
                      >
                        {""}
                      </div>
                    );
                  })}
                </AntdSingleCollapse>
              );
            })()}
          </React.Fragment>
        )}
      </DataCtxReader__>
    </DataFetcher>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "httpRestApiFetcher",
    "columns",
    "column",
    "fragmentPopover",
    "collapse"
  ],
  httpRestApiFetcher: [
    "httpRestApiFetcher",
    "columns",
    "column",
    "fragmentPopover"
  ],
  columns: ["columns", "column", "fragmentPopover"],
  column: ["column", "fragmentPopover"],
  fragmentPopover: ["fragmentPopover"],
  collapse: ["collapse"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: typeof DataFetcher;
  httpRestApiFetcher: typeof DataFetcher;
  columns: "div";
  column: "div";
  fragmentPopover: typeof Popover;
  collapse: typeof AntdSingleCollapse;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicPropertyName__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicPropertyName__VariantsArgs;
    args?: PlasmicPropertyName__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicPropertyName__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicPropertyName__ArgsType,
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
          internalArgPropNames: PlasmicPropertyName__ArgProps,
          internalVariantPropNames: PlasmicPropertyName__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicPropertyName__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPropertyName";
  } else {
    func.displayName = `PlasmicPropertyName.${nodeName}`;
  }
  return func;
}

export const PlasmicPropertyName = Object.assign(
  // Top-level PlasmicPropertyName renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    httpRestApiFetcher: makeNodeComponent("httpRestApiFetcher"),
    columns: makeNodeComponent("columns"),
    column: makeNodeComponent("column"),
    fragmentPopover: makeNodeComponent("fragmentPopover"),
    collapse: makeNodeComponent("collapse"),

    // Metadata about props expected for PlasmicPropertyName
    internalVariantProps: PlasmicPropertyName__VariantProps,
    internalArgProps: PlasmicPropertyName__ArgProps
  }
);

export default PlasmicPropertyName;
/* prettier-ignore-end */
