import styled from 'styled-components';

export const PageContainer = styled.div`
  @media (max-width: 768px) {
    padding-top: 0;
  }
  ${props => props.maxWidth && `
    max-width: ${props.maxWidth};
    margin: 0 auto;
  `}
`;
