import styled, { css } from "styled-components";

export const Container = styled.main`
  width: 100%;
  min-height: 100vh;
  /* ${({ logo }) =>
    css`
      background: url(${logo}) no-repeat 0 0 scroll;
      background-color:  ${({ theme }) => theme.colors.gray900};
      background-size: 100% 100%;
      background-blend-mode: difference;
      height: 100%;
      width: 100%;
    `} */

  display: flex;
  > section {
    flex: 1;
    width: 100%;
    overflow-y: auto;
    height: 100vh;
    padding: 2rem 1.875rem;

    img {
      width: 10rem;
      margin-bottom: 1.875rem;
    }

    h1 {
      text-align: center;
      content: 50%;
    }

    @media (max-width: 720px) {
      display: flex;
      flex-direction: column;
      padding-bottom: 8rem;

      img {
        align-self: center;
      }
    }
  }
`;
