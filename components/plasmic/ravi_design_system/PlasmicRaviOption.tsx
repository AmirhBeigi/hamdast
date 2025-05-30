/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: pkMLinFwM9pzwv5S5KpiAu
// Component: 7P-1fooJZx0C

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

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_paziresh_24_design_system_css from "../paziresh_24_design_system/plasmic.module.css"; // plasmic-import: 6HBcNwr8dz9LuS1Qe36xa5/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: pkMLinFwM9pzwv5S5KpiAu/projectcss
import sty from "./PlasmicRaviOption.module.css"; // plasmic-import: 7P-1fooJZx0C/css

createPlasmicElementProxy;

export type PlasmicRaviOption__VariantMembers = {
  isSelected: "isSelected";
};
export type PlasmicRaviOption__VariantsArgs = {
  isSelected?: SingleBooleanChoiceArg<"isSelected">;
};
type VariantPropType = keyof PlasmicRaviOption__VariantsArgs;
export const PlasmicRaviOption__VariantProps = new Array<VariantPropType>(
  "isSelected"
);

export type PlasmicRaviOption__ArgsType = {
  title?: string;
  description?: string;
  onClick?: () => void;
};
type ArgPropType = keyof PlasmicRaviOption__ArgsType;
export const PlasmicRaviOption__ArgProps = new Array<ArgPropType>(
  "title",
  "description",
  "onClick"
);

export type PlasmicRaviOption__OverridesType = {
  root?: Flex__<"div">;
};

export interface DefaultRaviOptionProps {
  title?: string;
  description?: string;
  onClick?: () => void;
  isSelected?: SingleBooleanChoiceArg<"isSelected">;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicRaviOption__RenderFunc(props: {
  variants: PlasmicRaviOption__VariantsArgs;
  args: PlasmicRaviOption__ArgsType;
  overrides: PlasmicRaviOption__OverridesType;
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
        path: "isSelected",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.isSelected
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
        plasmic_paziresh_24_design_system_css.plasmic_tokens,
        sty.root,
        { [sty.rootisSelected]: hasVariant($state, "isSelected", "isSelected") }
      )}
      dir={"rtl"}
    >
      <div
        className={classNames(projectcss.all, sty.freeBox___35H2R, {
          [sty.freeBoxisSelected___35H2RDyHvN]: hasVariant(
            $state,
            "isSelected",
            "isSelected"
          )
        })}
        onClick={async event => {
          const $steps = {};

          $steps["runOnClick"] = true
            ? (() => {
                const actionArgs = { eventRef: $props["onClick"] };
                return (({ eventRef, args }) => {
                  return eventRef?.(...(args ?? []));
                })?.apply(null, [actionArgs]);
              })()
            : undefined;
          if (
            $steps["runOnClick"] != null &&
            typeof $steps["runOnClick"] === "object" &&
            typeof $steps["runOnClick"].then === "function"
          ) {
            $steps["runOnClick"] = await $steps["runOnClick"];
          }
        }}
      >
        <Stack__
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__pIWnL)}
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__vc4Ey
            )}
          >
            <React.Fragment>
              {(() => {
                try {
                  return $props.title;
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
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__jj6M
            )}
          >
            <React.Fragment>
              {(() => {
                try {
                  return $props.description;
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
        <div
          className={classNames(projectcss.all, sty.freeBox___1LPHq, {
            [sty.freeBoxisSelected___1LPHqDyHvN]: hasVariant(
              $state,
              "isSelected",
              "isSelected"
            )
          })}
        />
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicRaviOption__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicRaviOption__VariantsArgs;
    args?: PlasmicRaviOption__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicRaviOption__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicRaviOption__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
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
          internalArgPropNames: PlasmicRaviOption__ArgProps,
          internalVariantPropNames: PlasmicRaviOption__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicRaviOption__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicRaviOption";
  } else {
    func.displayName = `PlasmicRaviOption.${nodeName}`;
  }
  return func;
}

export const PlasmicRaviOption = Object.assign(
  // Top-level PlasmicRaviOption renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicRaviOption
    internalVariantProps: PlasmicRaviOption__VariantProps,
    internalArgProps: PlasmicRaviOption__ArgProps
  }
);

export default PlasmicRaviOption;
/* prettier-ignore-end */
