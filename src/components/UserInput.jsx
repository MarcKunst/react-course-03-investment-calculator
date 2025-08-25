export default function UserInput({ initalInvestment, annualInvestment, expectedReturn, duration, onYearChange }) {
    return (
        <section id="user-input">
            <div className="input-group">
                <div>
                    <label>Initial investment</label>
                    <input type="number" min="0" defaultValue={initalInvestment}></input>
                </div>

                <div>
                    <label>Annual investment</label>
                    <input type="number" min="0" defaultValue={annualInvestment}></input>
                </div>

                <div>
                    <label>Expected return</label>
                    <input type="number" min="0" defaultValue={expectedReturn} readOnly></input>
                </div>

                <div>
                    <label>Duration</label>
                    <input type="number" min="0" defaultValue={duration} onChange={onYearChange}></input>
                </div>
            </div>
        </section>
    )
}