import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import './chunks/astro_BhyuBCbM.mjs';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const path = toPath(params);
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about-us.DoPEC4G5.css"}],"routeData":{"route":"/about-us","isIndex":false,"type":"page","pattern":"^\\/about-us\\/?$","segments":[[{"content":"about-us","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about-us.astro","pathname":"/about-us","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about-us.DoPEC4G5.css"}],"routeData":{"route":"/career","isIndex":false,"type":"page","pattern":"^\\/career\\/?$","segments":[[{"content":"career","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/career.astro","pathname":"/career","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about-us.DoPEC4G5.css"}],"routeData":{"route":"/contact-us","isIndex":false,"type":"page","pattern":"^\\/contact-us\\/?$","segments":[[{"content":"contact-us","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact-us.astro","pathname":"/contact-us","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about-us.DoPEC4G5.css"}],"routeData":{"route":"/faq","isIndex":false,"type":"page","pattern":"^\\/faq\\/?$","segments":[[{"content":"faq","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/faq.astro","pathname":"/faq","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about-us.DoPEC4G5.css"}],"routeData":{"route":"/gallery","isIndex":false,"type":"page","pattern":"^\\/gallery\\/?$","segments":[[{"content":"gallery","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/gallery.astro","pathname":"/gallery","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about-us.DoPEC4G5.css"}],"routeData":{"route":"/job-positions/brand-identity","isIndex":false,"type":"page","pattern":"^\\/job-positions\\/brand-identity\\/?$","segments":[[{"content":"job-positions","dynamic":false,"spread":false}],[{"content":"brand-identity","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/job-positions/brand-identity.mdx","pathname":"/job-positions/brand-identity","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about-us.DoPEC4G5.css"}],"routeData":{"route":"/job-positions/creative-designer","isIndex":false,"type":"page","pattern":"^\\/job-positions\\/creative-designer\\/?$","segments":[[{"content":"job-positions","dynamic":false,"spread":false}],[{"content":"creative-designer","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/job-positions/creative-designer.mdx","pathname":"/job-positions/creative-designer","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about-us.DoPEC4G5.css"}],"routeData":{"route":"/job-positions/mural-artist","isIndex":false,"type":"page","pattern":"^\\/job-positions\\/mural-artist\\/?$","segments":[[{"content":"job-positions","dynamic":false,"spread":false}],[{"content":"mural-artist","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/job-positions/mural-artist.mdx","pathname":"/job-positions/mural-artist","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about-us.DoPEC4G5.css"}],"routeData":{"route":"/pricing","isIndex":false,"type":"page","pattern":"^\\/pricing\\/?$","segments":[[{"content":"pricing","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/pricing.astro","pathname":"/pricing","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about-us.DoPEC4G5.css"}],"routeData":{"route":"/projects/community-art-hub","isIndex":false,"type":"page","pattern":"^\\/projects\\/community-art-hub\\/?$","segments":[[{"content":"projects","dynamic":false,"spread":false}],[{"content":"community-art-hub","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/projects/community-art-hub.astro","pathname":"/projects/community-art-hub","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about-us.DoPEC4G5.css"}],"routeData":{"route":"/projects/historical-facade","isIndex":false,"type":"page","pattern":"^\\/projects\\/historical-facade\\/?$","segments":[[{"content":"projects","dynamic":false,"spread":false}],[{"content":"historical-facade","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/projects/historical-facade.astro","pathname":"/projects/historical-facade","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about-us.DoPEC4G5.css"}],"routeData":{"route":"/projects/innovation-hub","isIndex":false,"type":"page","pattern":"^\\/projects\\/innovation-hub\\/?$","segments":[[{"content":"projects","dynamic":false,"spread":false}],[{"content":"innovation-hub","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/projects/innovation-hub.astro","pathname":"/projects/innovation-hub","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about-us.DoPEC4G5.css"}],"routeData":{"route":"/projects/penthouse-retreat","isIndex":false,"type":"page","pattern":"^\\/projects\\/penthouse-retreat\\/?$","segments":[[{"content":"projects","dynamic":false,"spread":false}],[{"content":"penthouse-retreat","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/projects/penthouse-retreat.astro","pathname":"/projects/penthouse-retreat","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about-us.DoPEC4G5.css"}],"routeData":{"route":"/projects/residential-haven","isIndex":false,"type":"page","pattern":"^\\/projects\\/residential-haven\\/?$","segments":[[{"content":"projects","dynamic":false,"spread":false}],[{"content":"residential-haven","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/projects/residential-haven.astro","pathname":"/projects/residential-haven","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about-us.DoPEC4G5.css"}],"routeData":{"route":"/projects/retail-rebranding","isIndex":false,"type":"page","pattern":"^\\/projects\\/retail-rebranding\\/?$","segments":[[{"content":"projects","dynamic":false,"spread":false}],[{"content":"retail-rebranding","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/projects/retail-rebranding.astro","pathname":"/projects/retail-rebranding","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about-us.DoPEC4G5.css"}],"routeData":{"route":"/projects","isIndex":true,"type":"page","pattern":"^\\/projects\\/?$","segments":[[{"content":"projects","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/projects/index.astro","pathname":"/projects","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about-us.DoPEC4G5.css"}],"routeData":{"route":"/services/color-consultation-and-design","isIndex":false,"type":"page","pattern":"^\\/services\\/color-consultation-and-design\\/?$","segments":[[{"content":"services","dynamic":false,"spread":false}],[{"content":"color-consultation-and-design","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/services/color-consultation-and-design.astro","pathname":"/services/color-consultation-and-design","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about-us.DoPEC4G5.css"}],"routeData":{"route":"/services/commercial-space-branding","isIndex":false,"type":"page","pattern":"^\\/services\\/commercial-space-branding\\/?$","segments":[[{"content":"services","dynamic":false,"spread":false}],[{"content":"commercial-space-branding","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/services/commercial-space-branding.astro","pathname":"/services/commercial-space-branding","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about-us.DoPEC4G5.css"}],"routeData":{"route":"/services/eco-friendly-painting-solutions","isIndex":false,"type":"page","pattern":"^\\/services\\/eco-friendly-painting-solutions\\/?$","segments":[[{"content":"services","dynamic":false,"spread":false}],[{"content":"eco-friendly-painting-solutions","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/services/eco-friendly-painting-solutions.astro","pathname":"/services/eco-friendly-painting-solutions","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about-us.DoPEC4G5.css"}],"routeData":{"route":"/services/exterior-facade-restoration","isIndex":false,"type":"page","pattern":"^\\/services\\/exterior-facade-restoration\\/?$","segments":[[{"content":"services","dynamic":false,"spread":false}],[{"content":"exterior-facade-restoration","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/services/exterior-facade-restoration.astro","pathname":"/services/exterior-facade-restoration","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about-us.DoPEC4G5.css"}],"routeData":{"route":"/services/precision-interior-painting","isIndex":false,"type":"page","pattern":"^\\/services\\/precision-interior-painting\\/?$","segments":[[{"content":"services","dynamic":false,"spread":false}],[{"content":"precision-interior-painting","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/services/precision-interior-painting.astro","pathname":"/services/precision-interior-painting","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about-us.DoPEC4G5.css"}],"routeData":{"route":"/services/unique-custom-murals-and-artwork","isIndex":false,"type":"page","pattern":"^\\/services\\/unique-custom-murals-and-artwork\\/?$","segments":[[{"content":"services","dynamic":false,"spread":false}],[{"content":"unique-custom-murals-and-artwork","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/services/unique-custom-murals-and-artwork.astro","pathname":"/services/unique-custom-murals-and-artwork","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about-us.DoPEC4G5.css"},{"type":"inline","content":"@media (min-width: 992px){html.w-mod-js:not(.w-mod-ix) [data-astro-cid-52q5xhqt][data-w-id=\"0a604b83-d9ef-a4e6-bc2f-339aaa59f132\"]{transform:translateZ(0) scaleZ(1) rotateX(0) rotateY(0) rotate(0) skew(0);display:none}html.w-mod-js:not(.w-mod-ix) [data-astro-cid-52q5xhqt][data-w-id=\"0a604b83-d9ef-a4e6-bc2f-339aaa59f131\"]{opacity:0}}\n"}],"routeData":{"route":"/services","isIndex":true,"type":"page","pattern":"^\\/services\\/?$","segments":[[{"content":"services","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/services/index.astro","pathname":"/services","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about-us.DoPEC4G5.css"},{"type":"inline","content":"@media (min-width: 992px){html.w-mod-js:not(.w-mod-ix) [data-astro-cid-m2wc3u43][data-w-id=c1e4266d-5789-da7e-2de1-7fac32f17be9]{transform:translateZ(0) scaleZ(1) rotateX(0) rotateY(0) rotate(0) skew(0);display:none}html.w-mod-js:not(.w-mod-ix) [data-astro-cid-m2wc3u43][data-w-id=c1e4266d-5789-da7e-2de1-7fac32f17be8]{opacity:0}}\n"}],"routeData":{"route":"/services-categories/commercial","isIndex":false,"type":"page","pattern":"^\\/services-categories\\/commercial\\/?$","segments":[[{"content":"services-categories","dynamic":false,"spread":false}],[{"content":"commercial","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/services-categories/commercial.astro","pathname":"/services-categories/commercial","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about-us.DoPEC4G5.css"},{"type":"inline","content":"@media (min-width: 992px){html.w-mod-js:not(.w-mod-ix) [data-astro-cid-snfhrha2][data-w-id=c1e4266d-5789-da7e-2de1-7fac32f17be9]{transform:translateZ(0) scaleZ(1) rotateX(0) rotateY(0) rotate(0) skew(0);display:none}html.w-mod-js:not(.w-mod-ix) [data-astro-cid-snfhrha2][data-w-id=c1e4266d-5789-da7e-2de1-7fac32f17be8]{opacity:0}}\n"}],"routeData":{"route":"/services-categories/exterior","isIndex":false,"type":"page","pattern":"^\\/services-categories\\/exterior\\/?$","segments":[[{"content":"services-categories","dynamic":false,"spread":false}],[{"content":"exterior","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/services-categories/exterior.astro","pathname":"/services-categories/exterior","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about-us.DoPEC4G5.css"},{"type":"inline","content":"@media (min-width: 992px){html.w-mod-js:not(.w-mod-ix) [data-astro-cid-pspr2neq][data-w-id=c1e4266d-5789-da7e-2de1-7fac32f17be9]{transform:translateZ(0) scaleZ(1) rotateX(0) rotateY(0) rotate(0) skew(0);display:none}html.w-mod-js:not(.w-mod-ix) [data-astro-cid-pspr2neq][data-w-id=c1e4266d-5789-da7e-2de1-7fac32f17be8]{opacity:0}}\n"}],"routeData":{"route":"/services-categories/residential","isIndex":false,"type":"page","pattern":"^\\/services-categories\\/residential\\/?$","segments":[[{"content":"services-categories","dynamic":false,"spread":false}],[{"content":"residential","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/services-categories/residential.astro","pathname":"/services-categories/residential","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about-us.DoPEC4G5.css"}],"routeData":{"route":"/why-choose-us","isIndex":false,"type":"page","pattern":"^\\/why-choose-us\\/?$","segments":[[{"content":"why-choose-us","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/why-choose-us.astro","pathname":"/why-choose-us","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about-us.DoPEC4G5.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["D:/Astro/PaintingService/src/pages/about-us.astro",{"propagation":"none","containsHead":true}],["D:/Astro/PaintingService/src/pages/career.astro",{"propagation":"none","containsHead":true}],["D:/Astro/PaintingService/src/pages/services/color-consultation-and-design.astro",{"propagation":"none","containsHead":true}],["D:/Astro/PaintingService/src/pages/services/commercial-space-branding.astro",{"propagation":"none","containsHead":true}],["D:/Astro/PaintingService/src/pages/services-categories/commercial.astro",{"propagation":"none","containsHead":true}],["D:/Astro/PaintingService/src/pages/projects/community-art-hub.astro",{"propagation":"none","containsHead":true}],["D:/Astro/PaintingService/src/pages/contact-us.astro",{"propagation":"none","containsHead":true}],["D:/Astro/PaintingService/src/pages/services/eco-friendly-painting-solutions.astro",{"propagation":"none","containsHead":true}],["D:/Astro/PaintingService/src/pages/services/exterior-facade-restoration.astro",{"propagation":"none","containsHead":true}],["D:/Astro/PaintingService/src/pages/services-categories/exterior.astro",{"propagation":"none","containsHead":true}],["D:/Astro/PaintingService/src/pages/faq.astro",{"propagation":"none","containsHead":true}],["D:/Astro/PaintingService/src/pages/gallery.astro",{"propagation":"none","containsHead":true}],["D:/Astro/PaintingService/src/pages/projects/historical-facade.astro",{"propagation":"none","containsHead":true}],["D:/Astro/PaintingService/src/pages/projects/index.astro",{"propagation":"none","containsHead":true}],["D:/Astro/PaintingService/src/pages/services/index.astro",{"propagation":"none","containsHead":true}],["D:/Astro/PaintingService/src/pages/index.astro",{"propagation":"none","containsHead":true}],["D:/Astro/PaintingService/src/pages/projects/innovation-hub.astro",{"propagation":"none","containsHead":true}],["D:/Astro/PaintingService/src/pages/projects/penthouse-retreat.astro",{"propagation":"none","containsHead":true}],["D:/Astro/PaintingService/src/pages/services/precision-interior-painting.astro",{"propagation":"none","containsHead":true}],["D:/Astro/PaintingService/src/pages/pricing.astro",{"propagation":"none","containsHead":true}],["D:/Astro/PaintingService/src/pages/projects/residential-haven.astro",{"propagation":"none","containsHead":true}],["D:/Astro/PaintingService/src/pages/services-categories/residential.astro",{"propagation":"none","containsHead":true}],["D:/Astro/PaintingService/src/pages/projects/retail-rebranding.astro",{"propagation":"none","containsHead":true}],["D:/Astro/PaintingService/src/pages/services/unique-custom-murals-and-artwork.astro",{"propagation":"none","containsHead":true}],["D:/Astro/PaintingService/src/pages/why-choose-us.astro",{"propagation":"none","containsHead":true}],["D:/Astro/PaintingService/src/pages/job-positions/brand-identity.mdx",{"propagation":"none","containsHead":true}],["D:/Astro/PaintingService/src/pages/job-positions/creative-designer.mdx",{"propagation":"none","containsHead":true}],["D:/Astro/PaintingService/src/pages/job-positions/mural-artist.mdx",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000noop-middleware":"_noop-middleware.mjs","/src/pages/career.astro":"chunks/pages/career_N_bsWMdY.mjs","/src/pages/services/commercial-space-branding.astro":"chunks/pages/commercial-space-branding_BA_NyKOM.mjs","/src/pages/services-categories/commercial.astro":"chunks/pages/commercial_Dh-WT96S.mjs","/src/pages/projects/community-art-hub.astro":"chunks/pages/community-art-hub_6u5XN1B1.mjs","/src/pages/contact-us.astro":"chunks/pages/contact-us_DUZXAHed.mjs","/src/pages/job-positions/creative-designer.mdx":"chunks/pages/creative-designer_CfPkT_ty.mjs","/src/pages/services/eco-friendly-painting-solutions.astro":"chunks/pages/eco-friendly-painting-solutions_CAOxZvE7.mjs","/src/pages/services/exterior-facade-restoration.astro":"chunks/pages/exterior-facade-restoration_CuF20rF3.mjs","/src/pages/services-categories/exterior.astro":"chunks/pages/exterior_B-oPDJ93.mjs","/src/pages/faq.astro":"chunks/pages/faq_BQgUQjkr.mjs","/src/pages/gallery.astro":"chunks/pages/gallery_DoseL_Gv.mjs","/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/pages/generic_DJbGSorT.mjs","/src/pages/projects/historical-facade.astro":"chunks/pages/historical-facade_Bv92CEoH.mjs","/src/pages/projects/innovation-hub.astro":"chunks/pages/innovation-hub_CUsD0z29.mjs","/src/pages/job-positions/mural-artist.mdx":"chunks/pages/mural-artist_C-3n9kdK.mjs","/src/pages/projects/penthouse-retreat.astro":"chunks/pages/penthouse-retreat_Dr8Le0qC.mjs","/src/pages/services/precision-interior-painting.astro":"chunks/pages/precision-interior-painting_Bht4tvE9.mjs","/src/pages/pricing.astro":"chunks/pages/pricing_EYFeK66A.mjs","/src/pages/projects/residential-haven.astro":"chunks/pages/residential-haven_DUCzjDBw.mjs","/src/pages/services-categories/residential.astro":"chunks/pages/residential_BxFiqwjP.mjs","/src/pages/projects/retail-rebranding.astro":"chunks/pages/retail-rebranding_BLQW6B_p.mjs","/src/pages/services/unique-custom-murals-and-artwork.astro":"chunks/pages/unique-custom-murals-and-artwork_Bv6IFUkn.mjs","/src/pages/why-choose-us.astro":"chunks/pages/why-choose-us_CKQlWmfM.mjs","\u0000@astrojs-manifest":"manifest_B1EIqD7B.mjs","D:/Astro/PaintingService/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_BkR_XoPb.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_jRaOKhBJ.mjs","\u0000@astro-page:src/pages/about-us@_@astro":"chunks/about-us_B6GcNPpb.mjs","\u0000@astro-page:src/pages/career@_@astro":"chunks/career_BHtJ_Hhp.mjs","\u0000@astro-page:src/pages/contact-us@_@astro":"chunks/contact-us_CaYNz8GR.mjs","\u0000@astro-page:src/pages/faq@_@astro":"chunks/faq_CDJlv8Vv.mjs","\u0000@astro-page:src/pages/gallery@_@astro":"chunks/gallery_BttpN18B.mjs","\u0000@astro-page:src/pages/job-positions/brand-identity@_@mdx":"chunks/brand-identity_BPU4KDq4.mjs","\u0000@astro-page:src/pages/job-positions/creative-designer@_@mdx":"chunks/creative-designer_DXZ_tuxB.mjs","\u0000@astro-page:src/pages/job-positions/mural-artist@_@mdx":"chunks/mural-artist_FYhdenb5.mjs","\u0000@astro-page:src/pages/pricing@_@astro":"chunks/pricing_CL2-lOh0.mjs","\u0000@astro-page:src/pages/projects/community-art-hub@_@astro":"chunks/community-art-hub_Pou3fbwn.mjs","\u0000@astro-page:src/pages/projects/historical-facade@_@astro":"chunks/historical-facade_DgKd3Tq9.mjs","\u0000@astro-page:src/pages/projects/innovation-hub@_@astro":"chunks/innovation-hub_BZqsWSOU.mjs","\u0000@astro-page:src/pages/projects/penthouse-retreat@_@astro":"chunks/penthouse-retreat_m3NTMPhI.mjs","\u0000@astro-page:src/pages/projects/residential-haven@_@astro":"chunks/residential-haven_BXSmAmxE.mjs","\u0000@astro-page:src/pages/projects/retail-rebranding@_@astro":"chunks/retail-rebranding_DXQIpM1G.mjs","\u0000@astro-page:src/pages/projects/index@_@astro":"chunks/index_-sKfqm0m.mjs","\u0000@astro-page:src/pages/services/color-consultation-and-design@_@astro":"chunks/color-consultation-and-design_BKgprSA9.mjs","\u0000@astro-page:src/pages/services/commercial-space-branding@_@astro":"chunks/commercial-space-branding_z1u14o8e.mjs","\u0000@astro-page:src/pages/services/eco-friendly-painting-solutions@_@astro":"chunks/eco-friendly-painting-solutions_DOwmR0Zk.mjs","\u0000@astro-page:src/pages/services/exterior-facade-restoration@_@astro":"chunks/exterior-facade-restoration_CzlSZjDp.mjs","\u0000@astro-page:src/pages/services/precision-interior-painting@_@astro":"chunks/precision-interior-painting_xU246shD.mjs","\u0000@astro-page:src/pages/services/unique-custom-murals-and-artwork@_@astro":"chunks/unique-custom-murals-and-artwork_oGYSLi6H.mjs","\u0000@astro-page:src/pages/services/index@_@astro":"chunks/index_BLc2LtJo.mjs","\u0000@astro-page:src/pages/services-categories/commercial@_@astro":"chunks/commercial_BSEQcseo.mjs","\u0000@astro-page:src/pages/services-categories/exterior@_@astro":"chunks/exterior_C1Dc18O_.mjs","\u0000@astro-page:src/pages/services-categories/residential@_@astro":"chunks/residential_BeTydNl7.mjs","\u0000@astro-page:src/pages/why-choose-us@_@astro":"chunks/why-choose-us_Dl_jM7XB.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_DIVa1LYI.mjs","D:/Astro/PaintingService/src/layout/jobLayout.astro":"chunks/jobLayout_B7rzr7oN.mjs","@astrojs/react/client.js":"_astro/client.CwWKiGVO.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/down-arrow.CMSKovhQ.png","/_astro/modern-apartment-interior.CjpY771x.webp","/_astro/left.CQiEp7iY.png","/_astro/right.B91Eot1B.png","/_astro/about-us.DoPEC4G5.css","/favicon.svg","/fonts/fa-brands-400.ttf","/fonts/fa-regular-400.ttf","/fonts/fa-solid-900.ttf","/script/about.js","/script/contact-us.js","/script/faq.js","/script/gallery.js","/script/home.js","/script/job.js","/script/projects.js","/script/why-choose-us.js","/_astro/client.CwWKiGVO.js","/styles/animation.css","/styles/global.css","/styles/output.css","/script/projects/main.js","/script/services/exterior-facade-restoration.js","/script/services/residential.js"],"buildFormat":"directory"});

export { manifest };
