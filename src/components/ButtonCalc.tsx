import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { buttonStyles, COLOR_GREY, COLOR_LIGTH_GREY } from '../themes/ButtonTheme';

interface Props {
  text: string,
  color?: string,
  double?: boolean,
  action: (button:string) => void,
}
export default function ButtonCalc({ text, color = COLOR_LIGTH_GREY, double, action }: Props) {
  return (
    <TouchableOpacity onPress={() => action(text)}>
      <View style={{ ...buttonStyles.container, backgroundColor: color, width: double ? 180 : 80 }}>
        <Text style={{ ...buttonStyles.content, color: color === COLOR_GREY ? 'black' : 'white' }} >{text}</Text>
      </View>
    </TouchableOpacity>
  );
}

