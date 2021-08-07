import React from 'react';
import { SafeAreaView, StatusBar, Text, View } from 'react-native';
import ButtonCalc from '../components/ButtonCalc';
import { Operators, useCalculator } from '../hooks/useCalculate';
import { appStyles } from '../themes/AppTheme';
import { COLOR_GREY, COLOR_ORANGE } from '../themes/ButtonTheme';


export default function CalculatorScreen() {


  const calculator = useCalculator();

  return (
    <View style={appStyles.calculatorCtn}>
      <SafeAreaView>
        <StatusBar backgroundColor='black' barStyle='light-content' />
        <Text style={appStyles.prevResult}>{calculator.prevNumber}</Text>
        <Text style={appStyles.result} adjustsFontSizeToFit numberOfLines={1}>{calculator.number}</Text>

        <View style={appStyles.row}>
          <ButtonCalc text={'C'} color={COLOR_GREY} action={calculator.clean} />
          <ButtonCalc text={'+/-'} color={COLOR_GREY} action={calculator.changeSing} />
          <ButtonCalc text={'DEL'} color={COLOR_GREY} action={calculator.btnDelete} />
          <ButtonCalc text={'/'} color={COLOR_ORANGE} action={() => calculator.setOperation(Operators.division)} />
        </View>

        <View style={appStyles.row}>
          <ButtonCalc text={'7'} action={calculator.makeNumber} />
          <ButtonCalc text={'8'} action={calculator.makeNumber} />
          <ButtonCalc text={'9'} action={calculator.makeNumber} />
          <ButtonCalc text={'x'} color={COLOR_ORANGE} action={() => calculator.setOperation(Operators.multiplication)} />
        </View>

        <View style={appStyles.row}>
          <ButtonCalc text={'4'} action={calculator.makeNumber} />
          <ButtonCalc text={'5'} action={calculator.makeNumber} />
          <ButtonCalc text={'6'} action={calculator.makeNumber} />
          <ButtonCalc text={'-'} color={COLOR_ORANGE} action={() => calculator.setOperation(Operators.subtracktion)} />
        </View>

        <View style={appStyles.row}>
          <ButtonCalc text={'1'} action={calculator.makeNumber} />
          <ButtonCalc text={'2'} action={calculator.makeNumber} />
          <ButtonCalc text={'3'} action={calculator.makeNumber} />
          <ButtonCalc text={'+'} color={COLOR_ORANGE} action={() => calculator.setOperation(Operators.addition)} />
        </View>

        <View style={appStyles.row}>
          <ButtonCalc text={'0'} double action={calculator.makeNumber} />
          <ButtonCalc text={'.'} action={calculator.addDecimal} />
          <ButtonCalc text={'='} color={COLOR_ORANGE} action={calculator.calculate} />
        </View>
      </SafeAreaView>
    </View>
  );
}