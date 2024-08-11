// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: bE9NMB942w5e6uFrcCxfJN
// Component: LnjnULqptihc

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
import { Reveal } from "@plasmicpkgs/react-awesome-reveal";
import Button from "../../Button"; // plasmic-import: _T6T2fNvkUfo/component
import { Textarea } from "@/fragment/components/textarea"; // plasmic-import: L1esw-miSXdR/codeComponent
import { Input } from "@/fragment/components/input"; // plasmic-import: AWE69UKwmIyg/codeComponent

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: bE9NMB942w5e6uFrcCxfJN/projectcss
import sty from "./PlasmicSetAppIcon.module.css"; // plasmic-import: LnjnULqptihc/css

import Icon12Icon from "./icons/PlasmicIcon__Icon12"; // plasmic-import: uNpsRe8HBlEO/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: VepSFu0Y3Pyk/icon
import Icon2Icon from "./icons/PlasmicIcon__Icon2"; // plasmic-import: CmW94FEF71d7/icon

createPlasmicElementProxy;

export type PlasmicSetAppIcon__VariantMembers = {};
export type PlasmicSetAppIcon__VariantsArgs = {};
type VariantPropType = keyof PlasmicSetAppIcon__VariantsArgs;
export const PlasmicSetAppIcon__VariantProps = new Array<VariantPropType>();

export type PlasmicSetAppIcon__ArgsType = {};
type ArgPropType = keyof PlasmicSetAppIcon__ArgsType;
export const PlasmicSetAppIcon__ArgProps = new Array<ArgPropType>();

export type PlasmicSetAppIcon__OverridesType = {
  root?: Flex__<"div">;
  embedHtml?: Flex__<typeof Embed>;
  authProvider?: Flex__<typeof AuthProvider>;
  svg?: Flex__<"svg">;
  img?: Flex__<typeof PlasmicImg__>;
  fragmentTextarea?: Flex__<typeof Textarea>;
  fragmentInput?: Flex__<typeof Input>;
};

