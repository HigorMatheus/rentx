import { useTheme } from '@react-navigation/native';
import React from 'react';

import { Container, Title } from './styles';

interface ButtonProps {
  title: string;
  color?: string;
  onPress: () => void;
}
export function Button({ title, color, ...rest }: ButtonProps) {
  const theme = useTheme();
  return (
    <Container {...rest} color={color ? color : theme.colors.main}>
      <Title>{title}</Title>
    </Container>
  );
}
