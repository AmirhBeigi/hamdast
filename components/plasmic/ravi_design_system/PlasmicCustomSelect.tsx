/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: pkMLinFwM9pzwv5S5KpiAu
// Component: _-4ghU5Xu-FB

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

import * as pp from "@plasmicapp/react-web";
import CustomSelect__Overlay from "../../CustomSelect__Overlay"; // plasmic-import: ieGcNb-pMGjg/component
import CustomSelect__Option from "../../CustomSelect__Option"; // plasmic-import: aMYhgsV1eA0k/component
import CustomSelect__OptionGroup from "../../CustomSelect__OptionGroup"; // plasmic-import: 1a9LJZTYyJSj/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_paziresh_24_design_system_css from "../paziresh_24_design_system/plasmic.module.css"; // plasmic-import: 6HBcNwr8dz9LuS1Qe36xa5/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: pkMLinFwM9pzwv5S5KpiAu/projectcss
import sty from "./PlasmicCustomSelect.module.css"; // plasmic-import: _-4ghU5Xu-FB/css

import ChevronDownSvgIcon from "./icons/PlasmicIcon__ChevronDownSvg"; // plasmic-import: ZDQqI-ayyDAW/icon
import ChevronUpSvgIcon from "./icons/PlasmicIcon__ChevronUpSvg"; // plasmic-import: qVOJ1AyQS5aY/icon

createPlasmicElementProxy;

export type PlasmicCustomSelect__VariantMembers = {
  showPlaceholder: "showPlaceholder";
  isOpen: "isOpen";
  isDisabled: "isDisabled";
  color:
    | "softBlue"
    | "softCyan"
    | "softGreen"
    | "softYellow"
    | "softOrange"
    | "softRed"
    | "softPink"
    | "softPurple"
    | "softGray"
    | "clear";
};
export type PlasmicCustomSelect__VariantsArgs = {
  showPlaceholder?: SingleBooleanChoiceArg<"showPlaceholder">;
  isOpen?: SingleBooleanChoiceArg<"isOpen">;
  isDisabled?: SingleBooleanChoiceArg<"isDisabled">;
  color?: SingleChoiceArg<
    | "softBlue"
    | "softCyan"
    | "softGreen"
    | "softYellow"
    | "softOrange"
    | "softRed"
    | "softPink"
    | "softPurple"
    | "softGray"
    | "clear"
  >;
};
type VariantPropType = keyof PlasmicCustomSelect__VariantsArgs;
export const PlasmicCustomSelect__VariantProps = new Array<VariantPropType>(
  "showPlaceholder",
  "isOpen",
  "isDisabled",
  "color"
);

export type PlasmicCustomSelect__ArgsType = {
  value?: "Dynamic options";
  name?: string;
  "aria-label"?: string;
  "aria-labelledby"?: string;
  options?: any;
  onChange?: (value: string) => void;
  selectedContent?: React.ReactNode;
  placeholder?: React.ReactNode;
  children?: React.ReactNode;
};
type ArgPropType = keyof PlasmicCustomSelect__ArgsType;
export const PlasmicCustomSelect__ArgProps = new Array<ArgPropType>(
  "value",
  "name",
  "aria-label",
  "aria-labelledby",
  "options",
  "onChange",
  "selectedContent",
  "placeholder",
  "children"
);

export type PlasmicCustomSelect__OverridesType = {
  root?: Flex__<"div">;
  trigger?: Flex__<"button">;
  contentContainer?: Flex__<"div">;
  dropdownIcon?: Flex__<"svg">;
  overlay?: Flex__<typeof CustomSelect__Overlay>;
  optionsContainer?: Flex__<"div">;
};

export interface DefaultCustomSelectProps extends pp.BaseSelectProps {
  "aria-label"?: string;
  "aria-labelledby"?: string;
  options?: any;
  color?: SingleChoiceArg<
    | "softBlue"
    | "softCyan"
    | "softGreen"
    | "softYellow"
    | "softOrange"
    | "softRed"
    | "softPink"
    | "softPurple"
    | "softGray"
    | "clear"
  >;
}

const PlasmicCustomSelectContext = React.createContext<
  | undefined
  | {
      variants: PlasmicCustomSelect__VariantsArgs;
      args: PlasmicCustomSelect__ArgsType;
    }
