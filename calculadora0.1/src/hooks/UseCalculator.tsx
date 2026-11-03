import { useState } from 'react';
import * as Speech from 'expo-speech';

export function useCalculator() {
  const [formula, setFormula] = useState('0');
  const [prevNumber, setPrevNumber] = useState('');
  const [operation, setOperation] = useState<string | null>(null);
  const [history, setHistory] = useState<string[]>([]);
  const [clearOnNextPress, setClearOnNextPress] = useState(false);

  const clear = () => {
    setFormula('0');
    setPrevNumber('');
    setOperation(null);
    setClearOnNextPress(false);
  };

  const clearHistory = () => {
    setHistory([]);
  };

  const deleteLast = () => {
    if (clearOnNextPress) return;
    if (formula.length === 1 || (formula.length === 2 && formula.startsWith('-'))) {
      setFormula('0');
    } else {
      setFormula(formula.slice(0, -1));
    }
  };

  const buildNumber = (numberString: string) => {
    if (clearOnNextPress) {
      if (numberString === '.') {
        setFormula('0.');
      } else {
        setFormula(numberString);
      }
      setClearOnNextPress(false);
      return;
    }

    if (formula.includes('.') && numberString === '.') return;

    if (formula.startsWith('0') && !formula.includes('.')) {
      if (numberString === '.') {
        setFormula('0.');
        return;
      }
      if (numberString === '0' && formula === '0') return;
      if (numberString !== '0' && !formula.includes('.')) {
        setFormula(numberString);
        return;
      }
    }

    setFormula(formula + numberString);
  };

  const setOperationType = (op: string) => {
    setClearOnNextPress(false);
    if (prevNumber !== '' && operation !== null) {
      calculateResult();
    } else {
      setPrevNumber(formula);
    }
    setFormula('0');
    setOperation(op);
  };

  const calculatePercentage = () => {
    const current = parseFloat(formula);
    if (isNaN(current)) return;
    const result = current / 100;
    setFormula(result.toString());
    setClearOnNextPress(true);
  };

  const calculateResult = () => {
    if (!operation || prevNumber === '') return;

    const num1 = parseFloat(prevNumber);
    const num2 = parseFloat(formula);
    let result = 0;

    switch (operation) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '×':
        result = num1 * num2;
        break;
      case '÷':
        result = num2 !== 0 ? num1 / num2 : 0;
        break;
      default:
        return;
    }

    const operationRecord = `${num1} ${operation} ${num2} = ${result}`;
    setHistory((prev) => [operationRecord, ...prev].slice(0, 10));

    setFormula(result.toString());
    setPrevNumber('');
    setOperation(null);
    setClearOnNextPress(true);

    Speech.speak(`El resultado es ${result}`, {
      language: 'es-ES',
      pitch: 0.9,
      rate: 1.0,
    });
  };

  // 🔄 Nueva función: Extraer el resultado de un item del historial al hacer clic (ej: "5 + 5 = 10" extrae "10")
  const useHistoryItem = (record: string) => {
    const parts = record.split('=');
    if (parts.length === 2) {
      const finalResult = parts[1].trim();
      setFormula(finalResult);
      setClearOnNextPress(true);
    }
  };

  return {
    formula,
    prevNumber,
    history,
    clear,
    clearHistory,
    deleteLast,
    buildNumber,
    setOperationType,
    calculatePercentage,
    calculateResult,
    useHistoryItem,
  };
}