import { Container } from "../Header/styles"
import { useEffect, useState } from "react";
import { SvgDisplay } from '../SvgDisplay'

interface IDisplayProps {
  number: number;
}

const SEGMENT_STATUS = {
  off: "#ffffc2",
  on: "#181818",
}

const SEGMENTS_MAPPED = {
  top: [2, 3, 5, 6, 7, 8, 9, 0],
  rightTop: [1, 2, 3, 4, 7, 8, 9, 0],
  rightBottom: [1, 3, 4, 5, 6, 7, 8, 9, 0],
  bottom: [2, 3, 5, 6, 8, 9, 0],
  leftBottom: [2, 6, 8, 0],
  leftTop: [4, 5, 6, 8, 9, 0],
  middle: [2, 3, 4, 5, 6, 8, 9]
}

export function Display({ number }: IDisplayProps) {
  // const numbers = String(number).split(""); ["2", "3"]
  const [segments, setSegments] = useState([
    SEGMENT_STATUS.off,
    SEGMENT_STATUS.off,
    SEGMENT_STATUS.off,
    SEGMENT_STATUS.off,
    SEGMENT_STATUS.off,
    SEGMENT_STATUS.off,
    SEGMENT_STATUS.off,
  ]);
  const [top, rightTop, rightBottom, bottom, leftBottom, leftTop, middle] = segments;

  useEffect(() => {
    const newSegments = Object.values(SEGMENTS_MAPPED).map(segmentMapped => {
      return segmentMapped.includes(number) ? SEGMENT_STATUS.on : SEGMENT_STATUS.off;
    })

    setSegments(newSegments);
  }, [number]);

  return (
    <Container>
      {/* {numbers.map(num => ( */}
        <SvgDisplay segments={{
          top,
          rightTop,
          rightBottom,
          bottom,
          leftBottom,
          leftTop,
          middle
        }} />
      {/* ))} */}
    </Container >
  );
}