import styled, { createGlobalStyle, keyframes, css } from 'styled-components';


const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Nunito:300,400,600,700&display=swap');
  @import url('https://fonts.googleapis.com/css?family=SF+Pro+Text:300,400,600,700&display=swap');
`;

export default GlobalStyle;
const WidgetContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;
  padding: 20px;
  background-color: rgb(248, 249, 250);
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
  width: 857px;
  max-width: 857px;
  margin: auto;
`;
const WidgetPreviewContainer = styled.div`
  width: 350px;
  height: 337px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
  font-family: Arial, sans-serif;
  display: flex;
  flex-direction: column;
`;

const WidgetHeader = styled.div`
position: relative;
background-color: ${props => props.bgColor};
  padding: 20px;
  display: flex;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;


const BrandImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  margin-right: 12px;
`;

const MessageContainer = styled.div`
  padding: 24px 20px;
  background-image: url(https://user-images.githubusercontent.com/4735407/153391597-dbe0e13e-7ea8-4d7c-9b5c-66d0400df3d3.png
  );
  flex-grow: 1;
`;

const MessageContainerBlock = styled.div`
  display: inline-block;
  padding: 12px 16px;
  background-color: #fff;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.12);
  border-radius: 16px;
  word-wrap: break-word;
  h4 {
    color: grey;
    font-weight: 600;
    font-size: 12px;
    margin-bottom: 8px;
  }
  p {
    color: #1a1a1a;
    font-size: 14px;
    white-space: pre-wrap;
    break-word: break-word;
    max-width: 270px;
  }
`;

const FormGroupWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 32px;
`;
const ChatButton = styled.button`
  box-sizing: border-box;
  display: inline-flex;
  justify-content: center;
  background-color: #1A1A1A;
  padding: 6px 55px;
  box-shadow: 0 0 8px 1px rgba(0,0,0,.12);
  color: #fff;
  align-items: center;
  cursor: pointer;
  border-radius: 40px;
  margin: 20px;
  border: none;
  margin-top: auto;
`;

const Label = styled.label`
  display: block;
  font-size: 0.9rem;
  color: #333;
  margin-bottom: 5px;
  font-weight: 600;
`;


const BrandInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: -10px;
  font-family: 'SF Pro Text',Roboto, Nunito;
  h4 {
    color: #000000;
    font-size: 16px;
    font-weight: 600;
  }
  p {
    color: #4F4F4F;
    font-size: 12px;
    margin-top: -10px
  }
`;
const CloseButton = styled.div`
position: absolute;
top: 10px;
right: 10px;
  margin-right: 10px;
  svg {
    height: 12px;
    width: 12px;
  }
`;


const FormGroupWrapperTogether = styled.div`
display: flex;
justify-content: flex-start;
margin-top: 32px;
`;
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

const ColorPickerText = styled.div`
  color: #000;
  font-size: 16px;
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

const ColorPickerPopover = styled.div`
position: absolute;
`;
const LabelHelper = styled.p`
  margin-top: -4px;
  font-family: Monospace;
  font-style: normal;
  font-weight: 200;
  font-size: 11px;
  padding-bottom: 12px;
  color: #828282;
`;

const CustomButton = styled.button`
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
  width: 100%;
  &:hover {
    background-color: #45a049;
  }
  `;
const glow = keyframes`
  0% {
    box-shadow: 0 0 rgba(97, 239, 97, 1);
  }
  100% {
    box-shadow: 0 0 20px 16px transparent;
  }
`;
const ScriptContent = styled.div`
  position: relative;
`;

const ScriptContainer = styled.div`
  transition: border 3s ease-in-out;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: 1fr auto;
  gap: 20px;
  padding: 20px;
  background-color: rgb(248, 249, 250);
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
  margin-top: 10px;
  overflow: hidden;
  z-index: 1;
  margin-right: 30%;
  max-height: 360px;
  width: 857px;
  max-width: 857px;
  transition: height 0.2s ease-in-out 0s, width 0.2s ease-in-out 0s;
  position: relative;

  ${props => props.isCopied && css`
  animation: ${glow} 1.8s ease 1;
`}
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
  border-radius: 10px;
`;



export {
  WidgetPreviewContainer,
  WidgetHeader,
  BrandImage,
  MessageContainer,
  ChatButton,
  Label,
  ColorPickerContainer,
  ColorPickerText,
  WidgetContainer,
  BrandInfo,
  CloseButton,
  MessageContainerBlock,
  FormGroupWrapperTogether,
  FormGroupInput,
  ColorPickerPopover,
  FormGroupWrapper,
  LabelHelper,
  CustomButton,
  ScriptContent,
  ScriptContainer,
  ScriptInnerContainer,
  CopyButton,
};
