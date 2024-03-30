"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[760],{8520:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>d,toc:()=>c});var n=r(74848),i=r(28453),s=r(71735);const o={sidebar_position:2},a="Character Model Sliders",d={id:"asset-swapping/advanced-asset-creation/EditingCharacterModelSliders",title:"Character Model Sliders",description:"Guide written by: Dytser",source:"@site/i18n/uk/docusaurus-plugin-content-docs/current/asset-swapping/advanced-asset-creation/EditingCharacterModelSliders.md",sourceDirName:"asset-swapping/advanced-asset-creation",slug:"/asset-swapping/advanced-asset-creation/EditingCharacterModelSliders",permalink:"/uk/docs/asset-swapping/advanced-asset-creation/EditingCharacterModelSliders",draft:!1,unlisted:!1,editUrl:"https://github.com/PalworldModding/Docs/docs/asset-swapping/advanced-asset-creation/EditingCharacterModelSliders.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Character Customization Colors",permalink:"/uk/docs/asset-swapping/advanced-asset-creation/CharacterCustomizationColors"},next:{title:"Jiggle Physics ( 18+ )",permalink:"/uk/docs/asset-swapping/advanced-asset-creation/JigglePhysics"}},l={},c=[{value:"What&#39;s controlling it?",id:"whats-controlling-it",level:2},{value:"<BiLogoBlender></BiLogoBlender> Inside Blender",id:"-inside-blender",level:2},{value:"Shape Key Groups",id:"shape-key-groups",level:3},{value:"Maximum groups",id:"maximum-groups",level:4},{value:"Minimum Sliders",id:"minimum-sliders",level:4},{value:"Controlling your Shape Keys",id:"controlling-your-shape-keys",level:3},{value:"Adding Shape Keys",id:"adding-shape-keys",level:3},{value:"Editing Shape Keys",id:"editing-shape-keys",level:3},{value:"Export and import into Unreal Engine",id:"export-and-import-into-unreal-engine",level:2},{value:"Exporting from Blender",id:"exporting-from-blender",level:3},{value:"Importing Into Unreal 5.11",id:"importing-into-unreal-511",level:3},{value:"Testing your Shape Keys/Morph Targets",id:"testing-your-shape-keysmorph-targets",level:3}];function h(e){const t={br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"character-model-sliders",children:"Character Model Sliders"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsxs)(t.strong,{children:["Guide written by: ",(0,n.jsx)(t.code,{children:"Dytser"})]})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsxs)(t.strong,{children:["Research contributed by: ",(0,n.jsx)(t.code,{children:"FrancisLouis"})]})}),"\n",(0,n.jsxs)(t.p,{children:["For a while now it wasn't clear how the models handle the different shape sliders we can adjust at the start of the game. But after some research done on the discord its found out that Shape Keys is what's controlling this.",(0,n.jsx)(t.br,{}),"\n","However the downside is that despite now knowing what's controlling them, it would seem like the export from F model or importer into blender breaks these. So they have to be recreated."]}),"\n",(0,n.jsx)(t.h2,{id:"whats-controlling-it",children:"What's controlling it?"}),"\n",(0,n.jsxs)(t.p,{children:["In order to make Shape Keys work you have to manually add these in blender.",(0,n.jsx)(t.br,{}),"\n","For each body bone there is a max and a min Shape Key controlling what happens when you go above or below 50% in the sliders.",(0,n.jsx)(t.br,{}),"\n","If you want to function for both lower values and higher than 50% you need to edit both."]}),"\n","\n",(0,n.jsxs)(t.h2,{id:"-inside-blender",children:[(0,n.jsx)(s.jTQ,{})," Inside Blender"]}),"\n",(0,n.jsx)(t.h3,{id:"shape-key-groups",children:"Shape Key Groups"}),"\n",(0,n.jsx)(t.h4,{id:"maximum-groups",children:"Maximum groups"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Body part"}),(0,n.jsx)(t.th,{children:"Shape Key name"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Body"}),(0,n.jsx)(t.td,{children:"BS_Torso_max"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Legs"}),(0,n.jsx)(t.td,{children:"BS_Leg_max"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Arms"}),(0,n.jsx)(t.td,{children:"BS_Arm_max"})]})]})]}),"\n",(0,n.jsx)(t.h4,{id:"minimum-sliders",children:"Minimum Sliders"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Body part"}),(0,n.jsx)(t.th,{children:"Shape Key name"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Body"}),(0,n.jsx)(t.td,{children:"BS_Torso_min"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Legs"}),(0,n.jsx)(t.td,{children:"BS_Leg_min"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Arms"}),(0,n.jsx)(t.td,{children:"BS_Arm_min"})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"controlling-your-shape-keys",children:"Controlling your Shape Keys"}),"\n",(0,n.jsx)(t.h3,{id:"adding-shape-keys",children:"Adding Shape Keys"}),"\n",(0,n.jsxs)(t.p,{children:["Select your model and go to the data tab.",(0,n.jsx)(t.br,{}),"\n","look beneath vertex groups section and click the + icon in the Shape Keys",(0,n.jsx)(t.br,{}),"\n",(0,n.jsx)(t.img,{alt:"Adding Shape Keys",src:r(47984).A+"",width:"559",height:"656"}),(0,n.jsx)(t.br,{}),"\n","Now name them based on the table above."]}),"\n",(0,n.jsx)(t.h3,{id:"editing-shape-keys",children:"Editing Shape Keys"}),"\n",(0,n.jsxs)(t.p,{children:["To edit your Shape Keys\r\n",(0,n.jsx)(t.strong,{children:"select"})," the one you would like to edit, Set its value to ",(0,n.jsx)(t.strong,{children:"1"})," and make sure to click the ",(0,n.jsx)(t.strong,{children:'"Edit"'})," button.",(0,n.jsx)(t.br,{}),"\n",(0,n.jsx)(t.img,{alt:"Editing Shape Keys",src:r(6419).A+"",width:"402",height:"452"})]}),"\n",(0,n.jsx)(t.h2,{id:"export-and-import-into-unreal-engine",children:"Export and import into Unreal Engine"}),"\n",(0,n.jsx)(t.h3,{id:"exporting-from-blender",children:"Exporting from Blender"}),"\n",(0,n.jsxs)(t.p,{children:["When exporting to FBX it's important to ensure that ",(0,n.jsx)(t.strong,{children:'"Apply Modifiers"'})," is turned off in the geometry tab.",(0,n.jsx)(t.br,{}),"\n",(0,n.jsx)(t.img,{alt:"Apply Modifiers toggle, Contributed by FrancisLouis",src:r(44016).A+"",width:"247",height:"224"})]}),"\n",(0,n.jsx)(t.h3,{id:"importing-into-unreal-511",children:"Importing Into Unreal 5.11"}),"\n",(0,n.jsxs)(t.p,{children:["When importing your FBX into Unreal make sure to go to",(0,n.jsx)(t.br,{}),"\n",(0,n.jsx)(t.strong,{children:"Mesh>Advanced"}),(0,n.jsx)(t.br,{}),"\n",'And toggle on the "Import Morph Targets" before importing',(0,n.jsx)(t.br,{}),"\n",(0,n.jsx)(t.img,{alt:"Import Morph Targets, Contributed by FrancisLouis",src:r(91400).A+"",width:"459",height:"321"})]}),"\n",(0,n.jsx)(t.h3,{id:"testing-your-shape-keysmorph-targets",children:"Testing your Shape Keys/Morph Targets"}),"\n",(0,n.jsx)(t.p,{children:"Open the mesh and click the morphs tab"})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},44016:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/blender_export_shapekey-a9b0a95f9387326aec7fd248595b9e9f.png"},47984:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/shapekey_adding-8f6e87ee2be40ef39dd2d5ad12bf2ae3.png"},6419:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/shapekey_editing-e8fb6de6a12ac140617f8b869f3767ef.png"},91400:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/unreal_import_shapekey-80e38dbfd7a7423f99556d003bd364a1.png"},28453:(e,t,r)=>{r.d(t,{R:()=>o,x:()=>a});var n=r(96540);const i={},s=n.createContext(i);function o(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(s.Provider,{value:t},e.children)}},21414:(e,t,r)=>{r.d(t,{k5:()=>u});var n=r(96540),i={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},s=n.createContext&&n.createContext(i),o=["attr","size","title"];function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},d.apply(this,arguments)}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){h(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function h(e,t,r){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e){return e&&e.map(((e,t)=>n.createElement(e.tag,c({key:t},e.attr),p(e.child))))}function u(e){return t=>n.createElement(g,d({attr:c({},e.attr)},t),p(e.child))}function g(e){var t=t=>{var r,{attr:i,size:s,title:l}=e,h=a(e,o),p=s||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",d({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,i,h,{className:r,style:c(c({color:e.color||t.color},t.style),e.style),height:p,width:p,xmlns:"http://www.w3.org/2000/svg"}),l&&n.createElement("title",null,l),e.children)};return void 0!==s?n.createElement(s.Consumer,null,(e=>t(e))):t(i)}}}]);