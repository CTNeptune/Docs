"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3403],{12274:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>r,contentTitle:()=>d,default:()=>c,frontMatter:()=>t,metadata:()=>l,toc:()=>a});var o=s(74848),i=s(28453);const t={sidebar_position:2},d="Lua Modding Tools",l={id:"lua-modding/lua-modding-tools",title:"Lua Modding Tools",description:"If you already know the tools, you can skip ahead, but don't blame us if we reference something and you don't know what we're talking about.",source:"@site/i18n/uk/docusaurus-plugin-content-docs/current/lua-modding/lua-modding-tools.mdx",sourceDirName:"lua-modding",slug:"/lua-modding/lua-modding-tools",permalink:"/uk/docs/lua-modding/lua-modding-tools",draft:!1,unlisted:!1,editUrl:"https://github.com/PalworldModding/Docs/docs/lua-modding/lua-modding-tools.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/uk/docs/lua-modding/lua-intro"},next:{title:"Lua Mod Structure",permalink:"/uk/docs/lua-modding/lua-mod-structure"}},r={},a=[{value:"<strong>UE4SS</strong>",id:"ue4ss",level:2},{value:"<strong>Installation</strong>",id:"installation",level:3},{value:"<strong>Breakdown</strong>",id:"breakdown",level:3},{value:"<strong>FModel</strong>",id:"fmodel",level:2},{value:"VSCode",id:"vscode",level:2},{value:"Modding Setup",id:"modding-setup",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"lua-modding-tools",children:"Lua Modding Tools"}),"\n",(0,o.jsx)(n.p,{children:"If you already know the tools, you can skip ahead, but don't blame us if we reference something and you don't know what we're talking about."}),"\n",(0,o.jsx)(n.h2,{id:"ue4ss",children:(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.a,{href:"https://github.com/UE4SS-RE/RE-UE4SS",children:"UE4SS"})})}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.p,{children:"This is your bread and butter. UE4SS is a scripting service for unreal engine which allows us to even load the mods at all. It also comes with a console that is extremely helpful for developing and testing mods."}),"\n",(0,o.jsx)(n.h3,{id:"installation",children:(0,o.jsx)(n.strong,{children:"Installation"})}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["If you're using a mod manager, you probably have UE4SS installed already, but just in case, we'll cover it here. You should still check your ",(0,o.jsx)(n.code,{children:"UE4SS-settings.ini"})," to ensure they match the values provided"]})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Grab the latest ",(0,o.jsx)(n.a,{href:"https://github.com/UE4SS-RE/RE-UE4SS/releases",children:"zDev Version"})," from the releases tab"]}),"\n",(0,o.jsxs)(n.li,{children:["Extract ",(0,o.jsx)(n.code,{children:"Mods"}),", ",(0,o.jsx)(n.code,{children:"dwmapi.dll"}),", ",(0,o.jsx)(n.code,{children:"UE4SS.dll"})," and ",(0,o.jsx)(n.code,{children:"UE4SS-settings.ini"})," into your ",(0,o.jsx)(n.code,{children:"Palworld/Pal/Binaries/Win64"})," folder"]}),"\n",(0,o.jsxs)(n.li,{children:["Open ",(0,o.jsx)(n.code,{children:"UE4SS-settings.ini"})," in your editor of choice, make sure you have the following settings:","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"ConsoleEnabled = 0"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"GuiConsoleEnabled = 1"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"GuiConsoleVisible = 1"})}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"EnableHotReloadSystem = 1"})," to enable reloading with ",(0,o.jsx)(n.code,{children:"Ctrl + R"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.admonition,{type:"warning",children:(0,o.jsxs)(n.p,{children:["If you get a white console screen when UE4SS loads, change ",(0,o.jsx)(n.code,{children:"GraphicsAPI"})," to ",(0,o.jsx)(n.code,{children:"dx11"})]})}),"\n",(0,o.jsx)(n.h3,{id:"breakdown",children:(0,o.jsx)(n.strong,{children:"Breakdown"})}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.p,{children:"UE4SS has 5 tabs, and you will make heavy use of two of them."}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Console"})," - This is the first heavily used tab, and it's self-explanatory. This is where everything you ",(0,o.jsx)(n.code,{children:"print()"})," will show up. Not much else to say."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Live View"})," - This lets you get a live view of stuff in memory, filtered by whatever you search. It is incredibly useful and will probably be your most used tool. I'll cover its use in more detail once we get further into things."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Watches"})," - If there's a value you want to keep an eye on from Live View, you can ",(0,o.jsx)(n.code,{children:"right-click"})," -> ",(0,o.jsx)(n.code,{children:"Watch"})," to get it stickied in this tab. Honestly I don't use it much, but it can be useful when testing stuff if you want to keep an eye on specific values."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Dumpers"})," - Important for the first use, untouched afterwards for the most part. Right now, before you do anything else, you should ",(0,o.jsx)(n.code,{children:"Dump CXX Headers"})," and ",(0,o.jsx)(n.code,{children:"Generate Lua Types"}),"."]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"Dump CXX Headers"})," gives you a ",(0,o.jsx)(n.code,{children:"CXXHeaderDump"})," folder with all of the header files to dig through. It's more or less the same as the stuff in ",(0,o.jsx)(n.code,{children:"PalModdingKit/Source/Pal/Public"}),", but a slightly different format. Use whichever you prefer. What's the difference? The ",(0,o.jsx)(n.code,{children:"PalModdingKit"})," folder has all the difference classes broken down into their own files. If you like your stuff separted all nice and neat, then use that. You grab the file for the class you want and everything relevant is in there. If you're a barbarian like me and prefer working with only one file, you can use the ",(0,o.jsx)(n.code,{children:"CXXHeaderDump"}),", where pretty much everything we care about is stuffed into one file, ",(0,o.jsx)(n.code,{children:"Pal.hpp"}),". They also have slightly different formatting. Up to you."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"Generate Lua Types"})," will create a ",(0,o.jsx)(n.code,{children:"types"})," folder in your ",(0,o.jsx)(n.code,{children:"Mods/shared/"})," folder, which helps give intellisense autocomplete as long as you open ",(0,o.jsx)(n.code,{children:"Mods"})," as your project folder. You can also search through these types rather than the ",(0,o.jsx)(n.code,{children:"CXX Headers"})," or ",(0,o.jsx)(n.code,{children:"PalModdingKit"}),", if you prefer the Lua layout. It's similar to ",(0,o.jsx)(n.code,{children:"CXX Headers"})," in that most things are in ",(0,o.jsx)(n.code,{children:"Pal.lua"}),", but they're written in Lua syntax rather than C++"]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"BP Mods"})," - Something to do with BP stuff...idk man I'm a Lua monkey \ud83d\udc80"]}),"\n",(0,o.jsx)(n.h2,{id:"fmodel",children:(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.a,{href:"https://fmodel.app/",children:"FModel"})})}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsxs)(n.p,{children:["Follow the installation stuff in the ",(0,o.jsx)(n.a,{href:"https://pwmodding.wiki/docs/asset-swapping/Home",children:"Asset Swapping tutorial"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["For us on the Lua side, this is mostly used to view the data table values in the game. Yes, you ",(0,o.jsx)(n.em,{children:"can"})," look through BPs, but I think it's much easier to search through the header files. ",(0,o.jsx)(n.code,{children:"uasset"})," files can be awkward to browse through."]}),"\n",(0,o.jsxs)(n.p,{children:["For data tables, I recommend just saving them all as JSON so that you can just do ",(0,o.jsx)(n.code,{children:"Find in Files"})," with VSCode."]}),"\n",(0,o.jsx)(n.p,{children:"To do that:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Open ",(0,o.jsx)(n.code,{children:"Pal/Content/Pal"})," folder in FModel"]}),"\n",(0,o.jsxs)(n.li,{children:["Right-Click ",(0,o.jsx)(n.code,{children:"DataTable"})]}),"\n",(0,o.jsxs)(n.li,{children:["Click ",(0,o.jsx)(n.code,{children:"Save Folder's Packages Properties (.json)"})]}),"\n"]}),"\n",(0,o.jsxs)("div",{style:{display:"flex"},children:[(0,o.jsx)("div",{style:{flex:1},children:(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"FModel Directories",src:s(95116).A+"",width:"368",height:"585"})})}),(0,o.jsx)("div",{style:{flex:1},children:(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Fmodel Saving",src:s(32876).A+"",width:"282",height:"226"})})})]}),"\n",(0,o.jsxs)(n.p,{children:["Then when you want to search through them, just search through the root ",(0,o.jsx)(n.code,{children:"DataTable"})," folder."]}),"\n",(0,o.jsx)(n.h2,{id:"vscode",children:(0,o.jsx)(n.a,{href:"https://code.visualstudio.com/download",children:"VSCode"})}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.p,{children:"Or your editor of choice. I prefer VSCode with the Lua extension. Since that's what I have installed, that's what I'll base the tutorial off of. If you chose something else, you'll have to convert these instructions to the relevant stuff in your editor."}),"\n",(0,o.jsx)(n.p,{children:"Don't make me explain how to install it or I cry."}),"\n",(0,o.jsx)(n.h3,{id:"modding-setup",children:"Modding Setup"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Once installed open up a new window, then ",(0,o.jsx)(n.code,{children:"File"})," -> ",(0,o.jsx)(n.code,{children:"Add Folder to Workspace"})]}),"\n",(0,o.jsxs)(n.li,{children:["Navigate to your ",(0,o.jsx)(n.code,{children:"Binaries\\Win64"})," folder and add both ",(0,o.jsx)(n.code,{children:"Mods"})," and the ",(0,o.jsx)(n.code,{children:"CXXHeaderDump"})," folder you generated earlier"]}),"\n",(0,o.jsxs)(n.li,{children:["You'll also want to add the ",(0,o.jsx)(n.code,{children:"DataTable"})," folder you just dumped from FModel"]}),"\n",(0,o.jsxs)(n.li,{children:["You can then save that workspace as whatever you want. Should look something like the picture below.\r\n",(0,o.jsx)(n.img,{alt:"VSCode Workspace",src:s(25262).A+"",width:"275",height:"92"})]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["All of your dev stuff will be in ",(0,o.jsx)(n.code,{children:"Mods/YOUR_MOD_FOLDER"})," and you'll use ",(0,o.jsx)(n.code,{children:"CXXHeaderDump"})," to search through the header files, and the ",(0,o.jsx)(n.code,{children:"DataTable"})," folder if you want to search through those."]}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["We use ",(0,o.jsx)(n.code,{children:"Mods"})," as the root folder for our mod because the library info for UE4SS and the generated lua types are in ",(0,o.jsx)(n.code,{children:"Mods/shared"}),". Otherwise you have to copy that into every single one of your mods to get the intellisense."]})})]})}function c(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},95116:(e,n,s)=>{s.d(n,{A:()=>o});const o=s.p+"assets/images/Fmodel_dirs-b1eaac07b72fc4609f9f6929f80a6426.png"},32876:(e,n,s)=>{s.d(n,{A:()=>o});const o=s.p+"assets/images/Fmodel_sav-81d162795f4ec0cec9e390438ccae0a9.png"},25262:(e,n,s)=>{s.d(n,{A:()=>o});const o="data:image/png;base64,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"},28453:(e,n,s)=>{s.d(n,{R:()=>d,x:()=>l});var o=s(96540);const i={},t=o.createContext(i);function d(e){const n=o.useContext(t);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),o.createElement(t.Provider,{value:n},e.children)}}}]);