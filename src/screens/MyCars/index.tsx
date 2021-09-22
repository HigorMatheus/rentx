import { useNavigation } from '@react-navigation/core';
import { StatusBar, FlatList } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useTheme } from 'styled-components';
import { BackButton } from '../../components/BackButton';
import { CarDTO } from '../../dtos/CarDTO';
import { api } from '../../service/api';
import { AntDesign } from '@expo/vector-icons';

import {
  Container,
  Title,
  Header,
  SubTitle,
  Content,
  Appointments,
  AppointmentsTitle,
  AppointmentsQuantity,
  CarWhapper,
  CarFooter,
  CartFooterTitle,
  CarFooterPeriod,
  CartFooterDate,
} from './styles';
import { Car } from '../../components/Car';
import { Load } from '../../components/Load';
import { LoadCar } from '../../components/LoadCar';
interface ICarProps {
  id: string;
  car: CarDTO;
  user_id: string;
  startDate: string;
  endDate: string;
}
export function MyCars() {
  const [cars, setCars] = useState<ICarProps[]>([]);
  const [loading, setLoading] = useState(false);
  const theme = useTheme();
  const navigation = useNavigation();
  function handleBack() {
    navigation.goBack();
  }
  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        const response = await api.get(`schedules_byuser/?user_id=1`);

        setCars(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);
  return (
    <Container>
      <Header>
        <StatusBar
          barStyle="light-content"
          translucent
          backgroundColor="transparent"
        />
        <BackButton onPress={handleBack} color={theme.colors.shape} />
        <Title>Seus agendamentos,{'\n'}estão aqui.</Title>
        <SubTitle>Conforto, segurança e praticidade</SubTitle>
      </Header>
      {loading ? (
        <LoadCar />
      ) : (
        <Content>
          <Appointments>
            <AppointmentsTitle>Agendamentos feitos</AppointmentsTitle>
            <AppointmentsQuantity>{cars.length}</AppointmentsQuantity>
          </Appointments>
          <FlatList
            data={cars}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            renderItem={({ item, index }) => (
              <CarWhapper>
                <Car data={item.car} />
                <CarFooter>
                  <CartFooterTitle>Período</CartFooterTitle>
                  <CarFooterPeriod>
                    <CartFooterDate>{item.startDate}</CartFooterDate>
                    <AntDesign
                      name="arrowright"
                      size={20}
                      color={theme.colors.title}
                      style={{ marginHorizontal: 10 }}
                    />
                    <CartFooterDate>{item.endDate}</CartFooterDate>
                  </CarFooterPeriod>
                </CarFooter>
              </CarWhapper>
            )}
          />
        </Content>
      )}
    </Container>
  );
}
