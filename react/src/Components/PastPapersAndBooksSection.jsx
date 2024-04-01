import React, { useState } from 'react';
import styled from 'styled-components';
import { ButtonGroup, Button, Tab, Tabs } from 'react-bootstrap';
import { FaUniversity, FaSchool } from 'react-icons/fa';
import TabContent from './ui/TabsContent';
import { Transition } from 'react-transition-group';
const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  color:#0a0a0a;
  font-family: 'Lazer Game Zone', sans-serif;                                           
  margin-top:20px;
  padding-top:50px;
`;

const Subtitle = styled.h4`
  text-align: center;
  margin-bottom: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  
  border-radius: 5px;
  overflow: hidden;
  max-width:350px;
  margin-left:auto;
  margin-right:auto;
`;

const TabsContainer = styled.div`
  background: #fff;
  padding-left:40px;
  padding-right:40px;
  padding-top:30px;
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
`;

 

const PastPapersAndBooksSection = () => {
  const [activeButton, setActiveButton] = useState('university');
  const [activeTab, setActiveTab] = useState('universities');

  return (
    <div class="section pastspapers-section">
      <SectionTitle>Only the best for the best</SectionTitle>
      <Subtitle>Find the best study documents to ace your way through education.</Subtitle>
      <ButtonContainer>
        <ButtonGroup>
          <Button
            variant={activeButton === 'university' ? 'primary' : 'light'}
            onClick={() => {
              setActiveButton('university');
              setActiveTab('universities');
            }}
          >
            University <FaUniversity />
          </Button>
          <Button
            variant={activeButton === 'highSchool' ? 'primary' : 'light'}
            onClick={() => {
              setActiveButton('highSchool');
              setActiveTab('universities');
            }}
          >
            High School <FaSchool />
          </Button>
        </ButtonGroup>
      </ButtonContainer>
      <TabsContainer>
      <Tabs activeKey={activeTab} onSelect={(k) => setActiveTab(k)} transition={false}>
        <Tab eventKey="universities" title="Universities">
            <Transition in={activeTab === 'universities'} timeout={0}>
            <div>
            <TabContent tab="universities" />
            </div>
            </Transition>
        </Tab>
        <Tab eventKey="documents" title="Documents">
            <Transition in={activeTab === 'documents'} timeout={0}>
            <div>
                <TabContent tab="documents" />
            </div>
            </Transition>
        </Tab>
        <Tab eventKey="books" title="Books">
            <Transition in={activeTab === 'books'} timeout={0}>
            <div>
                <TabContent tab="books" />
            </div>
            </Transition>
        </Tab>
        </Tabs>
      </TabsContainer>
     
    </div>
  );
};

export default PastPapersAndBooksSection;