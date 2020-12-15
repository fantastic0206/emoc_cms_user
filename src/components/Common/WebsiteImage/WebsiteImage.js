import { WebsiteImageContainer } from "./style";
import SectionsWrapper from "../../Sections/SectionsWrapper";

const WebsiteImage = (props) => {
  const borders = props.borders?.split(',');
  const borderStyle = props && `${props.borderThickness || '1px'} ${props.borderStyle || 'solid'} ${props.borderColor || ''}`;
  const settings = {
    borderLeft: borders && borders.includes('left') && borderStyle,
    borderRight: borders && borders.includes('right') && borderStyle, 
    borderTop: borders && borders.includes('top') && borderStyle, 
    borderBottom: borders && borders.includes('bottom') && borderStyle
  };

  const content = () => (
    <>
      {props.image && <img className='website-image--image' alt={props.alt} src={`${process.env.NEXT_PUBLIC_ASSETS_URL}/${props.image}`} />}
      {props.caption && <p className="website-image--caption">{props.caption}</p>}
    </>
  );

  return (
    <WebsiteImageContainer {...settings}>
      {props.ctaLink ? (
        <a className='website-image--wrapper' href={props.ctaLink}>{content()}</a>
      ) : (
        <div className='website-image--wrapper'>{content()}</div>
      )}
    </WebsiteImageContainer>
  )
};

export default SectionsWrapper(WebsiteImage);