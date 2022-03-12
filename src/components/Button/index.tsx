import React from "react";
import { Wrapper } from "./Button.styles";

type Props = {
  text: string;
  handleClick: () => void
}

const Button: React.FC<Props> = (props) => {
  return (
    <Wrapper onClick={props.handleClick}>
      {props.text}
    </Wrapper>
  );
}

export default Button;