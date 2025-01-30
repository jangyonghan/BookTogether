import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  /* CSS Reset */
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  @font-face {
    font-family: "Ownglyph";
    src: url("/fonts/Ownglyph.ttf") format("truetype");
    font-weight: normal;
    font-style: normal;
  }
  


  body {
    margin: 0;
    padding: 0;
    font-family: 'Ownglyph', sans-serif; /* 기본 폰트 설정 */
    line-height: 1.5;
    background-color: #f8f9fa; /* 기본 배경색 */
    color: #212529; /* 기본 텍스트 색상 */
  }

  a {
    text-decoration: none; /* 링크 기본 스타일 제거 */
    color: inherit; /* 부모 텍스트 색상 상속 */
  }

  ul, ol {
    list-style: none; /* 리스트 기본 스타일 제거 */
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
  }

  button:focus-visible {
  outline: none !important;
  box-shadow: none !important;
}

`;

export default GlobalStyle;