>(undefined);

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicCustomSelect__RenderFunc(props: {
  variants: PlasmicCustomSelect__VariantsArgs;
  args: PlasmicCustomSelect__ArgsType;
  overrides: PlasmicCustomSelect__OverridesType;
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
        path: "showPlaceholder",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.showPlaceholder
      },
      {
        path: "isOpen",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.isOpen
      },
      {
        path: "isDisabled",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.isDisabled
      },
      {
        path: "color",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.color
      },
      {
        path: "value",
        type: "writable",
        variableType: "text",

        valueProp: "value",
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

  const [isRootFocusVisibleWithin, triggerRootFocusVisibleWithinProps] =
    useTrigger("useFocusVisibleWithin", {
      isTextInput: false
    });
  const triggers = {
    focusVisibleWithin_root: isRootFocusVisibleWithin
  };

  return (
    <PlasmicCustomSelectContext.Provider value={{ variants, args }}>
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
          {
            [sty.root___focusVisibleWithin]: triggers.focusVisibleWithin_root,
            [sty.rootcolor_clear]: hasVariant($state, "color", "clear"),
            [sty.rootcolor_softBlue]: hasVariant($state, "color", "softBlue"),
            [sty.rootcolor_softCyan]: hasVariant($state, "color", "softCyan"),
            [sty.rootcolor_softGreen]: hasVariant($state, "color", "softGreen"),
            [sty.rootcolor_softOrange]: hasVariant(
              $state,
              "color",
              "softOrange"
            ),
            [sty.rootcolor_softPink]: hasVariant($state, "color", "softPink"),
            [sty.rootcolor_softPurple]: hasVariant(
              $state,
              "color",
              "softPurple"
            ),
            [sty.rootcolor_softRed]: hasVariant($state, "color", "softRed"),
            [sty.rootcolor_softYellow]: hasVariant(
              $state,
              "color",
              "softYellow"
            ),
            [sty.rootisOpen]: hasVariant($state, "isOpen", "isOpen")
          }
        )}
        data-plasmic-trigger-props={[triggerRootFocusVisibleWithinProps]}
      >
        <button
          data-plasmic-name={"trigger"}
          data-plasmic-override={overrides.trigger}
          className={classNames(
            projectcss.all,
            projectcss.button,
            sty.trigger,
            {
              [sty.trigger___focusVisibleWithin]:
                triggers.focusVisibleWithin_root,
              [sty.triggercolor_clear]: hasVariant($state, "color", "clear"),
              [sty.triggercolor_softBlue]: hasVariant(
                $state,
                "color",
                "softBlue"
              ),
              [sty.triggercolor_softCyan]: hasVariant(
                $state,
                "color",
                "softCyan"
              ),
              [sty.triggercolor_softGray]: hasVariant(
                $state,
                "color",
                "softGray"
              ),
              [sty.triggercolor_softGreen]: hasVariant(
                $state,
                "color",
                "softGreen"
              ),
              [sty.triggercolor_softOrange]: hasVariant(
                $state,
                "color",
                "softOrange"
              ),
              [sty.triggercolor_softPink]: hasVariant(
                $state,
                "color",
                "softPink"
              ),
              [sty.triggercolor_softPurple]: hasVariant(
                $state,
                "color",
                "softPurple"
              ),
              [sty.triggercolor_softRed]: hasVariant(
                $state,
                "color",
                "softRed"
              ),
              [sty.triggercolor_softYellow]: hasVariant(
                $state,
                "color",
                "softYellow"
              ),
              [sty.triggerisDisabled]: hasVariant(
                $state,
                "isDisabled",
                "isDisabled"
              ),
              [sty.triggerisOpen]: hasVariant($state, "isOpen", "isOpen")
            }
          )}
          disabled={
            hasVariant($state, "isDisabled", "isDisabled") ? true : undefined
          }
          ref={ref => {
            $refs["trigger"] = ref;
          }}
        >
          <div
            data-plasmic-name={"contentContainer"}
            data-plasmic-override={overrides.contentContainer}
            className={classNames(projectcss.all, sty.contentContainer, {
              [sty.contentContainercolor_softBlue]: hasVariant(
                $state,
                "color",
                "softBlue"
              ),
              [sty.contentContainerisDisabled]: hasVariant(
                $state,
                "isDisabled",
                "isDisabled"
              ),
              [sty.contentContainershowPlaceholder]: hasVariant(
                $state,
                "showPlaceholder",
                "showPlaceholder"
              )
            })}
          >
            {(
              hasVariant($state, "showPlaceholder", "showPlaceholder")
                ? false
                : true
            )
              ? renderPlasmicSlot({
                  defaultContents: "Selected",
                  value: args.selectedContent,
                  className: classNames(sty.slotTargetSelectedContent, {
                    [sty.slotTargetSelectedContentcolor_softBlue]: hasVariant(
                      $state,
                      "color",
                      "softBlue"
                    ),
                    [sty.slotTargetSelectedContentcolor_softCyan]: hasVariant(
                      $state,
                      "color",
                      "softCyan"
                    ),
                    [sty.slotTargetSelectedContentcolor_softGreen]: hasVariant(
                      $state,
                      "color",
                      "softGreen"
                    ),
                    [sty.slotTargetSelectedContentcolor_softOrange]: hasVariant(
                      $state,
                      "color",
                      "softOrange"
                    ),
                    [sty.slotTargetSelectedContentcolor_softPink]: hasVariant(
                      $state,
                      "color",
                      "softPink"
                    ),
                    [sty.slotTargetSelectedContentcolor_softPurple]: hasVariant(
                      $state,
                      "color",
                      "softPurple"
                    ),
                    [sty.slotTargetSelectedContentcolor_softRed]: hasVariant(
                      $state,
                      "color",
                      "softRed"
                    ),
                    [sty.slotTargetSelectedContentcolor_softYellow]: hasVariant(
                      $state,
                      "color",
                      "softYellow"
                    ),
                    [sty.slotTargetSelectedContentisDisabled]: hasVariant(
                      $state,
                      "isDisabled",
                      "isDisabled"
                    ),
                    [sty.slotTargetSelectedContentisOpen]: hasVariant(
                      $state,
                      "isOpen",
                      "isOpen"
                    ),
                    [sty.slotTargetSelectedContentshowPlaceholder]: hasVariant(
                      $state,
                      "showPlaceholder",
                      "showPlaceholder"
                    )
                  })
                })
              : null}
            {(
              hasVariant($state, "showPlaceholder", "showPlaceholder")
                ? true
                : (() => {
                    try {
                      return !$state.value;
                    } catch (e) {
                      if (
                        e instanceof TypeError ||
                        e?.plasmicType === "PlasmicUndefinedDataError"
                      ) {
                        return false;
                      }
                      throw e;
                    }
                  })()
            )
              ? renderPlasmicSlot({
                  defaultContents: "Select\u2026",
                  value: args.placeholder,
                  className: classNames(sty.slotTargetPlaceholder, {
                    [sty.slotTargetPlaceholdercolor_softBlue]: hasVariant(
                      $state,
                      "color",
                      "softBlue"
                    ),
                    [sty.slotTargetPlaceholdercolor_softPurple_showPlaceholder]:
                      hasVariant($state, "color", "softPurple") &&
                      hasVariant($state, "showPlaceholder", "showPlaceholder"),
                    [sty.slotTargetPlaceholdershowPlaceholder]: hasVariant(
                      $state,
                      "showPlaceholder",
                      "showPlaceholder"
                    ),
                    [sty.slotTargetPlaceholdershowPlaceholder_color_softBlue]:
                      hasVariant(
                        $state,
                        "showPlaceholder",
                        "showPlaceholder"
                      ) && hasVariant($state, "color", "softBlue"),
                    [sty.slotTargetPlaceholdershowPlaceholder_color_softCyan]:
                      hasVariant(
                        $state,
                        "showPlaceholder",
                        "showPlaceholder"
                      ) && hasVariant($state, "color", "softCyan"),
                    [sty.slotTargetPlaceholdershowPlaceholder_color_softGreen]:
                      hasVariant(
                        $state,
                        "showPlaceholder",
                        "showPlaceholder"
                      ) && hasVariant($state, "color", "softGreen"),
                    [sty.slotTargetPlaceholdershowPlaceholder_color_softOrange]:
                      hasVariant(
                        $state,
                        "showPlaceholder",
                        "showPlaceholder"
                      ) && hasVariant($state, "color", "softOrange"),
                    [sty.slotTargetPlaceholdershowPlaceholder_color_softPink]:
                      hasVariant(
                        $state,
                        "showPlaceholder",
                        "showPlaceholder"
                      ) && hasVariant($state, "color", "softPink"),
                    [sty.slotTargetPlaceholdershowPlaceholder_color_softRed]:
                      hasVariant(
                        $state,
                        "showPlaceholder",
                        "showPlaceholder"
                      ) && hasVariant($state, "color", "softRed"),
                    [sty.slotTargetPlaceholdershowPlaceholder_color_softYellow]:
                      hasVariant(
                        $state,
                        "showPlaceholder",
                        "showPlaceholder"
                      ) && hasVariant($state, "color", "softYellow")
                  })
                })
              : null}
          </div>
          <PlasmicIcon__
            data-plasmic-name={"dropdownIcon"}
            data-plasmic-override={overrides.dropdownIcon}
            PlasmicIconType={
              hasVariant($state, "isOpen", "isOpen")
                ? ChevronUpSvgIcon
                : ChevronDownSvgIcon
            }
            className={classNames(projectcss.all, sty.dropdownIcon, {
              [sty.dropdownIcon___focusVisibleWithin]:
                triggers.focusVisibleWithin_root,
              [sty.dropdownIconcolor_softBlue]: hasVariant(
                $state,
                "color",
                "softBlue"
              ),
              [sty.dropdownIconcolor_softCyan]: hasVariant(
                $state,
                "color",
                "softCyan"
              ),
              [sty.dropdownIconcolor_softGray]: hasVariant(
                $state,
                "color",
                "softGray"
              ),
              [sty.dropdownIconcolor_softGreen]: hasVariant(
                $state,
                "color",
                "softGreen"
              ),
              [sty.dropdownIconcolor_softOrange]: hasVariant(
                $state,
                "color",
                "softOrange"
              ),
              [sty.dropdownIconcolor_softPink]: hasVariant(
                $state,
                "color",
                "softPink"
              ),
              [sty.dropdownIconcolor_softPurple]: hasVariant(
                $state,
                "color",
                "softPurple"
              ),
              [sty.dropdownIconcolor_softRed]: hasVariant(
                $state,
                "color",
                "softRed"
              ),
              [sty.dropdownIconcolor_softYellow]: hasVariant(
                $state,
                "color",
                "softYellow"
              ),
              [sty.dropdownIconisDisabled]: hasVariant(
                $state,
                "isDisabled",
                "isDisabled"
              ),
              [sty.dropdownIconisOpen]: hasVariant($state, "isOpen", "isOpen")
            })}
            role={"img"}
          />
        </button>
        {(hasVariant($state, "isOpen", "isOpen") ? true : false) ? (
          <CustomSelect__Overlay
            data-plasmic-name={"overlay"}
            data-plasmic-override={overrides.overlay}
            className={classNames("__wab_instance", sty.overlay, {
              [sty.overlayisOpen]: hasVariant($state, "isOpen", "isOpen")
            })}
            relativePlacement={"bottom"}
          >
            <div
              data-plasmic-name={"optionsContainer"}
              data-plasmic-override={overrides.optionsContainer}
              className={classNames(projectcss.all, sty.optionsContainer, {
                [sty.optionsContainerisOpen]: hasVariant(
                  $state,
                  "isOpen",
                  "isOpen"
                )
              })}
            >
              {renderPlasmicSlot({
                defaultContents: null,
                value: args.children
              })}
            </div>
          </CustomSelect__Overlay>
        ) : null}
      </div>
    </PlasmicCustomSelectContext.Provider>
  ) as React.ReactElement | null;
}

