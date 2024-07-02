// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: bE9NMB942w5e6uFrcCxfJN
// Component: nAbrCePpa8PZ

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

import { Embed } from "@plasmicpkgs/plasmic-basic-components";
import AuthProvider from "../../AuthProvider"; // plasmic-import: KTPu1eZupEdG/component
import Layout from "../../Layout"; // plasmic-import: ve2FygUyzJYe/component
import FetchData from "../../FetchData"; // plasmic-import: -UcPqMSXVAGv/component
import Menu from "../../Menu"; // plasmic-import: 73TqujunaOu5/component
import Filter from "../../Filter"; // plasmic-import: YY41SIghQUgw/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic.module.css"; // plasmic-import: bE9NMB942w5e6uFrcCxfJN/projectcss
import sty from "./PlasmicStatistics.module.css"; // plasmic-import: nAbrCePpa8PZ/css

import Icon15Icon from "./icons/PlasmicIcon__Icon15"; // plasmic-import: rQsx35tf_bcf/icon
import Icon17Icon from "./icons/PlasmicIcon__Icon17"; // plasmic-import: t3gBl-ZhsAb2/icon
import Icon18Icon from "./icons/PlasmicIcon__Icon18"; // plasmic-import: 1FObiVFN1kNa/icon

createPlasmicElementProxy;

export type PlasmicStatistics__VariantMembers = {};
export type PlasmicStatistics__VariantsArgs = {};
type VariantPropType = keyof PlasmicStatistics__VariantsArgs;
export const PlasmicStatistics__VariantProps = new Array<VariantPropType>();

export type PlasmicStatistics__ArgsType = {};
type ArgPropType = keyof PlasmicStatistics__ArgsType;
export const PlasmicStatistics__ArgProps = new Array<ArgPropType>();

export type PlasmicStatistics__OverridesType = {
  root?: Flex__<"div">;
  embedHtml?: Flex__<typeof Embed>;
  authProvider?: Flex__<typeof AuthProvider>;
  layout?: Flex__<typeof Layout>;
  fetchData?: Flex__<typeof FetchData>;
  filter?: Flex__<typeof Filter>;
};

