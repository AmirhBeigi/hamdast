// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: qo5fwZT3vwQ9RjjQNWCz9z
// Component: HtmgI6FLxY8D

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

import projectcss from "./plasmic.module.css"; // plasmic-import: qo5fwZT3vwQ9RjjQNWCz9z/projectcss
import sty from "./PlasmicFragmentCollapsible.module.css"; // plasmic-import: HtmgI6FLxY8D/css

createPlasmicElementProxy;

export type PlasmicFragmentCollapsible__VariantMembers = {
  noLayout: "noLayout";
};
export type PlasmicFragmentCollapsible__VariantsArgs = {
  noLayout?: SingleBooleanChoiceArg<"noLayout">;
};
type VariantPropType = keyof PlasmicFragmentCollapsible__VariantsArgs;
export const PlasmicFragmentCollapsible__VariantProps =
  new Array<VariantPropType>("noLayout");

export type PlasmicFragmentCollapsible__ArgsType = {
  children?: React.ReactNode;
  expandsTrigger?: React.ReactNode;
  collapsesTrigger?: React.ReactNode;
  defaultMaxHeight?: string;
};
type ArgPropType = keyof PlasmicFragmentCollapsible__ArgsType;
export const PlasmicFragmentCollapsible__ArgProps = new Array<ArgPropType>(
  "children",
  "expandsTrigger",
  "collapsesTrigger",
  "defaultMaxHeight"
);

export type PlasmicFragmentCollapsible__OverridesType = {
  root?: Flex__<"div">;
};

