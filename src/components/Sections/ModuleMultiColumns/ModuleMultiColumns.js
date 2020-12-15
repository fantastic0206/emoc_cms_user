import dynamic from 'next/dynamic'
import SectionsWrapper from "../SectionsWrapper";
import { MultiColumnsContentContainer } from "./style";
import { cardSectionProps } from "utils/apis";

const sectionComponents = {
  module_multi_columns: dynamic(() => import("components/Sections").then((sections) => sections.ModuleMultiColumns)),
  module_card: dynamic(() => import("components/Sections").then((sections) => sections.ModuleCard)),
  module_button: dynamic(() => import("components/Sections").then((sections) => sections.ModuleButton)),
  module_website_image: dynamic(() => import("components/Common").then((sections) => sections.WebsiteImage)),
}

const ModuleMultiColumns = (props) => {
  return (
    <MultiColumnsContentContainer {...props}>
      <div className={`multi-columns-content--wrapper flex-type--${props.type || 'column'}`}>
        {props.columns.map((_column, _i) => {
          const Content = sectionComponents[_column.moduleName];
          return (
            <div key={_i} className={`multi-columns-content-column`} style={{flex: props.columnWidths.split(',')[_i]}}>
              <Content {..._column.module}/>
            </div>
          )
        })}
      </div>
    </MultiColumnsContentContainer>
  )
};

export default SectionsWrapper(ModuleMultiColumns);