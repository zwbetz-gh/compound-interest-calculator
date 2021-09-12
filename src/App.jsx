import React from 'react';
import './App.css';
import {useForm} from 'react-hook-form';

function App() {
  const {
    register,
    handleSubmit,
    formState: {errors}
  } = useForm();

  const onSubmit = (data) => console.log(data);

  const requiredAsterisk = <span className="custom-required">*</span>;

  return (
    <div className="container custom-container">
      <h1 className="custom-h1">Compound Interest Calculator</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="initialAmount" className="form-label">
            Initial amount {requiredAsterisk}
          </label>
          <input
            id="initialAmount"
            type="number"
            className="form-control"
            {...register('initialAmount', {required: true})}
          />
          {errors.initialAmount && (
            <p id="initialAmountError" className="custom-error">
              Initial amount is required
            </p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="monthlyContribution" className="form-label">
            Monthly contribution {requiredAsterisk}
          </label>
          <input
            id="monthlyContribution"
            type="number"
            className="form-control"
            {...register('monthlyContribution', {required: true})}
          />
          {errors.monthlyContribution && (
            <p id="monthlyContributionError" className="custom-error">
              Monthly contribution is required
            </p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="timeInYears" className="form-label">
            Length of time in years {requiredAsterisk}
          </label>
          <input
            id="timeInYears"
            type="number"
            className="form-control"
            {...register('timeInYears', {required: true})}
          />
          {errors.timeInYears && (
            <p id="timeInYearsError" className="custom-error">
              Length of time in years is required
            </p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="interestRate" className="form-label">
            Interest rate {requiredAsterisk}
          </label>
          <input
            id="interestRate"
            type="number"
            className="form-control"
            {...register('interestRate', {required: true})}
          />
          {errors.interestRate && (
            <p id="interestRateError" className="custom-error">
              Interest rate is required
            </p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="final_amount" className="form-label">
            Final amount
          </label>
          <input
            id="final_amount"
            type="number"
            className="form-control"
            disabled
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
