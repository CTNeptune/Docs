"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2348],{39474:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>A,contentTitle:()=>a,default:()=>j,frontMatter:()=>c,metadata:()=>h,toc:()=>x});var s=i(74848),d=i(28453);const o={"no-bullet":"no-bullet_Fo0W"};var r=i(98027),t=i(30037),l=i(59879);const c={sidebar_position:1},a="Packaging",h={id:"mod-publishing/packaging-your-mod",title:"Packaging",description:"The packaging format for Thunderstore is a simple zip file with a predetermined structure. This structure contains the files of your mod put into special direcetories, as well as some files with metadata about your mod.",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/mod-publishing/packaging-your-mod.mdx",sourceDirName:"mod-publishing",slug:"/mod-publishing/packaging-your-mod",permalink:"/ja/docs/mod-publishing/packaging-your-mod",draft:!1,unlisted:!1,editUrl:"https://github.com/PalworldModding/Docs/docs/mod-publishing/packaging-your-mod.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Publishing Your Mod",permalink:"/ja/docs/category/publishing-your-mod"},next:{title:"Uploading",permalink:"/ja/docs/mod-publishing/uploading"}},A={},x=[{value:"But I don&#39;t like overwolf",id:"but-i-dont-like-overwolf",level:2},{value:"Structure",id:"structure",level:2},{value:"Manifest",id:"manifest",level:2},{value:"Example",id:"example",level:2},{value:"Testing",id:"testing",level:3}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"packaging",children:"Packaging"}),"\n",(0,s.jsx)(n.p,{children:"The packaging format for Thunderstore is a simple zip file with a predetermined structure. This structure contains the files of your mod put into special direcetories, as well as some files with metadata about your mod."}),"\n",(0,s.jsx)(n.h1,{id:"why-thunderstore",children:"Why Thunderstore?"}),"\n",(0,s.jsx)(n.p,{children:"This guide will be about Thunderstore and how to package and publish your mods there. You might ask why?"}),"\n",(0,s.jsx)(n.p,{children:"The answer is not too complicated, Thunderstore provides superior dependency management other existing mod managers, alongside that Thunderstore provides a better way of injecting ue4ss that doesn't break your game installs if there is a major version upgrade of ue4ss (e.g. the 2.5.2 -> 3.0 case)."}),"\n",(0,s.jsx)(n.p,{children:"There are also other benefits like mods not conflicting with each other because of their name, a great profile management system, easy sharing of mod profiles using a simple copyable code, etc."}),"\n",(0,s.jsx)(n.h2,{id:"but-i-dont-like-overwolf",children:"But I don't like overwolf"}),"\n",(0,s.jsxs)(n.p,{children:["Me neither, with Thunderstore we're in luck and an alternative client for it exists: ",(0,s.jsx)(n.a,{href:"https://thunderstore.io/package/ebkr/r2modman/",children:"r2modman"}),", this is a standalone Thunderstore client which doesn't require overwolf and doesn't contain ads."]}),"\n",(0,s.jsx)(n.h2,{id:"structure",children:"Structure"}),"\n","\n",(0,s.jsx)(n.p,{children:"Here's a complete overview of the mod structure:"}),"\n",(0,s.jsxs)("ul",{className:o["no-bullet"],style:{paddingLeft:"0.5rem"},children:[(0,s.jsxs)("li",{children:[(0,s.jsx)(r.Wlj,{})," ModArchive.zip"]}),(0,s.jsx)("li",{children:(0,s.jsxs)("ul",{className:o["no-bullet"],children:[(0,s.jsxs)("li",{children:[(0,s.jsx)(t.U6F,{})," ",(0,s.jsx)(n.code,{children:"manifest.json"})," - manifest describing your mod"]}),(0,s.jsxs)("li",{children:[(0,s.jsx)(r.teh,{})," ",(0,s.jsx)(n.code,{children:"README.md"})," - readme of your mod to be shown on the Thunderstore webpage"]}),(0,s.jsxs)("li",{children:[(0,s.jsx)(l.TbK,{})," ",(0,s.jsx)(n.code,{children:"icon.png"})," - mod icon"]}),(0,s.jsxs)("li",{children:[(0,s.jsx)(r.g1V,{})," ",(0,s.jsx)(n.code,{children:"mod/"})," - lua / dll mods directory"]}),(0,s.jsxs)("ul",{className:o["no-bullet"],children:[(0,s.jsxs)("li",{children:[(0,s.jsx)(t.hVg,{})," ",(0,s.jsx)(n.code,{children:"enabled.txt"})," - an empty file, required for your mod to get loaded"]}),(0,s.jsxs)("li",{children:[(0,s.jsx)(r.g1V,{})," ",(0,s.jsx)(n.code,{children:"scripts/"})," - lua scripts"]}),(0,s.jsx)("li",{children:(0,s.jsx)("ul",{className:o["no-bullet"],children:(0,s.jsxs)("li",{children:[(0,s.jsx)(r.Gp9,{})," ",(0,s.jsx)(n.code,{children:"main.lua"})," - your lua script entrypoint"]})})}),(0,s.jsxs)("li",{children:[(0,s.jsx)(r.g1V,{})," ",(0,s.jsx)(n.code,{children:"dll/"})," - native c++ ue4ss mods"]}),(0,s.jsx)("li",{children:(0,s.jsx)("ul",{className:o["no-bullet"],children:(0,s.jsxs)("li",{children:[(0,s.jsx)(r.Gp9,{})," ",(0,s.jsx)(n.code,{children:"main.dll"})," - main c++ mod file"]})})})]}),(0,s.jsxs)("li",{children:[(0,s.jsx)(r.g1V,{})," ",(0,s.jsx)(n.code,{children:"pak/"})," - pak files"]}),(0,s.jsx)("li",{children:(0,s.jsx)("ul",{className:o["no-bullet"],children:(0,s.jsxs)("li",{children:[(0,s.jsx)(r.Gp9,{})," ",(0,s.jsx)(n.code,{children:"ModName.pak"})," - mod pak file"]})})}),(0,s.jsxs)("li",{children:[(0,s.jsx)(r.g1V,{})," ",(0,s.jsx)(n.code,{children:"cfg/"})," - mod config files"]}),(0,s.jsx)("li",{children:(0,s.jsx)("ul",{className:o["no-bullet"],children:(0,s.jsxs)("li",{children:[(0,s.jsx)(t.U6F,{})," ",(0,s.jsx)(n.code,{children:"author-mod-cfg.json"})," - config file"]})})})]})})]}),"\n",(0,s.jsx)(n.p,{children:"The structure should be pretty self-explanatory, however this guide will go into more detail."}),"\n",(0,s.jsx)(n.p,{children:"While developing your mods, you might've produced several or all of these types of files, here's a table describing their use and where they should be put:"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"File Types"}),(0,s.jsx)(n.th,{children:"Destination dir"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:".lua"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"mod/scripts/"})}),(0,s.jsx)(n.td,{children:"Lua scripts"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:".pak"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"pak/"})}),(0,s.jsx)(n.td,{children:"Mod pak files"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:".dll"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"mod/dll/"})}),(0,s.jsx)(n.td,{children:"Native ue4ss c++ mods"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:".json"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"cfg/"})}),(0,s.jsx)(n.td,{children:"Mod configuration files"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"manifest",children:"Manifest"}),"\n",(0,s.jsx)(n.p,{children:"Now that we understand the structure, let's explore the manifest file you need to create to make your mod recognizable by Thunderstore."}),"\n",(0,s.jsx)(n.p,{children:"Structure of the manifest is a simple json like this:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",metastring:'title="manifest.json"',children:'{\r\n    "name": "TestMod",\r\n    "version_number": "1.1.0",\r\n    "author": "You",\r\n    "website_url": "https://github.com/thunderstore-io",\r\n    "description": "This is a description for a mod. 250 characters max",\r\n    "dependencies": [\r\n        "Thunderstore-unreal_shimloader-1.0.2"\r\n    ]\r\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Everything here should be pretty self-explanatory. The ",(0,s.jsx)(n.code,{children:"dependencies"})," field is where you can specify dependencies for your mod. Every Palworld mod must depend on ",(0,s.jsx)(n.code,{children:"unreal_shimloader"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"If you wanna depend on another mod, you can find it's dependency string on the mod page for that mod."}),"\n",(0,s.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.p,{children:"Now that we know the format, let's try and pack a mod to see how it's done in practice."}),"\n",(0,s.jsxs)(n.p,{children:["Our mod will only include a single ",(0,s.jsx)(n.code,{children:".lua"})," and a ",(0,s.jsx)(n.code,{children:".pak"})," file, and will be named ",(0,s.jsx)(n.code,{children:"HelloWorld"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["First of all, let's create a folder where we will be packing our mod, inside of it, create 2 folders: ",(0,s.jsx)(n.code,{children:"mod"})," and ",(0,s.jsx)(n.code,{children:"pak"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Inside of the ",(0,s.jsx)(n.code,{children:"mod"})," folder, create a folder called ",(0,s.jsx)(n.code,{children:"scripts"})]}),"\n",(0,s.jsxs)(n.p,{children:["Put your ",(0,s.jsx)(n.code,{children:"main.lua"})," file which you wrote for your mod into the ",(0,s.jsx)(n.code,{children:"mod/scripts"})," folder, for an example on how to write lua mods, you could look into the ",(0,s.jsx)(n.a,{href:"/ja/docs/lua-modding/lua-intro",children:"Lua Modding"})," guide."]}),"\n",(0,s.jsxs)(n.p,{children:["And put your ",(0,s.jsx)(n.code,{children:"ModName.pak"})," file into the ",(0,s.jsx)(n.code,{children:"pak"})," folder."]}),"\n",(0,s.jsxs)(n.p,{children:["While we're at it, let's create a ",(0,s.jsx)(n.code,{children:"manifest.json"})," file in the root folder, after all manipulations the folder should look like this:"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Initial Mod folder Structure",src:i(40987).A+"",width:"271",height:"225"})}),"\n",(0,s.jsxs)(n.p,{children:["Now open the ",(0,s.jsx)(n.code,{children:"manifest.json"}),", and paste this text into it:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",metastring:'title="manifest.json"',children:'{\r\n    "name": "HelloWorld",\r\n    "version_number": "1.0.0",\r\n    "description": "Hello palworld!",\r\n    "website_url": "https://github.com/thunderstore-io",\r\n    "dependencies": [\r\n        "Thunderstore-unreal_shimloader-1.0.2"\r\n    ]\r\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["For the icon of our mod, let's use ",(0,s.jsx)("a",{target:"_blank",href:i(64653).A,download:"icon.png",children:"this file"}),", download it, and paste it into your mod packing directory."]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"Mods are required to have an icon, and it should be 256x256 in size."})}),"\n",(0,s.jsxs)(n.p,{children:["Now we also need our mod to have a readme file, so create a ",(0,s.jsx)(n.code,{children:"README.md"})," file in your packing directory and put this into there:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-md",metastring:'title="README.md"',children:"# Hello World\r\n\r\nHiii!!\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Last but not least, create an empty ",(0,s.jsx)(n.code,{children:"enabled.txt"})," file inside of the ",(0,s.jsx)(n.code,{children:"mod"})," directory, this is required for your mod to work."]}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsxs)(n.p,{children:["If your mod doesn't contain the ",(0,s.jsx)(n.code,{children:"enabled.txt"})," file, it will not load."]})}),"\n",(0,s.jsx)(n.p,{children:"With that done, zip up your mod using your favorite archiver, contents of the zip file should look like so:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Zip contents",src:i(80025).A+"",width:"333",height:"244"})}),"\n",(0,s.jsx)(n.h3,{id:"testing",children:"Testing"}),"\n",(0,s.jsxs)(n.p,{children:["Let's test our example, fire up r2modman or Thunderstore mod manager, select Palworld. Select your profile, or use the default one, go to ",(0,s.jsx)(n.code,{children:"Settings"}),", search for ",(0,s.jsx)(n.code,{children:"Import local mod"}),", click that option, and select your zip."]}),"\n",(0,s.jsx)(n.p,{children:"After importing the mod, you should see it in your mod manager:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Mod manager with installed mod",src:i(57934).A+"",width:"1591",height:"453"})}),"\n",(0,s.jsxs)(n.p,{children:["However before starting the mod we must download the shimloader dependency, just click on the ",(0,s.jsx)(n.code,{children:"Download Dependency"})," button and r2modman should install the shimloader automatically."]}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsx)(n.p,{children:"If you don't download the shimloader dependency, your mod won't load"})}),"\n",(0,s.jsx)(n.p,{children:"Your mod list should look like this now:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Mod list after installing dependencies",src:i(98752).A+"",width:"1179",height:"159"})}),"\n","\n",(0,s.jsxs)(n.p,{children:["Now press the ",(0,s.jsx)(r.GH9,{})," ",(0,s.jsx)(n.strong,{children:"Start Modded"})," button and see if your mod works!"]})]})}function j(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},64653:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/icon-b3261918451d9c6da9e4261535b81411.png"},98752:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/FinalModList-a244dd7706b2c45bb0c0f0d9fdb6f422.png"},40987:(e,n,i)=>{i.d(n,{A:()=>s});const s="data:image/png;base64,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"},57934:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/InstalledMod-f7f0bdfb0f69675ae6d31b18da6e7fd7.png"},80025:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/ZipContents-7571aa2869c6714d8e191a7967babf8b.png"}}]);