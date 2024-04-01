import React from 'react';
import styled from 'styled-components';
import Counter from './ui/counter';

const SectionTitle = styled.h1`
  text-align: center;
  margin-bottom: 20px;
`;

const CountersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const CountersSection = () => {
  const counters = [
    { title: 'Employers', number: 1234 },
    { title: 'Job Seekers', number: 5678 },
    { title: 'Training Courses', number: 910 },
    { title: 'Past Papers', number: 1112 },
    { title: 'Jobs', number: 1314 },
    { title: 'Total Hires', number: 1516 },
  ];

  return (
    <div className='mt-5 section'>
      <SectionTitle >Our Statistics</SectionTitle>
      <CountersContainer>
        {counters.map((counter, index) => (
          <Counter key={index} {...counter} />
        ))}
      </CountersContainer>
    </div>
  );
};

export default CountersSection;