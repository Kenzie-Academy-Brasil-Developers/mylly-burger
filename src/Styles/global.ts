import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }
    :root {
        --color-primary: #27ae60;
        --color-secondary: #eb5757;
        --gray-600: #333333;
        --gray-300: #828282;
        --gray-100: #E0E0E0;
        --gray-0: #F5F5F5;
        --success-color: #168821;
        --negative-color: #E60000;

    }
    body {
        font-family: 'Inter', sans-serif;
        background: var(--gray-0);
    }
    
    body, input, button {
        font-family: 'Inter', sans-serif;
        font-size: 1rem;
    }
    h1,h2,h3,h4,h5,h6 {
        font-family: 'Inter', sans-serif;
        font-weight: bold;
    }
    button {
        cursor: pointer;
    }
    a {
        text-decoration: none;
    }
`;
