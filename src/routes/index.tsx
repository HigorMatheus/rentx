import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { AppTabRoutes } from './app.tab.routes';
import { useAuth } from '../hooks/auth';
import { AuthRoutes } from './auth.routes';
import { LoadCar } from '../components/LoadCar';
type Params = {} | unknown;

export function Routes() {
  const { user, loading } = useAuth();

  return (
    <>
      {loading ? (
        <LoadCar></LoadCar>
      ) : (
        <NavigationContainer>
          {user.id ? <AppTabRoutes /> : <AuthRoutes />}
        </NavigationContainer>
      )}
    </>
  );
}