export interface DefaultFragmentCollapsibleProps {
  children?: React.ReactNode;
  expandsTrigger?: React.ReactNode;
  collapsesTrigger?: React.ReactNode;
  defaultMaxHeight?: string;
  noLayout?: SingleBooleanChoiceArg<"noLayout">;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicFragmentCollapsible__RenderFunc(props: {
  variants: PlasmicFragmentCollapsible__VariantsArgs;
  args: PlasmicFragmentCollapsible__ArgsType;
  overrides: PlasmicFragmentCollapsible__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {
          defaultMaxHeight: "200px"
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
        path: "openStatus",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => false
      },
      {
        path: "noLayout",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.noLayout
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
        sty.root,
        { [sty.rootnoLayout]: hasVariant($state, "noLayout", "noLayout") }
      )}
    >
      <div
        className={classNames(projectcss.all, sty.freeBox__tRueh, {
          [sty.freeBoxnoLayout__tRuehlO260]: hasVariant(
            $state,
            "noLayout",
            "noLayout"
          )
        })}
        style={
          hasVariant($state, "noLayout", "noLayout")
            ? (() => {
                try {
                  return (() => {
                    if (!$state.openStatus) {
                      return {};
                    }
                  })();
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
            : (() => {
                try {
                  return (() => {
                    if (!$state.openStatus) {
                      return { "max-height": $props.defaultMaxHeight };
                    }
                  })();
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
        }
      >
        {renderPlasmicSlot({
          defaultContents: (
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text___8WjQ
              )}
            >
              {
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non est felis. Curabitur nibh velit, vehicula quis orci at, scelerisque malesuada sem. Ut tincidunt nisl nunc. Fusce in mollis enim, sodales porta eros. Sed quis pharetra tortor. Donec pulvinar bibendum ligula ultricies rutrum. Morbi ultricies ipsum vel augue venenatis interdum. Sed sodales cursus lectus, eget congue purus facilisis id. Suspendisse nec vestibulum justo, quis tincidunt justo. Morbi a nibh pharetra, vestibulum orci nec, varius magna. Duis blandit eros urna, sed iaculis tortor consequat non. Donec finibus, diam faucibus sodales condimentum, leo arcu egestas mauris, vitae sollicitudin leo nulla ut nisi.\nNam metus eros, sagittis sed rhoncus vitae, eleifend nec augue. Proin vulputate nulla nec leo ullamcorper scelerisque. Duis id massa sem. Proin hendrerit risus vitae tincidunt viverra. Donec augue risus, condimentum in metus eleifend, luctus hendrerit lacus. Quisque congue nibh a turpis tempor sodales. Aenean pretium non libero non pharetra. Nulla gravida odio metus, non accumsan dolor cursus et. Aenean consequat augue quis felis mattis consequat. Phasellus dapibus mauris in tincidunt tristique. In nec dui vitae sem facilisis egestas. Proin sollicitudin nec enim a mollis. Aenean a odio quis ipsum ultrices condimentum at id massa. Vestibulum eu magna enim. Etiam a mauris rutrum leo posuere consectetur."
              }
            </div>
          ),
          value: args.children
        })}
        {(
          hasVariant($state, "noLayout", "noLayout")
            ? true
            : (() => {
                try {
                  return !$state.openStatus;
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
        ) ? (
          <div
            className={classNames(projectcss.all, sty.freeBox__of1Yg, {
              [sty.freeBoxnoLayout__of1YglO260]: hasVariant(
                $state,
                "noLayout",
                "noLayout"
              )
            })}
          />
        ) : null}
      </div>
      {(
        hasVariant($state, "noLayout", "noLayout")
          ? true
          : (() => {
              try {
                return !$state.openStatus;
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
      ) ? (
        <div
          className={classNames(projectcss.all, sty.freeBox__tyToy, {
            [sty.freeBoxnoLayout__tyToYlO260]: hasVariant(
              $state,
              "noLayout",
              "noLayout"
            )
          })}
          onClick={async event => {
            const $steps = {};

            $steps["updateOpenStatus"] = true
              ? (() => {
                  const actionArgs = {
                    variable: {
                      objRoot: $state,
                      variablePath: ["openStatus"]
                    },
                    operation: 0,
                    value: true
                  };
                  return (({ variable, value, startIndex, deleteCount }) => {
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
              $steps["updateOpenStatus"] != null &&
              typeof $steps["updateOpenStatus"] === "object" &&
              typeof $steps["updateOpenStatus"].then === "function"
            ) {
              $steps["updateOpenStatus"] = await $steps["updateOpenStatus"];
            }
          }}
        >
          {renderPlasmicSlot({
            defaultContents: (
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__jkR2K
                )}
              >
                {"Show more"}
              </div>
            ),
            value: args.expandsTrigger
          })}
        </div>
      ) : null}
      {(
        hasVariant($state, "noLayout", "noLayout")
          ? true
          : (() => {
              try {
                return $state.openStatus;
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
      ) ? (
        <div
          className={classNames(projectcss.all, sty.freeBox___3Azgn, {
            [sty.freeBoxnoLayout___3AzgNlO260]: hasVariant(
              $state,
              "noLayout",
              "noLayout"
            )
          })}
          onClick={async event => {
            const $steps = {};

            $steps["updateOpenStatus"] = true
              ? (() => {
                  const actionArgs = {
                    variable: {
                      objRoot: $state,
                      variablePath: ["openStatus"]
                    },
                    operation: 0,
                    value: false
                  };
                  return (({ variable, value, startIndex, deleteCount }) => {
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
              $steps["updateOpenStatus"] != null &&
              typeof $steps["updateOpenStatus"] === "object" &&
              typeof $steps["updateOpenStatus"].then === "function"
            ) {
              $steps["updateOpenStatus"] = await $steps["updateOpenStatus"];
            }
          }}
        >
          {renderPlasmicSlot({
            defaultContents: (
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__yITpT
                )}
              >
                {"Show less"}
              </div>
            ),
            value: args.collapsesTrigger
          })}
        </div>
      ) : null}
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
  PlasmicFragmentCollapsible__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicFragmentCollapsible__VariantsArgs;
    args?: PlasmicFragmentCollapsible__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicFragmentCollapsible__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicFragmentCollapsible__ArgsType,
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
          internalArgPropNames: PlasmicFragmentCollapsible__ArgProps,
          internalVariantPropNames: PlasmicFragmentCollapsible__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicFragmentCollapsible__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicFragmentCollapsible";
  } else {
    func.displayName = `PlasmicFragmentCollapsible.${nodeName}`;
  }
  return func;
}

export const PlasmicFragmentCollapsible = Object.assign(
  // Top-level PlasmicFragmentCollapsible renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicFragmentCollapsible
    internalVariantProps: PlasmicFragmentCollapsible__VariantProps,
    internalArgProps: PlasmicFragmentCollapsible__ArgProps
  }
);

export default PlasmicFragmentCollapsible;
/* prettier-ignore-end */
