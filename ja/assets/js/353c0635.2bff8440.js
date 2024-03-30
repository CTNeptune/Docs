"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2167],{35069:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var n=o(74848),a=o(28453);const s={sidebar_position:9},i="DataTables",r={id:"lua-modding/datatables",title:"DataTables",description:"(this section should proably be reworked with it's own follow along tut when someone gets a chance)",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/lua-modding/datatables.mdx",sourceDirName:"lua-modding",slug:"/lua-modding/datatables",permalink:"/ja/docs/lua-modding/datatables",draft:!1,unlisted:!1,editUrl:"https://github.com/PalworldModding/Docs/docs/lua-modding/datatables.mdx",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Config Files",permalink:"/ja/docs/lua-modding/config-files"},next:{title:"Lua Basics",permalink:"/ja/docs/lua-modding/lua-basics"}},d={},c=[];function l(e){const t={a:"a",admonition:"admonition",br:"br",code:"code",h1:"h1",p:"p",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"datatables",children:"DataTables"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)("sub",{children:(0,n.jsx)("sup",{children:"(this section should proably be reworked with it's own follow along tut when someone gets a chance)"})}),(0,n.jsx)(t.br,{}),"\n","DataTables's hold all the juicy bits of info on stuff. Occasionally you want to search through them or see exactly what stuff is stored there, so you need to know how to look through them. The general idea is just find whatever string you want to search for and search that folder in VSCode like you would header files."]}),"\n",(0,n.jsxs)(t.p,{children:["For a really brief example, the way I managed to stop pals from interacting with Electric Heaters in my ",(0,n.jsx)(t.a,{href:"https://www.nexusmods.com/palworld/mods/436",children:"Electric Appliances"})," mod was by changing the ",(0,n.jsx)(t.code,{children:"AssignDefineDataId"})," property to one that can't be assigned to. How did I figure out which to assign them to in order to do that?"]}),"\n",(0,n.jsxs)(t.p,{children:["I did a super quick search in ",(0,n.jsx)(t.code,{children:"DataTables"})," for the original id, ",(0,n.jsx)(t.code,{children:"ElectricHeater_0"}),". Which led me to ",(0,n.jsx)(t.code,{children:"DT_MapObjectAssignData"}),", which has a list of all of the assignable id's. Then I just looked for one that can't be assigned to and luckily enough found ",(0,n.jsx)(t.code,{children:"PalStorage_0"})," which has ",(0,n.jsx)(t.code,{children:"EPalWorkSuitability::None"}),". By changing the ",(0,n.jsx)(t.code,{children:"AssignDefineDataId"})," of a heater's work task to ",(0,n.jsx)(t.code,{children:"PalStorage_0"}),", pals can no longer work or be assigned to it."]}),"\n",(0,n.jsx)(t.p,{children:"That's just a short and sweet example of how you can search DT's to get info on whatever you need."}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsxs)(t.p,{children:["Currently, DataTables can only be read from. The modification functionality is coming soon, hopefully in UE4SS 3.1. You can read the the ",(0,n.jsx)(t.a,{href:"https://gist.github.com/bitonality/87b00f6c28c39ccffb85fc71404d6c80",children:"DataTable Devlog"})," if you want some more background on it"]})})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},28453:(e,t,o)=>{o.d(t,{R:()=>i,x:()=>r});var n=o(96540);const a={},s=n.createContext(a);function i(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);