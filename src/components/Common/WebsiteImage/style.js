import styled from 'styled-components';

export const WebsiteImageContainer = styled.div`
  width: 100%;
  
  .website-image--wrapper {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
   
    .website-image--image {
      width: 100%;
      ${props => props.borderLeft && `
        border-left: ${props.borderLeft};
      `}
      ${props => props.borderRight && `
        border-right: ${props.borderRight};
      `}
      ${props => props.borderTop && `
        border-top: ${props.borderTop};
      `}
      ${props => props.borderBottom && `
        border-bottom: ${props.borderBottom};
      `}
    }

    .website-image--caption {
      margin: 0;
      padding: 0;
      font-size: 14px;
      margin-top: 10px;
      color: #444;
    }
  }

  @media (max-width: 768px) {
    .website-image--wrapper {
      flex-direction: column;
    }
  }
`;
