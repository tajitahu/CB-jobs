import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaSearch } from 'react-icons/fa';

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 600px;
  background-color: #2a0316;
  color: white;
  padding: 20px;
  position: relative;
`;

const Title = styled.h1`
  font-size: 2em;
  margin-bottom: 20px;
  font-family: 'Lazer Game Zone', sans-serif;  
`;

const Description = styled.p`
  font-size: 1.2em;
  text-align: center;
  margin-bottom: 40px;
`;

const SearchContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 600px;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 10px 40px 10px 20px;
  font-size: 1em;
  border-radius: 20px;
  border: none;
  transition: box-shadow 0.3s ease;
  &:focus {
    outline: none;
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.1);
  }
`;

const SearchIcon = styled(FaSearch)`
  position: absolute;
  right: 10px;
  top: 50%;
  color: #2a0316;
  transform: translateY(-50%);
  &:hover {
    background-color: lightgray;
    border-radius: 50%;
  }
`;

const SectionComponent = () => {
  return (
    <Section>
      <Title>Grow smarter together</Title>
      <Description>Find top-rated study notes from students taking the same courses as you.</Description>
      <SearchContainer>
        <SearchInput placeholder="Search for documents and books..." />
        <SearchIcon size={20} />
      </SearchContainer>
      {/* Add your animations here */}
    </Section>
  );
};

export default SectionComponent;