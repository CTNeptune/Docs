"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2090],{71659:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var t=o(74848),r=o(28453);const i={sidebar_position:5},s="Intro to Hooking Functions",a={id:"lua-modding/hooking-functions",title:"Intro to Hooking Functions",description:"In this tutorial, we will be hooking the function responsible for summoning a pal from your party.",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/lua-modding/hooking-functions.mdx",sourceDirName:"lua-modding",slug:"/lua-modding/hooking-functions",permalink:"/ja/docs/lua-modding/hooking-functions",draft:!1,unlisted:!1,editUrl:"https://github.com/PalworldModding/Docs/docs/lua-modding/hooking-functions.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"UE4SS Function Overview",permalink:"/ja/docs/lua-modding/ue4ss-functions"},next:{title:"Digging 101",permalink:"/ja/docs/lua-modding/digging-101"}},l={},c=[{value:"Hooking functions",id:"hooking-functions",level:2},{value:"Registering for object creation",id:"registering-for-object-creation",level:2},{value:"Writing our first hook",id:"writing-our-first-hook",level:2},{value:"Subscribing to component creation",id:"subscribing-to-component-creation",level:3},{value:"Hooking the function",id:"hooking-the-function",level:3}];function d(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"intro-to-hooking-functions",children:"Intro to Hooking Functions"}),"\n",(0,t.jsx)(n.p,{children:"In this tutorial, we will be hooking the function responsible for summoning a pal from your party."}),"\n",(0,t.jsx)(n.h2,{id:"hooking-functions",children:"Hooking functions"}),"\n",(0,t.jsxs)(n.p,{children:["To hook a function in ue4ss, we use the ",(0,t.jsx)(n.code,{children:"RegisterHook"})," function as discussed in the previous tutorial."]}),"\n",(0,t.jsx)(n.p,{children:"The signature of the function looks like so:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"RegisterHook(FunctionName, Callback)\n"})}),"\n",(0,t.jsx)(n.p,{children:"The parameters are as follows:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"FunctionName"})," - is the function name we could get from ue4ss LiveView"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Callback"})," - is the lua function we want to get called, when the hooked function finishes executing. This function can accept several parameters, which will be discussed later."]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"UE4SS hooks execute after the hooked function has finished executing. We have the ability to inspect the return value, and override it."})}),"\n",(0,t.jsxs)(n.p,{children:["Replacing a hook's return value is as simple as just using ",(0,t.jsx)(n.code,{children:"return"})," with the new return value. If you don't wanna touch it, you can just not use this directive in your hook."]}),"\n",(0,t.jsx)(n.h2,{id:"registering-for-object-creation",children:"Registering for object creation"}),"\n",(0,t.jsxs)(n.p,{children:["However, for the ",(0,t.jsx)(n.code,{children:"RegisterHook"})," function to work, our object needs to already exist, so here's where another important function comes in: ",(0,t.jsx)(n.code,{children:"NotifyOnNewObject"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"This function will allow us to execute some code, when an object with a specified class gets created, the signature of the function is as follows:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"NotifyOnNewObject(ObjectPath, Callback)\n"})}),"\n",(0,t.jsx)(n.p,{children:"With the parameters being:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"ObjectPath"})," - the path to the object we wanna watch for creation, we could get this from ue4ss LiveView."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Callback"})," - the function we want to get called, when the given obejct gets created. This function accepts a single parameter which is the instance of the created object."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"writing-our-first-hook",children:"Writing our first hook"}),"\n",(0,t.jsx)(n.p,{children:"So for this simple example, we would want to write a snippet of code, which would scale down pals that we spawn from our party."}),"\n",(0,t.jsxs)(n.p,{children:["First of all, all our pals that are part of our party are called ",(0,t.jsx)(n.code,{children:"otomo"})," in this game, so we would like to find something related to that."]}),"\n",(0,t.jsxs)(n.p,{children:["Aha! There's a ",(0,t.jsx)(n.code,{children:"BP_OtomoPalHolderComponent"}),", which is responsible for storing your party pals, and spawning them when requested to."]}),"\n",(0,t.jsx)(n.p,{children:"After looking throgh it's functions, we can find one with a signature like this:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cpp",children:"void ActivateOtomo(int32 SlotID, FTransform StartTransform, bool& IsSuccess);\n"})}),"\n",(0,t.jsx)(n.p,{children:"This is the function that is responsible when a pal from our party gets spawned (e.g. throwing it from our party)."}),"\n",(0,t.jsx)(n.h3,{id:"subscribing-to-component-creation",children:"Subscribing to component creation"}),"\n",(0,t.jsxs)(n.p,{children:["Let's hook that function! But first, we need to make sure the object we want to hook it on exists, so let's do the hooking whenever a new object spawns. And for that we will need to use ",(0,t.jsx)(n.code,{children:"NotifyOnNewObject"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"So let's do something already!"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lua",metastring:'title="main.lua"',children:'print("Hello world from Lua!")\r\n\r\nRegisterHook("/Script/Engine.PlayerController:ClientRestart", function (Context)\r\n    NotifyOnNewObject("/Game/Pal/Blueprint/Component/OtomoHolder/BP_OtomoPalHolderComponent.BP_OtomoPalHolderComponent_C", function (Component)\r\n        print("New component!")\r\n    end)\r\nend)\n'})}),"\n",(0,t.jsxs)(n.p,{children:["This should print ",(0,t.jsx)(n.code,{children:"Hello world from Lua!"})," when we launch our game, and when we enter the world, we should see our message appear. So let's open the game and try it!"]}),"\n",(0,t.jsxs)(n.admonition,{type:"warning",children:[(0,t.jsxs)(n.p,{children:["If you're not seeing any messages from your mod appear, make sure you have ",(0,t.jsx)(n.code,{children:"enabled.txt"})," in your mod folder."]}),(0,t.jsxs)(n.p,{children:["If there are still no messages, edit ",(0,t.jsx)(n.code,{children:"mods.txt"})," to include your mod and enable it there."]})]}),"\n",(0,t.jsx)(n.p,{children:"And now let's see the logs.."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"First Hook Log",src:o(67180).A+"",width:"302",height:"134"})}),"\n",(0,t.jsx)(n.p,{children:"Yay, it works!"}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["We register a hook for ",(0,t.jsx)(n.code,{children:"ClientRestart"})," before trying to register for ",(0,t.jsx)(n.code,{children:"NotifyOnNewObject"}),", because otherwise registration is not reliable and might not always get fired when the component gets created."]})}),"\n",(0,t.jsx)(n.h3,{id:"hooking-the-function",children:"Hooking the function"}),"\n",(0,t.jsx)(n.p,{children:"Now it's time to write the hook we want, for now let's just print that our pal got activated. To do this, change your code to the following:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lua",metastring:'title="main.lua"',children:'print("Hello world from Lua!")\r\n\r\nRegisterHook("/Script/Engine.PlayerController:ClientRestart", function (Context)\r\n    NotifyOnNewObject("/Game/Pal/Blueprint/Component/OtomoHolder/BP_OtomoPalHolderComponent.BP_OtomoPalHolderComponent_C", function (Component)\r\n        print("New component!")\r\n        RegisterHook("/Game/Pal/Blueprint/Component/OtomoHolder/BP_OtomoPalHolderComponent.BP_OtomoPalHolderComponent_C:ActivateOtomo", function (self, SlotId)\r\n            print("Activating otomo: " .. SlotId:get())\r\n        end)\r\n    end)\r\nend)\n'})}),"\n",(0,t.jsxs)(n.p,{children:["After doing so, you can press the ",(0,t.jsx)(n.code,{children:"Restart All Mods"})," button in ue4ss."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Restart All Mods",src:o(87758).A+"",width:"549",height:"105"})}),"\n",(0,t.jsx)(n.p,{children:"After reloading your mods, return to the title screen, and enter your world again. Now try throwing a pal from your party, and you should see this in your console:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"First Hook Works",src:o(44536).A+"",width:"248",height:"99"})}),"\n",(0,t.jsx)(n.p,{children:"Nice! We can now get notified when someone spawns a pal from their party. Now let's do something useful with it. For the purposes of this tutorial, let's make the pal slightly smaller."}),"\n",(0,t.jsx)(n.p,{children:"For that we would require to get an instance of the pal's actor, but how can we do that? We only get the SlotID afterall."}),"\n",(0,t.jsxs)(n.p,{children:["Because the component we have actually inherits from ",(0,t.jsx)(n.code,{children:"UPalOtomoHolderComponentBase"}),", we can look into the palworld modding kit headers, for other functions it has, we can see an interesting function:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cpp",children:"UFUNCTION(BlueprintCallable, BlueprintPure)\r\nAPalCharacter* TryGetOtomoActorBySlotIndex(const int32 SlotIndex) const;\n"})}),"\n",(0,t.jsx)(n.p,{children:"This accepts a slot index, and gives is a pal actor, exactly what we need! So let's use that:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lua",metastring:'title="main.lua"',children:'print("Hello world from Lua!")\r\n\r\nRegisterHook("/Script/Engine.PlayerController:ClientRestart", function (Context)\r\n    NotifyOnNewObject("/Game/Pal/Blueprint/Component/OtomoHolder/BP_OtomoPalHolderComponent.BP_OtomoPalHolderComponent_C", function (Component)\r\n        print("New component!")\r\n        RegisterHook("/Game/Pal/Blueprint/Component/OtomoHolder/BP_OtomoPalHolderComponent.BP_OtomoPalHolderComponent_C:ActivateOtomo", function (self, SlotId)\r\n            print("Activating otomo: " .. SlotId:get())\r\n\r\n            local HolderComponent = self:get()\r\n            local OtomoActor = HolderComponent:TryGetOtomoActorBySlotIndex(SlotId:get())\r\n\r\n            OtomoActor:SetActorScale3D({X = 0.6, Y = 0.6, Z = 0.6})\r\n        end)\r\n    end)\r\nend)\n'})}),"\n",(0,t.jsxs)(n.admonition,{type:"note",children:[(0,t.jsxs)(n.p,{children:["Q: Why do we call ",(0,t.jsx)(n.code,{children:":get()"})," sometimes?"]}),(0,t.jsxs)(n.p,{children:["A: Some parameters we get inside of our hooks are actually ",(0,t.jsx)(n.code,{children:"RemoteUnrealParam"}),", usually those are instances of actors, objects, etc. So for us to get the inner value of them we need to call ",(0,t.jsx)(n.code,{children:":get()"})]})]}),"\n",(0,t.jsx)(n.p,{children:"So this code gets the component instance, gets a pal actor by the currently active slot index, and sets it's 3D actor scale to 60% of the original one. Let's hop into the game and check that!"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Cattiva being smaller as a result of the hook",src:o(86774).A+"",width:"1280",height:"720"})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},67180:(e,n,o)=>{o.d(n,{A:()=>t});const t=o.p+"assets/images/FirstHook-ce61ae10b74705d6e1a6a14ab9480711.png"},86774:(e,n,o)=>{o.d(n,{A:()=>t});const t=o.p+"assets/images/FirstHookSmaller-213780642fa11490bcf262348d43b40a.jpg"},44536:(e,n,o)=>{o.d(n,{A:()=>t});const t="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPgAAABjCAYAAAC2cM2LAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAACBESURBVHhe7d0HlB7FlS9wv7cvZ9uAn+3F6dkPTDYZIUDknDNCRJFzECIjQEJkBAgQOSeRkchBBCFMNMbGNjbOAWcc115799TOr8T91NPqGU0SmvlUOud/1F25bt3/vbeqe/r70CKLfCoFPvrRxdOaa45I6623RVp0sY91iREjRqTnnnsuLbnkkhlf/OIX04QJE9LFF1+clllmmVY6rLzyyumOO+5IBx54YKf0KtZaa620xhprtO6POeaYdP7557futamdww47LN166625v8hbaqml0oMPPpieeuqpNH369PTwww+nl156Kf+/ySabpJNOOimdcsoprfKnnnpqhusLLrgg9xV5UJ2bfrS90047dSoD5513XjruuONa99ddd13ad99907LLLpvHuPfee+frHXbYId199925jLaffvrpVp1AXZ7XXntt2nPPPVv35j9x4sS0/vrrp5EjR6brr7++lbfKKqvkusOHD8/yufTSS1t5p59+eho3blzrfumll85zuemmm9JFF12U01zvsssurTJjx45NkydPztfmob9hw4alxx57LG2++eZp3XXXzTBm4zr22GM79VkF2W211Vat+1mzZnXo15oZDz30UNpoo42yjK3HmWeemcvcfPPNadSoUa062javL33pS+mJJ57Iadttt1269957O/R0vdZ41llnnZwnXX7UP/TQQ1vzqeLRRx/N8oz7FVZYIV1++eW5H+s6fvz4Vt6WW26Zx+v6nHPOyTKKvGuuuSaNHj26da+dvfbaK49jzJgxWT+Nm45HGXM6/vjjc1lylbb11lun+++/P22wwQZzzWnSpEnphBNOyNf7779/euSRR9Jqq62W783vqquuatUB8pVnXQeE4ARy9dVXp+WWW66VBu4pPiWopgNBrrTSSvl65513TjfccENWmOWXXz7dcsstadddd22VJQiEoTC77bZbTiM4iudaPWQCgiRQCk95Nt100yxsBoSRQDaKql5/CM5gXXnllXkc8vWJ4PqxaBZHHsXVvzo9JfjBBx+cZUCBjQHZ77zzzjw/cqOcjJc847/nnnvydVcER2xKEfNGWuR1fcgh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"},87758:(e,n,o)=>{o.d(n,{A:()=>t});const t=o.p+"assets/images/RestartAllMods-15c822e1cdbe5de1be14a5f9a20fb135.png"},28453:(e,n,o)=>{o.d(n,{R:()=>s,x:()=>a});var t=o(96540);const r={},i=t.createContext(r);function s(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);