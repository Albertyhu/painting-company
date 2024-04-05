/* empty css                             */
import { _ as __astro_tag_component__, k as Fragment, l as createVNode } from '../astro_BhyuBCbM.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './brand-identity_BeI3oOX4.mjs';
import { B as BusinessInfo } from './about-us_BCtxy5O8.mjs';
import 'html-escaper';
import 'clsx';

const MDXLayout = async function ({
  children
}) {
  const Layout = (await import('../jobLayout_B7rzr7oN.mjs')).default;
  const {
    layout,
    ...content
  } = frontmatter;
  content.file = file;
  content.url = url;
  return createVNode(Layout, {
    file,
    url,
    content,
    frontmatter: content,
    headings: getHeadings(),
    "server:root": true,
    children
  });
};
const frontmatter = {
  "layout": "../../layout/jobLayout.astro",
  "position": "Creative Designer",
  "responsibilities": ["Manages, designs, and implements policies and procedures relating to a company's Employee Assistance Program (EAP)", "Ensures that inpatient and outpatient counseling and care facilities meet company standards.", "Provides training to management for dealing with medical and behavioral problems.", "Provides counseling to employees in the program.", "Requires a bachelor's degree in a related area.", "Typically reports to top management.", "Typically manages through subordinate managers and professionals in larger groups of moderate complexity.", "Provides input to strategic decisions that affect the functional area of responsibility."],
  "qualifications": ["Master\u2019s Degree", "Minimum 8 years work experience as Employee Assistance Professional", "CA Licensed clinical social worker (LCSW) or", "CA Marriage and Family Therapist (MFT or LMFT) or", "A licensed psychologist in the state of California (PhD)", "Excellent communication skills to effectively interact with our staff and faculty", "Ability to work effectively both on an individual basis and as part of a team", "Strong computer skills to maintain accurate and complete documentation"],
  "benefits": ["Health, dental, and vision plans, tuition assistance for our employees and their families, paid time off, flexible spending accounts.", "2:1 retirement plan contributions, child care centers, and up to $50,000 housing subsidy", "ICF (International Coach Federation) certified", "CEAP Certified Employee Assistance Professional desired, but not required."],
  "jobType": "Full Time",
  "hours": "09:00 am - 05:pm",
  "location": "Colorado"
};
function getHeadings() {
  return [];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    p: "p",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: ["At ", createVNode("b", {
        children: BusinessInfo.companyName
      }), " we understand that color is a powerful design element that can transform any space. That\u2019s why we\u2019re proud to introduce our Senior Color Consultant Painting Solutions, a service led by experienced professionals dedicated to helping our clients make informed and inspired color choices for their homes and commercial properties."]
    }), "\n", createVNode("br", {}), "\n", createVNode(_components.p, {
      children: "Experience the transformative power of color with the Senior Color Consultant Painting\r\nSolutions at \u201CPainting.\u201D Let our experts guide you in creating spaces that not only\r\nlook stunning but also evoke the desired emotions and atmosphere. By coordinating\r\ncolors with existing design elements and considering the overall ambiance, our consultants\r\ncreate cohesive and harmonious spaces that leave a lasting impression."
    })]
  });
}
function MDXContent(props = {}) {
  return createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  });
}
__astro_tag_component__(getHeadings, "astro:jsx");
__astro_tag_component__(MDXContent, "astro:jsx");
const url = "/job-positions/creative-designer";
const file = "D:/Astro/PaintingService/src/pages/job-positions/creative-designer.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "D:/Astro/PaintingService/src/pages/job-positions/creative-designer.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
