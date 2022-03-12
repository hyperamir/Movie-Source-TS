import React from "react";
import { Wrapper, Content } from "./Grid.styles";

type Props = {
  header: string
}

const Grid: React.FC<Props> = (props) => {
  return (
    <Wrapper>
      <h1>
        {props.header}
      </h1>
      <Content>
        {props.children}
      </Content>
    </Wrapper>
  );
}

export default Grid;