import styled from "styled-components";

export const Container = styled.div`
  background: black;

  width: 100%;
  max-width: 600px;
  height: 400px;
  position: absolute;
  left: 50%;
  color: black;
  box-shadow: 0 4px 4px 2px rgba(0, 0, 0, 0.25);
  transform: translate(-50%);
  display: flex;
  z-index: 20;
`;
