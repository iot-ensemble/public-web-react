// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: aTC3q87SvYM316XzoAz9a2
// Component: KWLt0Ypx6GRqq
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

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_library_plasmic_color_type_css from "../library_plasmic_color_type/plasmic_library_plasmic_color_type.module.css"; // plasmic-import: seaQhLVS4bbjiGvJJrRwyL/projectcss
import projectcss from "./plasmic_new_iotensemble_com.module.css"; // plasmic-import: aTC3q87SvYM316XzoAz9a2/projectcss
import sty from "./PlasmicFathymFooter.module.css"; // plasmic-import: KWLt0Ypx6GRqq/css

import TwitterIconIcon from "./icons/PlasmicIcon__TwitterIcon"; // plasmic-import: 4m3SDQBsjjDkKR/icon
import GithubIconIcon from "./icons/PlasmicIcon__GithubIcon"; // plasmic-import: LTzzWEDlK27LZz/icon
import FacebookIconIcon from "./icons/PlasmicIcon__FacebookIcon"; // plasmic-import: z4fKQ2fAaf7QQq/icon
import fathymLogoAqua01400PxlspngNKryK7JNvLzEjk from "./images/fathymLogoAqua01400Pxlspng.png"; // plasmic-import: nKryK7jNvLzEjk/picture
import copyrightIconXVAy7EimMkou8 from "./images/copyrightIcon.png"; // plasmic-import: xVAy7eimMkou-8/picture

export type PlasmicFathymFooter__VariantMembers = {};

export type PlasmicFathymFooter__VariantsArgs = {};
type VariantPropType = keyof PlasmicFathymFooter__VariantsArgs;
export const PlasmicFathymFooter__VariantProps = new Array<VariantPropType>();

export type PlasmicFathymFooter__ArgsType = {};
type ArgPropType = keyof PlasmicFathymFooter__ArgsType;
export const PlasmicFathymFooter__ArgProps = new Array<ArgPropType>();

export type PlasmicFathymFooter__OverridesType = {
  root?: p.Flex<"div">;
  fathymFramework?: p.Flex<"a">;
  ioTEnsemble?: p.Flex<"a">;
  habistack?: p.Flex<"a">;
  docs?: p.Flex<"a">;
  blog?: p.Flex<"a">;
  support?: p.Flex<"a">;
  enterpriseAgreement?: p.Flex<"a">;
  termsOfService?: p.Flex<"a">;
  privacyPolicy?: p.Flex<"a">;
  httpstwittercomFathymIt?: p.Flex<"a">;
  httpsgithubcomfathym?: p.Flex<"a">;
  httpswwwfacebookcomFathymInc?: p.Flex<"a">;
};

export interface DefaultFathymFooterProps {
  className?: string;
}

