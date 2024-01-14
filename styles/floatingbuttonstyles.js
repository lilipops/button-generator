import styled from 'styled-components';

const FormGroupInput = styled.div`
   
    margin-right: 40px;
    min-width: 200px;
    display: flex;
    flex-direction: column;
    Label {
        margin-bottom: 14px;
        color: #000;
        font-size: 16px;
        font-family: 'SF Pro Text',Roboto, Nunito;
        font-weight: 700;
    }
    input, select {
        font-family: Roboto;
        font-weight: 300;
        background: #FFFFFF;
        border: 1px solid #d9d9d9;
        height: 32px;
        padding: 1px 12px;
        font-size: 14px;
    }
    textarea {
        font-family: Roboto;
        font-weight: 300;
        background: #FFFFFF;
        border: 1px solid #d9d9d9;
        height: 81px;
        width: 395px;
        padding: 9px 12px;
        font-size: 14px;
        color: #828282;
    }
`;

const CustomButton = styled.button`
    background-color: #4CAF50;
    color: white;
    border: none;
    cursor: pointer;
    font-size: 16px;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    transition-duration: 0.4s;
    &:hover {
        background-color: #45a049;
    }
    margin-top: 20px;
    width: 100%; 
`;
const ChatButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
  flex-wrap: wrap;
  max-width: 825px;
  border: 1px solid #e0e0e0;
`;

const ButtonContainer = styled.div`
  position: fixed;
  right: 20px;
  bottom: 20px;
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.15);
  background-color: white;
  z-index: 1000;
  border: 1px solid #e0e0e0;
`;

const ChatButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.buttonColor};
  border-radius: ${props => props.borderRadius};
  border: none;
  cursor: pointer;
  width: 120px; 
  height: ${props => props.buttonHeight};
  color: #fff; 
  font-size: 14px; 
  padding: 10px 15px;
  width:auto;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.15);
`;


const ButtonIcon = styled.img`
  width: ${props => props.iconSize}px;
  height: ${props => props.iconSize}px;
`;
const Button = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  border: none;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  transition-duration: 0.4s;

  &:hover {
    background-color: #45a049;
  }
`;

const Label = styled.label`
  display: block;
  font-size: 0.9rem;
  color: #333;
  margin-bottom: 5px;
  font-weight: 600;
`;

const IconContainer = styled.div`
  margin-top: 10px;
  display: flex;
  gap: 10px;

`;

const IconWrapper = styled.div`
  width: 100%;
  height: auto;
`;

const ColorPickerContainer = styled.div`
position: relative;
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 30px;
background-color: ${props => props.buttonColor};
cursor: pointer;
`;

const ColorPickerText = styled.div`
color: #000;
font-size: 16px;
`;

const ErrorText = styled.div`
  color: red;
`;

const ScriptContent = styled.div`
  position: relative;
`;

const ScriptContainer = styled.div`
  border: 1px solid ${props => props.borderColor};
  transition: border 3s ease-in-out;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: 1fr auto;
  gap: 20px;
  padding: 20px;
  background-color: rgb(248, 249, 250);
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 5px;
  margin-top: 10px;
  overflow: hidden;
  margin-right: 30%;
  max-height: 360px;
  width: 825.68px;
  transition: height 0.2s ease-in-out 0s, width 0.2s ease-in-out 0s;
  position: relative;
`;

const ScriptInnerContainer = styled.div`
  transform: scaleY(1);
  transition: transform 0.2s ease-in-out 0s;
  height: 100%;
  overflow-y: auto;
  width: 100%;
  margin: auto;
  position: relative;

`;

const CopyButton = styled.button`
  position: relative;
  left: 10px;
  padding: 8px;
  background-color: rgb(255, 255, 255);
  border: 1px solid rgb(0, 0, 0);
  cursor: pointer;
`;

const ColorPickerPopover = styled.div`
position: absolute;
`;


export { ButtonIcon, ChatButtonContainer, ChatButton, CustomButton, Label, IconContainer, IconWrapper, ColorPickerContainer, ColorPickerText, ErrorText, ScriptContent, ScriptContainer, ScriptInnerContainer, CopyButton, ButtonContainer, Button,     FormGroupInput, ColorPickerPopover };



