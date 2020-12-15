import styled from 'styled-components';

export const CardSectionContainer = styled.div`
  width: 100%;
  height: 100%;
  
  .card-section--wrapper {
    height: 100%;
    text-align: left;
    display: flex;
    flex-direction: column;

    .card-section--cover {
      width: 100%;
      max-height: 195px;
      overflow: hidden;
    }

    .card-section--body div:last-child {
      margin-bottom: 0;
    }

    .card-section--body {
      flex: 1;
      display: flex;
      flex-direction: column;
      ${props => props.verticalAlign === 'top' ? `
        justify-content: flex-start;
      ` : props.verticalAlign === 'bottom' ? `
        justify-content: flex-end;
      ` : props.verticalAlign === 'center' ? `
        justify-content: center;
      ` : `
        justify-content: center;
      `} 
      ${props => props.horizontalAlign === 'left' ? `
        align-items: flex-start;
      ` : props.horizontalAlign === 'right' ? `
        align-items: flex-end;
      ` : props.horizontalAlign === 'center' ? `
        align-items: center;
      ` : `
        align-items: flex-start;
      `}

      .card-section--subhead {
        color: #A6ADB4;
        font-size: 20px;
        letter-spacing: 0px;
        margin: 0 0 24px;
        padding: 0;
      }

      .card-section--subhead > * {
        text-align: left;
        ${props => props.horizontalAlign ? `
          text-align: ${props.horizontalAlign};
          `:`
          text-align: left;
        `}
        margin: 0;
        padding: 0;
      }

      .card-section--title {
        font-size: 35px;
        margin: 0 0 20px;
        color: #373B42;
      }

      .card-section--title > * {
        ${props => props.horizontalAlign ? `
          text-align: ${props.horizontalAlign};
          `:`
          text-align: left;
        `}
        margin: 0;
        padding: 0;
      }

      .card-section--description {
        margin-bottom: 20px;
        color: #A6ADB4;
        font-size: 24px;
        line-height: 30px;
      }

      .card-section--description > * {
        ${props => props.horizontalAlign ? `
          text-align: ${props.horizontalAlign};
          `:`
          text-align: left;
        `}
        margin: 0;
        padding: 0;
      }

      .card-section--callToAction {
        color: #20BCBC;
        font-size: 20px;
        margin-top: auto;
      }
    }
  }
`;
