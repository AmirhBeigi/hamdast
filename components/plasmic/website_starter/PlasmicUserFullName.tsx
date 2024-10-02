// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 7SNMkB8UMukVgcWJYokeAQ
// Component: kplG0PgU22ci

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

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: 7SNMkB8UMukVgcWJYokeAQ/projectcss
import sty from "./PlasmicUserFullName.module.css"; // plasmic-import: kplG0PgU22ci/css

createPlasmicElementProxy;

export type PlasmicUserFullName__VariantMembers = {};
export type PlasmicUserFullName__VariantsArgs = {};
type VariantPropType = keyof PlasmicUserFullName__VariantsArgs;
export const PlasmicUserFullName__VariantProps = new Array<VariantPropType>();

export type PlasmicUserFullName__ArgsType = {};
type ArgPropType = keyof PlasmicUserFullName__ArgsType;
export const PlasmicUserFullName__ArgProps = new Array<ArgPropType>();

export type PlasmicUserFullName__OverridesType = {
  root?: Flex__<"div">;
  httpRestApiFetcher?: Flex__<typeof DataFetcher>;
  name?: Flex__<"div">;
};

export interface DefaultUserFullNameProps {
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicUserFullName__RenderFunc(props: {
  variants: PlasmicUserFullName__VariantsArgs;
  args: PlasmicUserFullName__ArgsType;
  overrides: PlasmicUserFullName__OverridesType;
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
        plasmic_antd_5_hostless_css.plasmic_tokens,
        plasmic_plasmic_rich_components_css.plasmic_tokens,
        sty.root
      )}
    >
      <DataFetcher
        data-plasmic-name={"httpRestApiFetcher"}
        data-plasmic-override={overrides.httpRestApiFetcher}
        className={classNames("__wab_instance", sty.httpRestApiFetcher)}
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
        loadingDisplay={
          <DataCtxReader__>{$ctx => "Loading..."}</DataCtxReader__>
        }
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
            <div
              data-plasmic-name={"name"}
              data-plasmic-override={overrides.name}
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.name
              )}
              dir={"rtl"}
            >
              <React.Fragment>
                {(() => {
                  try {
                    return `${$ctx.fetchedData.list[0].first_name} ${$ctx.fetchedData.list[0].last_name}`;
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
          )}
        </DataCtxReader__>
      </DataFetcher>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "httpRestApiFetcher", "name"],
  httpRestApiFetcher: ["httpRestApiFetcher", "name"],
  name: ["name"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  httpRestApiFetcher: typeof DataFetcher;
  name: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicUserFullName__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicUserFullName__VariantsArgs;
    args?: PlasmicUserFullName__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicUserFullName__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicUserFullName__ArgsType,
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
          internalArgPropNames: PlasmicUserFullName__ArgProps,
          internalVariantPropNames: PlasmicUserFullName__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicUserFullName__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicUserFullName";
  } else {
    func.displayName = `PlasmicUserFullName.${nodeName}`;
  }
  return func;
}

export const PlasmicUserFullName = Object.assign(
  // Top-level PlasmicUserFullName renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    httpRestApiFetcher: makeNodeComponent("httpRestApiFetcher"),
    _name: makeNodeComponent("name"),

    // Metadata about props expected for PlasmicUserFullName
    internalVariantProps: PlasmicUserFullName__VariantProps,
    internalArgProps: PlasmicUserFullName__ArgProps
  }
);

export default PlasmicUserFullName;
/* prettier-ignore-end */