export interface DefaultStatisticsProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicStatistics__RenderFunc(props: {
  variants: PlasmicStatistics__VariantsArgs;
  args: PlasmicStatistics__ArgsType;
  overrides: PlasmicStatistics__OverridesType;
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

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "authProvider.user",
        type: "private",
        variableType: "object",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined
      },
      {
        path: "authProvider.apps",
        type: "private",
        variableType: "array",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined
      },
      {
        path: "fetchData.data",
        type: "private",
        variableType: "object",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined
      },
      {
        path: "fetchData.loading",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined
      },
      {
        path: "menu",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) =>
          (() => {
            try {
              return -1;
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
      },
      {
        path: "day",
        type: "private",
        variableType: "number",
        initFunc: ({ $props, $state, $queries, $ctx }) => 1
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
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary" />
        <title key="title">{PlasmicStatistics.pageMetadata.title}</title>
        <meta
          key="og:title"
          property="og:title"
          content={PlasmicStatistics.pageMetadata.title}
        />
        <meta
          key="twitter:title"
          name="twitter:title"
          content={PlasmicStatistics.pageMetadata.title}
        />
      </Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
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
          dir={"rtl"}
        >
          <Embed
            data-plasmic-name={"embedHtml"}
            data-plasmic-override={overrides.embedHtml}
            className={classNames("__wab_instance", sty.embedHtml)}
            code={
              '<link\r\n  rel="stylesheet"\r\n  href="https://cdn.jsdelivr.net/npm/rrweb-player@latest/dist/style.css"\r\n/>\r\n<script src="https://cdn.jsdelivr.net/npm/rrweb-player@latest/dist/index.js"></script>'
            }
          />

          <AuthProvider
            data-plasmic-name={"authProvider"}
            data-plasmic-override={overrides.authProvider}
            className={classNames("__wab_instance", sty.authProvider)}
            onAppsChange={generateStateOnChangeProp($state, [
              "authProvider",
              "apps"
            ])}
            onUserChange={generateStateOnChangeProp($state, [
              "authProvider",
              "user"
            ])}
          >
            <Layout
              data-plasmic-name={"layout"}
              data-plasmic-override={overrides.layout}
              apps={(() => {
                try {
                  return $state.authProvider.apps;
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
              className={classNames("__wab_instance", sty.layout)}
              selectedApp={(() => {
                try {
                  return $ctx.params.id;
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
              selectedMenu={(() => {
                try {
                  return (
                    $ctx.pageRoute.split("/")[3][0].toUpperCase() +
                    $ctx.pageRoute.split("/")[3].slice(1)
                  );
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
              user={(() => {
                try {
                  return $state.authProvider.user;
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
              <div className={classNames(projectcss.all, sty.freeBox__jnlGg)}>
                <div className={classNames(projectcss.all, sty.freeBox__dmEfe)}>
                  <Stack__
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__pg3E7)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__qy6Ib
                      )}
                    >
                      {
                        "\u0645\u0646\u0648 \u0627\u064e\u0628\u0632\u0627\u0631\u06a9"
                      }
                    </div>
                    <FetchData
                      data-plasmic-name={"fetchData"}
                      data-plasmic-override={overrides.fetchData}
                      className={classNames("__wab_instance", sty.fetchData)}
                      loadingStatus={
                        <Icon15Icon
                          className={classNames(projectcss.all, sty.svg__qmEup)}
                          role={"img"}
                        />
                      }
                      onDataChange={generateStateOnChangeProp($state, [
                        "fetchData",
                        "data"
                      ])}
                      onLoadingChange={generateStateOnChangeProp($state, [
                        "fetchData",
                        "loading"
                      ])}
                      url={(() => {
                        try {
                          return `https://hamdast.paziresh24.com/api/v1/apps/${$ctx.params.id}/menus/`;
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
                      <Stack__
                        as={"div"}
                        hasGap={true}
                        className={classNames(
                          projectcss.all,
                          sty.freeBox__yRzdo
                        )}
                      >
                        <Menu
                          active={(() => {
                            try {
                              return -1 === $state.menu;
                            } catch (e) {
                              if (
                                e instanceof TypeError ||
                                e?.plasmicType === "PlasmicUndefinedDataError"
                              ) {
                                return [];
                              }
                              throw e;
                            }
                          })()}
                          className={classNames(
                            "__wab_instance",
                            sty.menu__graj
                          )}
                          compact={true}
                          icon={true}
                          iconWrapper={
                            <Icon17Icon
                              className={classNames(
                                projectcss.all,
                                sty.svg___8TMae
                              )}
                              role={"img"}
                            />
                          }
                          name={
                            "\u0647\u0645\u0647 \u0645\u0646\u0648 \u0647\u0627"
                          }
                          onClick={async () => {
                            const $steps = {};

                            $steps["updateDay"] = true
                              ? (() => {
                                  const actionArgs = {
                                    variable: {
                                      objRoot: $state,
                                      variablePath: ["day"]
                                    },
                                    operation: 0,
                                    value: 1
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
                              $steps["updateDay"] != null &&
                              typeof $steps["updateDay"] === "object" &&
                              typeof $steps["updateDay"].then === "function"
                            ) {
                              $steps["updateDay"] = await $steps["updateDay"];
                            }

                            $steps["updateMenu"] = true
                              ? (() => {
                                  const actionArgs = {
                                    variable: {
                                      objRoot: $state,
                                      variablePath: ["menu"]
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
                                    const { objRoot, variablePath } = variable;

                                    $stateSet(objRoot, variablePath, value);
                                    return value;
                                  })?.apply(null, [actionArgs]);
                                })()
                              : undefined;
                            if (
                              $steps["updateMenu"] != null &&
                              typeof $steps["updateMenu"] === "object" &&
                              typeof $steps["updateMenu"].then === "function"
                            ) {
                              $steps["updateMenu"] = await $steps["updateMenu"];
                            }
                          }}
                        />

                        {(_par =>
                          !_par ? [] : Array.isArray(_par) ? _par : [_par])(
                          (() => {
                            try {
                              return $state.fetchData.data;
                            } catch (e) {
                              if (
                                e instanceof TypeError ||
                                e?.plasmicType === "PlasmicUndefinedDataError"
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
                            <Menu
                              active={(() => {
                                try {
                                  return currentItem.id === $state.menu;
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
                              })()}
                              className={classNames(
                                "__wab_instance",
                                sty.menu__j6YWr
                              )}
                              compact={true}
                              icon={false}
                              iconWrapper={null}
                              key={currentIndex}
                              name={(() => {
                                try {
                                  return currentItem.name_fa;
                                } catch (e) {
                                  if (
                                    e instanceof TypeError ||
                                    e?.plasmicType ===
                                      "PlasmicUndefinedDataError"
                                  ) {
                                    return undefined;
                                  }
                                  throw e;
                                }
                              })()}
                              onClick={async () => {
                                const $steps = {};

                                $steps["updateDay"] = true
                                  ? (() => {
                                      const actionArgs = {
                                        variable: {
                                          objRoot: $state,
                                          variablePath: ["day"]
                                        },
                                        operation: 0,
                                        value: 1
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

                                        $stateSet(objRoot, variablePath, value);
                                        return value;
                                      })?.apply(null, [actionArgs]);
                                    })()
                                  : undefined;
                                if (
                                  $steps["updateDay"] != null &&
                                  typeof $steps["updateDay"] === "object" &&
                                  typeof $steps["updateDay"].then === "function"
                                ) {
                                  $steps["updateDay"] = await $steps[
                                    "updateDay"
                                  ];
                                }

                                $steps["updateMenu"] = true
                                  ? (() => {
                                      const actionArgs = {
                                        variable: {
                                          objRoot: $state,
                                          variablePath: ["menu"]
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

                                        $stateSet(objRoot, variablePath, value);
                                        return value;
                                      })?.apply(null, [actionArgs]);
                                    })()
                                  : undefined;
                                if (
                                  $steps["updateMenu"] != null &&
                                  typeof $steps["updateMenu"] === "object" &&
                                  typeof $steps["updateMenu"].then ===
                                    "function"
                                ) {
                                  $steps["updateMenu"] = await $steps[
                                    "updateMenu"
                                  ];
                                }
                              }}
                            />
                          );
                        })}
                      </Stack__>
                    </FetchData>
                  </Stack__>
                  <Stack__
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__jnCjc)}
                  >
                    <div
                      className={classNames(projectcss.all, sty.freeBox__reWz8)}
                    >
                      <Stack__
                        as={"div"}
                        hasGap={true}
                        className={classNames(
                          projectcss.all,
                          sty.freeBox__nDmB
                        )}
                      >
                        {(_par =>
                          !_par ? [] : Array.isArray(_par) ? _par : [_par])(
                          (() => {
                            try {
                              return [
                                {
                                  text: "امروز",
                                  value: 0
                                },
                                {
                                  text: "۳ روز اخیر",
                                  value: 2
                                },
                                {
                                  text: "۷ روز اخیر",
                                  value: 6
                                },
                                {
                                  text: "۳۰ روز اخیر",
                                  value: 29
                                }
                              ];
                            } catch (e) {
                              if (
                                e instanceof TypeError ||
                                e?.plasmicType === "PlasmicUndefinedDataError"
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
                            <Filter
                              data-plasmic-name={"filter"}
                              data-plasmic-override={overrides.filter}
                              active={(() => {
                                try {
                                  return currentItem.value === $state.day;
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
                              })()}
                              className={classNames(
                                "__wab_instance",
                                sty.filter
                              )}
                              key={currentIndex}
                              onClick={async () => {
                                const $steps = {};

                                $steps["updateDay"] = true
                                  ? (() => {
                                      const actionArgs = {
                                        variable: {
                                          objRoot: $state,
                                          variablePath: ["day"]
                                        },
                                        operation: 0,
                                        value: currentItem.value
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

                                        $stateSet(objRoot, variablePath, value);
                                        return value;
                                      })?.apply(null, [actionArgs]);
                                    })()
                                  : undefined;
                                if (
                                  $steps["updateDay"] != null &&
                                  typeof $steps["updateDay"] === "object" &&
                                  typeof $steps["updateDay"].then === "function"
                                ) {
                                  $steps["updateDay"] = await $steps[
                                    "updateDay"
                                  ];
                                }
                              }}
                              text={(() => {
                                try {
                                  return currentItem.text;
                                } catch (e) {
                                  if (
                                    e instanceof TypeError ||
                                    e?.plasmicType ===
                                      "PlasmicUndefinedDataError"
                                  ) {
                                    return undefined;
                                  }
                                  throw e;
                                }
                              })()}
                            />
                          );
                        })}
                      </Stack__>
                    </div>
                    <Stack__
                      as={"div"}
                      hasGap={true}
                      className={classNames(projectcss.all, sty.freeBox__t4Zgx)}
                    >
                      <Icon18Icon
                        className={classNames(projectcss.all, sty.svg__hCh1A)}
                        role={"img"}
                      />

                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__poXpJ
                        )}
                      >
                        {
                          "\u0622\u0645\u0627\u0631\u06cc \u062f\u0631 \u0627\u06cc\u0646 \u062a\u0627\u0631\u06cc\u062e \u0648\u062c\u0648\u062f \u0646\u062f\u0627\u0631\u062f."
                        }
                      </div>
                    </Stack__>
                  </Stack__>
                </div>
              </div>
            </Layout>
          </AuthProvider>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "embedHtml", "authProvider", "layout", "fetchData", "filter"],
  embedHtml: ["embedHtml"],
  authProvider: ["authProvider", "layout", "fetchData", "filter"],
  layout: ["layout", "fetchData", "filter"],
  fetchData: ["fetchData"],
  filter: ["filter"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  embedHtml: typeof Embed;
  authProvider: typeof AuthProvider;
  layout: typeof Layout;
  fetchData: typeof FetchData;
  filter: typeof Filter;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicStatistics__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicStatistics__VariantsArgs;
    args?: PlasmicStatistics__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicStatistics__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicStatistics__ArgsType,
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
          internalArgPropNames: PlasmicStatistics__ArgProps,
          internalVariantPropNames: PlasmicStatistics__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicStatistics__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicStatistics";
  } else {
    func.displayName = `PlasmicStatistics.${nodeName}`;
  }
  return func;
}

export const PlasmicStatistics = Object.assign(
  // Top-level PlasmicStatistics renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    embedHtml: makeNodeComponent("embedHtml"),
    authProvider: makeNodeComponent("authProvider"),
    layout: makeNodeComponent("layout"),
    fetchData: makeNodeComponent("fetchData"),
    filter: makeNodeComponent("filter"),

    // Metadata about props expected for PlasmicStatistics
    internalVariantProps: PlasmicStatistics__VariantProps,
    internalArgProps: PlasmicStatistics__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "رفتار کاربران",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicStatistics;
/* prettier-ignore-end */
