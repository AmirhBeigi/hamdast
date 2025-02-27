// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: pkMLinFwM9pzwv5S5KpiAu
// Component: 3y7pc6cf4L1a

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

import { BaseCheckbox } from "@plasmicpkgs/react-aria/skinny/registerCheckbox";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_paziresh_24_design_system_css from "../paziresh_24_design_system/plasmic.module.css"; // plasmic-import: 6HBcNwr8dz9LuS1Qe36xa5/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: pkMLinFwM9pzwv5S5KpiAu/projectcss
import sty from "./PlasmicCheckbox.module.css"; // plasmic-import: 3y7pc6cf4L1a/css

import CheckIcon from "./icons/PlasmicIcon__Check"; // plasmic-import: 4n7dEyBivIhK/icon
import MinusIcon from "./icons/PlasmicIcon__Minus"; // plasmic-import: 1kxXou6RzU4u/icon

createPlasmicElementProxy;

export type PlasmicCheckbox__VariantMembers = {};
export type PlasmicCheckbox__VariantsArgs = {};
type VariantPropType = keyof PlasmicCheckbox__VariantsArgs;
export const PlasmicCheckbox__VariantProps = new Array<VariantPropType>();

export type PlasmicCheckbox__ArgsType = {
  value?: string;
  defaultSelected?: boolean;
  autoFocus?: boolean;
  disabled?: boolean;
  ariaLabel?: string;
  onChange?: (val: boolean) => void;
  label?: React.ReactNode;
};
type ArgPropType = keyof PlasmicCheckbox__ArgsType;
export const PlasmicCheckbox__ArgProps = new Array<ArgPropType>(
  "value",
  "defaultSelected",
  "autoFocus",
  "disabled",
  "ariaLabel",
  "onChange",
  "label"
);

export type PlasmicCheckbox__OverridesType = {
  ariaCheckbox?: Flex__<typeof BaseCheckbox>;
  freeBox?: Flex__<"div">;
};

export interface DefaultCheckboxProps {
  value?: string;
  defaultSelected?: boolean;
  autoFocus?: boolean;
  disabled?: boolean;
  ariaLabel?: string;
  onChange?: (val: boolean) => void;
  label?: React.ReactNode;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicCheckbox__RenderFunc(props: {
  variants: PlasmicCheckbox__VariantsArgs;
  args: PlasmicCheckbox__ArgsType;
  overrides: PlasmicCheckbox__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {
          defaultSelected: false,
          autoFocus: false
        },
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
        path: "ariaCheckbox.isSelected",
        type: "readonly",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) =>
          $props["defaultSelected"],

        onChangeProp: "onChange"
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

  const [$ccVariants, setDollarCcVariants] = React.useState<
    Record<string, boolean>
  >({
    hovered: false,
    pressed: false,
    focused: false,
    focusVisible: false,
    indeterminate: false,
    disabled: false,
    selected: false,
    readonly: false
  });
  const updateVariant = React.useCallback(
    (changes: Record<string, boolean>) => {
      setDollarCcVariants(prev => {
        if (!Object.keys(changes).some(k => prev[k] !== changes[k])) {
          return prev;
        }
        return { ...prev, ...changes };
      });
    },
    []
  );

  return (
    <BaseCheckbox
      data-plasmic-name={"ariaCheckbox"}
      data-plasmic-override={overrides.ariaCheckbox}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      aria-label={args.ariaLabel}
      autoFocus={args.autoFocus}
      className={classNames(
        "__wab_instance",
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_paziresh_24_design_system_css.plasmic_tokens,
        sty.ariaCheckbox
      )}
      defaultSelected={args.defaultSelected}
      isDisabled={args.disabled}
      isIndeterminate={$ccVariants["indeterminate"] ? true : undefined}
      isReadOnly={$ccVariants["readonly"] ? true : undefined}
      isSelected={generateStateValueProp($state, [
        "ariaCheckbox",
        "isSelected"
      ])}
      onChange={async (...eventArgs: any) => {
        generateStateOnChangeProp($state, ["ariaCheckbox", "isSelected"]).apply(
          null,
          eventArgs
        );
      }}
      plasmicUpdateVariant={updateVariant}
      value={args.value}
    >
      <div
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        className={classNames(projectcss.all, sty.freeBox)}
      >
        <CheckIcon
          className={classNames(projectcss.all, sty.svg__n0Pu5)}
          role={"img"}
        />

        <MinusIcon
          className={classNames(projectcss.all, sty.svg___39PBq)}
          role={"img"}
        />
      </div>
      {renderPlasmicSlot({
        defaultContents: "Option",
        value: args.label
      })}
    </BaseCheckbox>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  ariaCheckbox: ["ariaCheckbox", "freeBox"],
  freeBox: ["freeBox"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  ariaCheckbox: typeof BaseCheckbox;
  freeBox: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicCheckbox__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicCheckbox__VariantsArgs;
    args?: PlasmicCheckbox__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicCheckbox__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicCheckbox__ArgsType,
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
          internalArgPropNames: PlasmicCheckbox__ArgProps,
          internalVariantPropNames: PlasmicCheckbox__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicCheckbox__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "ariaCheckbox") {
    func.displayName = "PlasmicCheckbox";
  } else {
    func.displayName = `PlasmicCheckbox.${nodeName}`;
  }
  return func;
}

export const PlasmicCheckbox = Object.assign(
  // Top-level PlasmicCheckbox renders the root element
  makeNodeComponent("ariaCheckbox"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),

    // Metadata about props expected for PlasmicCheckbox
    internalVariantProps: PlasmicCheckbox__VariantProps,
    internalArgProps: PlasmicCheckbox__ArgProps
  }
);

export default PlasmicCheckbox;
/* prettier-ignore-end */
