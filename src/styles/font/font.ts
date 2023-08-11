import { css } from 'styled-components';

const PRETENDARD_FONT_FAMILY =
  "Pretendard Variable, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif";

export const TYPOGRAPHY_STYLES = {
  Heading1: {
    fontSize: 50,
    lineHeight: 64,
    fontWeight: 700,
  },
  Heading2: {
    fontSize: 40,
    lineHeight: 54,
    fontWeight: 700,
  },
  Heading3: {
    fontSize: 30,
    lineHeight: 44,
    fontWeight: 700,
  },
  Body1_b: {
    fontSize: 24,
    lineHeight: 34,
    fontWeight: 700,
  },
  Body1_r: {
    fontSize: 24,
    lineHeight: 34,
    fontWeight: 400,
  },
  Body2_b: {
    fontSize: 18,
    lineHeight: 30,
    fontWeight: 700,
  },
  Body2_r: {
    fontSize: 18,
    lineHeight: 30,
    fontWeight: 400,
  },
  Body3_b: {
    fontSize: 16,
    lineHeight: 26,
    fontWeight: 700,
  },
  Body3_r: {
    fontSize: 16,
    lineHeight: 26,
    fontWeight: 400,
  },
  Body4_b: {
    fontSize: 14,
    lineHeight: 24,
    fontWeight: 700,
  },
  Body4_r: {
    fontSize: 14,
    lineHeight: 24,
    fontWeight: 400,
  },
};

export const getTypographyStyles = (
  typography: keyof typeof TYPOGRAPHY_STYLES,
) => {
  const { fontSize, lineHeight, fontWeight } = TYPOGRAPHY_STYLES[typography];
  return css`
    font-size: ${fontSize}px;
    line-height: ${lineHeight}px;
    font-weight: ${fontWeight};
    font-family: ${PRETENDARD_FONT_FAMILY};
  `;
};

export const BannerTypographStyles = css`
    fontSize: 70px;
    lineHeight: 60px;
    fontWeight: 700;
    font-family: Lato;
  }`;
