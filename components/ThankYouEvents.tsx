"use client";

import { useEffect } from "react";
import { trackEvent, trackMetaLead } from "@/lib/analytics";

export function ThankYouEvents() {
  useEffect(() => {
    try {
      if (sessionStorage.getItem("csh_ca_ty_tracked")) return;
      sessionStorage.setItem("csh_ca_ty_tracked", "1");
    } catch {
      /* continue */
    }
    trackEvent("form_submit");
    trackEvent("generate_lead");
    trackMetaLead();
  }, []);
  return null;
}
