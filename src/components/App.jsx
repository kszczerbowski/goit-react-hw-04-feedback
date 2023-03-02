import css from './App.module.css';
import React, { useState } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';
import { Section } from './Section/Section';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const addGrade = option => {
    const gradeMap = {
      good: [good, setGood],
      neutral: [neutral, setNeutral],
      bad: [bad, setBad],
    };
    const [gradeValue, setGrade] = gradeMap[option];
    setGrade(gradeValue + 1);
  };
  const options = ['Good', 'Neutral', 'Bad'];
  const total = good + neutral + bad;
  const positiveFeedbackPercentage =
    total === 0 ? 0 : Math.round((good / total) * 100);
  return (
    <div className={css.container}>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={addGrade} />
      </Section>
      <Section title="Statistics">
        {total === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positiveFeedback={positiveFeedbackPercentage}
          />
        )}
      </Section>
    </div>
  );
};
