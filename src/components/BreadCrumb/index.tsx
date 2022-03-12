import React from "react";
import { Link } from "react-router-dom";
import { Wrapper, Content } from "./BreadCrumb.styles";

type Props = {
  movieTitle: string
}

const BreadCrumb: React.FC<Props> = (props) => {
  return (
    <Wrapper>
      <Content>
        <Link to='/' >
          <span>Home</span>
        </Link>
        <span> | </span>
        <span>{props.movieTitle}</span>
      </Content>
    </Wrapper>
  );
}

export default BreadCrumb;