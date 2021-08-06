import React from 'react';
import { SafeAreaView, StatusBar, Text, View } from 'react-native';
import ButtonCalc from '../components/ButtonCalc';
import { appStyles } from '../themes/AppTheme';
import { COLOR_GREY, COLOR_ORANGE } from '../themes/ButtonTheme';

export default function CalculatorScreen() {
  return (
    <View style={appStyles.calculatorCtn}>
      <SafeAreaView>
        <StatusBar backgroundColor='black' barStyle='light-content' />
        <Text style={appStyles.prevResult}>calcuator</Text>
        <Text style={appStyles.result}>calcuator</Text>

        <View style={appStyles.row}>
          <ButtonCalc text={'C'} color={COLOR_GREY} />
          <ButtonCalc text={'+/-'} color={COLOR_GREY} />
          <ButtonCalc text={'DEL'} color={COLOR_GREY} />
          <ButtonCalc text={'/'} color={COLOR_ORANGE} />
        </View>

        <View style={appStyles.row}>
          <ButtonCalc text={'7'}/>
          <ButtonCalc text={'8'}/>
          <ButtonCalc text={'9'}/>
          <ButtonCalc text={'x'} color={COLOR_ORANGE} />
        </View>

        <View style={appStyles.row}>
          <ButtonCalc text={'4'}/>
          <ButtonCalc text={'5'}/>
          <ButtonCalc text={'6'}/>
          <ButtonCalc text={'-'} color={COLOR_ORANGE} />
        </View>

        <View style={appStyles.row}>
          <ButtonCalc text={'1'}/>
          <ButtonCalc text={'2'}/>
          <ButtonCalc text={'3'}/>
          <ButtonCalc text={'+'} color={COLOR_ORANGE} />
        </View>

        <View style={appStyles.row}>
          <ButtonCalc text={'0'}/>
          <ButtonCalc text={'.'}/>
          <ButtonCalc text={'='} color={COLOR_ORANGE} />
        </View>
      </SafeAreaView>
    </View>
  );
}