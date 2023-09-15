import styled, { css } from 'styled-components';

export const NavContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* height: 70px;

  ${({ theme }) => theme.media.mobile} {
    width: 90%;
    height: 50px;
  } */
`;

export const Container = styled.main`
  min-height: 100dvh;
`;
