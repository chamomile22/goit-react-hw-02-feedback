import React from 'react';

export class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleGoodFeedback = () => {
    this.setState(prevState => ({
      good: (prevState.good += 1),
    }));
  };
  handleNeutralFeedback = () => {
    this.setState(prevState => ({
      neutral: (prevState.neutral += 1),
    }));
  };
  handleBadFeedback = () => {
    this.setState(prevState => ({
      bad: (prevState.bad += 1),
    }));
  };

  countTotalFeedback = (good, neutral, bad) => {
    let total = 0;
    total = good + neutral + bad;
    return total;
  };
  countPositiveFeedbackPercentage = (good, neutral, bad) => {
    let percentage = 0;
    console.log(percentage);
    percentage = (good / (good + neutral + bad)) * 100;
    console.log(percentage);
    return percentage;
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <h2>Please leave your feedback</h2>
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
        <p>Good:{good}</p>
        <p>Neutral:{neutral}</p>
        <p>Bad:{bad}</p>
        <p>Total:{this.countTotalFeedback(good, neutral, bad)}</p>
        <p>
          Percentage:
          {console.log(
            this.countPositiveFeedbackPercentage(good, neutral, bad)
          )}
          %
        </p>
      </>
    );
  }
}
