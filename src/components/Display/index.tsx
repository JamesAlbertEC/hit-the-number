import { SvgImg } from "../IconsComponents/SvgImg"

import { Container } from "../Header/styles"
import { useState } from "react";

export function Display() {
  // const [top, setTop] = useState("#000");
  // const [rightTop, setRightTop] = useState("#000");
  // const [rightBottom, setRightBottom] = useState("#000");
  // const [bottom, setBottom] = useState("#000");
  // const [leftBottom, setLeftBottom] = useState("#000");
  // const [leftTop, setLeftTop] = useState("#000");
  // const [midle, setMidle] = useState("#000");


  return (
    <Container>
      <SvgImg height={200} width={100} fill={'var(--secondary-low)'} stroke={'var(--secondary-high)'}>
        <path className="segment-top" />
        <path className="segment-left-high" />
        <path className="segment-left-low" />
        <path className="segment-right-high" />
        <path className="segment-right-low" />
        <path className="segment-bottom" />
        <path className="segment-middle" />
      </SvgImg>
    </Container >
  );
}