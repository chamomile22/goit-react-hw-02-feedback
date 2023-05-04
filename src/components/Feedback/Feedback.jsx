import React from 'react';

export class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    percentage: 0,
  };

  handleGoodFeedback = () => {
    this.setState(prevState => ({
      good: (prevState.good += 1),
    }));
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };
  handleNeutralFeedback = () => {
    this.setState(prevState => ({
      neutral: (prevState.neutral += 1),
    }));
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };
  handleBadFeedback = () => {
    this.setState(prevState => ({
      bad: (prevState.bad += 1),
    }));
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };

  countTotalFeedback = () => {
    this.setState(prevState => ({
      total: (prevState.total =
        prevState.good + prevState.neutral + prevState.bad),
    }));
  };
  countPositiveFeedbackPercentage = () => {
    this.setState(prevState => ({
      percentage: (prevState.percentage =
        (prevState.good /
          (prevState.good + prevState.neutral + prevState.bad)) *
        100),
    }));
  };

  render() {
    return (
      <>
        <h1>Please leave your feedback</h1>
        <ul>
          <li>
            <button type="button" onClick={this.handleGoodFeedback}>
              Good
            </button>
          </li>
          <li>
            <button type="button" onClick={this.handleNeutralFeedback}>
              Neutral
            </button>
          </li>
          <li>
            <button type="button" onClick={this.handleBadFeedback}>
              Bad
            </button>
          </li>
        </ul>
        <h2>Statistics</h2>
        <p>Good:{this.state.good}</p>
        <p>Neutral:{this.state.neutral}</p>
        <p>Bad:{this.state.bad}</p>
        <p>Total:{this.state.total}</p>
        <p>Percentage:{this.state.percentage}%</p>
      </>
    );
  }
}
