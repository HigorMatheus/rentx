import React from 'react';
import { useTheme } from 'styled-components';
import { ActivityIndicator } from 'react-native';

import { Container, Title } from './styles';

interface ButtonProps {
  title: string;
  color?: string;
  onPress: () => void;
  enabled?: boolean;
  loading?: boolean;
}
export function Button({
  title,
  color,
  enabled = true,
  loading = false,
  ...rest
}: ButtonProps) {
  const theme = useTheme();
  return (
    <Container
      {...rest}
      color={color ? color : theme.colors.main}
      enabled={enabled}
      style={{ opacity: enabled === false || loading === true ? 0.5 : 1 }}
    >
      {loading ? (
        <ActivityIndicator size={20} color={theme.colors.shape} />
      ) : (
        <Title>{title}</Title>
      )}
    </Container>
  );
}
