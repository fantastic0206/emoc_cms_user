import dynamic from 'next/dynamic'
import SectionsWrapper from "../SectionsWrapper";
import { MenuGroupContainer } from "./style";

const sectionComponents = {
  module_button: dynamic(() => import("components/Sections").then((sections) => sections.ModuleButton)),
}

const MenuGroup = (props) => {
  return (
    <MenuGroupContainer {...props}>
      {props.buttons && props.buttons.map((button, _i) => {
        const Content = sectionComponents[button.moduleName];
        return (
          <Content className="module-button--container" {...button.module}/>
        )
      })}
    </MenuGroupContainer>
  )
};

export default SectionsWrapper(MenuGroup);