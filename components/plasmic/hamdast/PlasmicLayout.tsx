// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: bE9NMB942w5e6uFrcCxfJN
// Component: ve2FygUyzJYe

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

import { Select } from "@/fragment/components/select"; // plasmic-import: WnYiJcun2Nlj/codeComponent
import Menu from "../../Menu"; // plasmic-import: 73TqujunaOu5/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: bE9NMB942w5e6uFrcCxfJN/projectcss
import sty from "./PlasmicLayout.module.css"; // plasmic-import: ve2FygUyzJYe/css

import Icon12Icon from "./icons/PlasmicIcon__Icon12"; // plasmic-import: uNpsRe8HBlEO/icon
import Icon7Icon from "./icons/PlasmicIcon__Icon7"; // plasmic-import: 1XPNabWn6mUI/icon
import Icon25Icon from "./icons/PlasmicIcon__Icon25"; // plasmic-import: AGSEC-pNDNUM/icon
import Icon9Icon from "./icons/PlasmicIcon__Icon9"; // plasmic-import: ly5Yl8idG7m1/icon
import Icon13Icon from "./icons/PlasmicIcon__Icon13"; // plasmic-import: SeV8a-Sb0Haa/icon

createPlasmicElementProxy;

export type PlasmicLayout__VariantMembers = {};
export type PlasmicLayout__VariantsArgs = {};
type VariantPropType = keyof PlasmicLayout__VariantsArgs;
export const PlasmicLayout__VariantProps = new Array<VariantPropType>();

export type PlasmicLayout__ArgsType = {
  children?: React.ReactNode;
  apps?: any;
  user?: any;
  selectedApp?: string;
  selectedMenu?: string;
};
type ArgPropType = keyof PlasmicLayout__ArgsType;
export const PlasmicLayout__ArgProps = new Array<ArgPropType>(
  "children",
  "apps",
  "user",
  "selectedApp",
  "selectedMenu"
);

export type PlasmicLayout__OverridesType = {
  root?: Flex__<"div">;
  fragmentSelect?: Flex__<typeof Select>;
  link?: Flex__<"a"> & Partial<LinkProps>;
};

