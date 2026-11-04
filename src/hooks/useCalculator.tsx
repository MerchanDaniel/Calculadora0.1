import { useState } from 'react';
import * as Speech from 'expo-speech';

export function useCalculator() {
  // Estado para la cadena de operaciones que se muestra en el display principal (ej: "5+6×2")
  const [formula, setFormula] = useState('0');
  
  // Estado para mostrar la operación previa o el título secundario en la pantalla superior
  const [subValue, setSubValue] = useState('');
  
  // Estado para almacenar el historial de operaciones realizadas (máximo 10 elementos)
  const [history, setHistory] = useState<string[]>([]);
  
  // Bandera para limpiar el display automáticamente si el usuario presiona un número justo después de obtener un resultado
  const [clearOnNextPress, setClearOnNextPress] = useState(false);

  // Función para reiniciar la calculadora a su estado original de fábrica
  const clear = () => {
    setFormula('0');
    setSubValue('');
    setClearOnNextPress(false);
  };

  // Función para vaciar por completo el historial de operaciones guardadas
  const clearHistory = () => {
    setHistory([]);
  };

  // Función para borrar el último carácter escrito en la pantalla (botón de retroceso / delete)
  const deleteLast = () => {
    if (clearOnNextPress) return;
    if (formula.length === 1 || (formula.length === 2 && formula.startsWith('-'))) {
      setFormula('0');
    } else {
      setFormula(formula.slice(0, -1));
    }
  };

  // Función para construir la cadena numérica y manejar la validación de puntos decimales
  const buildNumber = (numberString: string) => {
    // Si acabamos de calcular un resultado, al presionar un número nuevo limpiamos y empezamos de cero
    if (clearOnNextPress) {
      if (numberString === '.') {
        setFormula('0.');
      } else {
        setFormula(numberString);
      }
      setClearOnNextPress(false);
      return;
    }

    // Validación: Evita que se escriban múltiples puntos decimales en un mismo número de la operación
    const parts = formula.split(/[\+\-\×\÷]/);
    const currentNum = parts[parts.length - 1];
    if (numberString === '.' && currentNum.includes('.')) return;

    // Reemplaza el '0' inicial por el nuevo número si no hay un punto de por medio
    if (formula === '0' && numberString !== '.') {
      setFormula(numberString);
    } else {
      setFormula(formula + numberString);
    }
  };

  // Función para añadir operadores (+, -, ×, ÷) evitando duplicar operadores seguidos
  const setOperationType = (op: string) => {
    setClearOnNextPress(false);
    const lastChar = formula.slice(-1);
    // Si el usuario ya puso un operador al final, lo reemplaza por el nuevo en lugar de acumular dos seguidos
    if (['+', '-', '×', '÷'].includes(lastChar)) {
      setFormula(formula.slice(0, -1) + op);
      return;
    }
    setFormula(formula + op);
  };

  // Función para calcular el porcentaje del número actual en la cadena
  const calculatePercentage = () => {
    const parts = formula.split(/[\+\-\×\÷]/);
    const lastNum = parts[parts.length - 1];
    if (!lastNum) return;
    
    const percentageVal = parseFloat(lastNum) / 100;
    const baseFormula = formula.slice(0, formula.length - lastNum.length);
    setFormula(baseFormula + percentageVal);
  };

  // Función principal para evaluar la expresión matemática completa al presionar el botón de igual (=)
  const calculateResult = () => {
    try {
      let cleanFormula = formula;

      // Validación: Si la fórmula termina en un operador volando (ej: "5+6+"), lo elimina antes de evaluar
      const lastChar = cleanFormula.slice(-1);
      if (['+', '-', '×', '÷'].includes(lastChar)) {
        cleanFormula = cleanFormula.slice(0, -1);
      }

      // Reemplaza los símbolos visuales de la calculadora por los operadores válidos de JavaScript (* y /)
      const expressionToEvaluate = cleanFormula
        .replace(/×/g, '*')
        .replace(/÷/g, '/');

      // Evalúa la cadena de forma segura utilizando Function en lugar de eval directo
      let result = Function(`'use strict'; return (${expressionToEvaluate})`)();

      // Control de errores en caso de divisiones entre cero o resultados inválidos (NaN)
      if (isNaN(result) || !isFinite(result)) {
        setFormula('Error');
        setClearOnNextPress(true);
        return;
      }

      // Limita los decimales infinitos o largos a un máximo de 4 decimales para que no saturen la pantalla
      if (!Number.isInteger(result)) {
        result = parseFloat(result.toFixed(4));
      }

      // Registra la operación completa y el resultado en el historial (máximo los últimos 10)
      const operationRecord = `${cleanFormula} = ${result}`;
      setHistory((prev) => [operationRecord, ...prev].slice(0, 10));

      // Muestra la operación anterior arriba y fija el resultado final en el display principal
      setSubValue(cleanFormula);
      setFormula(result.toString());
      setClearOnNextPress(true);

      // Reproduce el resultado en voz alta utilizando la librería nativa expo-speech en español
      Speech.speak(`El resultado es ${result}`, {
        language: 'es-ES',
        pitch: 0.9,
        rate: 1.0,
      });
    } catch (error) {
      setFormula('Error');
      setClearOnNextPress(true);
    }
  };

  // Función para recuperar un valor pasado desde el historial al hacerle clic
  const useHistoryItem = (record: string) => {
    const parts = record.split('=');
    if (parts.length === 2) {
      const finalResult = parts[1].trim();
      setFormula(finalResult);
      setSubValue('');
      setClearOnNextPress(true);
    }
  };

  // Retorna todas las variables y funciones para que puedan ser usadas desde las pantallas y componentes
  return {
    formula,
    prevNumber: subValue,
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