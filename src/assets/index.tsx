import React from 'react';
import Acceleration from './acceleration.svg';
import HomeSvg from './home.svg';

interface IconProps {
  name: 'home' | 'acceleration';
  color: string;
  width?: number;
  height?: number;
}

export const Icon = ({ name, color, width = 24, height = 24 }: IconProps) => {
  if (name === 'home')
    return <HomeSvg width={width} height={height} fill={color} />;
  if (name === 'acceleration')
    return <Acceleration width={width} height={height} fill={color} />;
  return <></>;
};
