// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: aTC3q87SvYM316XzoAz9a2
// Component: wE-90FUopHx0Mv
import * as React from "react";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import Button from "../../Button"; // plasmic-import: cDQxsDRfT9gIBv/component
import Divider from "../../Divider"; // plasmic-import: n7nKKkrE_Z7brU/component
import TextInput from "../../TextInput"; // plasmic-import: xY0UFPROmDHytA/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_library_plasmic_color_type_css from "../library_plasmic_color_type/plasmic_library_plasmic_color_type.module.css"; // plasmic-import: seaQhLVS4bbjiGvJJrRwyL/projectcss
import projectcss from "./plasmic_new_iotensemble_com.module.css"; // plasmic-import: aTC3q87SvYM316XzoAz9a2/projectcss
import sty from "./PlasmicSignUpPrompt.module.css"; // plasmic-import: wE-90FUopHx0Mv/css

import AppleIcon from "./icons/PlasmicIcon__Apple"; // plasmic-import: 3B5pxrnVxk-ZUY/icon
import GoogleIcon from "./icons/PlasmicIcon__Google"; // plasmic-import: dQFXksQnvh_dX1/icon
import SearchIcon from "./icons/PlasmicIcon__Search"; // plasmic-import: VBpn1nG1piL2pi/icon
import CheckIcon from "./icons/PlasmicIcon__Check"; // plasmic-import: hDULe3Rv0s35IQ/icon
import WandIcon from "./icons/PlasmicIcon__Wand"; // plasmic-import: 50NSLDl-jMDbDx/icon

export type PlasmicSignUpPrompt__VariantMembers = {};

export type PlasmicSignUpPrompt__VariantsArgs = {};
type VariantPropType = keyof PlasmicSignUpPrompt__VariantsArgs;
export const PlasmicSignUpPrompt__VariantProps = new Array<VariantPropType>();

export type PlasmicSignUpPrompt__ArgsType = {};
type ArgPropType = keyof PlasmicSignUpPrompt__ArgsType;
export const PlasmicSignUpPrompt__ArgProps = new Array<ArgPropType>();

export type PlasmicSignUpPrompt__OverridesType = {
  root?: p.Flex<"div">;
};

export interface DefaultSignUpPromptProps {
  className?: string;
}

function PlasmicSignUpPrompt__RenderFunc(props: {
  variants: PlasmicSignUpPrompt__VariantsArgs;
  args: PlasmicSignUpPrompt__ArgsType;
  overrides: PlasmicSignUpPrompt__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(
    () =>
      Object.assign(
        {},

        props.args
      ),
    [props.args]
  );

  const $props = args;

  return (
    <p.Stack
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
        plasmic_library_plasmic_color_type_css.plasmic_tokens,
        sty.root
      )}
    >
      <div className={classNames(projectcss.all, sty.freeBox__pUzGi)}>
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__kv83O)}
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__gZouU
            )}
          >
            {"Sign up with"}
          </div>

          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__e7P6B)}
          >
            <Button
              className={classNames("__wab_instance", sty.button__pVw9)}
              outline={true}
              showStartIcon={true}
            >
              {"Apple"}
            </Button>

            <Button
              className={classNames("__wab_instance", sty.button__yDx0E)}
              outline={true}
              showStartIcon={true}
              startIcon={
                <GoogleIcon
                  className={classNames(projectcss.all, sty.svg__oaPBy)}
                  role={"img"}
                />
              }
            >
              {"Google"}
            </Button>
          </p.Stack>

          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__ax86M)}
          >
            <Divider
              className={classNames("__wab_instance", sty.divider___3BwsC)}
            />

            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__ycuxF
              )}
            >
              {"Or"}
            </div>

            <Divider
              className={classNames("__wab_instance", sty.divider__ecbGe)}
            />
          </p.Stack>

          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__hfIyv)}
          >
            <TextInput
              className={classNames("__wab_instance", sty.textInput___8Ck4S)}
              placeholder={"Full Name" as const}
            />

            <TextInput
              className={classNames("__wab_instance", sty.textInput__glzV)}
              placeholder={"Email" as const}
            />

            <TextInput
              className={classNames("__wab_instance", sty.textInput__ciLy)}
              placeholder={"Password" as const}
            />
          </p.Stack>

          <Button
            className={classNames("__wab_instance", sty.button__fc0Dy)}
            color={"indigo" as const}
            endIcon={
              <WandIcon
                className={classNames(projectcss.all, sty.svg__qNJk1)}
                role={"img"}
              />
            }
          >
            {"Start your account"}
          </Button>
        </p.Stack>

        <Divider className={classNames("__wab_instance", sty.divider__b5I)} />

        <div className={classNames(projectcss.all, sty.freeBox__uYhQ)}>
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__dxy
            )}
          >
            {
              "A cras sagittis odio vestibulum pulvinar a eget hendrerit id vestibulum a leo sociosqu dictumst dictumst natoque magnis parturient."
            }
          </div>
        </div>
      </div>
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicSignUpPrompt__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicSignUpPrompt__VariantsArgs;
    args?: PlasmicSignUpPrompt__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicSignUpPrompt__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicSignUpPrompt__ArgsType, ReservedPropsType> &
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
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicSignUpPrompt__ArgProps,
          internalVariantPropNames: PlasmicSignUpPrompt__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicSignUpPrompt__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSignUpPrompt";
  } else {
    func.displayName = `PlasmicSignUpPrompt.${nodeName}`;
  }
  return func;
}

export const PlasmicSignUpPrompt = Object.assign(
  // Top-level PlasmicSignUpPrompt renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicSignUpPrompt
    internalVariantProps: PlasmicSignUpPrompt__VariantProps,
    internalArgProps: PlasmicSignUpPrompt__ArgProps
  }
);

export default PlasmicSignUpPrompt;
/* prettier-ignore-end */
