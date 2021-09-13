import React from 'react';
import './App.css';
import {useForm} from 'react-hook-form';

function App() {
  const {
    register,
    setValue,
    handleSubmit,
    formState: {errors}
  } = useForm();

  const compound = (
    initialAmount,
    monthlyContribution,
    timeInYears,
    interestRate
  ) => {
    let result = initialAmount;
    const yearlyContribution = monthlyContribution * 12;
    const interestRateAsDecimal = interestRate / 100;
    for (let i = 0; i < timeInYears; i++) {
      result = (result + yearlyContribution) * (1 + interestRateAsDecimal);
    }
    return result.toFixed(2);
  };

  const onSubmit = (data) => {
    console.log(data);
    const finalAmount = compound(
      Number(data.initialAmount),
      Number(data.monthlyContribution),
      Number(data.timeInYears),
      Number(data.interestRate)
    );
    setValue('finalAmount', finalAmount);
  };

  const requiredAsterisk = <span className="custom-required">*</span>;

  return (
    <div className="container custom-container">
      <h1 className="custom-h1">Compound Interest Calculator</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="initialAmount" className="form-label">
            Initial amount {requiredAsterisk}
          </label>
          <div className="input-group">
            <span className="input-group-text">$</span>
            <input
              id="initialAmount"
              type="number"
              className="form-control"
              {...register('initialAmount', {required: true, min: 0})}
            />
          </div>
          {errors.initialAmount && (
            <p id="initialAmountError" className="custom-error">
              Initial amount must be 0 or more
            </p>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="monthlyContribution" className="form-label">
            Monthly contribution in dollars {requiredAsterisk}
          </label>
          <div className="input-group">
            <span className="input-group-text">$</span>
            <input
              id="monthlyContribution"
              type="number"
              className="form-control"
              {...register('monthlyContribution', {required: true, min: 0})}
            />
          </div>

          {errors.monthlyContribution && (
            <p id="monthlyContributionError" className="custom-error">
              Monthly contribution must be 0 or more
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
            {...register('timeInYears', {required: true, min: 1})}
          />
          {errors.timeInYears && (
            <p id="timeInYearsError" className="custom-error">
              Length of time in years must be 1 or more
            </p>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="interestRate" className="form-label">
            Interest rate as percentage {requiredAsterisk}
          </label>
          <div className="input-group">
            <span className="input-group-text">%</span>
            <input
              id="interestRate"
              type="number"
              className="form-control"
              {...register('interestRate', {required: true, min: 1})}
            />
          </div>
          {errors.interestRate && (
            <p id="interestRateError" className="custom-error">
              Interest rate as percentage must be 1 or more
            </p>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="finalAmount" className="form-label">
            Final amount
          </label>
          <div className="input-group">
            <span className="input-group-text">$</span>
            <input
              id="finalAmount"
              type="number"
              className="form-control"
              disabled
              readOnly
              {...register('finalAmount')}
            />
          </div>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
