import { forwardRef } from 'react';
import { ReactComponent as ButtonArrow } from 'assets/icons/buttonArrow.svg';

import * as S from './Button.style';

export type ButtonSize = 'l' | 'm' | 's';
export type ButtonState = 'enabled' | 'hovered' | 'disabled';
export type ButtonType = 'icon' | 'text' | 'text_icons';

export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  as?: keyof JSX.IntrinsicElements;
  outlined?: boolean;
  size?: ButtonSize;
  state?: ButtonState;
  buttontype?: ButtonType;
  margin?: string;
}

const Button = forwardRef<HTMLButtonElement, Props>(function Button(
  {
    children,
    as = 'button',
    outlined = false,
    size = 's',
    state = 'enabled',
    buttontype = 'text',
    margin = '0px',
    onClick,
    ...rest
  }: Props,
  ref,
) {
  let content: React.ReactNode = children;

  if (buttontype === 'icon') {
    content = <ButtonArrow />;
  } else if (buttontype === 'text_icons') {
    content = (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {children}
        <ButtonArrow style={{ marginLeft: '8px' }} />
      </div>
    );
  } else {
    content = children;
  }

  return (
    <S.Container
      as={as}
      outlined={outlined}
      size={size}
      state={state}
      buttontype={buttontype}
      margin={margin}
      ref={ref}
      {...rest}
    >
      {content}
    </S.Container>
  );
});

export default Button;
