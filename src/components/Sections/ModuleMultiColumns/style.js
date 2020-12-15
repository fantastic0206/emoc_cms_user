import styled from 'styled-components';

export const MultiColumnsContentContainer = styled.div`
  width: 100%;

  & > .multi-columns-content--wrapper {
    text-align: ${props => props.align};
    margin: 0;
    display: flex;

    &.flex-type--column {
      flex-direction: row;
      @media (max-width: 768px) {
        ${props => props.mobileType == 'row' ? `
          flex-direction: column;
          `:`
          flex-direction: row;
        `}
      }
    }

    &.flex-type--row {
      flex-direction: column;
      @media (max-width: 768px) {
        ${props => props.mobileType == 'row' ? `
          flex-direction: column;
          `:`
          flex-direction: row;
        `}
      }
    }

    .multi-columns-content-column {
      display: flex;
      align-items: flex-start;
    }
  }
`;
