import React, { useState, useEffect, useRef } from 'react';
import { ChromePicker } from 'react-color';
import Image from 'next/image';
import onClickOutside from 'react-onclickoutside';
import tinycolor from 'tinycolor2';
import PhoneNumberInput from './phonenumberinput';
import {
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
   LabelHelper,
   CustomButton,
   ScriptContent,
   ScriptContainer,
   ScriptInnerContainer,
   CopyButton,
   FormGroupWrapper
   } from '../styles/popupstyles';


   const ChatWidgetGenerator = () => {
       // State for form fields
       const [title, setTitle] = useState('BrandName');
       const [subtitle, setSubtitle] = useState('Typically replies in a day');
       const [headerBgColor, setHeaderBgColor] = useState('#19d8d8');
       const [headerTextColor, setHeaderTextColor] = useState('dark');
       const [greetingText, setGreetingText] = useState('Hi there! \nHow can I help you?');
       const [ctaText, setCtaText] = useState('Start Chat');
       const [buttonColor, setButtonColor] = useState('#00e851');
       const [textIconColorScheme, setTextIconColorScheme] = useState('light');
       const [cornerRadius, setCornerRadius] = useState('30');
       const [brandLogoURL, setBrandLogoURL] = useState('https://cdn0.iconfinder.com/data/icons/artificial-intelligence-50/64/AI_digital_brain_smart_future_tech-1024.png');
       const [chatLogoURL, setChatLogoURL] = useState('https://cdn0.iconfinder.com/data/icons/artificial-intelligence-50/64/AI_digital_brain_smart_future_tech-1024.png');
       const [showColorPicker, setShowColorPicker] = useState(false);
       const [showColorPickerOne, setShowColorPickerOne] = useState(false);
       const popoverRef = useRef(null);
       const [generatedScript, setGeneratedScript] = useState('');
       const [showScriptBlock, setShowScriptBlock] = useState(false);
       const [generatedScriptDisplay, setGeneratedScriptDisplay] = useState('');
       const [copySuccess, setCopySuccess] = useState('');
       const [copied, setCopied] = useState(false);
       const [isCopied, setIsCopied] = useState(false);
   const [showHeaderBgColorPicker, setShowHeaderBgColorPicker] = useState(false);
   const ClickOutsideChromePicker = onClickOutside(ChromePicker);
   const endOfScriptRef = useRef(null);
   const ScriptRef = useRef(null);
   const [completePhoneNumber, setCompletePhoneNumber] = useState('');
   const [isPhoneNumberValid, setIsPhoneNumberValid] = useState(false);
   const [phoneNumberError, setPhoneNumberError] = useState('');
       const handleTitleChange = e => setTitle(e.target.value);
       const handleSubtitleChange = e => setSubtitle(e.target.value);
       const handleGreetingTextChange = e => setGreetingText(e.target.value);
       const handleCtaTextChange = e => setCtaText(e.target.value);
       const handleCornerRadiusChange = e => setCornerRadius(e.target.value);
       const handleBrandLogoURLChange = e => setBrandLogoURL(e.target.value);
       const toggleHeaderBgColorPicker = () => setShowHeaderBgColorPicker(show => !show);
       const hideHeaderBgColorPicker = () => setShowHeaderBgColorPicker(false);

       const copyToClipboard = async (text) => {
           try {
             await navigator.clipboard.writeText(text);
               setCopySuccess('Copied!');
             setIsCopied(true);
             setTimeout(() => setIsCopied(false), 2000);
           } catch (err) {
             setCopySuccess('Failed to copy text');
           }
         };
         useEffect(() => {
           if (copied) {
             navigator.clipboard.writeText(generatedScriptDisplay);
             setTimeout(() => {
               setCopied(false);
             }, 2000);
           }
         }, [copied, generatedScriptDisplay]);

         useEffect(() => {
            const script = document.createElement('script');
            script.src = "https://cdnjs.cloudflare.com/ajax/libs/list.js/2.3.1/list.min.js";
            script.async = true;
            document.body.appendChild(script);
        
            return () => {
              document.body.removeChild(script);
            };
          }, []);
         useEffect(() => {
           if (showScriptBlock && endOfScriptRef.current) {
             endOfScriptRef.current.scrollIntoView({ behavior: 'smooth' });
           }
         }, [showScriptBlock]);

         const handlePhoneNumberChange = (phoneNumberInput) => {
            const phoneNumberString = String(phoneNumberInput);
            const phoneNumberWithoutSpaces = phoneNumberString.replace(/\s+/g, '');
    
            setCompletePhoneNumber(phoneNumberWithoutSpaces);
    
            if (phoneNumberWithoutSpaces.trim() === '' || !isValidPhoneNumber(phoneNumberWithoutSpaces)) {
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
         const handleGenerateScript = () => {
            if (!isPhoneNumberValid) {
                setPhoneNumberError('Please enter a valid phone number before generating the script.');
                return;
              }
           let script = `
               <script async src='https://d2mpatx37cqexb.cloudfront.net/delightchat-whatsapp-widget/embeds/embed.min.js'></script>
               <script>
               var whatsAppNumber = '${completePhoneNumber}'; 
               function createWhatsAppWidget() {
                   var widget = document.createElement('div');
                   widget.style.cssText = 'width: 350px; height: 337px; background-color: #fff; border-radius: 10px; box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15); display: none; font-family: Arial, sans-serif; flex-direction: column; position: fixed; bottom: 85px; right: 20px;';
      
                   var widgetHeader = document.createElement('div');
                   widgetHeader.style.cssText = 'position: relative; background-color: ' + "${headerBgColor}" + '; padding: 20px; display: flex; border-top-left-radius: 10px; border-top-right-radius: 10px;';
      
                   var brandImageContainer = document.createElement('div');
                   brandImageContainer.style.cssText = 'display: block;';


                   var brandImage = document.createElement('img');
                    brandImage.src = "${brandLogoURL}";
                   brandImage.className = 'popupstyles__BrandImage-sc-1i8gt26-3 hLtnOx';
                   brandImage.style.cssText = 'font-family: Arial,sans-serif; width: 36px; height: 36px; border-radius: 50%; margin-right: 12px;';


                  


                   var brandInfo = document.createElement('div');
                   brandInfo.className = 'popupstyles__BrandInfo-sc-1i8gt26-9 kzEXIP';
                   brandInfo.style.cssText = 'display: flex; flex-direction: column; justify-content: flex-start; margin-top: 10px; font-family: "SF Pro Text", Roboto, Nunito;';
                   brandInfo.innerHTML = '<h4 style="color: rgb(0, 0, 0);font-size: 15px;">' + "${title}" + '</h4>' +
                                         '<p style="color: rgb(0, 0, 0);font-size: 11px;">' + "${subtitle}" + '</p>';


                  
                   var closeButton = document.createElement('div');
                   closeButton.className = 'popupstyles__CloseButton-sc-1i8gt26-10 jgywnV';
                   closeButton.style.cssText = 'position: absolute !important; top: 10px; right: 20px;';
                   closeButton.innerHTML = '<svg height="12" width="12" viewport="0 0 12 12" version="1.1" xmlns="http://www.w3.org/2000/svg"><line x1="1" y1="11" x2="11" y2="1" stroke="black" stroke-width="2"></line><line x1="1" y1="1" x2="11" y2="11" stroke="black" stroke-width="2"></line></svg>';
                   closeButton.onclick = function() {
                       widget.style.display = 'none';
                   };
                   widgetHeader.appendChild(brandImageContainer);
                   brandImageContainer.appendChild(brandImage);
                   widgetHeader.appendChild(brandInfo);
                   widgetHeader.appendChild(closeButton);
                  


                   var messageContainer = document.createElement('div');
                   messageContainer.style.cssText = 'padding: 24px 20px; background-image: url(https://user-images.githubusercontent.com/4735407/153391597-dbe0e13e-7ea8-4d7c-9b5c-66d0400df3d3.png); flex-grow: 1;';
              
                   var messageContainerBlock = document.createElement('div');
                   messageContainerBlock.style.cssText = 'display: inline-block; padding: 12px 16px; background-color: #fff; box-shadow: 0 0 8px rgba(0, 0, 0, 0.12); border-radius: 16px; word-wrap: break-word;';
                   messageContainerBlock.innerHTML = '<h4 style="color: grey; font-weight: 600; font-size: 12px; margin-bottom: 8px;">' + "${title}" + '</h4><p style="color: #1a1a1a; font-size: 14px; white-space: pre-wrap; break-word: break-word; max-width: 270px;">' + "${greetingText.replace(/\n/g, '<br/>')}" + '</p>';
              
                   var chatButton = document.createElement('button');
                   chatButton.className = 'popupstyles__ChatButton-sc-1i8gt26-7 fqQcwn';
                   chatButton.style.cssText = 'background-color: ${buttonColor}; color: rgb(255, 255, 255); border-radius: ${cornerRadius}px; margin-top: auto; padding: 6px 55px; display: inline-flex; justify-content: center; align-items: center; cursor: pointer; border: none; margin: 20px;';
                   chatButton.innerHTML = '<img src="${chatLogoURL}" alt="Chat Icon" style="width: 25px; height: 25px; margin-right: 10px;">' + '${ctaText}';
                   
                   chatButton.onclick = function() {
                    var greetingText = '${greetingText.replace(/\n/g, "\\n")}'; 
                    var whatsappUrl = 'https://api.whatsapp.com/send?phone=' + whatsAppNumber + '&text=' + encodeURIComponent(greetingText.replace(/\\n/g, ' '));
                    window.open(whatsappUrl, '_blank');
                };
              
          
                   widget.appendChild(widgetHeader);
                   messageContainer.appendChild(messageContainerBlock);
                   widget.appendChild(messageContainer);
                   widget.appendChild(chatButton);
                   return widget;
               }
          
               function createWhatsAppButton(widget) {
                   var btn = document.createElement('button');
                   btn.innerHTML = '<img src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/375_Whatsapp_logo-1024.png" style="width: 25px; height: 25px; margin-right: 5px;">WhatsApp Us';
                   btn.style.cssText = 'display: flex; justify-content: center; align-items: center; background-color: ${buttonColor}; border: none; cursor: pointer; height: 45px; color: #fff; font-size: 14px; padding: 10px 15px; width: auto; box-shadow: 0px 2px 10px rgba(0,0,0,0.15); position: fixed; bottom: 20px; right: 20px; left: auto; border-radius: 50px;';
                   btn.onclick = function() {
                       widget.style.display = widget.style.display === 'none' ? 'flex' : 'none';
                   };
                   document.body.appendChild(btn);
               }




               document.addEventListener('DOMContentLoaded', function() {
                   var widget = createWhatsAppWidget();
                   createWhatsAppButton(widget);
                   document.body.appendChild(widget);
               });
           </script>
           `;
           setGeneratedScript(script);
           setGeneratedScriptDisplay(script);
           setShowScriptBlock(prevState => !prevState);
           setTimeout(() => {
               ScriptRef.current?.scrollIntoView({ behavior: 'smooth' });
           }, 100);
           };
      
      
        
        
       const handleHeaderBgColorChange = (color, event) => {
           setHeaderBgColor(color.hex);
           event.preventDefault();
       };
       const getButtonTextColor = () => {
           return tinycolor(buttonColor).isLight() ? '#000' : '#fff';
       };
       const getButtonTextColorTwo = () => {
        return tinycolor(headerBgColor).isLight() ? '#000' : '#fff';
        };
       const handleButtonColorChange = (color, event) => {
           setButtonColor(color.hex);
           event.preventDefault();
       };
      
       useEffect(() => {
           const handleClickOutside = (event) => {
               if (popoverRef.current && !popoverRef.current.contains(event.target)) {
                   hideHeaderBgColorPicker();
               }
           };


           document.addEventListener('mousedown', handleClickOutside);
           return () => {
               document.removeEventListener('mousedown', handleClickOutside);
           };
       }, []);
       const getTextColor = () => {
           switch (headerTextColor) {
               case 'dark':
                   return '#000';
               case 'light':
                   return '#fff';
               default:
                   return '#000';
           }
       };
       const getTextIconColor = () => {
           switch (textIconColorScheme) {
               case 'dark':
                   return '#000';
               case 'light':
                   return '#fff';
               default:
                   return '#000';
           }
       };
       return (
           <>
        <WidgetContainer>
               <WidgetPreviewContainer>
               <WidgetHeader bgColor={headerBgColor}>
               <div>
                   <BrandImage src={brandLogoURL} />
               </div>
               <BrandInfo>
                   <h4  style={{ color: getTextColor() }}>{title}</h4>
                   <p  style={{ color: getTextColor() }}>{subtitle}</p>
               </BrandInfo>
               <CloseButton>
                   <svg height="12" width="12" viewport="0 0 12 12" version="1.1" xmlns="http://www.w3.org/2000/svg">
                   <line x1="1" y1="11" x2="11" y2="1" stroke="black" stroke-width="2"></line>
                   <line x1="1" y1="1" x2="11" y2="11" stroke="black" stroke-width="2"></line>
                   </svg>
               </CloseButton>
               </WidgetHeader>
           <MessageContainer>
               <MessageContainerBlock>
               <h4>{title}</h4>
               <p>{greetingText}</p>
               </MessageContainerBlock>
           </MessageContainer>
          
           <ChatButton
      style={{
       backgroundColor: buttonColor,
       color: getTextIconColor(),
       borderRadius: `${cornerRadius}px`
   }}
   onClick={() => console.log('Start Chat button clicked')}>
   <Image
       src={chatLogoURL}
       alt="Chat Icon"
       width={25}
       height={25}
       style={{ marginRight: '10px'}}
   />
   {ctaText}
</ChatButton>
       </WidgetPreviewContainer>
               <FormGroupWrapperTogether>
                   <FormGroupInput>
                       <Label>Title (Brand Name)</Label>
                       <input type="text" value={title} onChange={handleTitleChange} />
                   </FormGroupInput>
                   <FormGroupInput>
                   <Label>Subtitle</Label>
                       <input style={{width: '320px'}} type="text" value={subtitle} onChange={handleSubtitleChange} />
                   </FormGroupInput>
               </FormGroupWrapperTogether>
               <FormGroupWrapperTogether>
               <FormGroupInput>
                   <Label>Header Background Color:</Label>
                   <ColorPickerContainer buttonColor={headerBgColor} onClick={() => setShowColorPickerOne(show => !show)}>
                       <ColorPickerText style={{ color: getButtonTextColorTwo() }}>{headerBgColor}</ColorPickerText>
                       {showColorPickerOne && (
                           <ColorPickerPopover style={{ top: 35 }}>
                               <ChromePicker
                                   color={headerBgColor}
                                   onChange={handleHeaderBgColorChange}
                               />
                           </ColorPickerPopover>
                       )}
                   </ColorPickerContainer>
               </FormGroupInput>
               <FormGroupInput>
                   <Label>Header Text Color Scheme</Label>
                   <select value={headerTextColor} onChange={e => setHeaderTextColor(e.target.value)}>
                       <option value="dark">Dark</option>
                       <option value="light">Light</option>
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
               </FormGroupWrapperTogether>
               <FormGroupWrapper>
                   <FormGroupInput >
                       <Label>Brand Logo URL</Label>
                       <LabelHelper>Include a link from a CDN. You can upload it to your CMS and paste that link.</LabelHelper>
                       <input style={{width: '620px'}} type="text" value={brandLogoURL} onChange={handleBrandLogoURLChange} />
                   </FormGroupInput>
               </FormGroupWrapper>
               <FormGroupWrapper>
                   <FormGroupInput>
                       <Label>Greeting Text</Label>
                       <textarea type="text" value={greetingText} onChange={handleGreetingTextChange} />
                   </FormGroupInput>
               </FormGroupWrapper>
              
               <FormGroupWrapper>
               <FormGroupInput>          
               <Label>CTA Text</Label>
               <input type="text" value={ctaText} onChange={handleCtaTextChange} />
               </FormGroupInput>
               <FormGroupInput>
                   <Label>Floating Button Color:</Label>
                   <ColorPickerContainer buttonColor={buttonColor} onClick={() => setShowColorPicker(show => !show)}>
                       <ColorPickerText style={{ color: getButtonTextColor() }}>{buttonColor}</ColorPickerText>
                   </ColorPickerContainer>
                   {showColorPicker && (
                       <ColorPickerPopover style={{ bottom: 25 }}>
                           <ChromePicker color={buttonColor} onChange={handleButtonColorChange} />
                       </ColorPickerPopover>
                   )}
               </FormGroupInput>
               <FormGroupInput>
               <Label>Text & Icon Color Scheme</Label>
               <select value={textIconColorScheme} onChange={e => setTextIconColorScheme(e.target.value)}>
                   <option value="light">Light</option>
                   <option value="dark">Dark</option>
               </select>
               </FormGroupInput>
               </FormGroupWrapper>
               <FormGroupWrapper>
                   <FormGroupInput>
                       <Label>Corner Radius</Label>
                       <input type="number" value={cornerRadius} onChange={handleCornerRadiusChange} />
                   </FormGroupInput>
                  
                   <FormGroupInput>
                   <Label>Start Chat URL</Label>
               <input type="text" value={chatLogoURL} onChange={(e) => setChatLogoURL(e.target.value)}
       placeholder="Enter URL for the chat icon" />
              
               </FormGroupInput>
               
               </FormGroupWrapper>
               <CustomButton 
                onClick={handleGenerateScript} 
                disabled={!isPhoneNumberValid}
            >
                Generate Button Script
            </CustomButton>
           </WidgetContainer>
           {showScriptBlock && (
       <ScriptContent>
         <ScriptContainer isCopied={isCopied}>
           <ScriptInnerContainer>
             <pre style={{whiteSpace: 'pre-wrap', overflowWrap: 'break-word'}}>{generatedScriptDisplay}</pre>
             <CopyButton isCopied={isCopied} onClick={() => copyToClipboard(generatedScript)}>Copy to Clipboard</CopyButton>
       {copySuccess && <div style={{color: 'green'}}>{copySuccess}</div>}
       <div ref={ScriptRef}></div>
           </ScriptInnerContainer>
           <div ref={endOfScriptRef}></div>
         </ScriptContainer>
       </ScriptContent>
     )}
    
   </>
   );
};
export default ChatWidgetGenerator;



