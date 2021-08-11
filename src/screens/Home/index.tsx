import React from "react";
import { StatusBar } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import Logo from "../../assets/logo.svg";
import { Car } from "../../components/Car";
import { Container, Header, HeaderContent, TotalCars, CarList } from "./styles";

export function Home() {
  const carData = {
    name: "model x",

    brand: "rfde",
    about: "oi",
    period: "dia",
    price: 120,
    thumbnail:
      "https://img2.gratispng.com/20180204/kqq/kisspng-tesla-model-s-car-tesla-model-x-tesla-motors-tesla-png-transparent-image-5a77ba1ec23de7.2349777715177958707956.jpg",
  };
  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Header>
        <HeaderContent>
          <Logo width={RFValue(108)} height={RFValue(12)} />
          {/* {
          
            !loading && */}
          <TotalCars>Total de 20 carros</TotalCars>
          {/* }         */}
        </HeaderContent>
      </Header>
      <CarList
        data={[1, 2, 3]}
        keyExtractor={(item) => String(item)}
        renderItem={() => <Car data={carData} />}
      ></CarList>
    </Container>
  );
}
