import Header from './components/Header';
import UserInput from './components/UserInput';
import ResultTable from './components/ResultTable';

import { calculateInvestmentResults } from './util/investment';
import { useState } from 'react';

var initialUserInput = {
  initialInvestment: 15000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 10,
};

function App() {
  const [userInput, setUserInput] = useState(initialUserInput);
  const [result, setResult] = useState(
    calculateInvestmentResults(initialUserInput)
  );

  const inputIsValid = userInput.duration >=1;

  function handleInputChange(e) {
    var { initialInvestment, annualInvestment, expectedReturn, duration } =
      userInput;

    switch (e.target.name) {
      case 'initialInvestment':
        initialInvestment = parseFloat(e.target.value);
        break;
      case 'annualInvestment':
        annualInvestment = parseFloat(e.target.value);
        break;
      case 'expectedReturn':
        expectedReturn = parseFloat(e.target.value);
        break;
      case 'duration':
        duration = parseFloat(e.target.value);
        break;
      default:
        break;
    }

    setUserInput(() => {
      return {
        initialInvestment: initialInvestment,
        annualInvestment: annualInvestment,
        expectedReturn: expectedReturn,
        duration: duration,
      };
    });

    setResult(() =>
      calculateInvestmentResults({
        initialInvestment: initialInvestment,
        annualInvestment: annualInvestment,
        expectedReturn: expectedReturn,
        duration: duration,
      })
    );
  }

  return (
    <>
      <Header />
      <UserInput handleChange={handleInputChange} userInput={userInput} />
      {inputIsValid ?
      <ResultTable
        result={result}
        initialInvestment={userInput.initialInvestment}
      /> : <p className='center'>Please enter a duration greater than zero.</p>}
    </>
  );
}

export default App;
