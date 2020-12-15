import parse from 'html-react-parser';
import { ButtonContainer } from "./style";

const ModuleButton = (props) => {
  console.log("Module button =>", props);
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
  const settings = {...props, setting: sectionSettings};
  return (
    <ButtonContainer {...settings} title={null}>
      {props.type === "text" ?
        (props.title && props.title !== '<p></p>' && <div className='title-button' style={{width: '100%'}}>{parse(props.title)}</div>)
        :
        props.iconAlign === "left" ?
          <div className="icon-container-left">
            {props.icon && <img src={`${process.env.NEXT_PUBLIC_ASSETS_URL}/${props.icon}`} className="button-icon"></img>}
            {props.title && props.title !== '<p></p>' && <div className='title-button' style={{width: '100%', margin: 'auto 0'}}>{parse(props.title)}</div>}
          </div>
        :
          <div className="icon-container-right">
            {props.title && props.title !== '<p></p>' && <div className='title-button' style={{width: '100%', margin: 'auto 0'}}>{parse(props.title)}</div>}
            {props.icon && <img src={`${process.env.NEXT_PUBLIC_ASSETS_URL}/${props.icon}`} className="button-icon"></img>}
          </div>
      }
      <a className='button-link' href={props.ctaLink}></a>
    </ButtonContainer>
  )
};

export default ModuleButton;