export interface DefaultSetAppIconProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicSetAppIcon__RenderFunc(props: {
  variants: PlasmicSetAppIcon__VariantsArgs;
  args: PlasmicSetAppIcon__ArgsType;
  overrides: PlasmicSetAppIcon__OverridesType;
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
        path: "type",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => "svg"
      },
      {
        path: "loading",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => false
      },
      {
        path: "fragmentTextarea.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => ""
      },
      {
        path: "fragmentInput.value",
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
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary" />
        <title key="title">{PlasmicSetAppIcon.pageMetadata.title}</title>
        <meta
          key="og:title"
          property="og:title"
          content={PlasmicSetAppIcon.pageMetadata.title}
        />
        <meta
          key="twitter:title"
          name="twitter:title"
          content={PlasmicSetAppIcon.pageMetadata.title}
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
            plasmic_antd_5_hostless_css.plasmic_tokens,
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
            <div className={classNames(projectcss.all, sty.freeBox__oDkc)}>
              <Reveal
                className={classNames("__wab_instance", sty.reveal__huCx)}
                direction={"down"}
                triggerOnce={true}
              >
                <div className={classNames(projectcss.all, sty.freeBox__nn9Fq)}>
                  <Stack__
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__lhx9R)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__oudMe
                      )}
                    >
                      {"\u0647\u0645\u200c\u062f\u0633\u062a"}
                    </div>
                    <div
                      className={classNames(projectcss.all, sty.freeBox__bjTu8)}
                    />

                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__dFss8
                      )}
                    >
                      {
                        "\u062a\u0648\u0633\u0639\u0647 \u062f\u0647\u0646\u062f\u0647"
                      }
                    </div>
                  </Stack__>
                  <Stack__
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__zf7K5)}
                  >
                    <Stack__
                      as={"div"}
                      hasGap={true}
                      className={classNames(projectcss.all, sty.freeBox__m7K13)}
                    >
                      <Icon12Icon
                        data-plasmic-name={"svg"}
                        data-plasmic-override={overrides.svg}
                        className={classNames(projectcss.all, sty.svg)}
                        role={"img"}
                      />

                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__lo3Nu
                        )}
                      >
                        <React.Fragment>
                          {(() => {
                            try {
                              return (() => {
                                if (!$state.authProvider.user?.id) {
                                  return `کاربر بی نام`;
                                }
                                return `${$state.authProvider.user.name} ${$state.authProvider.user.family}`;
                              })();
                            } catch (e) {
                              if (
                                e instanceof TypeError ||
                                e?.plasmicType === "PlasmicUndefinedDataError"
                              ) {
                                return "\u0622\u06cc\u062f\u0627 \u0627\u0631\u062f\u0627\u0646\u06cc";
                              }
                              throw e;
                            }
                          })()}
                        </React.Fragment>
                      </div>
                    </Stack__>
                  </Stack__>
                </div>
              </Reveal>
              <Reveal
                className={classNames("__wab_instance", sty.reveal__dgNkb)}
                delay={1000}
                effect={"fade"}
                triggerOnce={true}
              >
                <div className={classNames(projectcss.all, sty.freeBox__oGhml)}>
                  <div
                    className={classNames(projectcss.all, sty.freeBox__z7E67)}
                  >
                    <div
                      className={classNames(projectcss.all, sty.freeBox__ndt7B)}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text___2CTm
                        )}
                      >
                        {
                          "\u062a\u0646\u0638\u06cc\u0645 \u0622\u06cc\u06a9\u0648\u0646 \u0627\u064e\u0628\u0632\u0627\u0631\u06a9"
                        }
                      </div>
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__t8Pmp
                        )}
                      >
                        {
                          "\u0622\u06cc\u06a9\u0648\u0646 \u062f\u0631 \u067e\u0631\u062a\u0627\u0644 \u06a9\u0627\u0631\u0628\u0631 \u0646\u0645\u0627\u06cc\u0634 \u062f\u0627\u062f\u0647 \u062e\u0648\u0627\u0647\u062f \u0634\u062f."
                        }
                      </div>
                      <div
                        className={classNames(
                          projectcss.all,
                          sty.freeBox__zYbrP
                        )}
                      >
                        <PlasmicImg__
                          data-plasmic-name={"img"}
                          data-plasmic-override={overrides.img}
                          alt={""}
                          className={classNames(sty.img)}
                          displayHeight={"130px"}
                          displayMaxHeight={"none"}
                          displayMaxWidth={"100%"}
                          displayMinHeight={"0"}
                          displayMinWidth={"0"}
                          displayWidth={"130px"}
                          loading={"lazy"}
                          src={
                            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJEFvgLeuL4UNrmCXJl5q6S535wNth0WF5dQ&s"
                          }
                        />

                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__cxWbI
                          )}
                        >
                          <React.Fragment>
                            {(() => {
                              try {
                                return $state.authProvider.apps.find(
                                  item => item.id === $ctx.params.id
                                ).name_fa;
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
                      </div>
                    </div>
                    <Stack__
                      as={"div"}
                      hasGap={true}
                      className={classNames(projectcss.all, sty.freeBox__knqWw)}
                    >
                      <Stack__
                        as={"div"}
                        hasGap={true}
                        className={classNames(
                          projectcss.all,
                          sty.freeBox__hQk3T
                        )}
                      >
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__mRvnI
                          )}
                        >
                          {
                            "\u0622\u06cc\u06a9\u0648\u0646 \u0627\u0628\u0632\u0627\u0631\u06a9 \u0628\u0627\u06cc\u062f \u0627\u0628\u0639\u0627\u062f \u0645\u0631\u0628\u0639\u06cc \u062f\u0631 \u0627\u0646\u062f\u0627\u0632\u0647 24 * 24 \u062f\u0627\u0634\u062a\u0647 \u0628\u0627\u0634\u062f. \u0622\u06cc\u06a9\u0648\u0646 \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u062f SVG \u06cc\u0627 .png \u0628\u0627\u0634\u062f."
                          }
                        </div>
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__xq3Bq
                          )}
                        >
                          {
                            "\u067e\u06cc\u0634\u0646\u0647\u0627\u062f \u0645\u06cc\u0634\u0648\u062f \u0622\u06cc\u06a9\u0648\u0646 SVG \u0628\u0627\u0634\u062f \u0632\u06cc\u0631\u0627 \u062a\u062c\u0631\u0628\u0647 \u0644\u0648\u062f \u0633\u0631\u06cc\u0639 \u062a\u0631 \u0628\u0631\u0627\u06cc \u06a9\u0627\u0631\u0628\u0631 \u062e\u0648\u0627\u0647\u062f \u062f\u0627\u0634\u062a."
                          }
                        </div>
                      </Stack__>
                      <Stack__
                        as={"div"}
                        hasGap={true}
                        className={classNames(
                          projectcss.all,
                          sty.freeBox__elDx5
                        )}
                      >
                        <Button
                          className={classNames(
                            "__wab_instance",
                            sty.button__kAqAr
                          )}
                          color={(() => {
                            try {
                              return $state.type !== "svg" && "softSand";
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
                          onClick={async event => {
                            const $steps = {};

                            $steps["updateType"] = true
                              ? (() => {
                                  const actionArgs = {
                                    variable: {
                                      objRoot: $state,
                                      variablePath: ["type"]
                                    },
                                    operation: 0,
                                    value: "svg"
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
                              $steps["updateType"] != null &&
                              typeof $steps["updateType"] === "object" &&
                              typeof $steps["updateType"].then === "function"
                            ) {
                              $steps["updateType"] = await $steps["updateType"];
                            }
                          }}
                          shape={"rounded"}
                          size={"minimal"}
                        >
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__fjZyl
                            )}
                          >
                            {"SVG"}
                          </div>
                        </Button>
                        <Button
                          className={classNames(
                            "__wab_instance",
                            sty.button___6S0D
                          )}
                          color={(() => {
                            try {
                              return $state.type !== "png" && "softSand";
                            } catch (e) {
                              if (
                                e instanceof TypeError ||
                                e?.plasmicType === "PlasmicUndefinedDataError"
                              ) {
                                return "softSand";
                              }
                              throw e;
                            }
                          })()}
                          onClick={async event => {
                            const $steps = {};

                            $steps["updateType"] = true
                              ? (() => {
                                  const actionArgs = {
                                    variable: {
                                      objRoot: $state,
                                      variablePath: ["type"]
                                    },
                                    operation: 0,
                                    value: "png"
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
                              $steps["updateType"] != null &&
                              typeof $steps["updateType"] === "object" &&
                              typeof $steps["updateType"].then === "function"
                            ) {
                              $steps["updateType"] = await $steps["updateType"];
                            }
                          }}
                          shape={"rounded"}
                          size={"minimal"}
                        >
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__kMypk
                            )}
                          >
                            {".png"}
                          </div>
                        </Button>
                      </Stack__>
                      {(() => {
                        try {
                          return $state.type === "svg";
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
                        <Textarea
                          data-plasmic-name={"fragmentTextarea"}
                          data-plasmic-override={overrides.fragmentTextarea}
                          attributes={{ dir: "ltr" }}
                          className={classNames(
                            "__wab_instance",
                            sty.fragmentTextarea
                          )}
                          disabled={false}
                          onChange={generateStateOnChangeProp($state, [
                            "fragmentTextarea",
                            "value"
                          ])}
                          placeholder={
                            '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2.27 21.7s9.87-3.5 12.73-6.36a4.5 4.5 0 0 0-6.36-6.37C5.77 11.84 2.27 ...'
                          }
                          value={generateStateValueProp($state, [
                            "fragmentTextarea",
                            "value"
                          ])}
                        />
                      ) : null}
                      {(() => {
                        try {
                          return $state.type === "png";
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
                        <Stack__
                          as={"div"}
                          hasGap={true}
                          className={classNames(
                            projectcss.all,
                            sty.freeBox__iPiSo
                          )}
                        >
                          <div
                            className={classNames(
                              projectcss.all,
                              sty.freeBox__ws5I6
                            )}
                          >
                            <Input
                              data-plasmic-name={"fragmentInput"}
                              data-plasmic-override={overrides.fragmentInput}
                              accept={"image/png"}
                              className={classNames(
                                "__wab_instance",
                                sty.fragmentInput
                              )}
                              multiple={false}
                              onChange={generateStateOnChangeProp($state, [
                                "fragmentInput",
                                "value"
                              ])}
                              type={"file"}
                              value={generateStateValueProp($state, [
                                "fragmentInput",
                                "value"
                              ])}
                            />
                          </div>
                        </Stack__>
                      ) : null}
                      <Button
                        className={classNames(
                          "__wab_instance",
                          sty.button__a2Eg0
                        )}
                        isDisabled={(() => {
                          try {
                            return $state.loading;
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
                      >
                        <React.Fragment>
                          {(() => {
                            try {
                              return $state.loading
                                ? "صبر کنید..."
                                : "مرحله بعد";
                            } catch (e) {
                              if (
                                e instanceof TypeError ||
                                e?.plasmicType === "PlasmicUndefinedDataError"
                              ) {
                                return "\u0633\u0627\u062e\u062a \u0627\u064e\u0628\u0632\u0627\u0631\u06a9";
                              }
                              throw e;
                            }
                          })()}
                        </React.Fragment>
                      </Button>
                    </Stack__>
                  </div>
                </div>
              </Reveal>
            </div>
          </AuthProvider>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "embedHtml",
    "authProvider",
    "svg",
    "img",
    "fragmentTextarea",
    "fragmentInput"
  ],
  embedHtml: ["embedHtml"],
  authProvider: [
    "authProvider",
    "svg",
    "img",
    "fragmentTextarea",
    "fragmentInput"
  ],
  svg: ["svg"],
  img: ["img"],
  fragmentTextarea: ["fragmentTextarea"],
  fragmentInput: ["fragmentInput"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  embedHtml: typeof Embed;
  authProvider: typeof AuthProvider;
  svg: "svg";
  img: typeof PlasmicImg__;
  fragmentTextarea: typeof Textarea;
  fragmentInput: typeof Input;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicSetAppIcon__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicSetAppIcon__VariantsArgs;
    args?: PlasmicSetAppIcon__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicSetAppIcon__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicSetAppIcon__ArgsType,
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
          internalArgPropNames: PlasmicSetAppIcon__ArgProps,
          internalVariantPropNames: PlasmicSetAppIcon__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicSetAppIcon__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSetAppIcon";
  } else {
    func.displayName = `PlasmicSetAppIcon.${nodeName}`;
  }
  return func;
}

export const PlasmicSetAppIcon = Object.assign(
  // Top-level PlasmicSetAppIcon renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    embedHtml: makeNodeComponent("embedHtml"),
    authProvider: makeNodeComponent("authProvider"),
    svg: makeNodeComponent("svg"),
    img: makeNodeComponent("img"),
    fragmentTextarea: makeNodeComponent("fragmentTextarea"),
    fragmentInput: makeNodeComponent("fragmentInput"),

    // Metadata about props expected for PlasmicSetAppIcon
    internalVariantProps: PlasmicSetAppIcon__VariantProps,
    internalArgProps: PlasmicSetAppIcon__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "ساخت اَبزارک جدید",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicSetAppIcon;
/* prettier-ignore-end */
