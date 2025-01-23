// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: bE9NMB942w5e6uFrcCxfJN
// Component: S7QID4Zn_0WI

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

import HamdastProvider from "../../HamdastProvider"; // plasmic-import: KS8cTh0gsgPl/component
import Button from "../../Button"; // plasmic-import: _T6T2fNvkUfo/component
import HamdastAuth from "../../HamdastAuth"; // plasmic-import: 6gK09XfScFeD/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_paziresh_24_design_system_css from "../paziresh_24_design_system/plasmic.module.css"; // plasmic-import: 6HBcNwr8dz9LuS1Qe36xa5/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: bE9NMB942w5e6uFrcCxfJN/projectcss
import sty from "./PlasmicLanding.module.css"; // plasmic-import: S7QID4Zn_0WI/css

import Icon27Icon from "./icons/PlasmicIcon__Icon27"; // plasmic-import: 0E0-Td2sxrpd/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: VepSFu0Y3Pyk/icon
import Icon2Icon from "./icons/PlasmicIcon__Icon2"; // plasmic-import: CmW94FEF71d7/icon

createPlasmicElementProxy;

export type PlasmicLanding__VariantMembers = {};
export type PlasmicLanding__VariantsArgs = {};
type VariantPropType = keyof PlasmicLanding__VariantsArgs;
export const PlasmicLanding__VariantProps = new Array<VariantPropType>();

export type PlasmicLanding__ArgsType = {};
type ArgPropType = keyof PlasmicLanding__ArgsType;
export const PlasmicLanding__ArgProps = new Array<ArgPropType>();

export type PlasmicLanding__OverridesType = {
  root?: Flex__<"div">;
  hamdastProvider?: Flex__<typeof HamdastProvider>;
  svg?: Flex__<"svg">;
  hamdastAuth?: Flex__<typeof HamdastAuth>;
};

