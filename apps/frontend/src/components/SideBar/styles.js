import styled, { css } from 'styled-components'

export const Container = styled.aside`

.primaryBtn {
  margin: 20px 10px;
  cursor: pointer;
  font-weight: 500;
  padding: 13px 25px;
  border-radius: 15px;
  font-size: 0.8rem;
  border: none;
  color: white;
  background: #185adb;
  transition: all 0.25s ease;
}

.primaryBtn:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px -10px rgba(24, 90, 219, 0.6);
}

  background-color: #0e0e0e;

  ${({ isMenuOpen }) =>
    isMenuOpen
      ? css`
          width: 19.3rem;
          button {
            img {
              padding: 0%;
              width: 2rem;
            }
          }
          svg {
          }
        `
      : css`
          width: 4.75rem;
          background-color: ${({ theme }) => theme.colors.black};
          li {
            margin-top: 1.7rem;
          }
          svg {
            width: 2rem;
            height: 2rem;
          }
        `}
svg{
    fill: white;
}
  padding: 0.875rem 0;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  align-items: center;

  transition: width 0.3s;

  button {
    background: none;
    width: 100%;
    border: none;

    img {
      padding: 2rem 0 2rem 2rem;
      width: 5rem;
    }
  }


  nav {
    flex: 1;
    width: 100%;
    height: 100%;

    ul {
      height: 60%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 1.5rem;
    }

    li {
      a {
        width: fit-content;
        position: relative;
        padding-left: 1.875rem;
        padding-right: 1.875rem;

        display: flex;
        align-items: center;
        gap: 2rem;

        svg {
          fill: ${({ theme }) => theme.colors.white};
          width: 2rem;
          height: 2rem;
          transition: fill 0.3s;
        }

        span {
          font-size: 1.125rem;
          font-weight: medium;
          transition: color 0.3s;
          font-family: poppins ;
        }

        &.active {
          &::after {
            content: '';
            position: absolute;
            left: 0;
            top: 50%;
            bottom: 0;
            transform: translateY(-50%);

            background-color: ${({ theme }) => theme.colors.yellow};
            width: 5px;
            height: calc(100% + 10px);

            border-radius: 0 5px 5px 0;
          }

          svg {
            fill: ${({ theme }) => theme.colors.yellow};
          }

          span {
            color: ${({ theme }) => theme.colors.yellow};
          }
        }
      }
    }
  }

  @media (max-width: 720px) {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 999;

    width: 100%;
    height: 5rem;
    overflow-y: auto;
    padding: 0 0;

    button {
      display: none;
    }

    nav {
      height: 100%;

      ul {
        flex-direction: row;
        align-items: center;
      }

      li {
        a {
          flex-direction: column;
          padding: 0rem;

          svg {
            width: 3.25rem;
            height: 3.25rem;
          }

          span {
            display: none;
          }

          &.active {
            &::after {
              display: none;
            }
          }
        }
      }
    }
  }
`
