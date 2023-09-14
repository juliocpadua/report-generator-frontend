import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
}

body::-webkit-scrollbar {
  width: 4px;              
}

body::-webkit-scrollbar-track {
  background: #283618ff;        
}

body::-webkit-scrollbar-thumb {
  background-color:  #283618ff;    
  border-radius: 20px;       
  border: 3px solid #283618ff;  
  border-radius: 10px;
}

html {
    scroll-behavior: smooth;
    background-color: #fff;
}

button {
    cursor: pointer;
}

input {
    padding: 5px;
    padding-inline-start: 10px;
    border-radius: 5px;

    border: none;
    font-family: 'Poppins', sans-serif;
}

label {
    font-family: 'Poppins', sans-serif;
    color: #fefae0ff;
}

:root{
    --dark-moss-green: #606c38ff;
    --pakistan-green: #283618ff;
    --cornsilk: #fefae0ff;
    --earth-yellow: #dda15eff;
    --tigers-eye: #bc6c25ff;
    --white: #fff;
    --brown: #432818;
    --black: #00011;
    --font-main: 'Poppins', sans-serif;
}
`;
