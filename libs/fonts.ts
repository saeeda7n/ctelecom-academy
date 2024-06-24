import localFont from "next/font/local";

export const estedad = localFont({
 src: "fonts/estedad.woff2",
 variable: "--estedad-font",
 fallback: ["var(--outfit-font)"],
});
