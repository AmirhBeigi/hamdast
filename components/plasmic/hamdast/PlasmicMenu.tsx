// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: bE9NMB942w5e6uFrcCxfJN
// Component: 73TqujunaOu5

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

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: bE9NMB942w5e6uFrcCxfJN/projectcss
import sty from "./PlasmicMenu.module.css"; // plasmic-import: 73TqujunaOu5/css

import Icon7Icon from "./icons/PlasmicIcon__Icon7"; // plasmic-import: 1XPNabWn6mUI/icon

createPlasmicElementProxy;

export type PlasmicMenu__VariantMembers = {
  active: "active";
  compact: "compact";
  disabled: "disabled";
};
export type PlasmicMenu__VariantsArgs = {
  active?: SingleBooleanChoiceArg<"active">;
  compact?: SingleBooleanChoiceArg<"compact">;
  disabled?: SingleBooleanChoiceArg<"disabled">;
};
type VariantPropType = keyof PlasmicMenu__VariantsArgs;
export const PlasmicMenu__VariantProps = new Array<VariantPropType>(
  "active",
  "compact",
  "disabled"
);

export type PlasmicMenu__ArgsType = {
  iconWrapper?: React.ReactNode;
  name?: string;
  icon?: boolean;
  onClick?: () => void;
};
type ArgPropType = keyof PlasmicMenu__ArgsType;
export const PlasmicMenu__ArgProps = new Array<ArgPropType>(
  "iconWrapper",
  "name",
  "icon",
  "onClick"
);

export type PlasmicMenu__OverridesType = {
  root?: Flex__<"div">;
  text?: Flex__<"div">;
};

export interface DefaultMenuProps {
  iconWrapper?: React.ReactNode;
  name?: string;
  icon?: boolean;
  onClick?: () => void;
  active?: SingleBooleanChoiceArg<"active">;
  compact?: SingleBooleanChoiceArg<"compact">;
  disabled?: SingleBooleanChoiceArg<"disabled">;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicMenu__RenderFunc(props: {
  variants: PlasmicMenu__VariantsArgs;
  args: PlasmicMenu__ArgsType;
  overrides: PlasmicMenu__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {
          icon: true
        },
        props.args
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
        path: "active",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.active
      },
      {
        path: "compact",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.compact
      },
      {
        path: "disabled",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.disabled
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
    <Stack__
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        sty.root,
        {
          [sty.rootactive]: hasVariant($state, "active", "active"),
          [sty.rootactive_compact]:
            hasVariant($state, "compact", "compact") &&
            hasVariant($state, "active", "active"),
          [sty.rootcompact]: hasVariant($state, "compact", "compact"),
          [sty.rootdisabled]: hasVariant($state, "disabled", "disabled")
        }
      )}
      dir={"rtl"}
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
      {(() => {
        try {
          return $props.icon;
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
        ? renderPlasmicSlot({
            defaultContents: (
              <Icon7Icon
                className={classNames(projectcss.all, sty.svg__a4Zd6)}
                role={"img"}
              />
            ),

            value: args.iconWrapper
          })
        : null}
      <div
        data-plasmic-name={"text"}
        data-plasmic-override={overrides.text}
        className={classNames(projectcss.all, projectcss.__wab_text, sty.text, {
          [sty.textactive]: hasVariant($state, "active", "active"),
          [sty.textactive_compact]:
            hasVariant($state, "active", "active") &&
            hasVariant($state, "compact", "compact"),
          [sty.textcompact]: hasVariant($state, "compact", "compact"),
          [sty.textdisabled]: hasVariant($state, "disabled", "disabled"),
          [sty.textdisabled_compact]:
            hasVariant($state, "disabled", "disabled") &&
            hasVariant($state, "compact", "compact")
        })}
      >
        <React.Fragment>
          {(() => {
            try {
              return $props.name;
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
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "text"],
  text: ["text"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  text: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicMenu__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicMenu__VariantsArgs;
    args?: PlasmicMenu__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicMenu__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicMenu__ArgsType,
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
          internalArgPropNames: PlasmicMenu__ArgProps,
          internalVariantPropNames: PlasmicMenu__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicMenu__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicMenu";
  } else {
    func.displayName = `PlasmicMenu.${nodeName}`;
  }
  return func;
}

export const PlasmicMenu = Object.assign(
  // Top-level PlasmicMenu renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    text: makeNodeComponent("text"),

    // Metadata about props expected for PlasmicMenu
    internalVariantProps: PlasmicMenu__VariantProps,
    internalArgProps: PlasmicMenu__ArgProps
  }
);

export default PlasmicMenu;
/* prettier-ignore-end */