function useBehavior<P extends pp.BaseSelectProps>(
  props: P,
  ref: pp.SelectRef
) {
  if (!("options" in props)) {
  }
  return pp.useSelect(
    PlasmicCustomSelect,
    props,
    {
      ...{
        isOpenVariant: { group: "isOpen", variant: "isOpen" },
        placeholderVariant: {
          group: "showPlaceholder",
          variant: "showPlaceholder"
        },
        isDisabledVariant: { group: "isDisabled", variant: "isDisabled" },
        triggerContentSlot: "selectedContent",
        optionsSlot: "children",
        placeholderSlot: "placeholder",
        root: "root",
        trigger: "trigger",
        overlay: "overlay",
        optionsContainer: "optionsContainer"
      },
      OptionComponent: CustomSelect__Option,
      OptionGroupComponent: CustomSelect__OptionGroup
    },
    ref
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "trigger",
    "contentContainer",
    "dropdownIcon",
    "overlay",
    "optionsContainer"
  ],
  trigger: ["trigger", "contentContainer", "dropdownIcon"],
  contentContainer: ["contentContainer"],
  dropdownIcon: ["dropdownIcon"],
  overlay: ["overlay", "optionsContainer"],
  optionsContainer: ["optionsContainer"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  trigger: "button";
  contentContainer: "div";
  dropdownIcon: "svg";
  overlay: typeof CustomSelect__Overlay;
  optionsContainer: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicCustomSelect__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicCustomSelect__VariantsArgs;
    args?: PlasmicCustomSelect__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicCustomSelect__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicCustomSelect__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicCustomSelect__ArgProps,
          internalVariantPropNames: PlasmicCustomSelect__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicCustomSelect__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicCustomSelect";
  } else {
    func.displayName = `PlasmicCustomSelect.${nodeName}`;
  }
  return func;
}

export const PlasmicCustomSelect = Object.assign(
  // Top-level PlasmicCustomSelect renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    trigger: makeNodeComponent("trigger"),
    contentContainer: makeNodeComponent("contentContainer"),
    dropdownIcon: makeNodeComponent("dropdownIcon"),
    overlay: makeNodeComponent("overlay"),
    optionsContainer: makeNodeComponent("optionsContainer"),

    // Metadata about props expected for PlasmicCustomSelect
    internalVariantProps: PlasmicCustomSelect__VariantProps,
    internalArgProps: PlasmicCustomSelect__ArgProps,

    // Context for sub components
    Context: PlasmicCustomSelectContext,

    useBehavior
  }
);

export default PlasmicCustomSelect;
/* prettier-ignore-end */
