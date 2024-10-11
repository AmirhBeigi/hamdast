// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 7SNMkB8UMukVgcWJYokeAQ
// Component: gnA2OKpdAGdr

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

import { FormWrapper } from "@plasmicpkgs/antd5/skinny/Form";
import { formHelpers as FormWrapper_Helpers } from "@plasmicpkgs/antd5/skinny/Form";
import { FormItemWrapper } from "@plasmicpkgs/antd5/skinny/FormItem";
import { AntdInput } from "@plasmicpkgs/antd5/skinny/registerInput";
import { inputHelpers as AntdInput_Helpers } from "@plasmicpkgs/antd5/skinny/registerInput";
import { AntdButton } from "@plasmicpkgs/antd5/skinny/registerButton";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: 7SNMkB8UMukVgcWJYokeAQ/projectcss
import sty from "./PlasmicSelfRegistration.module.css"; // plasmic-import: gnA2OKpdAGdr/css

createPlasmicElementProxy;

export type PlasmicSelfRegistration__VariantMembers = {};
export type PlasmicSelfRegistration__VariantsArgs = {};
type VariantPropType = keyof PlasmicSelfRegistration__VariantsArgs;
export const PlasmicSelfRegistration__VariantProps =
  new Array<VariantPropType>();

export type PlasmicSelfRegistration__ArgsType = {};
type ArgPropType = keyof PlasmicSelfRegistration__ArgsType;
export const PlasmicSelfRegistration__ArgProps = new Array<ArgPropType>();

export type PlasmicSelfRegistration__OverridesType = {
  root?: Flex__<"div">;
  form?: Flex__<typeof FormWrapper>;
  button?: Flex__<typeof AntdButton>;
  text?: Flex__<"div">;
};

export interface DefaultSelfRegistrationProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicSelfRegistration__RenderFunc(props: {
  variants: PlasmicSelfRegistration__VariantsArgs;
  args: PlasmicSelfRegistration__ArgsType;
  overrides: PlasmicSelfRegistration__OverridesType;
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

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "form.value",
        type: "private",
        variableType: "object",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,

        refName: "form",
        onMutate: generateOnMutateForSpec("value", FormWrapper_Helpers)
      },
      {
        path: "form.isSubmitting",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => false,

        refName: "form",
        onMutate: generateOnMutateForSpec("isSubmitting", FormWrapper_Helpers)
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
      <Head></Head>

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
            plasmic_plasmic_rich_components_css.plasmic_tokens,
            sty.root
          )}
        >
          {(() => {
            const child$Props = {
              className: classNames("__wab_instance", sty.form),
              extendedOnValuesChange:
                generateStateOnChangePropForCodeComponents(
                  $state,
                  "value",
                  ["form", "value"],
                  FormWrapper_Helpers
                ),
              formItems: undefined,
              labelCol: { span: 8, horizontalOnly: true },
              layout: "vertical",
              mode: undefined,
              onFinish: async values => {
                const $steps = {};

                $steps["invokeGlobalAction"] = true
                  ? (() => {
                      const actionArgs = { args: ["POST"] };
                      return $globalActions["Fragment.apiRequest"]?.apply(
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
              },
              onIsSubmittingChange: generateStateOnChangePropForCodeComponents(
                $state,
                "isSubmitting",
                ["form", "isSubmitting"],
                FormWrapper_Helpers
              ),
              ref: ref => {
                $refs["form"] = ref;
              },
              wrapperCol: { span: 16, horizontalOnly: true }
            };
            initializeCodeComponentStates(
              $state,
              [
                {
                  name: "value",
                  plasmicStateName: "form.value"
                },
                {
                  name: "isSubmitting",
                  plasmicStateName: "form.isSubmitting"
                }
              ],
              [],
              FormWrapper_Helpers ?? {},
              child$Props
            );

            return (
              <FormWrapper
                data-plasmic-name={"form"}
                data-plasmic-override={overrides.form}
                {...child$Props}
              >
                <FormItemWrapper
                  className={classNames("__wab_instance", sty.formField__m10W)}
                  label={"\u0646\u0627\u0645"}
                  name={"name"}
                  rules={[{ ruleType: "required" }]}
                >
                  <AntdInput
                    className={classNames("__wab_instance", sty.input__oO18K)}
                  />
                </FormItemWrapper>
                <FormItemWrapper
                  className={classNames("__wab_instance", sty.formField__huipz)}
                  label={
                    "\u0646\u0627\u0645 \u062e\u0627\u0646\u0648\u0627\u062f\u06af\u06cc"
                  }
                  name={"lastName"}
                  rules={[{ ruleType: "required" }]}
                >
                  <AntdInput
                    className={classNames("__wab_instance", sty.input__uwtEc)}
                  />
                </FormItemWrapper>
                <FormItemWrapper
                  className={classNames("__wab_instance", sty.formField__ks1Or)}
                  hidden={false}
                  label={
                    "\u0634\u0645\u0627\u0631\u0647 \u0645\u0648\u0628\u0627\u06cc\u0644"
                  }
                  name={"phoneNumber"}
                  rules={[
                    { ruleType: "required" },

                    {
                      ruleType: "min",
                      length: 11,
                      message: "\u06a9\u06a9\u06a9\u06a9\u06a9"
                    },

                    {
                      ruleType: "advanced",
                      custom: (rule, value) => {
                        return /^09\\d{9}$/.test($state.form.value.phoneNumber)
                          ? true
                          : false;
                      },
                      message:
                        "\u0634\u0645\u0627\u0631\u0647 \u062a\u0644\u0641\u0646 \u0645\u0639\u062a\u0628\u0631 \u0648\u0627\u0631\u062f \u06a9\u0646\u06cc\u062f"
                    }
                  ]}
                  validateTrigger={[]}
                >
                  <AntdInput
                    className={classNames("__wab_instance", sty.input__ibWui)}
                  />
                </FormItemWrapper>
                <FormItemWrapper
                  className={classNames("__wab_instance", sty.formField__yOJmo)}
                  label={
                    "\u0646\u0627\u0645 \u0627\u0642\u0627\u0645\u062a\u06af\u0627\u0647"
                  }
                  name={"propertyName"}
                  rules={[{ ruleType: "required" }]}
                >
                  <AntdInput
                    className={classNames("__wab_instance", sty.input__lbbh)}
                  />
                </FormItemWrapper>
                <FormItemWrapper
                  className={classNames("__wab_instance", sty.formField__aSqZr)}
                  label={"\u06a9\u062f \u062c\u0627\u0628\u0627\u0645\u0627"}
                  name={"jabamaPPID"}
                >
                  <AntdInput
                    className={classNames("__wab_instance", sty.input__iuu7O)}
                  />
                </FormItemWrapper>
                <FormItemWrapper
                  className={classNames("__wab_instance", sty.formField__gRvao)}
                  label={"\u06a9\u062f \u062c\u0627\u062c\u06cc\u06af\u0627"}
                  name={"jajigaPPID"}
                >
                  <AntdInput
                    className={classNames("__wab_instance", sty.input__a3HWl)}
                  />
                </FormItemWrapper>
                <FormItemWrapper
                  className={classNames("__wab_instance", sty.formField__rFps)}
                  label={"\u06a9\u062f \u0634\u0628"}
                  name={"shabPPID"}
                >
                  <AntdInput
                    className={classNames("__wab_instance", sty.input__yq1Xd)}
                  />
                </FormItemWrapper>
                <FormItemWrapper
                  className={classNames("__wab_instance", sty.formField__nQc5P)}
                  hidden={true}
                  label={"\u06a9\u062f \u0645\u06cc\u0632\u0628\u0648\u0646"}
                  name={"MizbonPPID"}
                >
                  <AntdInput
                    className={classNames("__wab_instance", sty.input__vW1S8)}
                  />
                </FormItemWrapper>
                <FormItemWrapper
                  className={classNames("__wab_instance", sty.formField__sepdE)}
                  hidden={true}
                  label={"\u06a9\u062f \u0627\u062a\u0627\u0642\u06a9"}
                  name={"OtaghakPPID"}
                >
                  <AntdInput
                    className={classNames("__wab_instance", sty.input__s58Aj)}
                  />
                </FormItemWrapper>
                <FormItemWrapper
                  className={classNames("__wab_instance", sty.formField__fPk2)}
                  hidden={true}
                  label={
                    "\u06a9\u062f \u0645\u06cc\u0647\u0645\u0627\u0646\u200c\u0634\u0648"
                  }
                  name={"MihmanshoPPID"}
                >
                  <AntdInput
                    className={classNames("__wab_instance", sty.input__mdeg)}
                  />
                </FormItemWrapper>
                <FormItemWrapper
                  className={classNames("__wab_instance", sty.formField__bGwLd)}
                  hidden={true}
                  label={"\u06a9\u062f \u0647\u0648\u0645\u0633\u0627"}
                  name={"HomsaPPID"}
                >
                  <AntdInput
                    className={classNames("__wab_instance", sty.input__ghL96)}
                  />
                </FormItemWrapper>
                <AntdButton
                  className={classNames("__wab_instance", sty.button)}
                  onClick={async () => {
                    const $steps = {};

                    $steps["invokeGlobalAction"] = true
                      ? (() => {
                          const actionArgs = {
                            args: [
                              "POST",
                              "https://rentamon-n8n.darkube.app/webhook-test/7d5142b8-8813-4787-a67b-ea84d93d9a48",
                              undefined,
                              (() => {
                                try {
                                  return $state.form.value;
                                } catch (e) {
                                  if (
                                    e instanceof TypeError ||
                                    e?.plasmicType ===
                                      "PlasmicUndefinedDataError"
                                  ) {
                                    return {
                                      username: "0910",
                                      first_name: "alireza",
                                      last_name: "nik",
                                      profile: { profile_pic: "jpg" },
                                      properties: [
                                        {
                                          property_name: "property 1",
                                          property_pic_link: "jpg",
                                          platform_properties: [
                                            {
                                              website: 2,
                                              platform_property_id: "123"
                                            }
                                          ]
                                        },
                                        {
                                          property_name: "property 2",
                                          property_pic_link: "jpg",
                                          platform_properties: [
                                            {
                                              website: 3,
                                              platform_property_id: "123"
                                            }
                                          ]
                                        },
                                        {
                                          property_name: "property 3",
                                          property_pic_link: "jpg",
                                          platform_properties: [
                                            {
                                              website: 4,
                                              platform_property_id: "123"
                                            }
                                          ]
                                        }
                                      ],
                                      tokens: [
                                        {
                                          phone_number: "12345",
                                          token: {
                                            TOKEN: "ab,cd",
                                            AUTHTOKEN: "ab,cd",
                                            CLIENTTOKEN: "ab,cd"
                                          },
                                          website: 2
                                        },
                                        {
                                          phone_number: "12345",
                                          token: {
                                            TOKEN: "ab,cd",
                                            AUTHTOKEN: "ab,cd",
                                            CLIENTTOKEN: "ab,cd"
                                          },
                                          website: 3
                                        },
                                        {
                                          phone_number: "12345",
                                          token: {
                                            TOKEN: "ab,cd",
                                            AUTHTOKEN: "ab,cd",
                                            CLIENTTOKEN: "ab,cd"
                                          },
                                          website: 4
                                        }
                                      ],
                                      balance: 2000000
                                    };
                                  }
                                  throw e;
                                }
                              })()
                            ]
                          };
                          return $globalActions["Fragment.apiRequest"]?.apply(
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

                    $steps["goToPage"] = true
                      ? (() => {
                          const actionArgs = {
                            destination: (() => {
                              try {
                                return "https://rentamon.com/panels";
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
                          };
                          return (({ destination }) => {
                            if (
                              typeof destination === "string" &&
                              destination.startsWith("#")
                            ) {
                              document
                                .getElementById(destination.substr(1))
                                .scrollIntoView({ behavior: "smooth" });
                            } else {
                              __nextRouter?.push(destination);
                            }
                          })?.apply(null, [actionArgs]);
                        })()
                      : undefined;
                    if (
                      $steps["goToPage"] != null &&
                      typeof $steps["goToPage"] === "object" &&
                      typeof $steps["goToPage"].then === "function"
                    ) {
                      $steps["goToPage"] = await $steps["goToPage"];
                    }
                  }}
                  submitsForm={false}
                  type={"primary"}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text
                    )}
                  >
                    {"\u062b\u0628\u062a\u200c\u0646\u0627\u0645"}
                  </div>
                </AntdButton>
              </FormWrapper>
            );
          })()}
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "form", "button", "text"],
  form: ["form", "button", "text"],
  button: ["button", "text"],
  text: ["text"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  form: typeof FormWrapper;
  button: typeof AntdButton;
  text: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicSelfRegistration__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicSelfRegistration__VariantsArgs;
    args?: PlasmicSelfRegistration__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicSelfRegistration__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicSelfRegistration__ArgsType,
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
          internalArgPropNames: PlasmicSelfRegistration__ArgProps,
          internalVariantPropNames: PlasmicSelfRegistration__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicSelfRegistration__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSelfRegistration";
  } else {
    func.displayName = `PlasmicSelfRegistration.${nodeName}`;
  }
  return func;
}

export const PlasmicSelfRegistration = Object.assign(
  // Top-level PlasmicSelfRegistration renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    form: makeNodeComponent("form"),
    button: makeNodeComponent("button"),
    text: makeNodeComponent("text"),

    // Metadata about props expected for PlasmicSelfRegistration
    internalVariantProps: PlasmicSelfRegistration__VariantProps,
    internalArgProps: PlasmicSelfRegistration__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicSelfRegistration;
/* prettier-ignore-end */