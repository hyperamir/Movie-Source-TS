import React from "react";
import { Wrapper, Image } from "./Actor.styles";

type Props = {
  imageUrl: string;
  name: string;
  character: string
}

const Actor: React.FC<Props> = (props) => {
  const { imageUrl, name, character } = props
  return (
    <Wrapper>
      <Image src={imageUrl} alt="actor-thumb" />
      <h3>{name}</h3>
      <p>{character}</p>
    </Wrapper>
  );
}

export default Actor;