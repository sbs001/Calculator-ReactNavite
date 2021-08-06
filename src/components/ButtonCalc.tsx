import React from 'react';
import { Text, View } from 'react-native';
import { buttonStyles, COLOR_GREY, COLOR_LIGTH_GREY } from '../themes/ButtonTheme';

interface Props {
  text: string,
  color?: string,
  double?: boolean
}
export default function ButtonCalc({ text, color = COLOR_LIGTH_GREY, double }: Props) {
  return (
    <View style={{ ...buttonStyles.container, backgroundColor: color, width: double ? 180 : 80 }}>
      <Text style={{ ...buttonStyles.content, color: color === COLOR_GREY ? 'black' : 'white' }}>{text}</Text>
    </View>
  );
}

