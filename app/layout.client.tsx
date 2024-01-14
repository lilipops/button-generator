import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import styled from 'styled-components';


const DynamicFloatingButton = dynamic(() => import('../components/floatingbutton'), { ssr: false });
const DynamicPopup = dynamic(() => import('../components/formgenerator'), { ssr: false });

const StyledButton = styled.button`
  align-items: center;
  appearance: none;
  background-color: #FCFCFD;
  border-radius: 4px;
  border-width: 0;
  box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset;
  box-sizing: border-box;
  color: #36395A;
  cursor: pointer;
  display: inline-flex;
  font-family: "JetBrains Mono", monospace;
  height: 48px;
  justify-content: center;
  line-height: 1;
  list-style: none;
  overflow: hidden;
  padding-left: 16px;
  padding-right: 16px;
  position: relative;
  text-align: left;
  text-decoration: none;
  transition: box-shadow .15s, transform .15s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  will-change: box-shadow, transform;
  font-size: 18px;

  &:focus {
    box-shadow: #D6D6E7 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset;
  }

  &:hover {
    box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset;
    transform: translateY(-2px);
  }

  &:active {
    box-shadow: #D6D6E7 0 3px 7px inset;
    transform: translateY(2px);
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; 
  gap: 20px;
  padding: 20px;
`;
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 20px;
`;

const Layout = () => {
  const [selectedComponent, setSelectedComponent] = useState('floatingButton');

  const renderComponent = () => {
    switch (selectedComponent) {
      case 'floatingButton':
        return <DynamicFloatingButton />;
      case 'popup':
        return <DynamicPopup />;
      default:
        return null;
    }
  };
  const ComponentBox = styled.div`
  border: 1px solid #000; 
  padding: 20px; 
  margin-top: 20px; 
`;

return (
  <>
    <Container>
      <ButtonContainer>
        <StyledButton onClick={() => setSelectedComponent('floatingButton')}>Generate Button</StyledButton>
        <StyledButton onClick={() => setSelectedComponent('popup')}>Generate Widget for button</StyledButton>
      </ButtonContainer>
      {renderComponent()}
    </Container>
  </>
);
};

export default Layout;