function PlasmicFathymFooter__RenderFunc(props: {
  variants: PlasmicFathymFooter__VariantsArgs;
  args: PlasmicFathymFooter__ArgsType;
  overrides: PlasmicFathymFooter__OverridesType;

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
        plasmic_library_plasmic_color_type_css.plasmic_tokens,
        sty.root
      )}
    >
      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__ac75G)}
      >
        <div className={classNames(projectcss.all, sty.freeBox__oUjza)} />

        <p.PlasmicImg
          alt={""}
          className={classNames(sty.img___2M4Lx)}
          displayHeight={"75px" as const}
          displayMaxHeight={"75%" as const}
          displayMaxWidth={"none" as const}
          displayMinHeight={"0" as const}
          displayMinWidth={"0" as const}
          displayWidth={"auto" as const}
          loading={"lazy" as const}
          src={{
            src: fathymLogoAqua01400PxlspngNKryK7JNvLzEjk,
            fullWidth: 400,
            fullHeight: 129,
            aspectRatio: undefined
          }}
        />

        <div className={classNames(projectcss.all, sty.freeBox__vbuY3)}>
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__y8FpD)}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__tH8Aq
              )}
            >
              {"Products"}
            </div>

            <a
              data-plasmic-name={"fathymFramework"}
              data-plasmic-override={overrides.fathymFramework}
              className={classNames(
                projectcss.all,
                projectcss.a,
                sty.fathymFramework
              )}
              href={"https://www.fathym.com/" as const}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__itX9A
                )}
              >
                {"Fathym Platform"}
              </div>
            </a>

            <a
              data-plasmic-name={"ioTEnsemble"}
              data-plasmic-override={overrides.ioTEnsemble}
              className={classNames(
                projectcss.all,
                projectcss.a,
                sty.ioTEnsemble
              )}
              href={"https://www.fathym.com/iot" as const}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__qMDni
                )}
              >
                {"IoT Ensemble"}
              </div>
            </a>

            <a
              data-plasmic-name={"habistack"}
              data-plasmic-override={overrides.habistack}
              className={classNames(
                projectcss.all,
                projectcss.a,
                sty.habistack
              )}
              href={"https://www.fathym.com/forecast" as const}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__h4Kbo
                )}
              >
                {"Habistack"}
              </div>
            </a>
          </p.Stack>

          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__wBfDz)}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__daFw3
              )}
            >
              {"Resources"}
            </div>

            <a
              data-plasmic-name={"docs"}
              data-plasmic-override={overrides.docs}
              className={classNames(projectcss.all, projectcss.a, sty.docs)}
              href={"/iot/docs/" as const}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__lTd90
                )}
              >
                {"Docs"}
              </div>
            </a>

            {true ? (
              <a
                data-plasmic-name={"blog"}
                data-plasmic-override={overrides.blog}
                className={classNames(projectcss.all, projectcss.a, sty.blog)}
                href={"https://www.fathym.com/iot/blog" as const}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__nvTw2
                  )}
                >
                  {"Blog"}
                </div>
              </a>
            ) : null}

            <a
              data-plasmic-name={"support"}
              data-plasmic-override={overrides.support}
              className={classNames(projectcss.all, projectcss.a, sty.support)}
              href={"mailto:support@fathym.com" as const}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___4L90X
                )}
              >
                {"Support"}
              </div>
            </a>
          </p.Stack>

          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__iC1F8)}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__rBCfD
              )}
            >
              {"Company"}
            </div>

            <a
              data-plasmic-name={"enterpriseAgreement"}
              data-plasmic-override={overrides.enterpriseAgreement}
              className={classNames(
                projectcss.all,
                projectcss.a,
                sty.enterpriseAgreement
              )}
              href={"https://www.fathym.com/enterprise-agreement/" as const}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__zreb5
                )}
              >
                {"Enterprise Agreement"}
              </div>
            </a>

            <a
              data-plasmic-name={"termsOfService"}
              data-plasmic-override={overrides.termsOfService}
              className={classNames(
                projectcss.all,
                projectcss.a,
                sty.termsOfService
              )}
              href={"https://www.fathym.com/terms-of-services/" as const}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__dHzC
                )}
              >
                {"Terms of Service"}
              </div>
            </a>

            <a
              data-plasmic-name={"privacyPolicy"}
              data-plasmic-override={overrides.privacyPolicy}
              className={classNames(
                projectcss.all,
                projectcss.a,
                sty.privacyPolicy
              )}
              href={"https://www.fathym.com/privacy-policy/" as const}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__qf5S
                )}
              >
                {"Privacy Policy"}
              </div>
            </a>
          </p.Stack>
        </div>

        <div className={classNames(projectcss.all, sty.freeBox__eLHxK)} />

        <div className={classNames(projectcss.all, sty.freeBox__hwQrI)}>
          <div className={classNames(projectcss.all, sty.freeBox___7E3F)}>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text___8AvzY
              )}
            >
              {"Copyright "}
            </div>

            <p.PlasmicImg
              alt={""}
              className={classNames(sty.img__hoPJz)}
              displayHeight={"auto" as const}
              displayMaxHeight={"none" as const}
              displayMaxWidth={"100%" as const}
              displayMinHeight={"0" as const}
              displayMinWidth={"0" as const}
              displayWidth={"auto" as const}
              loading={"lazy" as const}
              src={{
                src: copyrightIconXVAy7EimMkou8,
                fullWidth: 24,
                fullHeight: 24,
                aspectRatio: undefined
              }}
            />

            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__rgal
              )}
            >
              {" 2022 Fathym. All rights reserved."}
            </div>
          </div>

          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__uAdtz)}
          >
            <a
              data-plasmic-name={"httpstwittercomFathymIt"}
              data-plasmic-override={overrides.httpstwittercomFathymIt}
              className={classNames(
                projectcss.all,
                projectcss.a,
                sty.httpstwittercomFathymIt
              )}
              href={"https://twitter.com/FathymIt" as const}
            >
              <TwitterIconIcon
                className={classNames(projectcss.all, sty.svg__rsCyO)}
                role={"img"}
              />
            </a>

            <a
              data-plasmic-name={"httpsgithubcomfathym"}
              data-plasmic-override={overrides.httpsgithubcomfathym}
              className={classNames(
                projectcss.all,
                projectcss.a,
                sty.httpsgithubcomfathym
              )}
              href={"https://github.com/fathym" as const}
            >
              <GithubIconIcon
                className={classNames(projectcss.all, sty.svg__p3EiF)}
                role={"img"}
              />
            </a>

            <a
              data-plasmic-name={"httpswwwfacebookcomFathymInc"}
              data-plasmic-override={overrides.httpswwwfacebookcomFathymInc}
              className={classNames(
                projectcss.all,
                projectcss.a,
                sty.httpswwwfacebookcomFathymInc
              )}
              href={"https://www.facebook.com/FathymInc/" as const}
            >
              <FacebookIconIcon
                className={classNames(projectcss.all, sty.svg__babK)}
                role={"img"}
              />
            </a>
          </p.Stack>
        </div>
      </p.Stack>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "fathymFramework",
    "ioTEnsemble",
    "habistack",
    "docs",
    "blog",
    "support",
    "enterpriseAgreement",
    "termsOfService",
    "privacyPolicy",
    "httpstwittercomFathymIt",
    "httpsgithubcomfathym",
    "httpswwwfacebookcomFathymInc"
  ],
  fathymFramework: ["fathymFramework"],
  ioTEnsemble: ["ioTEnsemble"],
  habistack: ["habistack"],
  docs: ["docs"],
  blog: ["blog"],
  support: ["support"],
  enterpriseAgreement: ["enterpriseAgreement"],
  termsOfService: ["termsOfService"],
  privacyPolicy: ["privacyPolicy"],
  httpstwittercomFathymIt: ["httpstwittercomFathymIt"],
  httpsgithubcomfathym: ["httpsgithubcomfathym"],
  httpswwwfacebookcomFathymInc: ["httpswwwfacebookcomFathymInc"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  fathymFramework: "a";
  ioTEnsemble: "a";
  habistack: "a";
  docs: "a";
  blog: "a";
  support: "a";
  enterpriseAgreement: "a";
  termsOfService: "a";
  privacyPolicy: "a";
  httpstwittercomFathymIt: "a";
  httpsgithubcomfathym: "a";
  httpswwwfacebookcomFathymInc: "a";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicFathymFooter__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicFathymFooter__VariantsArgs;
    args?: PlasmicFathymFooter__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicFathymFooter__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicFathymFooter__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicFathymFooter__ArgProps,
          internalVariantPropNames: PlasmicFathymFooter__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicFathymFooter__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicFathymFooter";
  } else {
    func.displayName = `PlasmicFathymFooter.${nodeName}`;
  }
  return func;
}

export const PlasmicFathymFooter = Object.assign(
  // Top-level PlasmicFathymFooter renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    fathymFramework: makeNodeComponent("fathymFramework"),
    ioTEnsemble: makeNodeComponent("ioTEnsemble"),
    habistack: makeNodeComponent("habistack"),
    docs: makeNodeComponent("docs"),
    blog: makeNodeComponent("blog"),
    support: makeNodeComponent("support"),
    enterpriseAgreement: makeNodeComponent("enterpriseAgreement"),
    termsOfService: makeNodeComponent("termsOfService"),
    privacyPolicy: makeNodeComponent("privacyPolicy"),
    httpstwittercomFathymIt: makeNodeComponent("httpstwittercomFathymIt"),
    httpsgithubcomfathym: makeNodeComponent("httpsgithubcomfathym"),
    httpswwwfacebookcomFathymInc: makeNodeComponent(
      "httpswwwfacebookcomFathymInc"
    ),

    // Metadata about props expected for PlasmicFathymFooter
    internalVariantProps: PlasmicFathymFooter__VariantProps,
    internalArgProps: PlasmicFathymFooter__ArgProps
  }
);

export default PlasmicFathymFooter;
/* prettier-ignore-end */
