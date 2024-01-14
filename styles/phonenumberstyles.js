import styled from 'styled-components';

export const PhoneNumberContainer = styled.div`
  position: relative;
  border-width: 1px;
  border-style: solid;
  border-color: #c3c3c3;
  display: grid;
  grid-template-columns: 4.5em 1fr;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease-out;
  max-width: 20em;
  width: 100%;
  z-index: 1;
`;



export const SelectedPrefixButton = styled.button`
  align-items: center;
  appearance: none;
  background: var(--dropdown-trigger-background-color, #f3f5f9);
  border: 0;
  cursor: pointer;
  display: flex;
  justify-content: center;
  margin: 0;
  outline: none;
  padding: 0;
  transition: background 0.2s ease-out;
  position: relative;

  &:hover {
    background: var(--dropdown-trigger-hover-background-color, #e6eaf1);
  }

  img {
    height: auto;
    width: 1.25rem;
  }

  svg {
    display: block;
    height: 1.25rem;
    margin-left: 0.5em;
    width: 1.25rem;
    transition: all 0.15s ease-out;
  }

  &.pn-select--open svg {
    transform: rotate(180deg);
  }
`;



export const DropdownContainer = styled.div`
  margin-top: 0.5rem;
  background: #ffffff;
  border-radius: 0.75em;
  border: 1px solid #eaeaec;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.135);
  padding: 0 0.5em 0.5em;
  position: absolute;
  top: 100%; 
  left: 0;
  width: 95%; 
  max-height: 245px; 
  overflow-y: auto;
  transition: opacity 0.15s ease-in-out, visibility 0.15s ease-in-out;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.15s ease-in-out, visibility 0.15s ease-in-out;
  z-index: 2;

  &.open {
    opacity: 1;
    visibility: visible;
  }
`;
export const ListItem = styled.li`
  align-items: center;
  display: flex;
  padding: 0.6em 0.75em;
  transition: background-color 0.2s ease-out;
  cursor: pointer;
  border-radius: 0.5em;

  &:hover {
    background-color: #f3f5f9;
  }

  img {
    width: 1.25em;
    height: auto;
    margin-right: 1em;
  }
  
  span {
    margin-right: 0.25em;
  }
`;


export const PhoneNumberInputContainer = styled.div`
  background: #ffffff;
  padding: 0em 1em;
  overflow: hidden;
  line-height: 1;
`;

export const Labelpn = styled.label`
  color: var(--input-label-color, #85898f);
  font-size: 0.7rem;
  margin-bottom: 0.25em;
`;


export const PrefixInput = styled.input`
  background: transparent;
  color: var(--input-prefix-color, #656b73);
  font-weight: 500;
  border: none;
  outline: none;
  width: 3em;
  text-align: center;
  margin-right: 0.5em;
  pointer-events: none;
`;

export const PhoneNumberField = styled.input`
  flex-grow: 1;
  border: none;
  outline: none;
  color: var(--input-phonenumber-color, #081627);
  font-weight: 500;
  font-size: 1rem;
  padding-left: calc(calc(var(--prefix-length) * 1ch) + 1.5ch);

  &::placeholder {
    color: #b1b1b1;
  }


`;


export const SearchContainer = styled.div`
  position: relative;
  display: flex;
  border-bottom: 1px solid #eaeaec !important;
  align-items: center;
  padding: 1px 12px;
`;

export const SearchIcon = styled.svg`
  fill: none;
  stroke: #103155;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  margin-right: 0.5em; 
  width: 24px;
  height: 24px;
`;

export const SearchInput = styled.input`
  flex-grow: 1;
  border: none !important;
  height: 3rem !important;
  outline: none;
  font-size: 1rem !important;
  font-family: Roboto, sans-serif;
  font-weight: 100 !important;
  color: #081627;
  background: transparent;
`;

export const DropdownList = styled.ul`
  --border-radius: 0.75em;
  --border-color: #c3c3c3;
  --border-color-active: #0047a5;
  --dropdown-border-color: #eaeaec;
  --dropdown-trigger-background-color: #f3f5f9;
  --dropdown-trigger-hover-background-color: #e6eaf1;
  --input-error-color: #ff0000;
  --input-label-color: #85898f;
  --input-prefix-color: #656b73;
  --input-phonenumber-color: #081627;
  --list-item-hover-background: #f3f5f9;
  color: #081627;
  --prefix-length: 2;
  box-sizing: inherit;
  mamargin-top: 1rem;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  list-style: none;
  margin-right: -0.5em;
  max-height: 10.5em;
  overflow-y: auto;
  position: relative;
`;
export const DropdownListItem = styled.li`
  --border-radius: 0.75em;
  --border-color: #c3c3c3;
  --border-color-active: #0047a5;
  --dropdown-border-color: #eaeaec;
  --dropdown-trigger-background-color: #f3f5f9;
  --dropdown-trigger-hover-background-color: #e6eaf1;
  --input-error-color: #ff0000;
  --input-label-color: #85898f;
  --input-prefix-color: #656b73;
  --input-phonenumber-color: #081627;
  --list-item-hover-background: #f3f5f9;
  color: #081627;
  --prefix-length: 2;
  box-sizing: inherit;
  margin: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  align-items: center;
  border-radius: 0.5em;
  display: flex;

  font-weight: 400;
  padding: 0.6em 0.75em;
  transition: background-color 0.2s ease-out;
  cursor: pointer;
  outline: none;

  &:hover {
  background-color: var(--list-item-hover-background);
  }
`;
export const FlagImage = styled.img`
  --border-radius: 0.75em;
  --border-color: #c3c3c3;
  --border-color-active: #0047a5;
  --dropdown
-border-color: #eaeaec;
--dropdown-trigger-background-color: #f3f5f9;
--dropdown-trigger-hover-background-color: #e6eaf1;
--input-error-color: #ff0000;
--input-label-color: #85898f;
--input-prefix-color: #656b73;
--input-phonenumber-color: #081627;
--list-item-hover-background: #f3f5f9;
color: #081627;
--prefix-length: 2;
pointer-events: all;
visibility: visible;
list-style: none;
cursor: pointer;
box-sizing: inherit;
margin: 0;
padding: 0;
border: 0;
font: inherit;
vertical-align: baseline;
width: 1.25em;
height: auto;
margin-right: 1em;
display: block;
`;

export const CountrySpan = styled.span`
--border-radius: 0.75em;
--border-color: #c

3c3c3;
--border-color-active: #0047a5;
--dropdown-border-color: #eaeaec;
--dropdown-trigger-background-color: #f3f5f9;
--dropdown-trigger-hover-background-color: #e6eaf1;
--input-error-color: #ff0000;
--input-label-color: #85898f;
--input-prefix-color: #656b73;
--input-phonenumber-color: #081627;
--list-item-hover-background: #f3f5f9;
color: #081627;
--prefix-length: 2;
pointer-events: all;
visibility: visible;
list-style: none;
cursor: pointer;
box-sizing: inherit;
margin: 0;
padding: 0;
border: 0;
font: inherit;
vertical-align: baseline;
margin-right: 0.25em; /* Adjust margin for country name span /
font-weight: 400; / Adjust font weight as needed */
`;