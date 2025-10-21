export default function UserInput({ handleChange, userInput }) {
  return (
    <>
      <section id="user-input">
        <div className="input-group">
          <p>
            <label>Initial Investment</label>
            <input
              type="number"
              name="initialInvestment"
              onChange={handleChange}
              defaultValue={userInput.initialInvestment}
              required
            />
          </p>
          <p>
            <label>Annual Investment</label>
            <input
              type="number"
              name="annualInvestment"
              onChange={handleChange}
              defaultValue={userInput.annualInvestment}
              required
            />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label>Expected Return</label>
            <input
              type="number"
              name="expectedReturn"
              onChange={handleChange}
              defaultValue={userInput.expectedReturn}
              required
            />
          </p>
          <p>
            <label>Duration</label>
            <input
              type="number"
              name="duration"
              onChange={handleChange}
              defaultValue={userInput.duration}
              required
            />
          </p>
        </div>
      </section>
    </>
  );
}
