import React from 'react';
import { View } from 'react-native';
import { AuthProvider } from './auth';

// import { Container } from './styles';

export const AppProvider: React.FC = ({ children }) => {
  return <AuthProvider>{children}</AuthProvider>;
};
