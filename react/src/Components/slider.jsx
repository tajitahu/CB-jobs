import React from 'react';
import styled from 'styled-components';
import { Search } from '@material-ui/icons';

const Slider = styled.div`
  display: flex;
  overflow-x: auto;
`;

const Button = styled.button`
  background: transparent;
  border: none;
  margin: 10px;
  padding: 10px;
  font-size: 16px;
  cursor: pointer;  
  display: flex;
  align-items: center;
  color: #fff;
  white-space: nowrap;
  z-index: 10;
  border-color:red !important;

`;
 const buttonLabels = [
    'Full Time',
    'Internship',
    'Graduate',
    'Past Papers',
    'Training Courses',
    'Engineering',
    'Banking',
    'Hospitality',
    'Academic Writing',
    'Job Tips'
  ];
const ButtonText = styled.span`
  margin-left: 5px;
`;
const borderColors = [
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'indigo',
    'violet',
    'pink',
    'brown',
    'gray'
  ];

const SliderComponent = () => (
  <Slider>
    {buttonLabels.map((label, i) => (
      <Button key={i} borderColor={borderColors[i]}>
        <Search />
        <ButtonText>{label}</ButtonText>
      </Button>
    ))}
  </Slider>
);

export default SliderComponent;