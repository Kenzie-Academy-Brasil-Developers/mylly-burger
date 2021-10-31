import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Background = styled.div`
  h1 {
    display: none;
  }
  div {
    display: none;
  }
  @media (min-width: 1100px) {
    flex: 1;
    background: var(--gray-0);
    background-size: cover;
    background-position: center;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin-left: 300px;

    h1 {
      display: block;
      color: var(--gray-600);
      margin-bottom: 20px;
      margin-top: -100px;
      span {
        color: var(--color-secondary);
        font-size: 13px;
      }
    }
    div {
      display: flex;
      width: 330px;
      align-items: center;
      color: var(--gray-300);
      svg {
        color: var(--color-primary);
        margin-right: 30px;
        font-size: 50px;
      }
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 950px;
`;

const appearFromRight = keyframes`
    from {
        opacity: 0.5;
        transform: translateX(-50px);
    }
    top {
        opacity: 1;
        transform: translateX(0px)
    };
`;

export const AnimationContainer = styled.div`
  h1 {
    display: none;
  }
  @media only screen and (max-width: 768px) {
    h1 {
      display: block;
      margin-top: 20px;
      font-size: 40px;
      color: var(--gray-600);
      span {
        color: var(--color-secondary);
        font-size: 16px;
      }
    }
  }

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: ${appearFromRight} 1.5s;
  form {
    margin: 80px 0;
    width: 440px;
    text-align: center;
    padding: 40px;
    input {
      width: 360px;
    }
    button {
      width: 389px;
      border-radius: 3px;
      background: var(--color-primary);
    }
    h2 {
      text-align: left;
      font-weight: 600;
    }
  }
  > div {
    margin-top: 16px;
  }
  p {
    margin-top: 20px;
    font-size: 14px;
    color: var(--gray-300);
    line-height: 20px;
    text-align: center;
    width: 380px;
    span {
      margin-top: 50px;
    }
    a {
      font-weight: bold;
      margin-top: 20px;
      color: var(--gray-300);
      :hover {
        color: var(--color-primary);
      }
    }
  }
`;
