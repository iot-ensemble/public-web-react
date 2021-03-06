// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: aTC3q87SvYM316XzoAz9a2
// Component: tCj7FRv5uDKnOP
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
import Navbar from "../../Navbar"; // plasmic-import: Yh3OL_UqnMDQoH/component
import YouTube from "@plasmicpkgs/react-youtube"; // plasmic-import: CHO21V9uYw/codeComponent
import Button from "../../Button"; // plasmic-import: cDQxsDRfT9gIBv/component
import ValueProp from "../../ValueProp"; // plasmic-import: TgzPqT9E_wfNat/component
import PriceCard from "../../PriceCard"; // plasmic-import: Dm_4qJAK1AxCbj/component
import FathymFooter from "../../FathymFooter"; // plasmic-import: KWLt0Ypx6GRqq/component

import { useScreenVariants as useScreenVariants_2MnWPdLissBd6Z } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: 2mnWPdLissBD6Z/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_library_plasmic_color_type_css from "../library_plasmic_color_type/plasmic_library_plasmic_color_type.module.css"; // plasmic-import: seaQhLVS4bbjiGvJJrRwyL/projectcss
import projectcss from "./plasmic_new_iotensemble_com.module.css"; // plasmic-import: aTC3q87SvYM316XzoAz9a2/projectcss
import sty from "./PlasmicLandingPagesDocusaurus.module.css"; // plasmic-import: tCj7FRv5uDKnOP/css

import AppleIcon from "./icons/PlasmicIcon__Apple"; // plasmic-import: 3B5pxrnVxk-ZUY/icon
import HammerIcon from "./icons/PlasmicIcon__Hammer"; // plasmic-import: qrqCHWq7Cs5_QA/icon
import TargetIcon from "./icons/PlasmicIcon__Target"; // plasmic-import: XTkp8IcnsrPIhU/icon
import FastIcon from "./icons/PlasmicIcon__Fast"; // plasmic-import: z9lFrPVzngCt3_/icon
import StrongIcon from "./icons/PlasmicIcon__Strong"; // plasmic-import: TITdVVbg6DA9uE/icon
import CheckIcon from "./icons/PlasmicIcon__Check"; // plasmic-import: hDULe3Rv0s35IQ/icon

export type PlasmicLandingPagesDocusaurus__VariantMembers = {};

export type PlasmicLandingPagesDocusaurus__VariantsArgs = {};
type VariantPropType = keyof PlasmicLandingPagesDocusaurus__VariantsArgs;
export const PlasmicLandingPagesDocusaurus__VariantProps =
  new Array<VariantPropType>();

export type PlasmicLandingPagesDocusaurus__ArgsType = {};
type ArgPropType = keyof PlasmicLandingPagesDocusaurus__ArgsType;
export const PlasmicLandingPagesDocusaurus__ArgProps = new Array<ArgPropType>();

export type PlasmicLandingPagesDocusaurus__OverridesType = {
  root?: p.Flex<"div">;
  navbar?: p.Flex<typeof Navbar>;
  foreground?: p.Flex<"div">;
  youTube?: p.Flex<typeof YouTube>;
  foreground2?: p.Flex<"div">;
  h1?: p.Flex<"h1">;
  section?: p.Flex<"section">;
  foreground3?: p.Flex<"div">;
  h2?: p.Flex<"h2">;
  fathymFooter?: p.Flex<typeof FathymFooter>;
};

export interface DefaultLandingPagesDocusaurusProps {
  className?: string;
}

