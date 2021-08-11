import React from "react";

import {
  Container,
  ImageIndexes,
  ImageIndex,
  CartImageWrapper,
  CarImage,
} from "./styles";
interface ImageSliderProps {
  imagesUrl: Array<string>;
}
export function ImageSlider({ imagesUrl }: ImageSliderProps) {
  return (
    <Container>
      <ImageIndexes>
        <ImageIndex active={true} />
        <ImageIndex active={false} />
        <ImageIndex active={false} />
        <ImageIndex active={false} />
      </ImageIndexes>
      <CartImageWrapper>
        <CarImage source={{ uri: imagesUrl[0] }} resizeMode="contain" />
      </CartImageWrapper>
    </Container>
  );
}
