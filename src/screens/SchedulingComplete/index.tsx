import React from 'react';
import { StatusBar, useWindowDimensions } from 'react-native';

import LogoSvg from '../../assets/logo_background_gray.svg';
import DoneSvg from '../../assets/done.svg';

import { Container, Content, Title, Message, Footer } from './styles';
import { ConfirmButton } from '../../components/ConfirmButton';
import { useNavigation } from '@react-navigation/native';

export function SchedulingComplete() {
  const { width } = useWindowDimensions();
  const navigation = useNavigation();

  function handleConfirm() {
    navigation.navigate('Home');
  }
  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <LogoSvg width={width}></LogoSvg>
      <Content>
        <DoneSvg width={80} height={80}></DoneSvg>
        <Title>Carro Alugado!</Title>
        <Message>
          Agora você só precisa ir{'\n'}
          até a concessionaria RENTX{'\n'}
          pegar o seu automóvel.
        </Message>
        <Footer>
          <ConfirmButton title="ok" onPress={handleConfirm} />
        </Footer>
      </Content>
    </Container>
  );
}