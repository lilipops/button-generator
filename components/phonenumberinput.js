import React, { useState, useEffect } from 'react';
import countries from '../utils/countries';
import Image from 'next/image';
import {
  PhoneNumberContainer,
  SelectedPrefixButton,
  DropdownContainer,
  PhoneNumberInputContainer,
  PrefixInput,
  PhoneNumberField,
  ErrorMessage,
  SearchIcon,
  SearchContainer,
  SearchInput,
  DropdownList,
  DropdownListItem,
  FlagImage,
  CountrySpan,
} from '../styles/phonenumberstyles';

const PhoneNumberInputComponent = ({ onNumberChange, hasError }) => {

  const [isOpen, setIsOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [searchTerm, setSearchTerm] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  

  useEffect(() => {
    onNumberChange(selectedCountry.prefix + phoneNumber);
  }, [selectedCountry, phoneNumber, onNumberChange]);



  const selectCountry = (country) => {
    setSelectedCountry(country);
    setIsOpen(false);
    onNumberChange(country.prefix);
  };

  const toggleDropdown = () => setIsOpen(!isOpen);

  useEffect(() => {
    let timeout;
    if (isOpen) {
      timeout = setTimeout(() => setIsOpen(false), 30000);
    }
    return () => clearTimeout(timeout);
  }, [isOpen]);

  const filteredCountries = searchTerm
    ? countries.filter((country) =>
        country.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : countries;

  const initialFilteredCountries = isOpen ? filteredCountries : filteredCountries.slice(0, 4);


  return (
    <PhoneNumberContainer>
      <SelectedPrefixButton onClick={toggleDropdown} className={isOpen ? 'pn-select--open' : ''}>
        <Image
          src={`https://flagpedia.net/data/flags/icon/36x27/${selectedCountry.flag}.png`}
          alt={selectedCountry.name}
          width={20}
          height={15}
        />
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#081626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </SelectedPrefixButton>


      <PhoneNumberInputContainer style={{ border: hasError ? '1px solid red' : 'none' }}>
  <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'row' }}>
    <PrefixInput 
      style={{ 
        display: 'flex', 
        flexDirection: 'row', 
        background: 'transparent', 
        color: '#656b73', 
        fontWeight: 500, 
        border: 'none', 
        outline: 'none', 
        width: '2.4em', 
        textAlign: 'left', 
        marginRight: '0em', 
        pointerEvents: 'none', 
        padding: '0', 
        fontSize: '17px', 
        lineHeight: '32px' // Adjust line height for vertical alignment
      }} 
      value={`+${selectedCountry.prefix}`} 
      readOnly 
    />
    <PhoneNumberField 
      style={{
        flexGrow: 1,
        border: 'none',
        outline: 'none',
        color: '#081627',
        fontWeight: 500,
        fontSize: '17px',
        paddingLeft: 'calc(calc(var(--prefix-length) * 1ch) + 1.5ch)',
        lineHeight: '32px' // Match line height with prefix input
      }}
      id="phonenumber"
      type="tel"
      name="phonenumber"
      pattern="\d*"
      placeholder=" "
      required
      value={phoneNumber}
      onChange={(e) => setPhoneNumber(e.target.value)} // Manage user-entered number
    />
  </div>
</PhoneNumberInputContainer>



      {isOpen && (
  <DropdownContainer className={isOpen ? 'open' : ''} $isOpen={isOpen}>
            <SearchContainer>
              <SearchIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </SearchIcon>
              <SearchInput
              type="search"
              placeholder="Search for countries"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              />
            </SearchContainer>
            <DropdownList>
            {initialFilteredCountries.map((country) => (
              <DropdownListItem
                key={country.flag}
                onClick={() => selectCountry(country)}
                tabIndex="0"
              >
                <FlagImage
                  src={`https://flagpedia.net/data/flags/icon/36x27/${country.flag}.png`}
                  alt={country.name}
                />
                <CountrySpan>{country.name}</CountrySpan>
                <CountrySpan>(+{country.prefix})</CountrySpan>
              </DropdownListItem>
            ))}
          </DropdownList>
        </DropdownContainer>
      )}
    </PhoneNumberContainer>
  );
};

export default PhoneNumberInputComponent;
