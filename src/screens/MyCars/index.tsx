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
import { Car as ModelCar } from '../../database/model/Car';
import { format } from 'date-fns/esm';
interface ICarProps {
  id: string;
  car: ModelCar;
  user_id: string;
  start_date: string;
  end_date: string;
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
        const response = await api.get(`/rentals`);

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
                    <CartFooterDate>
                      {format(new Date(item.start_date), 'dd/MM/yyyy')}
                    </CartFooterDate>
                    <AntDesign
                      name="arrowright"
                      size={20}
                      color={theme.colors.title}
                      style={{ marginHorizontal: 10 }}
                    />
                    <CartFooterDate>
                      {format(new Date(item.end_date), 'dd/MM/yyyy')}
                    </CartFooterDate>
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
