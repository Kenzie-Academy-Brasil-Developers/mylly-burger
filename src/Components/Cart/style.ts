import styled from "styled-components";

export const Container = styled.div`
  background: black;

  width: 100%;
  max-width: 600px;
  height: 400px;
  position: absolute;
  left: 50%;
  color: #fff;

  transform: translate(-50%);

    h3 {
        background-color: #27AE60;
        font-weight: 600;
        padding: 15px;
        font-size: 16px;
        display: flex;
        justify-content: space-between;
    }
`;
export const Card = styled.div`
  display: flex;
  img {
    width: 100px;
  }
`;
