"use client";

import { useEffect } from "react";

/**
 * Supabase auth links (invite, magic link, recovery) may land on the site URL
 * with tokens in the hash or a ?code= param. Any page other than the portal
 * forwards them to the portal so the session is picked up there.
 */
export default function AuthRedirect() {
  useEffect(() => {
    const { hash, search, pathname } = window.location;
    const hasToken = /access_token=|refresh_token=|type=(invite|magiclink|recovery|signup)|error=/.test(hash) || /[?&]code=/.test(search);
    if (!hasToken || pathname.includes("/portal/")) return;
    const seg = pathname.split("/").filter(Boolean)[0];
    const locale = ["tr", "ar", "ru", "fr", "es", "en"].includes(seg ?? "") ? seg : "en";
    window.location.replace(`/${locale}/portal/${search}${hash}`);
  }, []);
  return null;
}
