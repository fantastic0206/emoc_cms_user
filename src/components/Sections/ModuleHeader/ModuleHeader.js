import SectionsWrapper from "../SectionsWrapper";
import { 
  HeaderContainer, 
  LandMenuContainer, 
  MobileMenuContainer, 
  FlexContainer, 
  MobileDropdownContainer, 
  IconContainer, 
  MobileHeaderContainer, 
  MobileMenuButtonContainer
} from "./style";
import { ModuleButton } from '..';
import MenuGroup from '../MenuGroup/MenuGroup';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { useState } from "react";

const ModuleHeader = (props) => {
  const [menuState, setMenuState] = useState(false);
  const showMobileMenu = () => {
    setMenuState(!menuState);
  }
  return (
    <HeaderContainer>
      { props.designType === "centerLeftDesign" ?
        <LandMenuContainer>
          {(props.image2 || props.menuGroup2) &&
            <FlexContainer flex={1} style={{flexDirection: 'row'}}>
              {props.image2 && <ModuleButton {...props.image2} />}
              {props.menuGroup2 && <MenuGroup {...props.menuGroup2} />}
            </FlexContainer>
          }
          {props.image1 && 
            <FlexContainer>
              <ModuleButton {...props.image1} />
            </FlexContainer>
          }
          {props.menuGroup1 && 
            <FlexContainer flex={1}>
              <MenuGroup {...props.menuGroup1} />
            </FlexContainer>
          }
        </LandMenuContainer>
        : props.designType === "centerRightDesign" ?
        <LandMenuContainer>
          {props.menuGroup1 && 
            <FlexContainer flex={1}>
              <MenuGroup {...props.menuGroup1} />
            </FlexContainer>
          }
          {props.image1 && 
            <FlexContainer>
              <ModuleButton {...props.image1} />
            </FlexContainer>
          }
          {(props.image2 || props.menuGroup2) &&
            <FlexContainer flex={1} style={{flexDirection: 'row'}}>
              {props.menuGroup2 && <MenuGroup {...props.menuGroup2} />}
              {props.image2 && <ModuleButton {...props.image2} />}
            </FlexContainer>
          }
        </LandMenuContainer>
        : props.designType === "leftRightDesign" ?
        <LandMenuContainer>
          {props.image1 && 
            <FlexContainer>
              <ModuleButton {...props.image1} />
            </FlexContainer>
          }
          {props.menuGroup1 && 
            <FlexContainer flex={1}>
              <MenuGroup {...props.menuGroup1} />
            </FlexContainer>
          }
          {(props.image2 || props.menuGroup2) &&
            <FlexContainer flex={1} style={{flexDirection: 'row'}}>
              {props.menuGroup2 && <MenuGroup {...props.menuGroup2} />}
              {props.image2 && <ModuleButton {...props.image2} />}
            </FlexContainer>
          }
        </LandMenuContainer>
        :
        <LandMenuContainer>
          {(props.image2 || props.menuGroup2) &&
            <FlexContainer flex={1} style={{flexDirection: 'row'}}>
              {props.image2 && <ModuleButton {...props.image2} />}
              {props.menuGroup2 && <MenuGroup {...props.menuGroup2} />}
            </FlexContainer>
          }
          {props.menuGroup1 && 
            <FlexContainer flex={1}>
              <MenuGroup {...props.menuGroup1} />
            </FlexContainer>
          }
          {props.image1 && 
            <FlexContainer>
              <ModuleButton {...props.image1} />
            </FlexContainer>
          }
        </LandMenuContainer>
      }
      <MobileMenuContainer {...props.setting}>
        <MobileHeaderContainer>
          <IconContainer>
            {menuState ?
              <CloseIcon onClick={showMobileMenu}/>
              :
              <MenuIcon onClick={showMobileMenu}/>
            }            
          </IconContainer>
          <MobileMenuButtonContainer>
            {props.image1 && <ModuleButton {...props.image1} style={{flex: 270}}/>}
            {props.image2 && <ModuleButton {...props.image2} style={{flex: 157, marginLeft: 20}}/>}
          </MobileMenuButtonContainer>
        </MobileHeaderContainer>
      </MobileMenuContainer>

      {menuState && <MobileDropdownContainer {...props.setting}>
        {props.menuGroup1 && <MenuGroup className="module-menugroup1--container" {...{...props.menuGroup1, type: 'column'}} />}
        <hr/>
        {props.menuGroup2 && <MenuGroup className="module-menugroup2--container" {...{...props.menuGroup2, type: 'column'}} />}
        {props.menuGroup3 && <MenuGroup className="module-menugroup3--container" {...{...props.menuGroup3, type: 'row'}} style={{justifyContent: 'center'}}/>}
      </MobileDropdownContainer>}
    </HeaderContainer>
  )
};

export default SectionsWrapper(ModuleHeader);