function PlasmicLandingPagesDocusaurus__RenderFunc(props: {
  variants: PlasmicLandingPagesDocusaurus__VariantsArgs;
  args: PlasmicLandingPagesDocusaurus__ArgsType;
  overrides: PlasmicLandingPagesDocusaurus__OverridesType;

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

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants_2MnWPdLissBd6Z()
  });

  return (
    <React.Fragment>
      {}
      {}

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
            plasmic_library_plasmic_color_type_css.plasmic_tokens,
            sty.root
          )}
        >
          <Navbar
            data-plasmic-name={"navbar"}
            data-plasmic-override={overrides.navbar}
            className={classNames("__wab_instance", sty.navbar)}
          />

          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__luDKp)}
          >
            <p.Stack
              as={"div"}
              data-plasmic-name={"foreground"}
              data-plasmic-override={overrides.foreground}
              hasGap={true}
              className={classNames(projectcss.all, sty.foreground)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__cgerp
                )}
              >
                {"Docusaurus Deployments\nwith Fathym"}
              </div>

              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__pFP5
                )}
              >
                {
                  "Create, build, and deploy your next Docusaurus app with Fathym"
                }
              </div>
            </p.Stack>

            <YouTube
              data-plasmic-name={"youTube"}
              data-plasmic-override={overrides.youTube}
              className={classNames("__wab_instance", sty.youTube)}
              videoId={"bmFvFF9A348" as const}
            />

            <p.Stack
              as={"div"}
              data-plasmic-name={"foreground2"}
              data-plasmic-override={overrides.foreground2}
              hasGap={true}
              className={classNames(projectcss.all, sty.foreground2)}
            >
              <div className={classNames(projectcss.all, sty.columns__t1Dj3)}>
                <div className={classNames(projectcss.all, sty.column__xRzcE)}>
                  <Button
                    className={classNames("__wab_instance", sty.button__agDdH)}
                    color={"blue" as const}
                    link={
                      "/dashboard/create-project/recipe/docusaurus" as const
                    }
                  >
                    {"Get Started for Free"}
                  </Button>
                </div>

                <div className={classNames(projectcss.all, sty.column__iUHyg)}>
                  <a
                    className={classNames(
                      projectcss.all,
                      projectcss.a,
                      projectcss.__wab_text,
                      sty.link__ffDzz
                    )}
                    href={
                      "/docs/guides/deploying/site-builders/docusaurus-sites" as const
                    }
                  >
                    {"Learn more >"}
                  </a>
                </div>
              </div>
            </p.Stack>

            <div className={classNames(projectcss.all, sty.columns__pEatL)}>
              <div className={classNames(projectcss.all, sty.column__pHfNt)}>
                <div className={classNames(projectcss.all, sty.freeBox__jXqm4)}>
                  <h1
                    data-plasmic-name={"h1"}
                    data-plasmic-override={overrides.h1}
                    className={classNames(
                      projectcss.all,
                      projectcss.h1,
                      projectcss.__wab_text,
                      sty.h1
                    )}
                  >
                    {"Do it Yourself"}
                  </h1>

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__qFhkV
                    )}
                  >
                    {
                      "Get started now following the simple Docusaurus deployment guide, have Docusaurus hosted on your domain in minutes."
                    }
                  </div>
                </div>

                <a
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    projectcss.__wab_text,
                    sty.link__bgYpT
                  )}
                  href={
                    "/docs/guides/deploying/site-builders/docusaurus-sites" as const
                  }
                >
                  {"Read Documentation >"}
                </a>
              </div>
            </div>
          </p.Stack>

          <section
            data-plasmic-name={"section"}
            data-plasmic-override={overrides.section}
            className={classNames(projectcss.all, sty.section)}
          >
            <p.Stack
              as={"div"}
              data-plasmic-name={"foreground3"}
              data-plasmic-override={overrides.foreground3}
              hasGap={true}
              className={classNames(projectcss.all, sty.foreground3)}
            >
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__uNsa2)}
              >
                <div className={classNames(projectcss.all, sty.freeBox__iXoqt)}>
                  <h2
                    data-plasmic-name={"h2"}
                    data-plasmic-override={overrides.h2}
                    className={classNames(
                      projectcss.all,
                      projectcss.h2,
                      projectcss.__wab_text,
                      sty.h2
                    )}
                  >
                    {"Why deploy Docusaurus?"}
                  </h2>
                </div>

                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__iLa4I
                  )}
                >
                  {
                    "Build optimized websites quickly, focus on your content.\n\nSave time and focus on your project's documentation. Simply write docs and blog posts with Markdown/MDX and Docusaurus will publish a set of static HTML files ready to serve. You can even embed JSX components into your Markdown thanks to MDX.\n\nExtend or customize your project's layout by reusing React. Docusaurus can be extended while reusing the same header and footer."
                  }
                </div>
              </p.Stack>

              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__drfgg)}
              >
                {true ? (
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.columns__qGf2)}
                  >
                    <div
                      className={classNames(projectcss.all, sty.column__eTlUk)}
                    >
                      <ValueProp
                        className={classNames(
                          "__wab_instance",
                          sty.valueProp___6AfS5
                        )}
                        darkBackground={true}
                        description={
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__hpcsv
                            )}
                          >
                            {
                              "Nulla odio mauris enim parturient adipiscing vestibulum inceptos."
                            }
                          </div>
                        }
                        icon={
                          <HammerIcon
                            className={classNames(
                              projectcss.all,
                              sty.svg__on6B
                            )}
                            role={"img"}
                          />
                        }
                        title={"Harder"}
                        vertical={true}
                      />
                    </div>

                    <div
                      className={classNames(projectcss.all, sty.column__a15Ye)}
                    >
                      <ValueProp
                        className={classNames(
                          "__wab_instance",
                          sty.valueProp__poFh
                        )}
                        darkBackground={true}
                        description={
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__f6W8P
                            )}
                          >
                            {
                              "Consequat scelerisque a eros taciti nisl a sodales."
                            }
                          </div>
                        }
                        icon={
                          <TargetIcon
                            className={classNames(
                              projectcss.all,
                              sty.svg__d0HT
                            )}
                            role={"img"}
                          />
                        }
                        title={"Better"}
                        vertical={true}
                      />
                    </div>

                    <div
                      className={classNames(projectcss.all, sty.column__m9Rai)}
                    >
                      <ValueProp
                        className={classNames(
                          "__wab_instance",
                          sty.valueProp___3CNc5
                        )}
                        darkBackground={true}
                        description={
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__tf4LP
                            )}
                          >
                            {
                              "Varius ad malesuada ullamcorper cursus scelerisque a a."
                            }
                          </div>
                        }
                        icon={
                          <FastIcon
                            className={classNames(
                              projectcss.all,
                              sty.svg__undGi
                            )}
                            role={"img"}
                          />
                        }
                        title={"Faster"}
                        vertical={true}
                      />
                    </div>

                    <div
                      className={classNames(projectcss.all, sty.column__y65T)}
                    >
                      <ValueProp
                        className={classNames(
                          "__wab_instance",
                          sty.valueProp__b8QjI
                        )}
                        darkBackground={true}
                        description={
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__oqYib
                            )}
                          >
                            {
                              "Ut eu nam nostra taciti congue adipiscing curabitur."
                            }
                          </div>
                        }
                        icon={
                          <StrongIcon
                            className={classNames(
                              projectcss.all,
                              sty.svg__hTAyD
                            )}
                            role={"img"}
                          />
                        }
                        title={"Stronger"}
                        vertical={true}
                      />
                    </div>
                  </p.Stack>
                ) : null}
              </p.Stack>

              <div className={classNames(projectcss.all, sty.freeBox__sPoD)}>
                <Button
                  className={classNames("__wab_instance", sty.button__css1G)}
                  color={"blue" as const}
                  link={"/dashboard/create-project/recipe/docusaurus" as const}
                >
                  {"Get Started for Free"}
                </Button>

                <a
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    projectcss.__wab_text,
                    sty.link__idYu
                  )}
                  href={
                    "/docs/guides/deploying/site-builders/docusaurus-sites" as const
                  }
                >
                  {"Learn more >"}
                </a>
              </div>

              {true ? (
                <div className={classNames(projectcss.all, sty.columns__m7Ef3)}>
                  <div
                    className={classNames(projectcss.all, sty.column__iWpbq)}
                  />

                  <div
                    className={classNames(projectcss.all, sty.column__yzekh)}
                  />
                </div>
              ) : null}
            </p.Stack>
          </section>

          {true ? (
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__ghPhq)}
            >
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__czVP)}
              >
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__zGyjF)}
                >
                  <div
                    className={classNames(projectcss.all, sty.freeBox__xd8C)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__zlyYx
                      )}
                    >
                      {"Pricing plans"}
                    </div>
                  </div>

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__fYcOo
                    )}
                  >
                    {
                      "Nascetur nascetur ridiculus scelerisque adipiscing a nascetur varius sed eu a ad semper a est nec litora ante at orci rhoncus a varius auctor aliquam inceptos vestibulum ridiculus."
                    }
                  </div>
                </p.Stack>

                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__szCyx)}
                >
                  <PriceCard
                    className={classNames(
                      "__wab_instance",
                      sty.priceCard__kxIq2
                    )}
                    description={
                      <React.Fragment>
                        <ValueProp
                          className={classNames(
                            "__wab_instance",
                            sty.valueProp__hIw05
                          )}
                          description={"Nulla odio mauris."}
                          flatIcon={true}
                          icon={
                            <CheckIcon
                              className={classNames(
                                projectcss.all,
                                sty.svg___3AuFe
                              )}
                              role={"img"}
                            />
                          }
                          noTitle={true}
                        />

                        <ValueProp
                          className={classNames(
                            "__wab_instance",
                            sty.valueProp__zz2Vp
                          )}
                          description={"Nulla odio mauris."}
                          flatIcon={true}
                          icon={
                            <CheckIcon
                              className={classNames(
                                projectcss.all,
                                sty.svg__dsbb2
                              )}
                              role={"img"}
                            />
                          }
                          noTitle={true}
                        />
                      </React.Fragment>
                    }
                    dollars={"0"}
                  />

                  <PriceCard
                    action={
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__rbUa5
                        )}
                      >
                        {"Buy Pro"}
                      </div>
                    }
                    className={classNames(
                      "__wab_instance",
                      sty.priceCard__mHpU
                    )}
                    description={
                      <React.Fragment>
                        <ValueProp
                          className={classNames(
                            "__wab_instance",
                            sty.valueProp__kqYpj
                          )}
                          description={"Nulla odio mauris."}
                          flatIcon={true}
                          icon={
                            <CheckIcon
                              className={classNames(
                                projectcss.all,
                                sty.svg___56SH
                              )}
                              role={"img"}
                            />
                          }
                          noTitle={true}
                        />

                        <ValueProp
                          className={classNames(
                            "__wab_instance",
                            sty.valueProp__c7PzD
                          )}
                          description={"Nulla odio mauris."}
                          flatIcon={true}
                          icon={
                            <CheckIcon
                              className={classNames(
                                projectcss.all,
                                sty.svg__hbnWn
                              )}
                              role={"img"}
                            />
                          }
                          noTitle={true}
                        />

                        <ValueProp
                          className={classNames(
                            "__wab_instance",
                            sty.valueProp__mqi4T
                          )}
                          description={"Nulla odio mauris."}
                          flatIcon={true}
                          icon={
                            <CheckIcon
                              className={classNames(
                                projectcss.all,
                                sty.svg__fSaNs
                              )}
                              role={"img"}
                            />
                          }
                          noTitle={true}
                        />
                      </React.Fragment>
                    }
                    dollars={"8"}
                    label={
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__gzx9Q
                        )}
                      >
                        {"Pro"}
                      </div>
                    }
                  />

                  <PriceCard
                    action={
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__xtXzh
                        )}
                      >
                        {"Buy Team"}
                      </div>
                    }
                    className={classNames(
                      "__wab_instance",
                      sty.priceCard__nuhFk
                    )}
                    description={
                      <React.Fragment>
                        <ValueProp
                          className={classNames(
                            "__wab_instance",
                            sty.valueProp__zjVcw
                          )}
                          description={"Nulla odio mauris."}
                          flatIcon={true}
                          icon={
                            <CheckIcon
                              className={classNames(
                                projectcss.all,
                                sty.svg___0XvoZ
                              )}
                              role={"img"}
                            />
                          }
                          noTitle={true}
                        />

                        <ValueProp
                          className={classNames(
                            "__wab_instance",
                            sty.valueProp__gmpF7
                          )}
                          description={"Nulla odio mauris."}
                          flatIcon={true}
                          icon={
                            <CheckIcon
                              className={classNames(
                                projectcss.all,
                                sty.svg__jw5Sa
                              )}
                              role={"img"}
                            />
                          }
                          noTitle={true}
                        />

                        <ValueProp
                          className={classNames(
                            "__wab_instance",
                            sty.valueProp__qVaIy
                          )}
                          description={"Nulla odio mauris."}
                          flatIcon={true}
                          icon={
                            <CheckIcon
                              className={classNames(
                                projectcss.all,
                                sty.svg__nRhJ9
                              )}
                              role={"img"}
                            />
                          }
                          noTitle={true}
                        />

                        <ValueProp
                          className={classNames(
                            "__wab_instance",
                            sty.valueProp__yr03Q
                          )}
                          description={"Nulla odio mauris."}
                          flatIcon={true}
                          icon={
                            <CheckIcon
                              className={classNames(
                                projectcss.all,
                                sty.svg__xeGve
                              )}
                              role={"img"}
                            />
                          }
                          noTitle={true}
                        />
                      </React.Fragment>
                    }
                    dollars={"16"}
                    label={
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__fmwcM
                        )}
                      >
                        {"Team"}
                      </div>
                    }
                  />

                  <PriceCard
                    action={
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text___6TAnh
                        )}
                      >
                        {"Contact us"}
                      </div>
                    }
                    className={classNames(
                      "__wab_instance",
                      sty.priceCard__kco4R
                    )}
                    description={
                      <React.Fragment>
                        <ValueProp
                          className={classNames(
                            "__wab_instance",
                            sty.valueProp___8Qa4U
                          )}
                          description={"Nulla odio mauris."}
                          flatIcon={true}
                          icon={
                            <CheckIcon
                              className={classNames(
                                projectcss.all,
                                sty.svg__f5Ni5
                              )}
                              role={"img"}
                            />
                          }
                          noTitle={true}
                        />

                        <ValueProp
                          className={classNames(
                            "__wab_instance",
                            sty.valueProp__lfuk
                          )}
                          description={"Nulla odio mauris."}
                          flatIcon={true}
                          icon={
                            <CheckIcon
                              className={classNames(
                                projectcss.all,
                                sty.svg__s6R8U
                              )}
                              role={"img"}
                            />
                          }
                          noTitle={true}
                        />

                        <ValueProp
                          className={classNames(
                            "__wab_instance",
                            sty.valueProp__mRBza
                          )}
                          description={"Nulla odio mauris."}
                          flatIcon={true}
                          icon={
                            <CheckIcon
                              className={classNames(
                                projectcss.all,
                                sty.svg__sWtRp
                              )}
                              role={"img"}
                            />
                          }
                          noTitle={true}
                        />

                        <ValueProp
                          className={classNames(
                            "__wab_instance",
                            sty.valueProp__jw8Zg
                          )}
                          description={"Nulla odio mauris."}
                          flatIcon={true}
                          icon={
                            <CheckIcon
                              className={classNames(
                                projectcss.all,
                                sty.svg__uThDu
                              )}
                              role={"img"}
                            />
                          }
                          noTitle={true}
                        />
                      </React.Fragment>
                    }
                    dollars={"?"}
                    label={
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__z3WiR
                        )}
                      >
                        {"Enterprise"}
                      </div>
                    }
                    primary={true}
                  />
                </p.Stack>
              </p.Stack>
            </p.Stack>
          ) : null}

          <FathymFooter
            data-plasmic-name={"fathymFooter"}
            data-plasmic-override={overrides.fathymFooter}
            className={classNames("__wab_instance", sty.fathymFooter)}
          />
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "navbar",
    "foreground",
    "youTube",
    "foreground2",
    "h1",
    "section",
    "foreground3",
    "h2",
    "fathymFooter"
  ],
  navbar: ["navbar"],
  foreground: ["foreground"],
  youTube: ["youTube"],
  foreground2: ["foreground2"],
  h1: ["h1"],
  section: ["section", "foreground3", "h2"],
  foreground3: ["foreground3", "h2"],
  h2: ["h2"],
  fathymFooter: ["fathymFooter"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  navbar: typeof Navbar;
  foreground: "div";
  youTube: typeof YouTube;
  foreground2: "div";
  h1: "h1";
  section: "section";
  foreground3: "div";
  h2: "h2";
  fathymFooter: typeof FathymFooter;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicLandingPagesDocusaurus__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicLandingPagesDocusaurus__VariantsArgs;
    args?: PlasmicLandingPagesDocusaurus__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicLandingPagesDocusaurus__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicLandingPagesDocusaurus__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicLandingPagesDocusaurus__ArgProps,
          internalVariantPropNames: PlasmicLandingPagesDocusaurus__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicLandingPagesDocusaurus__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicLandingPagesDocusaurus";
  } else {
    func.displayName = `PlasmicLandingPagesDocusaurus.${nodeName}`;
  }
  return func;
}

export const PlasmicLandingPagesDocusaurus = Object.assign(
  // Top-level PlasmicLandingPagesDocusaurus renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    navbar: makeNodeComponent("navbar"),
    foreground: makeNodeComponent("foreground"),
    youTube: makeNodeComponent("youTube"),
    foreground2: makeNodeComponent("foreground2"),
    h1: makeNodeComponent("h1"),
    section: makeNodeComponent("section"),
    foreground3: makeNodeComponent("foreground3"),
    h2: makeNodeComponent("h2"),
    fathymFooter: makeNodeComponent("fathymFooter"),

    // Metadata about props expected for PlasmicLandingPagesDocusaurus
    internalVariantProps: PlasmicLandingPagesDocusaurus__VariantProps,
    internalArgProps: PlasmicLandingPagesDocusaurus__ArgProps
  }
);

export default PlasmicLandingPagesDocusaurus;
/* prettier-ignore-end */
