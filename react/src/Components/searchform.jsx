import React from 'react';
import Select, { components } from 'react-select';
import styled, { css, keyframes } from 'styled-components';

const rotate = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(-180deg); }
`;
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Button = styled.button`
  flex: 1 0 200px; 
  margin: 10px;
  border-radius: 5px;
  outline: none;
`;

const jobFunctions = [
  { value: 'software-engineer', label: 'Software Engineer' },
  { value: 'data-analyst', label: 'Data Analyst' },
  { value: 'product-manager', label: 'Product Manager' },
  // Add more job functions as needed
];

const industries = [
  { value: 'technology', label: 'Technology' },
  { value: 'finance', label: 'Finance' },
  { value: 'healthcare', label: 'Healthcare' },
  // Add more industries as needed
];

const locations = [
  { value: 'san-francisco-ca', label: 'San Francisco, CA' },
  { value: 'new-york-ny', label: 'New York, NY' },
  { value: 'london-uk', label: 'London, UK' },
  // Add more locations as needed
];

const experienceLevels = [
  { value: 'entry-level', label: 'Entry Level' },
  { value: 'mid-level', label: 'Mid Level' },
  { value: 'senior-level', label: 'Senior Level' },
  // Add more experience levels as needed
];

const customStyles = {
    control: (provided) => ({
      ...provided,
      flex: '1 0 200px',
      margin: '10px',
      borderRadius: '5px',
      outline: 'none',
      backgroundPosition: 'right .5em top 50%, 0 0',
      backgroundSize: '.65em auto, 100%',
      boxShadow: '0 2px 5px rgba(0, 0, 0, 0.15)',
      borderColor: 'transparent',
      minWidth: '200px',
      '&:hover': {
        borderColor: 'transparent'
      }
    }),
    menu: (provided) => ({
      ...provided,
      borderRadius: '5px',
      zIndex: 9999,
      boxShadow: '0 2px 5px rgba(0, 0, 0, 0.15)'
    }),
  };
  const DropdownIndicator = (props) => {
    return (
      <components.DropdownIndicator {...props}>
        <svg fill='orange' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'>
          <path d='M2 0L0 2h4zm0 5L0 3h4z'/>
        </svg>
      </components.DropdownIndicator>
    );
  };
const SearchForm = () => (
  <Form>
    <Select
      options={jobFunctions}
      styles={customStyles}
      isSearchable
      placeholder="Job Function"
      
    />
    <Select
      options={industries}
      styles={customStyles}
      isSearchable
      placeholder="Industry"
    />
    <Select
      options={locations}
      styles={customStyles}
      isSearchable
      placeholder="Location"
    />
    <Select
      options={experienceLevels}
      styles={customStyles}
      isSearchable
      placeholder="Experience Level"
    />
    <Button type="submit">Find a Job</Button>
  </Form>
);

export default SearchForm;