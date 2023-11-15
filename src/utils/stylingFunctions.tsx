export const strippedCSS = (
  color: string
) => `background-image: linear-gradient(
        45deg,
        ${color} 30%, 
        #ffffff 30%, 
        #ffffff 70%,
        ${color} 70%
        )`;
