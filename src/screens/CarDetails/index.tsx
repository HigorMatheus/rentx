import React, { useEffect, useState } from "react";
import { StatusBar, StyleSheet } from "react-native";

import { BackButton } from "../../components/BackButton";
import { ImageSlider } from "../../components/ImageSlider";
import { Accessory } from "../../components/Accessory";
import SpeedSvg from "../../assets/speed.svg";
import AccelerationSvg from "../../assets/acceleration.svg";
import ForceSvg from "../../assets/force.svg";
import GasolineSvg from "../../assets/gasoline.svg";
import ExchangeSvg from "../../assets/exchange.svg";
import PeopleSvg from "../../assets/people.svg";

import {
  Container,
  Header,
  CarImages,
  Details,
  Content,
  Description,
  Brand,
  Name,
  Rent,
  Period,
  Price,
  About,
  Accessories,
  Footer,
  OfflineInfo,
} from "./styles";
import { Button } from "../../components/Button";

// interface Params {
//   car: CarModel;
// }

export function CarDetails() {
  function handleBack() {
    // navigation.goBack();
  }

  return (
    <Container>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />
      <Header>
        <BackButton onPress={handleBack} />
      </Header>
      <CarImages>
        <ImageSlider
          imagesUrl={[
            "https://img2.gratispng.com/20180204/kqq/kisspng-tesla-model-s-car-tesla-model-x-tesla-motors-tesla-png-transparent-image-5a77ba1ec23de7.2349777715177958707956.jpg",
          ]}
        />
      </CarImages>
      <Content>
        <Details>
          <Description>
            <Brand>tesla</Brand>
            <Name>x3</Name>
          </Description>
          <Rent>
            <Period>2</Period>
            <Price>R$ 580.00</Price>
          </Rent>
        </Details>
        <Accessories>
          <Accessory name="380km/h" icon={SpeedSvg} />
          <Accessory name="3.2s" icon={AccelerationSvg} />
          <Accessory name="800 hp" icon={ForceSvg} />
          <Accessory name="Gasolina" icon={GasolineSvg} />
          <Accessory name="Auto" icon={ExchangeSvg} />
          <Accessory name="2 pessoas" icon={PeopleSvg} />
        </Accessories>
        <About>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
          numquam laudantium perspiciatis culpa beatae provident voluptate vitae
          sed quas quo earum maiores corrupti obcaecati, qui, sunt blanditiis
          quidem. Reiciendis, modi.
        </About>
      </Content>
      <Footer>
        <Button onPress={() => {}} title="Confirmar" />
      </Footer>
    </Container>
  );
}
