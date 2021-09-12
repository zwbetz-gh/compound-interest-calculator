import './App.css';

function App() {
  return (
    <div className="container custom-container">
      <h1 className="custom-h1">Compound Interest Calculator</h1>
      <form>
        <div class="mb-3">
          <label for="initial_amount" class="form-label">
            Initial amount
          </label>
          <input id="initial_amount" type="number" class="form-control" />
        </div>
        <div class="mb-3">
          <label for="monthly_contribution" class="form-label">
            Monthly contribution
          </label>
          <input id="monthly_contribution" type="number" class="form-control" />
        </div>
        <div class="mb-3">
          <label for="time_in_years" class="form-label">
            Length of time in years
          </label>
          <input id="time_in_years" type="number" class="form-control" />
        </div>
        <div class="mb-3">
          <label for="interest_rate" class="form-label">
            Estimated interest rate
          </label>
          <input id="interest_rate" type="number" class="form-control" />
        </div>
        <div class="mb-3">
          <label for="final_amount" class="form-label">
            Final amount
          </label>
          <input
            id="final_amount"
            type="number"
            class="form-control"
            disabled
          />
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