export interface DefaultLandingProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicLanding__RenderFunc(props: {
  variants: PlasmicLanding__VariantsArgs;
  args: PlasmicLanding__ArgsType;
  overrides: PlasmicLanding__OverridesType;
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

  const $globalActions = useGlobalActions?.();

  return (
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary" />
        <title key="title">{PlasmicLanding.pageMetadata.title}</title>
        <meta
          key="og:title"
          property="og:title"
          content={PlasmicLanding.pageMetadata.title}
        />
        <meta
          key="twitter:title"
          name="twitter:title"
          content={PlasmicLanding.pageMetadata.title}
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
            plasmic_paziresh_24_design_system_css.plasmic_tokens,
            sty.root
          )}
        >
          <HamdastProvider
            data-plasmic-name={"hamdastProvider"}
            data-plasmic-override={overrides.hamdastProvider}
            className={classNames("__wab_instance", sty.hamdastProvider)}
            clientKey={"liom"}
          >
            <div
              className={classNames(projectcss.all, sty.freeBox__pr2Qf)}
              dir={"rtl"}
            >
              <div className={classNames(projectcss.all, sty.freeBox__la0Sl)}>
                <Stack__
                  as={PlasmicLink__}
                  hasGap={true}
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    sty.link__ypiuh
                  )}
                  component={Link}
                  href={`/`}
                  platform={"nextjs"}
                >
                  <Icon27Icon
                    data-plasmic-name={"svg"}
                    data-plasmic-override={overrides.svg}
                    className={classNames(projectcss.all, sty.svg)}
                    role={"img"}
                  />

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__s4X6O
                    )}
                  >
                    {"\u0647\u0645\u062f\u0633\u062a"}
                  </div>
                </Stack__>
                <Stack__
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__rdoli)}
                >
                  <PlasmicLink__
                    className={classNames(
                      projectcss.all,
                      projectcss.a,
                      projectcss.__wab_text,
                      sty.link__uLgo0
                    )}
                    component={Link}
                    href={"https://developers.paziresh24.com/apps"}
                    platform={"nextjs"}
                    target={"_blank"}
                  >
                    {"\u0645\u0633\u062a\u0646\u062f\u0627\u062a"}
                  </PlasmicLink__>
                  <PlasmicLink__
                    className={classNames(
                      projectcss.all,
                      projectcss.a,
                      projectcss.__wab_text,
                      sty.link___0SG2
                    )}
                    component={Link}
                    href={`/integrations`}
                    platform={"nextjs"}
                  >
                    {"\u0627\u062f\u063a\u0627\u0645 \u0647\u0627"}
                  </PlasmicLink__>
                </Stack__>
                <Button
                  className={classNames("__wab_instance", sty.button___3EXjU)}
                  link={`/login`}
                  shape={"rounded"}
                  size={"compact"}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__sg2Xr
                    )}
                  >
                    {
                      "\u067e\u0646\u0644 \u062a\u0648\u0633\u0639\u0647 \u062f\u0647\u0646\u062f\u06af\u0627\u0646"
                    }
                  </div>
                </Button>
              </div>
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__wysfY)}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__dn4Ue
                  )}
                >
                  {
                    "\u062c\u0627\u06cc\u06cc \u06a9\u0647 \u0627\u06cc\u062f\u0647\u200c\u0647\u0627\u06cc \u0634\u0645\u0627 \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u062f \u0633\u0644\u0627\u0645\u062a \u0645\u06cc\u0644\u06cc\u0648\u0646\u200c\u0647\u0627 \u0646\u0641\u0631 \u0631\u0627 \u0645\u062a\u062d\u0648\u0644 \u06a9\u0646\u062f"
                  }
                </div>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__paAyx
                  )}
                >
                  {
                    "\u067e\u0630\u06cc\u0631\u0634\u06f2\u06f4 \u06cc\u06a9 \u0647\u062f\u0641 \u0645\u0647\u0645 \u062f\u0627\u0631\u062f: \u0628\u06cc\u0645\u0627\u0631\u0647\u0627 \u0628\u0647 \u062c\u0632 \u062f\u0631\u062f \u0628\u06cc\u0645\u0627\u0631\u06cc\u200c\u0634\u0627\u0646 \u0631\u0646\u062c \u062f\u06cc\u06af\u0631\u06cc \u062a\u062d\u0645\u0644 \u0646\u06a9\u0646\u0646\u062f. \u0627\u06af\u0631 \u0627\u06cc\u0646 \u0647\u062f\u0641 \u0628\u0631\u0627\u06cc \u0634\u0645\u0627 \u0647\u0645 \u0645\u0647\u0645 \u0627\u0633\u062a\u060c \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u06cc\u062f \u0627\u0628\u0632\u0627\u0631\u06a9 \u0628\u0646\u0648\u06cc\u0633\u06cc\u062f \u0648 \u067e\u0630\u06cc\u0631\u0634\u06f2\u06f4 \u0631\u0627 \u0628\u0647\u0628\u0648\u062f \u0628\u062f\u0647\u06cc\u062f."
                  }
                </div>
                <Stack__
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox___72XQz)}
                >
                  <Button
                    className={classNames("__wab_instance", sty.button__d2DuQ)}
                    link={`/login`}
                    shape={"rounded"}
                    size={"compact"}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__bqKvk
                      )}
                    >
                      {
                        "\u067e\u0646\u0644 \u062a\u0648\u0633\u0639\u0647 \u062f\u0647\u0646\u062f\u06af\u0627\u0646"
                      }
                    </div>
                  </Button>
                  <Button
                    className={classNames("__wab_instance", sty.button__hygpo)}
                    color={"softSand"}
                    link={"https://developers.paziresh24.com/apps"}
                    shape={"rounded"}
                    size={"compact"}
                    target={true}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__mYFyr
                      )}
                    >
                      {"\u0645\u0633\u062a\u0646\u062f\u0627\u062a"}
                    </div>
                  </Button>
                </Stack__>
              </Stack__>
              {false ? (
                <HamdastAuth
                  data-plasmic-name={"hamdastAuth"}
                  data-plasmic-override={overrides.hamdastAuth}
                  className={classNames("__wab_instance", sty.hamdastAuth)}
                  onSuccess={async authCode => {
                    const $steps = {};

                    $steps["invokeGlobalAction"] = true
                      ? (() => {
                          const actionArgs = {
                            args: [
                              undefined,
                              "\u062e\u0648\u0634 \u0622\u0645\u062f\u06cc\u062f"
                            ]
                          };
                          return $globalActions["Fragment.showToast"]?.apply(
                            null,
                            [...actionArgs.args]
                          );
                        })()
                      : undefined;
                    if (
                      $steps["invokeGlobalAction"] != null &&
                      typeof $steps["invokeGlobalAction"] === "object" &&
                      typeof $steps["invokeGlobalAction"].then === "function"
                    ) {
                      $steps["invokeGlobalAction"] = await $steps[
                        "invokeGlobalAction"
                      ];
                    }
                  }}
                  trigger={true}
                >
                  <Button
                    className={classNames("__wab_instance", sty.button__vyqEm)}
                  />
                </HamdastAuth>
              ) : null}
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox___2Azhv)}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text___2QaW7
                  )}
                >
                  {
                    "\u067e\u0630\u06cc\u0631\u0634\u06f2\u06f4\u060c \u062f\u0631 \u062d\u0627\u0644 \u06af\u0633\u062a\u0631\u0634 \u0648 \u0634\u0645\u0627 \u0647\u0645 \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u06cc\u062f \u0628\u062e\u0634\u06cc \u0627\u0632 \u0627\u06cc\u0646 \u0631\u0634\u062f \u0628\u0627\u0634\u06cc\u062f"
                  }
                </div>
                <div className={classNames(projectcss.all, sty.freeBox__igNzo)}>
                  <div
                    className={classNames(projectcss.all, sty.freeBox__eyBrG)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__vtl0P
                      )}
                    >
                      {"+\u06f1\u06f7 \u0645\u06cc\u0644\u06cc\u0648\u0646"}
                    </div>
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__wsR
                      )}
                    >
                      {
                        "\u06a9\u0627\u0631\u0628\u0631 \u067e\u0630\u06cc\u0631\u0634\u06f2\u06f4"
                      }
                    </div>
                  </div>
                  <div
                    className={classNames(projectcss.all, sty.freeBox__pUqY)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text___7Er3
                      )}
                    >
                      {"+\u06f3\u06f4\u06f0 \u0647\u0632\u0627\u0631"}
                    </div>
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__sGqv8
                      )}
                    >
                      {
                        "\u0633\u0631\u0648\u06cc\u0633 \u062f\u0647\u0646\u062f\u0647 \u067e\u0630\u06cc\u0631\u0634\u06f2\u06f4"
                      }
                    </div>
                  </div>
                </div>
              </Stack__>
              <div className={classNames(projectcss.all, sty.freeBox__hbzZs)}>
                <div className={classNames(projectcss.all, sty.freeBox__trY8L)}>
                  <PlasmicImg__
                    alt={""}
                    className={classNames(sty.img___5K09F)}
                    displayHeight={"auto"}
                    displayMaxHeight={"none"}
                    displayMaxWidth={"100%"}
                    displayMinHeight={"0"}
                    displayMinWidth={"0"}
                    displayWidth={"300px"}
                    loading={"lazy"}
                    src={{
                      src: "/plasmic/hamdast/images/frame73Png.png",
                      fullWidth: 1349,
                      fullHeight: 1253,
                      aspectRatio: undefined
                    }}
                  />
                </div>
                <Stack__
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox___93M3A)}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__anXZ
                    )}
                  >
                    {"\u0627\u062d\u0631\u0627\u0632 \u0647\u0648\u06cc\u062a"}
                  </div>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__mEqLi
                    )}
                  >
                    {
                      "\u0641\u0631\u0627\u06cc\u0646\u062f \u0627\u062d\u0631\u0627\u0632 \u0647\u0648\u06cc\u062a \u06a9\u0627\u0631\u0628\u0631\u0627\u0646 \u0631\u0627 \u0628\u0647 \u0633\u0627\u062f\u0647\u200c\u062a\u0631\u06cc\u0646 \u0634\u06a9\u0644 \u062f\u0631 \u0627\u067e\u0644\u06cc\u06a9\u06cc\u0634\u0646 \u062e\u0648\u062f \u067e\u06cc\u0627\u062f\u0647\u200c\u0633\u0627\u0632\u06cc \u06a9\u0646\u06cc\u062f. \u0627\u06cc\u0646 \u0627\u0628\u0632\u0627\u0631 \u0628\u0647 \u0634\u0645\u0627 \u0627\u0645\u06a9\u0627\u0646 \u0645\u06cc\u200c\u062f\u0647\u062f \u062a\u0627 \u0628\u062f\u0648\u0646 \u0646\u06cc\u0627\u0632 \u0628\u0647 \u0635\u0631\u0641 \u0632\u0645\u0627\u0646 \u0628\u0631\u0627\u06cc \u062a\u0648\u0633\u0639\u0647 \u0632\u06cc\u0631\u0633\u0627\u062e\u062a\u200c\u0647\u0627\u06cc \u067e\u06cc\u0686\u06cc\u062f\u0647\u060c \u0648\u0631\u0648\u062f \u0627\u06cc\u0645\u0646 \u0648 \u0633\u0631\u06cc\u0639 \u06a9\u0627\u0631\u0628\u0631\u0627\u0646 \u0631\u0627 \u0641\u0631\u0627\u0647\u0645 \u06a9\u0646\u06cc\u062f."
                    }
                  </div>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__vGeZv
                    )}
                  >
                    <React.Fragment>
                      <React.Fragment>{""}</React.Fragment>
                      {
                        <ul
                          className={classNames(
                            projectcss.all,
                            projectcss.ul,
                            sty.ul__p5Q6R
                          )}
                        >
                          <li
                            className={classNames(
                              projectcss.all,
                              projectcss.li,
                              projectcss.__wab_text,
                              sty.li___2TjQb
                            )}
                          >
                            {
                              "\u0637\u0631\u0627\u062d\u06cc \u0634\u062f\u0647 \u0628\u0631\u0627\u06cc \u0627\u0641\u0632\u0627\u06cc\u0634 \u0627\u0645\u0646\u06cc\u062a \u0648 \u0627\u0639\u062a\u0645\u0627\u062f"
                            }
                          </li>
                          <li
                            className={classNames(
                              projectcss.all,
                              projectcss.li,
                              projectcss.__wab_text,
                              sty.li__co6QQ
                            )}
                          >
                            {
                              "\u0633\u0627\u0632\u06af\u0627\u0631 \u0628\u0627 \u0646\u06cc\u0627\u0632\u0647\u0627\u06cc \u0645\u062e\u062a\u0644\u0641 \u0627\u067e\u0644\u06cc\u06a9\u06cc\u0634\u0646\u200c\u0647\u0627"
                            }
                          </li>
                          <li
                            className={classNames(
                              projectcss.all,
                              projectcss.li,
                              projectcss.__wab_text,
                              sty.li__cKnuh
                            )}
                          >
                            {
                              "\u0642\u0627\u0628\u0644\u06cc\u062a \u067e\u06cc\u0627\u062f\u0647\u200c\u0633\u0627\u0632\u06cc \u0622\u0633\u0627\u0646 \u0648 \u0633\u0631\u06cc\u0639"
                            }
                          </li>
                        </ul>
                      }
                      <React.Fragment>{""}</React.Fragment>
                    </React.Fragment>
                  </div>
                </Stack__>
              </div>
              <div className={classNames(projectcss.all, sty.freeBox___9MrEt)}>
                <Stack__
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__sj5Bn)}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__cAhBt
                    )}
                  >
                    {"\u067e\u0631\u062f\u0627\u062e\u062a"}
                  </div>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__cSw4S
                    )}
                  >
                    {
                      "\u0641\u0631\u0627\u06cc\u0646\u062f \u067e\u0631\u062f\u0627\u062e\u062a \u062f\u0631 \u0627\u067e\u0644\u06cc\u06a9\u06cc\u0634\u0646 \u062e\u0648\u062f \u0631\u0627 \u0628\u0627 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 \u0627\u0628\u0632\u0627\u0631 \u067e\u0631\u062f\u0627\u062e\u062a \u067e\u0630\u06cc\u0631\u0634\u06f2\u06f4 \u0633\u0627\u062f\u0647 \u0648 \u06cc\u06a9\u067e\u0627\u0631\u0686\u0647 \u06a9\u0646\u06cc\u062f. \u0627\u06cc\u0646 \u0631\u0627\u0647\u06a9\u0627\u0631 \u0628\u0647 \u0634\u0645\u0627 \u0627\u0645\u06a9\u0627\u0646 \u0645\u06cc\u200c\u062f\u0647\u062f \u062a\u0627 \u062a\u062c\u0631\u0628\u0647\u200c\u0627\u06cc \u0631\u0648\u0627\u0646 \u0648 \u0627\u0645\u0646 \u0628\u0631\u0627\u06cc \u06a9\u0627\u0631\u0628\u0631\u0627\u0646 \u062e\u0648\u062f \u0641\u0631\u0627\u0647\u0645 \u06a9\u0646\u06cc\u062f \u0648 \u0645\u062f\u06cc\u0631\u06cc\u062a \u062a\u0631\u0627\u06a9\u0646\u0634\u200c\u0647\u0627 \u0631\u0627 \u0628\u062f\u0648\u0646 \u062f\u063a\u062f\u063a\u0647 \u0627\u0646\u062c\u0627\u0645 \u062f\u0647\u06cc\u062f."
                    }
                  </div>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__b7Aqu
                    )}
                  >
                    <React.Fragment>
                      <React.Fragment>{""}</React.Fragment>
                      {
                        <ul
                          className={classNames(
                            projectcss.all,
                            projectcss.ul,
                            sty.ul__tKiTf
                          )}
                        >
                          <li
                            className={classNames(
                              projectcss.all,
                              projectcss.li,
                              projectcss.__wab_text,
                              sty.li__tylYb
                            )}
                          >
                            {
                              "\u067e\u0634\u062a\u06cc\u0628\u0627\u0646\u06cc \u0627\u0632 \u067e\u0631\u062f\u0627\u062e\u062a\u200c\u0647\u0627\u06cc \u0622\u0646\u0644\u0627\u06cc\u0646 \u0648 \u06a9\u06cc\u0641 \u067e\u0648\u0644"
                            }
                          </li>
                          <li
                            className={classNames(
                              projectcss.all,
                              projectcss.li,
                              projectcss.__wab_text,
                              sty.li__zh0Ip
                            )}
                          >
                            {
                              "\u06af\u0632\u0627\u0631\u0634\u200c\u06af\u06cc\u0631\u06cc \u06a9\u0627\u0645\u0644 \u0627\u0632 \u0648\u0636\u0639\u06cc\u062a \u062a\u0631\u0627\u06a9\u0646\u0634\u200c\u0647\u0627"
                            }
                          </li>
                          <li
                            className={classNames(
                              projectcss.all,
                              projectcss.li,
                              projectcss.__wab_text,
                              sty.li__dr2WC
                            )}
                          >
                            {
                              "\u067e\u06cc\u0627\u062f\u0647\u200c\u0633\u0627\u0632\u06cc \u0622\u0633\u0627\u0646 \u062f\u0631 \u0686\u0646\u062f \u0645\u0631\u062d\u0644\u0647"
                            }
                          </li>
                        </ul>
                      }
                      <React.Fragment>{""}</React.Fragment>
                    </React.Fragment>
                  </div>
                </Stack__>
                <div className={classNames(projectcss.all, sty.freeBox__yfahr)}>
                  <PlasmicImg__
                    alt={""}
                    className={classNames(sty.img___4Kkhg)}
                    displayHeight={"auto"}
                    displayMaxHeight={"none"}
                    displayMaxWidth={"100%"}
                    displayMinHeight={"0"}
                    displayMinWidth={"0"}
                    displayWidth={"300px"}
                    loading={"lazy"}
                    src={{
                      src: "/plasmic/hamdast/images/frame74Png.png",
                      fullWidth: 1349,
                      fullHeight: 1253,
                      aspectRatio: undefined
                    }}
                  />
                </div>
              </div>
            </div>
          </HamdastProvider>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "hamdastProvider", "svg", "hamdastAuth"],
  hamdastProvider: ["hamdastProvider", "svg", "hamdastAuth"],
  svg: ["svg"],
  hamdastAuth: ["hamdastAuth"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  hamdastProvider: typeof HamdastProvider;
  svg: "svg";
  hamdastAuth: typeof HamdastAuth;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicLanding__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicLanding__VariantsArgs;
    args?: PlasmicLanding__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicLanding__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicLanding__ArgsType,
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
          internalArgPropNames: PlasmicLanding__ArgProps,
          internalVariantPropNames: PlasmicLanding__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicLanding__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicLanding";
  } else {
    func.displayName = `PlasmicLanding.${nodeName}`;
  }
  return func;
}

export const PlasmicLanding = Object.assign(
  // Top-level PlasmicLanding renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    hamdastProvider: makeNodeComponent("hamdastProvider"),
    svg: makeNodeComponent("svg"),
    hamdastAuth: makeNodeComponent("hamdastAuth"),

    // Metadata about props expected for PlasmicLanding
    internalVariantProps: PlasmicLanding__VariantProps,
    internalArgProps: PlasmicLanding__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "همدست - توسعه و یکپارچه سازی کسب و کار با پذیرش۲۴",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicLanding;
/* prettier-ignore-end */
