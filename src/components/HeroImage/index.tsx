import React from "react";
import { Wrapper, Content, Text } from "./HeroImage.styles";

type Props = {
  image: string;
  title: string;
  text: string
}

const HeroImage: React.FC<Props> = (props) => {
  return (
    <Wrapper image={props.image}>
      <Content>
        <Text>
          <h1>{props.title}</h1>
          <p>{props.text}</p>
        </Text>
      </Content>
    </Wrapper>

  );
}

export default HeroImage;