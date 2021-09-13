import React from 'react';
import { View } from 'react-native';
import LottieView from 'lottie-react-native';
import { Container } from './styles';
import loadCar from '../../assets/loadCar.json';

export function LoadCar() {
  return (
    <Container>
      <LottieView
        source={loadCar}
        autoPlay
        style={{ height: 100 }}
        resizeMode="contain"
        loop
      />
    </Container>
  );
}
