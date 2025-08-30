import { useState } from "react"

import Header from "./components/Header.jsx"
import UserInput from "./components/UserInput.jsx"
import Result from "./components/Result.jsx";

function App() {
    const [userInput, setUserInput] = useState({
        initialInvestment: 10000,
        annualInvestment: 1200, 
        expectedReturn: 6,
        duration: 10,
    })

    const inputIsValid = userInput.duration >= 1;

    function handleInput(inputIdentifier, newValue) {
      setUserInput(prevUserInput => {
          return {
              ...prevUserInput,
              [inputIdentifier]: +newValue
          }
      })
    }

  let investmentValue = 0;
  let yearlyInterest = 0;
  let totalInterest = 0;
  let investedCapital = 0;

  return (
    <>
      <Header />
      <UserInput
        userInput={userInput}
        onInputChange={handleInput}
      />
      {!inputIsValid && <p className="center">Please enter a duration greater than 0.</p>}

      {inputIsValid &&       <Result input={userInput} />}
    </>
  )
}

export default App
