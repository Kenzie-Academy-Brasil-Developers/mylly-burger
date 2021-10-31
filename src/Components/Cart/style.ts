import styled from "styled-components";

export const Container = styled.div`
  background: var(--gray-0);

  width: 100%;
  max-width: 600px;
  height: 400px;
  position: absolute;
  left: 50%;
  color: #fff;
  box-shadow: 0 4px 4px 2px rgba(0, 0, 0, 0.25);
  transform: translate(-50%);
  display: flex;
  flex-direction: column;
  h3 {
    background-color: #27ae60;
    font-weight: 600;
    padding: 15px;
    font-size: 16px;
    display: flex;
    justify-content: space-between;
    span {
      cursor: pointer;
      :hover {
        color: var(--color-secondary);
      }
    }
  }
  p {
    padding: 10px;
    margin: 0px 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: var(--gray-300);
    span {
      color: #333;
      font-weight: bold;
    }
  }
  button {
    width: 95%;
    height: 50px;
    margin: 0 auto;
    :hover {
      background: rgba(39, 174, 96, 1);
    }
  }
`;
export const Card = styled.div`
  display: flex;
  margin: 5px 10px;
  background: #f5f5f5;
  border-bottom: 2px solid rgba(224, 224, 224, 1);
  div {
    width: 100%;
    h4 {
      padding: 3px 10px;
      margin-top: 3px;
      color: #333;
      display: flex;
      justify-content: space-between;

      span {
        svg {
          color: var(--gray-300);
          cursor: pointer;
          :hover {
            color: var(--color-secondary);
          }
        }
      }
    }
  }
  img {
    width: 90px;
    background: var(--gray-100);
  }
`;

export const Content = styled.div`
  height: 250px;
  overflow-y: auto;

  h2 {
    color: #333;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    font-weight: 500;
    display: flex;
    flex-direction: column;
    line-height: 2;

    span {
      font-weight: 300;
      font-size: 16px;
    }
  }
`;
