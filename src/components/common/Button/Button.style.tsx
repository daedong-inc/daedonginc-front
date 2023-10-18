import styled, { css } from 'styled-components';

import { getNotoTypographyStyles } from 'styles/font/font';
import type { ButtonSize, ButtonState, ButtonType } from './Button';
import theme from 'theme';

export const Container = styled.button<{
  outlined: boolean;
  size: ButtonSize;
  state: ButtonState;
  buttontype: ButtonType;
  margin: string;
}>`
  all: unset;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  cursor: pointer;
  margin: ${({ margin }) => margin};

  ${({ size, buttontype }) => typeMap[buttontype][size]}
  ${({ outlined, state }) =>
    outlined ? outlinedStyleMap[state] : filledStyleMap[state]}

${({ theme }) => theme.media.mobile} {
    transform: scale(0.7, 0.7);
  }
`;

const filledStyleMap = {
  enabled: css`
    color: white;
    border: none;
    background-color: #00bad0;
  `,
  hovered: css`
    color: white;
    border: none;
    background-color: #00a4c8;
  `,
  disabled: css`
    // TODO: disabled attribute랑 합칠지 판단 필요
    color: white;
    border: none;
    background-color: ${theme.colors.neutral700};
    cursor: not-allowed;
  `,
};

const outlinedStyleMap = {
  enabled: css`
    color: ${theme.colors.gray25};
    border: 1px solid ${theme.colors.gray25};
    background: none;
  `,
  hovered: css`
    color: ${theme.colors.gray200};
    border: 1px solid ${theme.colors.gray200};
    background-color: ${theme.colors.neutral50};
  `,
  disabled: css`
    // TODO: disabled attribute랑 합칠지 판단 필요
    color: var(--color-gray-500);
    border: 1px solid ${theme.colors.neutral700};
    background: none;
    cursor: not-allowed;
  `,
};

const typeMap = {
  icon: {
    s: css`
      ${getNotoTypographyStyles('Body4_r')}
      width: 40px;
      height: 40px;
      padding: 8px, 12px;
    `,
    m: css`
      ${getNotoTypographyStyles('Body3_r')}
      width: 46px;
      height: 46px;
      padding: 8px, 16px;
    `,
    l: css`
      ${getNotoTypographyStyles('Body2_r')}
      width:50px;
      height: 50px;
      padding: 10px, 16px;
    `,
  },
  text: {
    s: css`
      ${getNotoTypographyStyles('Body4_r')}
      width: 89px;
      height: 40px;
      padding: 8px, 16px;
    `,
    m: css`
      ${getNotoTypographyStyles('Body3_r')}
      width: 105px;
      height: 46px;
      padding: 10px, 20px;
    `,
    l: css`
      ${getNotoTypographyStyles('Body2_r')}
      width: 121px;
      height: 50px;
      padding: 10px, 24px;
    `,
  },
  text_icons: {
    s: css`
      ${getNotoTypographyStyles('Body4_r')}
      width: 113px;
      height: 40px;
      padding: 8px, 12px, 8px, 16px;
    `,
    m: css`
      ${getNotoTypographyStyles('Body3_r')}
      width: 131px;
      height: 46px;
      padding: 10px, 16px, 10px, 20px;
    `,
    l: css`
      ${getNotoTypographyStyles('Body2_r')}
      width: 147px;
      height: 50px;
      padding: 10px, 16px, 10px, 24px;
    `,
  },
};
