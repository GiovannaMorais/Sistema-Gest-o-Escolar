import styled from "styled-components";
import { darken } from "polished";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(420px, auto));

  gap: 1.5rem;
  width: 100%;
  padding: 4vh;

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }

  .option {
    position: relative;
    background-color: ${({ theme }) => theme.colors.black};
    padding: 1.75rem 1.5rem;
    border-radius: 4px;
    cursor: pointer;
    &:hover {
      background: ${darken(0.1, "#7E5CEF")};
    }
    span {
      position: absolute;
      top: -0.5rem;
      left: -0.5rem;

      width: 2rem;
      height: 2rem;
      border-radius: 50%;

      display: flex;
      align-items: center;
      justify-content: center;

      font-weight: 500;
      font-size: 1.125rem;
    }

    h2 {
      margin-bottom: 0.75rem;
      font-weight: 700;
      font-size: 1.5rem;
      text-align: center;
    }

    img {
      object-fit: scale-down;
      width: 100%;
      height: 11.25rem;
      border-radius: 4px;
      margin-bottom: 0.375rem;
    }

    p {
      font-size:1.05rem;
      text-align: center;
    }

    div {
      margin-top: 0.875rem;

      display: flex;
      align-items: center;
      justify-content: space-between;

      strong {
        font-size: 2rem;
        font-weight: 500;
      }

      button {
        background: ${({ theme }) => theme.colors.red};
        width: 3rem;
        height: 3rem;
        border: none;
        border-radius: 50%;

        display: flex;
        align-items: center;
        justify-content: center;

        svg {
          stroke: ${({ theme }) => theme.colors.white};
          width: 1.5rem;
          height: 1.5rem;
        }

        &:hover {
          background: ${darken(0.1, "#fff")};
        }
      }
    }
  }
`;
