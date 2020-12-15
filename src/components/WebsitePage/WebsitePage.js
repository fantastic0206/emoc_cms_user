import dynamic from 'next/dynamic'
import { Seo } from 'components/Common';
import { PageContainer } from "./style";

const WebsitePage = (props) => {
  const sectionComponents = {
    module_multi_columns: dynamic(() => import("components/Sections").then((sections) => sections.ModuleMultiColumns)),
    module_card: dynamic(() => import("components/Sections").then((sections) => sections.ModuleCard)),
    module_button: dynamic(() => import("components/Sections").then((sections) => sections.ModuleButton)),
    module_header: dynamic(() => import("components/Sections").then((sections) => sections.ModuleHeader)),
    module_slide_show: dynamic(() => import("components/Sections").then((sections) => sections.ModuleSlideShow)),
  }

  return (
    <PageContainer {...props.pageSetting}>
      <Seo {...props.seo} />
      { props.modules && props.modules.map((module) => {
          const Component = sectionComponents[module.moduleName];
          return <Component {...module.module} key={module.pageModuleId} />;
        })
      }
    </PageContainer>
  )
};

export default WebsitePage;