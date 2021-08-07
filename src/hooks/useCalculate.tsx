import { useRef, useState } from "react";

export enum Operators {
  addition, subtracktion, multiplication, division, none
}

export const useCalculator = () => {


  const [number, setNumber] = useState('');
  const [prevNumber, setPrevNumber] = useState('');
  const [isResult, setIsResult] = useState(false);
  const lastOperation = useRef<Operators>(Operators.none);

  const clean = () => {
    setNumber('');
    setPrevNumber('')
  }

  const makeNumber = (button: string) => {
    if (isResult) {
      setNumber(button);
      setIsResult(false)
    }
    else
      if (number === '0' || number === '-0') {
        setNumber(number);
      }
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

    if (lastOperation.current != Operators.none) {

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

      lastOperation.current = Operators.none;
      setIsResult(true)
    }
  }

  return {
    calculate,
    addDecimal,
    btnDelete,
    changeSing,
    clean,
    makeNumber,
    setOperation,
    number,
    prevNumber
  }
}