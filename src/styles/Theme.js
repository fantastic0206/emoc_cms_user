import styled from 'styled-components';

export const Theme = styled.div`
  max-width: ${props => props.maxWidth};
  margin: 0 auto;
  a {
    color: ${props => props.defaultLinkTextColor};
  }
  a:hover {
    color: ${props => props.defaultLinkTextHoverColor};
  }
  h1 {
    font-family: ${props => props.h1Font};
    font-size: ${props => props.h1FontSize};
    color: ${props => props.h1FontColor};
    text-align: ${props => props.h1FontAlign};
    line-height: ${props => props.h1LineHeight};
    letter-spacing: ${props => props.h1LetterSpacing}px;
    font-weight: ${props => props.h1Bold};
    font-style: ${props => props.h1Italic};
    text-decoration: ${props => props.h1Underline};
  }
  h2 {
    font-family: ${props => props.h2Font};
    font-size: ${props => props.h2FontSize};
    color: ${props => props.h2FontColor};
    text-align: ${props => props.h2FontAlign};
    line-height: ${props => props.h2LineHeight};
    letter-spacing: ${props => props.h2LetterSpacing}px;
    font-weight: ${props => props.h2Bold};
    font-style: ${props => props.h2Italic};
    text-decoration: ${props => props.h2Underline};
  }
  h3 {
    font-family: ${props => props.h3Font};
    font-size: ${props => props.h3FontSize};
    color: ${props => props.h3FontColor};
    text-align: ${props => props.h3FontAlign};
    line-height: ${props => props.h3LineHeight};
    letter-spacing: ${props => props.h3LetterSpacing}px;
    font-weight: ${props => props.h3Bold};
    font-style: ${props => props.h3Italic};
    text-decoration: ${props => props.h3Underline};
  }
  h4 {
    font-family: ${props => props.h4Font};
    font-size: ${props => props.h4FontSize};
    color: ${props => props.h4FontColor};
    text-align: ${props => props.h4FontAlign};
    line-height: ${props => props.h4LineHeight};
    letter-spacing: ${props => props.h4LetterSpacing}px;
    font-weight: ${props => props.h4Bold};
    font-style: ${props => props.h4Italic};
    text-decoration: ${props => props.h4Underline};
  }
  h5 {
    font-family: ${props => props.h5Font};
    font-size: ${props => props.h5FontSize};
    color: ${props => props.h5FontColor};
    text-align: ${props => props.h5FontAlign};
    line-height: ${props => props.h5LineHeight};
    letter-spacing: ${props => props.h5LetterSpacing}px;
    font-weight: ${props => props.h5Bold};
    font-style: ${props => props.h5Italic};
    text-decoration: ${props => props.h5Underline};
  }
  h6 {
    font-family: ${props => props.h6Font};
    font-size: ${props => props.h6FontSize};
    color: ${props => props.h6FontColor};
    text-align: ${props => props.h6FontAlign};
    line-height: ${props => props.h6LineHeight};
    letter-spacing: ${props => props.h6LetterSpacing}px;
    font-weight: ${props => props.h6Bold};
    font-style: ${props => props.h6Italic};
    text-decoration: ${props => props.h6Underline};
  }
  p {
    font-family: ${props => props.normalFont};
    font-size: ${props => props.normalFontSize};
    color: ${props => props.normalFontColor};
    text-align: ${props => props.normalFontAlign};
    line-height: ${props => props.normalLineHeight};
    letter-spacing: ${props => props.normalLetterSpacing}px;
    font-weight: ${props => props.normalBold};
    font-style: ${props => props.normalItalic};
    text-decoration: ${props => props.normalUnderline};
  }
`;