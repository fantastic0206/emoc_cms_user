import styled from 'styled-components';

export const HeaderContainer = styled.div`
  width: 100%;
`;

export const LandMenuContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  height: 90px;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const MobileMenuContainer = styled.div`
  display: none;  
  height: 90px;
  position: fixed;
  width: 100vw;
  top: 0;
  left: 0;
  justify-content: center;
  box-shadow: 0px 1px 10px rgba(0,0,0,.2);
  z-index: 1;
  ${props => props.backgroundColor ? `
    background-color: ${props.backgroundColor};
    `:`
    background-color: #fff;
  `}
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    height: 90px;
  }
`;

export const MobileDropdownContainer = styled.div`
  ${props => props.backgroundColor ? `
    background-color: ${props.backgroundColor};
    `:`
    background-color: #fff;
  `}
  display: none;
  @media (min-width: 768px) {
    display: none;
  }
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    height: calc(100vh - 90px);
    position: fixed;
    width: 100vw;
    top: 90px;
    left: 0;
    z-index: 1;
    .module-menugroup3--container {
      position: absolute;
      bottom: 50px;
      padding-left: 0;
      img {
        display: flex !important;
        margin-bottom: 10px;
        width: 25px;
      }
      .icon-container-right {
        flex-direction: column-reverse;
        align-items: center;
      }
      .icon-container-left {
        flex-direction: column;
        align-items: center;
      }
    }
    .module-menugroup1--container {
      margin-top: 50px;
    }
    hr {
      width: 80%;
      margin: 25px auto;
    }
  }
`;

export const MobileHeaderContainer = styled.div`
  display: flex;
  height: 100%;
  flex-direction: row;
  border-bottom: 1px solid lightgray;
`;

export const FlexContainer = styled.div`
  margin: auto 0;
  height: 100%;
  display: flex;
  align-items: center;
  ${props => props.flex && `flex: ${props.flex}`};
`;

export const IconContainer = styled.div`
  display: flex;
  margin: auto 10px;
  height: 100%;
  svg {
    margin: auto 10px;
  }
`;

export const MobileMenuButtonContainer = styled.div`
  display: flex;
  flex: 1;
`;