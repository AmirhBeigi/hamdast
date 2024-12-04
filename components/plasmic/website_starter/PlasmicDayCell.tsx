// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 7SNMkB8UMukVgcWJYokeAQ
// Component: cU6Nt4MA6DXT

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

import { useScreenVariants as useScreenVariantsaSuSwU8JUYf } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: aSUSwU8jUYf-/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: 7SNMkB8UMukVgcWJYokeAQ/projectcss
import sty from "./PlasmicDayCell.module.css"; // plasmic-import: cU6Nt4MA6DXT/css

createPlasmicElementProxy;

export type PlasmicDayCell__VariantMembers = {
  selected: "selected";
  dayStatus:
    | "reserved"
    | "discount"
    | "disabled"
    | "blocked"
    | "selected"
    | "holidays";
};
export type PlasmicDayCell__VariantsArgs = {
  selected?: SingleBooleanChoiceArg<"selected">;
  dayStatus?: SingleChoiceArg<
    "reserved" | "discount" | "disabled" | "blocked" | "selected" | "holidays"
  >;
};
type VariantPropType = keyof PlasmicDayCell__VariantsArgs;
export const PlasmicDayCell__VariantProps = new Array<VariantPropType>(
  "selected",
  "dayStatus"
);

export type PlasmicDayCell__ArgsType = {
  dayNumber?: string;
  platform?: string;
  price?: string;
};
type ArgPropType = keyof PlasmicDayCell__ArgsType;
export const PlasmicDayCell__ArgProps = new Array<ArgPropType>(
  "dayNumber",
  "platform",
  "price"
);

export type PlasmicDayCell__OverridesType = {
  cell?: Flex__<"div">;
};

export interface DefaultDayCellProps {
  dayNumber?: string;
  platform?: string;
  price?: string;
  selected?: SingleBooleanChoiceArg<"selected">;
  dayStatus?: SingleChoiceArg<
    "reserved" | "discount" | "disabled" | "blocked" | "selected" | "holidays"
  >;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicDayCell__RenderFunc(props: {
  variants: PlasmicDayCell__VariantsArgs;
  args: PlasmicDayCell__ArgsType;
  overrides: PlasmicDayCell__OverridesType;
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
        path: "selected",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.selected
      },
      {
        path: "dayStatus",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.dayStatus
      },
      {
        path: "test",
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

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsaSuSwU8JUYf()
  });

  return (
    <Stack__
      as={"div"}
      data-plasmic-name={"cell"}
      data-plasmic-override={overrides.cell}
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
        plasmic_plasmic_rich_components_css.plasmic_tokens,
        sty.cell,
        {
          [sty.celldayStatus_blocked]: hasVariant(
            $state,
            "dayStatus",
            "blocked"
          ),
          [sty.celldayStatus_disabled]: hasVariant(
            $state,
            "dayStatus",
            "disabled"
          ),
          [sty.celldayStatus_discount]: hasVariant(
            $state,
            "dayStatus",
            "discount"
          ),
          [sty.celldayStatus_holidays]: hasVariant(
            $state,
            "dayStatus",
            "holidays"
          ),
          [sty.celldayStatus_reserved]: hasVariant(
            $state,
            "dayStatus",
            "reserved"
          ),
          [sty.celldayStatus_selected]: hasVariant(
            $state,
            "dayStatus",
            "selected"
          ),
          [sty.cellselected]: hasVariant($state, "selected", "selected")
        }
      )}
    >
      <div
        className={classNames(
          projectcss.all,
          projectcss.__wab_text,
          sty.text__sLeDq,
          {
            [sty.textdayStatus_disabled__sLeDqOkz0Z]: hasVariant(
              $state,
              "dayStatus",
              "disabled"
            ),
            [sty.textdayStatus_discount__sLeDq2ON9H]: hasVariant(
              $state,
              "dayStatus",
              "discount"
            ),
            [sty.textdayStatus_holidays__sLeDqqQrei]: hasVariant(
              $state,
              "dayStatus",
              "holidays"
            ),
            [sty.textdayStatus_reserved__sLeDq6WcTl]: hasVariant(
              $state,
              "dayStatus",
              "reserved"
            ),
            [sty.textdayStatus_selected__sLeDqmbNkx]: hasVariant(
              $state,
              "dayStatus",
              "selected"
            ),
            [sty.textselected__sLeDq2Pr1U]: hasVariant(
              $state,
              "selected",
              "selected"
            )
          }
        )}
      >
        <React.Fragment>
          {(() => {
            try {
              return $props.dayNumber;
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
          sty.text__kqTC,
          {
            [sty.textdayStatus_discount__kqTC2ON9H]: hasVariant(
              $state,
              "dayStatus",
              "discount"
            ),
            [sty.textdayStatus_holidays__kqTCqQrei]: hasVariant(
              $state,
              "dayStatus",
              "holidays"
            ),
            [sty.textdayStatus_reserved__kqTC6WcTl]: hasVariant(
              $state,
              "dayStatus",
              "reserved"
            )
          }
        )}
      >
        <React.Fragment>
          {(() => {
            try {
              return $props.platform;
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return "\u0631\u0632\u0648\u0631 ";
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
          sty.text__ltKp2,
          {
            [sty.textdayStatus_blocked__ltKp277F30]: hasVariant(
              $state,
              "dayStatus",
              "blocked"
            ),
            [sty.textdayStatus_disabled__ltKp2Okz0Z]: hasVariant(
              $state,
              "dayStatus",
              "disabled"
            ),
            [sty.textdayStatus_discount__ltKp22ON9H]: hasVariant(
              $state,
              "dayStatus",
              "discount"
            ),
            [sty.textdayStatus_holidays__ltKp2QQrei]: hasVariant(
              $state,
              "dayStatus",
              "holidays"
            ),
            [sty.textdayStatus_reserved__ltKp26WcTl]: hasVariant(
              $state,
              "dayStatus",
              "reserved"
            ),
            [sty.textdayStatus_selected__ltKp2MbNkx]: hasVariant(
              $state,
              "dayStatus",
              "selected"
            ),
            [sty.textselected__ltKp22Pr1U]: hasVariant(
              $state,
              "selected",
              "selected"
            )
          }
        )}
      >
        <React.Fragment>
          {(() => {
            try {
              return $props.price;
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
  cell: ["cell"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  cell: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicDayCell__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicDayCell__VariantsArgs;
    args?: PlasmicDayCell__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicDayCell__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicDayCell__ArgsType,
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
          internalArgPropNames: PlasmicDayCell__ArgProps,
          internalVariantPropNames: PlasmicDayCell__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicDayCell__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "cell") {
    func.displayName = "PlasmicDayCell";
  } else {
    func.displayName = `PlasmicDayCell.${nodeName}`;
  }
  return func;
}

export const PlasmicDayCell = Object.assign(
  // Top-level PlasmicDayCell renders the root element
  makeNodeComponent("cell"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicDayCell
    internalVariantProps: PlasmicDayCell__VariantProps,
    internalArgProps: PlasmicDayCell__ArgProps
  }
);

export default PlasmicDayCell;
/* prettier-ignore-end */
