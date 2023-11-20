import styled, { keyframes } from "styled-components";

const ShakeAnimation = keyframes`
 0% { transform: translateX(0) rotate(0); }
 10% { transform: translateX(-7px) rotate(-15deg) }
 20% { transform: translateX(7px) rotate(15deg) }
`;

export const Container = styled.div`
    position: relative;
    width: 140px;
    height: 140px;
    background: linear-gradient(
      to bottom,
      #e53935,
      #e53935 48%,
      #212121 48%,
      #212121 55%,
      #fff 55%
    );
    border-radius: 50%;
    border: 10px solid #212121;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2), inset 4px 2px 0 rgba(0, 0, 0, 0.2);
    animation-duration: 3200ms;
    animation-name: ${ShakeAnimation};
    animation-iteration-count: infinite;
    &:before {
      content: "";
      display: block;
      position: absolute;
      top: 20px;
      right: 20px;
      width: 15px;
      height: 20px;
      background-color: rgba(255, 255, 255, 0.4);
      border-radius: 50%;
    }
    &:after {
      content: "";
      display: block;
      position: absolute;
      top: 50%;
      left: 50%;
      width: 40px;
      height: 40px;
      background-color: #fff;
      border-radius: 50%;
      transform: translate(-50%, -50%);
      border: 15px solid #212121;
      box-shadow: -2px -1px 0 rgba(0, 0, 0, 0.2);
    }
  }
  `;
