import parse from 'html-react-parser';
import SectionsWrapper from "../SectionsWrapper";
import { WebsiteImage } from 'components/Common';
import { CardSectionContainer } from "./style";
import ModuleButton from '../ModuleButton/ModuleButton';
import { checkEmptyRichText } from '../../../utils/text';

const ModuleCard = (props) => {
  return (
    <CardSectionContainer {...props} title={null}>
      <div className='card-section--wrapper'>
        <div className='card-section--cover'>
          {props.coverImage && <WebsiteImage {...props.coverImage} />}
        </div>
        <div className='card-section--body'>
          {!checkEmptyRichText(props.subhead) && <div className='card-section--subhead'>{parse(props.subhead)}</div>}
          {!checkEmptyRichText(props.title) && <div className='card-section--title'>{parse(props.title)}</div>}
          {!checkEmptyRichText(props.description) && <div className='card-section--description'>{parse(props.description)}</div>}
          {props.linkButton && <ModuleButton {...props.linkButton}/>}
        </div>
      </div>
    </CardSectionContainer>
  )
};

export default SectionsWrapper(ModuleCard);