import React, { useRef, useState, useEffect } from 'react';
import PhoneNumberInput from './phonenumberinput';
import { ChromePicker } from 'react-color';
import tinycolor from 'tinycolor2';
import { ButtonIcon, ChatButtonContainer, ChatButton, CustomButton, Label , ColorPickerContainer, ColorPickerText, ScriptContent, ScriptContainer, ScriptInnerContainer, CopyButton, ColorPickerPopover, FormGroupInput } from '../styles/floatingbuttonstyles';


const FloatingButtonPicker = () => {
  const [buttonColor, setButtonColor] = useState('#00e851');
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [buttonIcon] = useState('https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/375_Whatsapp_logo-1024.png');
  const [iconSize] = useState('25px');
  const [generatedScriptDisplay, setGeneratedScriptDisplay] = useState(''); 
  const [generatedScript, setGeneratedScript] = useState('');
  const [copied, setCopied] = useState(false);
  const [buttonPosition, setButtonPosition] = useState('bottom-right'); 
  const [showScriptBlock, setShowScriptBlock] = useState(false);
  const [copySuccess, setCopySuccess] = useState('');
  const [borderColor, setBorderColor] = useState('rgb(0, 0, 0)');
  const [marginBottom, setMarginBottom] = useState('20px');
  const [marginLeft, setMarginLeft] = useState('20px');
  const [marginRight, setMarginRight] = useState('20px');
  const [borderRadius, setBorderRadius] = useState('20px');
  const [buttonText, setButtonText] = useState('WhatsApp'); 
  const [buttonWidth, setButtonWidth] = useState('20px'); 
  const [buttonHeight, setButtonHeight] = useState('50px'); 
  const [welcomeMessage, setWelcomeMessage] = useState("Hello, how can we help you?");
  const [zIndex, setZIndex] = useState(999999);
  const scriptEndRef = useRef(null);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isPhoneNumberValid, setIsPhoneNumberValid] = useState(true);
  const [phoneNumberError, setPhoneNumberError] = useState('');

  useEffect(() => {
    scriptEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);



const copyToClipboard = () => {
  navigator.clipboard.writeText(generatedScriptDisplay)
    .then(() => {
      setCopySuccess('Copied!');
      setBorderColor('green');
      setTimeout(() => {
        setBorderColor('rgb(0, 0, 0)');
        setCopySuccess('');
      }, 1000);
    })
    .catch(err => console.log('Something went wrong', err));
}
const handlePhoneNumberChange = (phoneNumberInput) => {
  const phoneNumberString = String(phoneNumberInput);
  const phoneNumberWithoutSpaces = phoneNumberString.replace(/\s+/g, '');

  setPhoneNumber(phoneNumberWithoutSpaces);

  if (!isValidPhoneNumber(phoneNumberWithoutSpaces)) {
      setIsPhoneNumberValid(false);
      setPhoneNumberError('Please enter a valid phone number');
  } else {
      setIsPhoneNumberValid(true);
      setPhoneNumberError('');
  }
};

const isValidPhoneNumber = (phoneNumber) => {
  const isNumeric = /^\d+$/.test(phoneNumber);
  const isCorrectLength = phoneNumber.length > 5; 
  return isNumeric && isCorrectLength;
};


useEffect(() => {
  if (copied) {
    navigator.clipboard.writeText(generatedScriptDisplay);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }
}, [copied, generatedScriptDisplay]);
const handleTextChange = (e) => { 
  setButtonText(e.target.value);
};
const handleBorderRadius = (e) => { 
  setBorderRadius(e.target.value);
};
const handleZIndexChange = (e) => {
  setZIndex(e.target.value);
};

const handleWelcomeMessageChange = (e) => { 
  setWelcomeMessage(e.target.value);
};
const getButtonTextColor = () => {
  return tinycolor(buttonColor).isLight() ? '#000' : '#fff';
};
const handleGenerateScript = () => {
  if (!isValidPhoneNumber(phoneNumber)) {
    setPhoneNumberError('Please enter a valid phone number');
    return;
  }
  setPhoneNumberError('');
  let position = buttonPosition === 'bottom-right' ? 'right' : 'left';
  const parsedBorderRadius = parseInt(borderRadius, 10); 
  const parsedMarginBottom = parseInt(marginBottom, 10); 
  const parsedMarginLeft = parseInt(marginLeft, 10); 
  const parsedMarginRight = parseInt(marginRight, 10); 

  let script = `
  <script async src='https://d2mpatx37cqexb.cloudfront.net/delightchat-whatsapp-widget/embeds/embed.min.js'></script>
  <script>
    var wa_btnSetting = {"btnColor":"${buttonColor}","ctaText":"${buttonText}","cornerRadius": ${parsedBorderRadius},"marginBottom":${parsedMarginBottom},"marginLeft":${parsedMarginLeft},"marginRight":${parsedMarginRight},"btnPosition":"${position}","whatsAppNumber":"${phoneNumber}","welcomeMessage":"${welcomeMessage}","zIndex":${zIndex},"btnColorScheme":"light"};
    window.onload = () => {
      _waEmbed(wa_btnSetting);
    };
  </script>
  `;
  setGeneratedScript(script);
  setGeneratedScriptDisplay(script);
  setShowScriptBlock(prevState => !prevState); 
};


return (
  <>
    <ChatButtonContainer>
                    <FormGroupInput>
                        <Label>Floating Button Color:</Label>
                        <ColorPickerContainer buttonColor={buttonColor} onClick={() => setShowColorPicker(show => !show)}>
                            <ColorPickerText style={{ color: getButtonTextColor() }}>{buttonColor}</ColorPickerText>
                        </ColorPickerContainer>
                        {showColorPicker && (
                            <ColorPickerPopover style={{  top: 190 }}>
                                <ChromePicker color={buttonColor} onChange={(color) => setButtonColor(color.hex)} />
                            </ColorPickerPopover>
                        )}
                    </FormGroupInput>
      <FormGroupInput>
          <Label>Button text:</Label>
          <input type="text" value={buttonText} onChange={handleTextChange} />
        </FormGroupInput>
       
      <FormGroupInput>
  <Label>Margin Bottom:</Label>
  <input type="text" value={marginBottom} onChange={(e) => setMarginBottom(e.target.value)} />
</FormGroupInput>
<FormGroupInput>
  <Label>Margin Left:</Label>
  <input type="text" value={marginLeft} onChange={(e) => setMarginLeft(e.target.value)} />
</FormGroupInput>
<FormGroupInput>
  <Label>Margin Right:</Label>
  <input type="text" value={marginRight} onChange={(e) => setMarginRight(e.target.value)} />
</FormGroupInput>
<FormGroupInput>
  <Label>Border Radius:</Label>
  <input type="text" value={borderRadius} onChange={handleBorderRadius} />
</FormGroupInput>
<FormGroupInput>
  <Label>Welcome Message:</Label>
  <input type="text" value={welcomeMessage} onChange={handleWelcomeMessageChange} />
</FormGroupInput>
<FormGroupInput>
          <Label>Z-Index:</Label>
          <input type="number" value={zIndex} onChange={handleZIndexChange} />
</FormGroupInput>
<FormGroupInput>
        <Label>Button position:</Label>
        <select value={buttonPosition} onChange={(e) => setButtonPosition(e.target.value)}>
          <option value="bottom-right">Bottom Right</option>
          <option value="bottom-left">Bottom Left</option>
        </select>
</FormGroupInput>
<FormGroupInput>

<Label>Phone Number:</Label>
  <PhoneNumberInput 
    onNumberChange={handlePhoneNumberChange} 
    hasError={!!phoneNumberError}
  />

 {phoneNumberError && (
  <div style={{ color: 'red' }}>{phoneNumberError}</div>
  )}
</FormGroupInput>
     
      <CustomButton onClick={handleGenerateScript}>Generate Button Script</CustomButton>
      <ChatButton
  style={{
    position: 'fixed',
    bottom: buttonPosition === 'bottom-right' || buttonPosition === 'bottom-left' ? marginBottom : 'auto',
    right: buttonPosition === 'bottom-right' ? marginRight : 'auto',
    left: buttonPosition === 'bottom-left' ? marginLeft : 'auto',
    borderRadius: borderRadius,
  }}
  buttonWidth={buttonWidth} 
  buttonHeight={buttonHeight}
  buttonColor={buttonColor}
  iconSize={iconSize}
  buttonIcon={ButtonIcon}
>
  {buttonIcon && <ButtonIcon src={buttonIcon} style={{width: iconSize, height: iconSize, marginRight: '5px'}} />}
  {buttonText}
</ChatButton>
      </ChatButtonContainer>
      {showScriptBlock && (
        <ScriptContent>
          <ScriptContainer borderColor={borderColor}>
            <ScriptInnerContainer>
              <pre style={{whiteSpace: 'pre-wrap', overflowWrap: 'break-word'}}>{generatedScriptDisplay}</pre>
              <CopyButton onClick={copyToClipboard}>Copy to Clipboard</CopyButton>
              {copySuccess && <div style={{color: 'green'}}>{copySuccess}</div>}
            </ScriptInnerContainer>
          </ScriptContainer>
        </ScriptContent>
      )}
    </>
  );
};

export default FloatingButtonPicker;