export interface DefaultLayoutProps {
  children?: React.ReactNode;
  apps?: any;
  user?: any;
  selectedApp?: string;
  selectedMenu?: string;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicLayout__RenderFunc(props: {
  variants: PlasmicLayout__VariantsArgs;
  args: PlasmicLayout__ArgsType;
  overrides: PlasmicLayout__OverridesType;
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
        path: "menu",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) =>
          (() => {
            try {
              return $props.selectedMenu;
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
        path: "fragmentSelect.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) =>
          (() => {
            try {
              return $props.selectedApp;
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
        path: "fragmentSelect.open",
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
        sty.root
      )}
      dir={"rtl"}
    >
      <div className={classNames(projectcss.all, sty.freeBox__fVnc)}>
        <Stack__
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__z5SsY)}
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__kus5
            )}
          >
            {"\u0647\u0645\u200c\u062f\u0633\u062a"}
          </div>
          <div className={classNames(projectcss.all, sty.freeBox__slRrk)} />

          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__qdz2S
            )}
          >
            {"\u062a\u0648\u0633\u0639\u0647 \u062f\u0647\u0646\u062f\u0647"}
          </div>
        </Stack__>
        <Stack__
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__e2Ntx)}
        >
          <Select
            data-plasmic-name={"fragmentSelect"}
            data-plasmic-override={overrides.fragmentSelect}
            disabled={(() => {
              try {
                return $props.apps.length === 1;
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
            onChange={async (...eventArgs: any) => {
              generateStateOnChangeProp($state, [
                "fragmentSelect",
                "value"
              ]).apply(null, eventArgs);

              (async value => {
                const $steps = {};

                $steps["goToStatistics"] = true
                  ? (() => {
                      const actionArgs = {
                        destination: `/apps/${(() => {
                          try {
                            return value;
                          } catch (e) {
                            if (
                              e instanceof TypeError ||
                              e?.plasmicType === "PlasmicUndefinedDataError"
                            ) {
                              return undefined;
                            }
                            throw e;
                          }
                        })()}/statistics`
                      };
                      return (({ destination }) => {
                        if (
                          typeof destination === "string" &&
                          destination.startsWith("#")
                        ) {
                          document
                            .getElementById(destination.substr(1))
                            .scrollIntoView({ behavior: "smooth" });
                        } else {
                          __nextRouter?.push(destination);
                        }
                      })?.apply(null, [actionArgs]);
                    })()
                  : undefined;
                if (
                  $steps["goToStatistics"] != null &&
                  typeof $steps["goToStatistics"] === "object" &&
                  typeof $steps["goToStatistics"].then === "function"
                ) {
                  $steps["goToStatistics"] = await $steps["goToStatistics"];
                }
              }).apply(null, eventArgs);
            }}
            onOpenChange={async (...eventArgs: any) => {
              generateStateOnChangeProp($state, [
                "fragmentSelect",
                "open"
              ]).apply(null, eventArgs);
            }}
            open={generateStateValueProp($state, ["fragmentSelect", "open"])}
            options={(() => {
              try {
                return $props.apps.map(item => ({
                  value: item.id,
                  label: item.name_fa
                }));
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
            triggerClassName={classNames("__wab_instance", sty.fragmentSelect)}
            value={generateStateValueProp($state, ["fragmentSelect", "value"])}
          />

          <div className={classNames(projectcss.all, sty.freeBox__ll30Q)} />

          <Stack__
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__vgQcc)}
          >
            <Icon12Icon
              className={classNames(projectcss.all, sty.svg__qVz2G)}
              role={"img"}
            />

            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__rv0VB
              )}
            >
              <React.Fragment>
                {(() => {
                  try {
                    return `${$props.user.name} ${$props.user.family}`;
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
      <div className={classNames(projectcss.all, sty.freeBox__ry92P)}>
        <Stack__
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__zu78Z)}
        >
          <Stack__
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__mHtax)}
          >
            <Menu
              active={(() => {
                try {
                  return $state.menu === "Statistics";
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
              className={classNames("__wab_instance", sty.menu__l1I1D)}
              iconWrapper={
                <Icon7Icon
                  className={classNames(projectcss.all, sty.svg__rmEGv)}
                  role={"img"}
                />
              }
              name={"\u0622\u0645\u0627\u0631"}
              onClick={async () => {
                const $steps = {};

                $steps["goToStatistics"] = true
                  ? (() => {
                      const actionArgs = {
                        destination: `/apps/${(() => {
                          try {
                            return $props.selectedApp;
                          } catch (e) {
                            if (
                              e instanceof TypeError ||
                              e?.plasmicType === "PlasmicUndefinedDataError"
                            ) {
                              return undefined;
                            }
                            throw e;
                          }
                        })()}/statistics`
                      };
                      return (({ destination }) => {
                        if (
                          typeof destination === "string" &&
                          destination.startsWith("#")
                        ) {
                          document
                            .getElementById(destination.substr(1))
                            .scrollIntoView({ behavior: "smooth" });
                        } else {
                          __nextRouter?.push(destination);
                        }
                      })?.apply(null, [actionArgs]);
                    })()
                  : undefined;
                if (
                  $steps["goToStatistics"] != null &&
                  typeof $steps["goToStatistics"] === "object" &&
                  typeof $steps["goToStatistics"].then === "function"
                ) {
                  $steps["goToStatistics"] = await $steps["goToStatistics"];
                }

                $steps["updateMenu"] = true
                  ? (() => {
                      const actionArgs = {
                        variable: {
                          objRoot: $state,
                          variablePath: ["menu"]
                        },
                        operation: 0,
                        value: "Statistics"
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

            <Menu
              active={(() => {
                try {
                  return $state.menu === "Transactions";
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
              className={classNames("__wab_instance", sty.menu__bjjDu)}
              iconWrapper={
                <Icon25Icon
                  className={classNames(projectcss.all, sty.svg__pGmD)}
                  role={"img"}
                />
              }
              name={
                "\u062a\u0631\u0627\u06a9\u0646\u0634\u200c\u0647\u0627\u06cc \u0645\u0627\u0644\u06cc"
              }
              onClick={async () => {
                const $steps = {};

                $steps["updateMenu2"] = true
                  ? (() => {
                      const actionArgs = {
                        destination: `/apps/${(() => {
                          try {
                            return $props.selectedApp;
                          } catch (e) {
                            if (
                              e instanceof TypeError ||
                              e?.plasmicType === "PlasmicUndefinedDataError"
                            ) {
                              return undefined;
                            }
                            throw e;
                          }
                        })()}/transactions`
                      };
                      return (({ destination }) => {
                        if (
                          typeof destination === "string" &&
                          destination.startsWith("#")
                        ) {
                          document
                            .getElementById(destination.substr(1))
                            .scrollIntoView({ behavior: "smooth" });
                        } else {
                          __nextRouter?.push(destination);
                        }
                      })?.apply(null, [actionArgs]);
                    })()
                  : undefined;
                if (
                  $steps["updateMenu2"] != null &&
                  typeof $steps["updateMenu2"] === "object" &&
                  typeof $steps["updateMenu2"].then === "function"
                ) {
                  $steps["updateMenu2"] = await $steps["updateMenu2"];
                }

                $steps["updateMenu"] = true
                  ? (() => {
                      const actionArgs = {
                        variable: {
                          objRoot: $state,
                          variablePath: ["menu"]
                        },
                        operation: 0,
                        value: "Transactions"
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

            <Menu
              active={(() => {
                try {
                  return $state.menu === "Setting";
                } catch (e) {
                  if (
                    e instanceof TypeError ||
                    e?.plasmicType === "PlasmicUndefinedDataError"
                  ) {
                    return "active";
                  }
                  throw e;
                }
              })()}
              className={classNames("__wab_instance", sty.menu__zOxdE)}
              iconWrapper={
                <Icon9Icon
                  className={classNames(projectcss.all, sty.svg__zn8Dl)}
                  role={"img"}
                />
              }
              name={"\u062a\u0646\u0638\u06cc\u0645\u0627\u062a"}
              onClick={async () => {
                const $steps = {};

                $steps["goToSettting"] = true
                  ? (() => {
                      const actionArgs = {
                        destination: `/apps/${(() => {
                          try {
                            return $props.selectedApp;
                          } catch (e) {
                            if (
                              e instanceof TypeError ||
                              e?.plasmicType === "PlasmicUndefinedDataError"
                            ) {
                              return undefined;
                            }
                            throw e;
                          }
                        })()}/setting`
                      };
                      return (({ destination }) => {
                        if (
                          typeof destination === "string" &&
                          destination.startsWith("#")
                        ) {
                          document
                            .getElementById(destination.substr(1))
                            .scrollIntoView({ behavior: "smooth" });
                        } else {
                          __nextRouter?.push(destination);
                        }
                      })?.apply(null, [actionArgs]);
                    })()
                  : undefined;
                if (
                  $steps["goToSettting"] != null &&
                  typeof $steps["goToSettting"] === "object" &&
                  typeof $steps["goToSettting"].then === "function"
                ) {
                  $steps["goToSettting"] = await $steps["goToSettting"];
                }

                $steps["updateMenu"] = true
                  ? (() => {
                      const actionArgs = {
                        variable: {
                          objRoot: $state,
                          variablePath: ["menu"]
                        },
                        operation: 0,
                        value: "Setting"
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
          </Stack__>
          <Stack__
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__hKovo)}
          >
            <Stack__
              as={PlasmicLink__}
              data-plasmic-name={"link"}
              data-plasmic-override={overrides.link}
              hasGap={true}
              className={classNames(projectcss.all, projectcss.a, sty.link)}
              component={Link}
              href={"https://t.me/amirhbeigi"}
              platform={"nextjs"}
              target={"_blank"}
            >
              <Icon13Icon
                className={classNames(projectcss.all, sty.svg__iLeQo)}
                role={"img"}
              />

              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___7EYhw
                )}
              >
                {"\u067e\u0634\u062a\u06cc\u0628\u0627\u0646\u06cc"}
              </div>
            </Stack__>
          </Stack__>
        </Stack__>
        <div className={classNames(projectcss.all, sty.freeBox___3B2E0)}>
          {renderPlasmicSlot({
            defaultContents: null,
            value: args.children
          })}
        </div>
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "fragmentSelect", "link"],
  fragmentSelect: ["fragmentSelect"],
  link: ["link"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  fragmentSelect: typeof Select;
  link: "a";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicLayout__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicLayout__VariantsArgs;
    args?: PlasmicLayout__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicLayout__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicLayout__ArgsType,
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
          internalArgPropNames: PlasmicLayout__ArgProps,
          internalVariantPropNames: PlasmicLayout__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicLayout__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicLayout";
  } else {
    func.displayName = `PlasmicLayout.${nodeName}`;
  }
  return func;
}

export const PlasmicLayout = Object.assign(
  // Top-level PlasmicLayout renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    fragmentSelect: makeNodeComponent("fragmentSelect"),
    link: makeNodeComponent("link"),

    // Metadata about props expected for PlasmicLayout
    internalVariantProps: PlasmicLayout__VariantProps,
    internalArgProps: PlasmicLayout__ArgProps
  }
);

export default PlasmicLayout;
/* prettier-ignore-end */
