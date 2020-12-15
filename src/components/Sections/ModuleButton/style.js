import styled from 'styled-components';

export const ButtonContainer = styled.div`
  ${props => props.setting.maxWidth && `
    max-width: ${props.setting.maxWidth};
  `}
  ${props => props.setting.width && `
    width: ${props.setting.width};
    min-width: ${props.setting.width};
  `}
  @media (max-width: 768px) {
    min-width: 0;
    width: auto;
  }
  ${props => props.setting.maxHeight && `
    max-height: ${props.setting.maxHeight};
  `}
  ${props => props.setting.height && `
    height: ${props.setting.height};
  `}
  position: relative;
  ${props => props.setting.backgroundImage?.image && `
    background-image: url(${process.env.NEXT_PUBLIC_ASSETS_URL}/${props.setting.backgroundImage?.image});
    background-size: cover;
    background-repeat: no-repeat;
  `}

  ${props => props.setting.backgroundColor && `
    background-color: ${props.setting.backgroundColor};
  `}
  ${props => props.setting.borderLeft && `
    border-left: ${props.setting.borderLeft};
  `}
  ${props => props.setting.borderRight && `
    border-right: ${props.setting.borderRight};
  `}
  ${props => props.setting.borderTop && `
    border-top: ${props.setting.borderTop};
  `}
  ${props => props.setting.borderBottom && `
    border-bottom: ${props.setting.borderBottom};
  `}
  ${props => props.setting.padding && `
    padding: ${props.setting.padding};
  `}
  ${props => props.setting.margin && `
    margin: ${props.setting.margin};
  `}
  ${props => props.fillColor && `
    background-color: ${props.fillColor};
  `}
  ${props => props.radius && `
    border-radius: ${props.radius};
  `}
  &:hover {
    ${props => props.hoverColor && `
      background-color: ${props.hoverColor};
    `}
    .title-button > * {
      ${props => props.linkHoverColor && `
        color: ${props.linkHoverColor};
      `}
    }
  }
  .title-button: {
    width: 100%;
    height: 100%;
  }
  .title-button > * {
    margin: auto 0;
    ${props => props.textAlign && `
      text-align: ${props.textAlign};
    `}
    ${props => props.linkColor && `
      color: ${props.linkColor};
    `}
  }
  .button-link {
    position: absolute;
    width: 100%;
    height: 100%;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    border: 0;
    display: flex;
    align-items: center;
  }
  .button-icon {
    cursor: pointer;
  }
  .icon-container-left,
  .icon-container-right {
    height: 100%;
    display: flex;
    ${props => props.iconAlign === 'left' ? `
      justify-content: flex-start;
    ` : props.iconAlign === 'right' ? `
      justify-content: flex-end;
    ` : `
      justify-content: center;
    `}   
    
    img {
      max-height: 100%;
      max-width: 100%;
      margin: auto 0;
      ${props => props.size && `
        height: ${props.size};
      `}
    }
  }
`;

