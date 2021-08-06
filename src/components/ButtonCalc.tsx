import React from 'react';
import { Text, View } from 'react-native';
import { buttonStyles, COLOR_GREY, COLOR_LIGTH_GREY } from '../themes/ButtonTheme';

interface Props {
  text: string,
  color?: string;
}
export default function ButtonCalc({ text, color = COLOR_LIGTH_GREY }: Props) {
  return (
    <View style={{ ...buttonStyles.container, backgroundColor: color }}>
      <Text style={{ ...buttonStyles.content, color: color === COLOR_GREY ? 'black' : 'white' }}>{text}</Text>
    </View>
  );
}

