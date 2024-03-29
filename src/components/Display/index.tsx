import { Container } from "./styles"
import { useEffect, useState } from "react";
import { SvgDisplay } from '../SvgDisplay'

interface IDisplayProps {
  number: number;
}

const SEGMENT_STATUS = {
  on: ["#baffff", "#84ffff"],
  off: ["none", "none"],
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
  const numbers = String(number).split("");

  const [displays, setDisplays] = useState([
    [
      SEGMENT_STATUS.off,
      SEGMENT_STATUS.off,
      SEGMENT_STATUS.off,
      SEGMENT_STATUS.off,
      SEGMENT_STATUS.off,
      SEGMENT_STATUS.off,
      SEGMENT_STATUS.off,
    ],
  ]);

  useEffect(() => {
    const mappedSegments = numbers.map(num => {
      const newSegments = Object.values(SEGMENTS_MAPPED).map(segmentMapped => {
        return segmentMapped.includes(Number(num)) ? SEGMENT_STATUS.on : SEGMENT_STATUS.off;
      })
      return newSegments
    })
    setDisplays(mappedSegments);
  }, [number]);

  return (
    <Container>
      {displays.map((display) => (
        <SvgDisplay segments={{
          top: display[0],
          rightTop: display[1],
          rightBottom: display[2],
          bottom: display[3],
          leftBottom: display[4],
          leftTop: display[5],
          middle: display[6],
        }} />
      ))}
    </Container >
  );
}