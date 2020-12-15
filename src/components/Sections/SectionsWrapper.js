import styled from 'styled-components';

function SectionsWrapper(WrapperComponent) {
  const WrappedComponents = (props) => {
    const borders = props.setting?.borders?.split(',');
    const borderStyle = props.setting && `${props.setting.borderThickness || '1px'} ${props.setting.borderStyle || 'solid'} ${props.setting.borderColor || ''}`;
    const padding = props.setting?.padding && props.setting.padding.replaceAll(',', ' ');
    const margin = props.setting?.margin && props.setting.margin.replaceAll(',', ' ');
    const sectionSettings = {
      ...props.setting, 
      borderLeft: borders && borders.includes('left') && borderStyle,
      borderRight: borders && borders.includes('right') && borderStyle, 
      borderTop: borders && borders.includes('top') && borderStyle, 
      borderBottom: borders && borders.includes('bottom') && borderStyle,
      padding: padding,
      margin: margin
    };
    return (
      <SectionsWrapperContainer {...sectionSettings}>
        <div className='sections-wrapper--component'>
          <WrapperComponent {...props} />
        </div>
      </SectionsWrapperContainer>
    )
  };

  return WrappedComponents;
};

export default SectionsWrapper;

const SectionsWrapperContainer = styled.div`
  ${props => props.maxWidth && `
    max-width: ${props.maxWidth};
  `}
  ${props => props.width ? `
    width: ${props.width};
  ` : `
    width: 100%;
  `}
  ${props => props.height && `
    height: ${props.height};
  `}
  ${props => props.maxHeight && `
    max-height: ${props.maxHeight};
  `}
  ${props => props.padding && `
    padding: ${props.padding};
  `}
  ${props => props.margin && `
    margin: ${props.margin};
  `}
  ${props => props.backgroundImage?.image && `
    background-image: url(${process.env.NEXT_PUBLIC_ASSETS_URL}/${props.backgroundImage?.image});
    background-size: cover;
    background-repeat: no-repeat;
  `}

  ${props => props.backgroundColor && `
    background-color: ${props.backgroundColor};
  `}
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
  
  .sections-wrapper--component {    
    margin: 0 auto;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: flex-start;
  }
  @media (max-width: 768px) {
    min-width: 0;
    max-width: -webkit-fill-available;
  }
`;