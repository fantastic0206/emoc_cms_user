import styled from 'styled-components';

export const MenuGroupContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  ${props => props.align === 'left' ? `
    justify-content: flex-start;
  ` : props.align === 'right' ? `
    justify-content: flex-end;
  ` : `
    justify-content: center;
  `}  
  flex-direction: ${props => props.type};
  align-items: center;
  @media (max-width: 768px) {
    padding-left: 50px;
    height: unset;
    align-items: flex-start;
    div {
      padding-left: 0;
    }

    .module-button--container {
      height: 100%;
      margin: 0;
      padding: 10px;
      .icon-container-left,
      .icon-container-right {
        img {
          display: none;
        }
      }
    }
  }
  @media (max-width: 320px) {
    padding-left: 30px;
  }
`;
