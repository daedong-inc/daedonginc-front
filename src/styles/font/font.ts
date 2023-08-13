import { css } from 'styled-components';

const NOTO = 'Noto Sans KR, sans-serif';
const LATO = 'Lato, sans-serif';

export const NOTOTYPOGRAPHY_STYLES = {
  Heading1: {
    fontWeight: 700,
    fontSize: 50,
    lineHeight: 64,
  },
  Heading2: {
    fontWeight: 700,
    fontSize: 40,
    lineHeight: 54,
  },
  Heading3: {
    fontWeight: 700,
    fontSize: 30,
    lineHeight: 44,
  },
  Body1_b: {
    fontWeight: 700,
    fontSize: 24,
    lineHeight: 34,
  },
  Body1_r: {
    fontWeight: 400,
    fontSize: 24,
    lineHeight: 34,
  },
  Body2_b: {
    fontWeight: 700,
    fontSize: 18,
    lineHeight: 30,
  },
  Body2_r: {
    fontWeight: 400,
    fontSize: 18,
    lineHeight: 30,
  },
  Body3_b: {
    fontWeight: 700,
    fontSize: 16,
    lineHeight: 26,
  },
  Body3_r: {
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 26,
  },
  Body4_b: {
    fontWeight: 700,
    fontSize: 14,
    lineHeight: 24,
  },
  Body4_r: {
    fontWeight: 400,
    fontSize: 14,
    lineHeight: 24,
  },
};

export const getNotoTypographyStyles = (
  typography: keyof typeof NOTOTYPOGRAPHY_STYLES,
) => {
  const { fontWeight, fontSize, lineHeight } =
    NOTOTYPOGRAPHY_STYLES[typography];
  return css`
    font-weight: ${fontWeight};
    font-size: ${fontSize}px;
    line-height: ${lineHeight}px;
    font-family: ${NOTO};
  `;
};

export const RATOTYPOGRAPHY_STYLES = {
  Display1: {
    fontWeight: 700,
    fontSize: 90,
    lineHeight: 80,
  },
  Display2: {
    fontWeight: 700,
    fontSize: 40,
    lineHeight: 54,
  },
  Heading1: {
    fontWeight: 800,
    fontSize: 50,
    lineHeight: 60,
  },
  Heading2_b: {
    fontWeight: 800,
    fontSize: 40,
    lineHeight: 50,
  },
  Heading2_r: {
    fontWeight: 400,
    fontSize: 40,
    lineHeight: 50,
  },
  Heading3_eb: {
    fontWeight: 800,
    fontSize: 33,
    lineHeight: 43,
  },
  Heading3: {
    fontWeight: 60,
    fontSize: 33,
    lineHeight: 43,
  },
  Heading4: {
    fontWeight: 800,
    fontSize: 28,
    lineHeight: 38,
  },
  Body1_eb: {
    fontWeight: 800,
    fontSize: 22,
    lineHeight: 32,
  },
  Body1_r: {
    fontWeight: 400,
    fontSize: 24,
    lineHeight: 34,
  },
  Body1: {
    fontWeight: 600,
    fontSize: 22,
    lineHeight: 32,
  },
  Body2: {
    fontWeight: 600,
    fontSize: 16,
    lineHeight: 26,
  },
  Body3: {
    fontWeight: 600,
    fontSize: 14,
    lineHeight: 24,
  },
};

export const getLatoTypographyStyles = (
  typography: keyof typeof RATOTYPOGRAPHY_STYLES,
) => {
  const { fontWeight, fontSize, lineHeight } =
    RATOTYPOGRAPHY_STYLES[typography];
  return css`
    font-weight: ${fontWeight};
    font-size: ${fontSize}px;
    line-height: ${lineHeight}px;
    font-family: ${LATO};
  `;
};

export const MakeNewTypographStyles = (
  fontFamily: string,
  fontWeight: number | string,
  fontSize: number,
  lineHeight: number,
) => {
  return css`
    font-family: ${fontFamily};
    font-weight: ${fontWeight};
    font-size: ${fontSize}px;
    line-height: ${lineHeight}px;
  `;
};
