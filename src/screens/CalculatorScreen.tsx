import React from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import { SafeAreaView, StatusBar, Text, View } from 'react-native';
import ButtonCalc from '../components/ButtonCalc';
import { appStyles } from '../themes/AppTheme';
import { COLOR_GREY, COLOR_ORANGE } from '../themes/ButtonTheme';

enum Operators {
  addition, subtracktion, multiplication, division, none
}
export default function CalculatorScreen() {

  const [number, setNumber] = useState('');
  const [prevNumber, setPrevNumber] = useState('');
  const lastOperation = useRef<Operators>(Operators.none);

  const clean = () => {
    setNumber('');
    setPrevNumber('')
  }

  const makeNumber = (button: string) => {
    if (number === '0' || number === '-0')
      setNumber(number)
    else
      setNumber(number + button)
  }

  const addDecimal = (button: string) => {
    if (!number.length || number === '-')
      setNumber(number + '0' + button)
    else
      if (!number.includes('.'))
        setNumber(number + button)
  }

  const btnDelete = () => {
    if (number.length === 2 && number.includes('-'))
      setNumber('')
    else
      setNumber(number.substr(0, number.length - 1))
  }

  const changeSing = () => {
    if (number.includes('-'))
      setNumber(number.replace('-', ''));
    else setNumber('-' + number)
  }

  const setOperation = (operation: Operators) => {
    let prev = number;
    if (number.endsWith('.'))
      prev = number.slice(0, -1);
    if (prev !== '0' && prev !== '-0') {
      setPrevNumber(prev);
      setNumber('');
      lastOperation.current = operation
    }
  }

  const calculate = () => {

    if(lastOperation.current != Operators.none){
      
      switch (lastOperation.current) {

        case Operators.addition:
          setNumber(`${Number(number) + Number(prevNumber)}`);
          break;
        case Operators.subtracktion:
          setNumber(`${Number(prevNumber) - Number(number)}`);
          break;
        case Operators.multiplication:
          setNumber(`${Number(number) * Number(prevNumber)}`);
          break;
        case Operators.division:
          setNumber(`${Number(prevNumber) / Number(number)}`);
          break;
      }
      
      lastOperation.current= Operators.none;
    }
  }

  return (
    <View style={appStyles.calculatorCtn}>
      <SafeAreaView>
        <StatusBar backgroundColor='black' barStyle='light-content' />
        <Text style={appStyles.prevResult}>{prevNumber}</Text>
        <Text style={appStyles.result} adjustsFontSizeToFit numberOfLines={1}>{number}</Text>

        <View style={appStyles.row}>
          <ButtonCalc text={'C'} color={COLOR_GREY} action={clean} />
          <ButtonCalc text={'+/-'} color={COLOR_GREY} action={changeSing} />
          <ButtonCalc text={'DEL'} color={COLOR_GREY} action={btnDelete} />
          <ButtonCalc text={'/'} color={COLOR_ORANGE} action={() => setOperation(Operators.division)} />
        </View>

        <View style={appStyles.row}>
          <ButtonCalc text={'7'} action={makeNumber} />
          <ButtonCalc text={'8'} action={makeNumber} />
          <ButtonCalc text={'9'} action={makeNumber} />
          <ButtonCalc text={'x'} color={COLOR_ORANGE} action={() => setOperation(Operators.multiplication)} />
        </View>

        <View style={appStyles.row}>
          <ButtonCalc text={'4'} action={makeNumber} />
          <ButtonCalc text={'5'} action={makeNumber} />
          <ButtonCalc text={'6'} action={makeNumber} />
          <ButtonCalc text={'-'} color={COLOR_ORANGE} action={() => setOperation(Operators.subtracktion)} />
        </View>

        <View style={appStyles.row}>
          <ButtonCalc text={'1'} action={makeNumber} />
          <ButtonCalc text={'2'} action={makeNumber} />
          <ButtonCalc text={'3'} action={makeNumber} />
          <ButtonCalc text={'+'} color={COLOR_ORANGE} action={() => setOperation(Operators.addition)} />
        </View>

        <View style={appStyles.row}>
          <ButtonCalc text={'0'} double action={makeNumber} />
          <ButtonCalc text={'.'} action={addDecimal} />
          <ButtonCalc text={'='} color={COLOR_ORANGE} action={calculate} />
        </View>
      </SafeAreaView>
    </View>
  );
}