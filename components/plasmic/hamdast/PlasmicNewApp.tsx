// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: bE9NMB942w5e6uFrcCxfJN
// Component: IdTcu_EF7CVl

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

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic.module.css"; // plasmic-import: bE9NMB942w5e6uFrcCxfJN/projectcss
import sty from "./PlasmicNewApp.module.css"; // plasmic-import: IdTcu_EF7CVl/css

import Icon12Icon from "./icons/PlasmicIcon__Icon12"; // plasmic-import: uNpsRe8HBlEO/icon

createPlasmicElementProxy;

export type PlasmicNewApp__VariantMembers = {};
export type PlasmicNewApp__VariantsArgs = {};
type VariantPropType = keyof PlasmicNewApp__VariantsArgs;
export const PlasmicNewApp__VariantProps = new Array<VariantPropType>();

export type PlasmicNewApp__ArgsType = {};
type ArgPropType = keyof PlasmicNewApp__ArgsType;
export const PlasmicNewApp__ArgProps = new Array<ArgPropType>();

export type PlasmicNewApp__OverridesType = {
  root?: Flex__<"div">;
  embedHtml?: Flex__<typeof Embed>;
  authProvider?: Flex__<typeof AuthProvider>;
  svg?: Flex__<"svg">;
};

export interface DefaultNewAppProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicNewApp__RenderFunc(props: {
  variants: PlasmicNewApp__VariantsArgs;
  args: PlasmicNewApp__ArgsType;
  overrides: PlasmicNewApp__OverridesType;
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
        path: "menu",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) =>
          (() => {
            try {
              return $state.fetchData?.data?.[0]?.id;
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
        <title key="title">{PlasmicNewApp.pageMetadata.title}</title>
        <meta
          key="og:title"
          property="og:title"
          content={PlasmicNewApp.pageMetadata.title}
        />
        <meta
          key="twitter:title"
          name="twitter:title"
          content={PlasmicNewApp.pageMetadata.title}
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
            <div className={classNames(projectcss.all, sty.freeBox__myAsb)}>
              <div className={classNames(projectcss.all, sty.freeBox__tp9)}>
                <Stack__
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__vu16Q)}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text___6Vyei
                    )}
                  >
                    {"\u0647\u0645\u200c\u062f\u0633\u062a"}
                  </div>
                  <div
                    className={classNames(projectcss.all, sty.freeBox___8Whux)}
                  />

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text___95Me
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
                  className={classNames(projectcss.all, sty.freeBox__hthxa)}
                >
                  <Stack__
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__zS7UP)}
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
                        sty.text__pi2RT
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
              <div className={classNames(projectcss.all, sty.freeBox__feser)}>
                <div className={classNames(projectcss.all, sty.freeBox__rypiP)}>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__onVxL
                    )}
                  >
                    {"\u0628\u0632\u0648\u062f\u06cc ..."}
                  </div>
                </div>
              </div>
            </div>
          </AuthProvider>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "embedHtml", "authProvider", "svg"],
  embedHtml: ["embedHtml"],
  authProvider: ["authProvider", "svg"],
  svg: ["svg"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  embedHtml: typeof Embed;
  authProvider: typeof AuthProvider;
  svg: "svg";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicNewApp__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicNewApp__VariantsArgs;
    args?: PlasmicNewApp__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicNewApp__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicNewApp__ArgsType,
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
          internalArgPropNames: PlasmicNewApp__ArgProps,
          internalVariantPropNames: PlasmicNewApp__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicNewApp__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicNewApp";
  } else {
    func.displayName = `PlasmicNewApp.${nodeName}`;
  }
  return func;
}

export const PlasmicNewApp = Object.assign(
  // Top-level PlasmicNewApp renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    embedHtml: makeNodeComponent("embedHtml"),
    authProvider: makeNodeComponent("authProvider"),
    svg: makeNodeComponent("svg"),

    // Metadata about props expected for PlasmicNewApp
    internalVariantProps: PlasmicNewApp__VariantProps,
    internalArgProps: PlasmicNewApp__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "ساخت اَبزارک جدید",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicNewApp;
/* prettier-ignore-end */
