import PropTypes from 'prop-types';
import React from 'react';
import { OptionsList, OptionItem, OptionBtn } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      <OptionsList>
        {options.map(option => {
          return (
            <OptionItem key={option}>
              <OptionBtn type="button" onClick={() => onLeaveFeedback(option)}>
                {option}
              </OptionBtn>
            </OptionItem>
          );
        })}
      </OptionsList>
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
