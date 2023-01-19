/* style/fonts/index.tsx */
import React from "react";
import { css } from "@emotion/react";
import {
  notoSansKrBlack,
  notoSansKrBold,
  notoSansKrMedium,
  notoSansKrRegular,
  notoSansKrLight,
  notoSansKrThin,
} from "./NotoSans";
import {
  robotoBold,
  robotoMedium,
  robotoRegular,
  robotoLight,
  robotoThin,
} from "./roboto";
const boldFont = css`
  font-family: ${notoSansKrBold.style.fontFamily},
    ${robotoBold.style.fontFamily};
`;
const mediumFont = css`
  font-family: ${notoSansKrMedium.style.fontFamily},
    ${robotoMedium.style.fontFamily};
export { boldFont, mediumFont };