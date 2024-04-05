import { renderers } from './renderers.mjs';
import { manifest } from './manifest_B1EIqD7B.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_jRaOKhBJ.mjs');
const _page1 = () => import('./chunks/about-us_B6GcNPpb.mjs');
const _page2 = () => import('./chunks/career_BHtJ_Hhp.mjs');
const _page3 = () => import('./chunks/contact-us_CaYNz8GR.mjs');
const _page4 = () => import('./chunks/faq_CDJlv8Vv.mjs');
const _page5 = () => import('./chunks/gallery_BttpN18B.mjs');
const _page6 = () => import('./chunks/brand-identity_BPU4KDq4.mjs');
const _page7 = () => import('./chunks/creative-designer_DXZ_tuxB.mjs');
const _page8 = () => import('./chunks/mural-artist_FYhdenb5.mjs');
const _page9 = () => import('./chunks/pricing_CL2-lOh0.mjs');
const _page10 = () => import('./chunks/community-art-hub_Pou3fbwn.mjs');
const _page11 = () => import('./chunks/historical-facade_DgKd3Tq9.mjs');
const _page12 = () => import('./chunks/innovation-hub_BZqsWSOU.mjs');
const _page13 = () => import('./chunks/penthouse-retreat_m3NTMPhI.mjs');
const _page14 = () => import('./chunks/residential-haven_BXSmAmxE.mjs');
const _page15 = () => import('./chunks/retail-rebranding_DXQIpM1G.mjs');
const _page16 = () => import('./chunks/index_-sKfqm0m.mjs');
const _page17 = () => import('./chunks/color-consultation-and-design_BKgprSA9.mjs');
const _page18 = () => import('./chunks/commercial-space-branding_z1u14o8e.mjs');
const _page19 = () => import('./chunks/eco-friendly-painting-solutions_DOwmR0Zk.mjs');
const _page20 = () => import('./chunks/exterior-facade-restoration_CzlSZjDp.mjs');
const _page21 = () => import('./chunks/precision-interior-painting_xU246shD.mjs');
const _page22 = () => import('./chunks/unique-custom-murals-and-artwork_oGYSLi6H.mjs');
const _page23 = () => import('./chunks/index_BLc2LtJo.mjs');
const _page24 = () => import('./chunks/commercial_BSEQcseo.mjs');
const _page25 = () => import('./chunks/exterior_C1Dc18O_.mjs');
const _page26 = () => import('./chunks/residential_BeTydNl7.mjs');
const _page27 = () => import('./chunks/why-choose-us_Dl_jM7XB.mjs');
const _page28 = () => import('./chunks/index_DIVa1LYI.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/about-us.astro", _page1],
    ["src/pages/career.astro", _page2],
    ["src/pages/contact-us.astro", _page3],
    ["src/pages/faq.astro", _page4],
    ["src/pages/gallery.astro", _page5],
    ["src/pages/job-positions/brand-identity.mdx", _page6],
    ["src/pages/job-positions/creative-designer.mdx", _page7],
    ["src/pages/job-positions/mural-artist.mdx", _page8],
    ["src/pages/pricing.astro", _page9],
    ["src/pages/projects/community-art-hub.astro", _page10],
    ["src/pages/projects/historical-facade.astro", _page11],
    ["src/pages/projects/innovation-hub.astro", _page12],
    ["src/pages/projects/penthouse-retreat.astro", _page13],
    ["src/pages/projects/residential-haven.astro", _page14],
    ["src/pages/projects/retail-rebranding.astro", _page15],
    ["src/pages/projects/index.astro", _page16],
    ["src/pages/services/color-consultation-and-design.astro", _page17],
    ["src/pages/services/commercial-space-branding.astro", _page18],
    ["src/pages/services/eco-friendly-painting-solutions.astro", _page19],
    ["src/pages/services/exterior-facade-restoration.astro", _page20],
    ["src/pages/services/precision-interior-painting.astro", _page21],
    ["src/pages/services/unique-custom-murals-and-artwork.astro", _page22],
    ["src/pages/services/index.astro", _page23],
    ["src/pages/services-categories/commercial.astro", _page24],
    ["src/pages/services-categories/exterior.astro", _page25],
    ["src/pages/services-categories/residential.astro", _page26],
    ["src/pages/why-choose-us.astro", _page27],
    ["src/pages/index.astro", _page28]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "6fc7653e-767a-44ad-9dea-1c8a93b36e74"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
