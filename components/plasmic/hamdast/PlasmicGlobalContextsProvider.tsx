// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: bE9NMB942w5e6uFrcCxfJN

import * as React from "react";
import { hasVariant, ensureGlobalVariants } from "@plasmicapp/react-web";
import { Fragment } from "@/fragment/fragment"; // plasmic-import: RU9vRSFaHTLI/codeComponent
import { GrowthBook } from "@/fragment/growthbook"; // plasmic-import: eIOuzd2aMPic/codeComponent
import { Splunk } from "@/fragment/splunk"; // plasmic-import: tZh4H4rl7IwR/codeComponent

export interface GlobalContextsProviderProps {
  children?: React.ReactElement;
  fragmentProps?: Partial<
    Omit<React.ComponentProps<typeof Fragment>, "children">
  >;
  growthBookProps?: Partial<
    Omit<React.ComponentProps<typeof GrowthBook>, "children">
  >;
  splunkProps?: Partial<Omit<React.ComponentProps<typeof Splunk>, "children">>;
}

export default function GlobalContextsProvider(
  props: GlobalContextsProviderProps
) {
  const { children, fragmentProps, growthBookProps, splunkProps } = props;

  return (
    <Fragment
      {...fragmentProps}
      apiConfig={
        fragmentProps && "apiConfig" in fragmentProps
          ? fragmentProps.apiConfig!
          : { withCredentials: true }
      }
      previewApiConfig={
        fragmentProps && "previewApiConfig" in fragmentProps
          ? fragmentProps.previewApiConfig!
          : undefined
      }
      rtl={fragmentProps && "rtl" in fragmentProps ? fragmentProps.rtl! : true}
    >
      <GrowthBook
        {...growthBookProps}
        apiHost={
          growthBookProps && "apiHost" in growthBookProps
            ? growthBookProps.apiHost!
            : undefined
        }
        clientKey={
          growthBookProps && "clientKey" in growthBookProps
            ? growthBookProps.clientKey!
            : undefined
        }
        previewAttributes={
          growthBookProps && "previewAttributes" in growthBookProps
            ? growthBookProps.previewAttributes!
            : undefined
        }
      >
        <Splunk
          {...splunkProps}
          defaultApiHost={
            splunkProps && "defaultApiHost" in splunkProps
              ? splunkProps.defaultApiHost!
              : undefined
          }
          defaultApiKey={
            splunkProps && "defaultApiKey" in splunkProps
              ? splunkProps.defaultApiKey!
              : undefined
          }
        >
          {children}
        </Splunk>
      </GrowthBook>
    </Fragment>
  );
}
