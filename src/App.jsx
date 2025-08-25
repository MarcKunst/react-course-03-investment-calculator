import Header from "./components/Header"
import UserInput from "./components/UserInput"
import Result from "./components/Result";

function App() {
  let initalInvestment = 0;
  let annualInvestment = 0;
  let expectedReturn = 0;
  let duration = 1;

  let investmentValue = 0;
  let yearlyInterest = 0;
  let totalInterest = 0;
  let investedCapital = 0;

  return (
    <>
      <Header />
      <UserInput
        initalInvestment={initalInvestment} 
        annualInvestment={annualInvestment} 
        expectedReturn={expectedReturn} 
        duration={duration}
      />
      <Result 
        year={duration}       
        investmentValue={investmentValue} 
        yearlyInterest={yearlyInterest} 
        totalInterest={totalInterest}
        investedCapital={investedCapital}
      />
    </>
  )
}

export default App
