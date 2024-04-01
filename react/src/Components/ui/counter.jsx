import React from 'react';
import styled from 'styled-components';
import CountUp from 'react-countup';

const CounterCard = styled.div`
  flex: 1;
  padding: 20px;
  margin: 10px;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
  text-align: center;
`;

const CounterNumber = styled.h2`
  font-size: 36px;
  margin-bottom: 10px;
`;

const CounterTitle = styled.p`
  font-size: 18px;
`;

const Counter = ({ title, number }) => (
  <CounterCard>
    <CounterNumber>
      <CountUp end={number} duration={5} />
    </CounterNumber>
    <CounterTitle>{title}</CounterTitle>
  </CounterCard>
);

export default Counter;