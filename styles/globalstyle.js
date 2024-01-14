import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --dropdown-trigger-background-color: #f3f5f9;
    --dropdown-trigger-hover-background-color: #e6eaf1;
    --border-radius: 0.75em;
    --border-color: #c3c3c3;
    --border-color-active: #0047a5;
    --input-label-color: #85898f;
    --input-prefix-color: #656b73;
    --input-phonenumber-color: #081627;
    --input-error-color: #ff0000;
    --list-item-hover-background: #f3f5f9;
  }
`;
