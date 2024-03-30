"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[397],{46517:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var o=t(74848),s=t(28453);const i={sidebar_position:4},r="UE4SS Function Overview",a={id:"lua-modding/ue4ss-functions",title:"UE4SS Function Overview",description:"UE4SS comes with a built-in Lua API. Part of that is an array of useful functions that let us do cool stuff. In this section we're going to cover some of the more useful functions in the context of how they might get used in Palworld.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/lua-modding/ue4ss-functions.mdx",sourceDirName:"lua-modding",slug:"/lua-modding/ue4ss-functions",permalink:"/fr/docs/lua-modding/ue4ss-functions",draft:!1,unlisted:!1,editUrl:"https://github.com/PalworldModding/Docs/docs/lua-modding/ue4ss-functions.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Lua Mod Structure",permalink:"/fr/docs/lua-modding/lua-mod-structure"},next:{title:"Intro to Hooking Functions",permalink:"/fr/docs/lua-modding/hooking-functions"}},c={},l=[{value:"<strong>RegisterHook</strong>",id:"registerhook",level:3},{value:"<strong>NotifyOnNewObject</strong>",id:"notifyonnewobject",level:3},{value:"<strong>StaticFindObject</strong>",id:"staticfindobject",level:3},{value:"<strong>Find Functions</strong>",id:"find-functions",level:3},{value:"<strong>LoopAsync and ExecuteWithDelay</strong>",id:"loopasync-and-executewithdelay",level:3},{value:"<strong>FName + FText</strong>",id:"fname--ftext",level:3},{value:"<strong>Callback Functions</strong>",id:"callback-functions",level:3},{value:"<strong>More functions</strong>",id:"more-functions",level:3}];function d(e){const n={a:"a",br:"br",code:"code",em:"em",h1:"h1",h3:"h3",hr:"hr",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"ue4ss-function-overview",children:"UE4SS Function Overview"}),"\n",(0,o.jsxs)(n.p,{children:["UE4SS comes with a built-in ",(0,o.jsx)(n.a,{href:"https://docs.ue4ss.com/dev/lua-api.html",children:"Lua API"}),". Part of that is an array of useful functions that let us do cool stuff. In this section we're going to cover some of the more useful functions in the context of how they might get used in Palworld."]}),"\n",(0,o.jsxs)(n.p,{children:["We have two functions that make up the bread and butter of our Lua scripting: ",(0,o.jsx)(n.code,{children:"RegisterHook"})," and ",(0,o.jsx)(n.code,{children:"NotifyOnNewObject"}),". You'll get a better hands-on experience with them in the next tutorial, but for now let's just introduce you to them."]}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h3,{id:"registerhook",children:(0,o.jsx)(n.strong,{children:"RegisterHook"})}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsxs)(n.p,{children:["This hooks on to ",(0,o.jsx)(n.em,{children:"SomeFunction"})," and fires ",(0,o.jsx)(n.strong,{children:"after"})," ",(0,o.jsx)(n.em,{children:"SomeFunction"})," is executed."]}),"\n",(0,o.jsxs)(n.p,{children:["For example, one of the most common ",(0,o.jsx)(n.code,{children:"RegisterHooks"})," you'll see in scripts right now is:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-lua",children:'RegisterHook("/Script/Engine.PlayerController:ClientRestart", function (Context) \r\n    -- do something\r\nend)\n'})}),"\n",(0,o.jsxs)(t,{children:[(0,o.jsx)("summary",{children:(0,o.jsx)("b",{children:"What's the function being hooked?"})}),(0,o.jsx)("blockquote",{children:"Hopefully you were thinking ClientRestart, or we might have a long road ahead of us"})]}),"\n",(0,o.jsx)("br",{}),"\n",(0,o.jsxs)(t,{children:[(0,o.jsx)("summary",{children:(0,o.jsx)("b",{children:"Now, what is Context in this example?"})}),(0,o.jsx)("blockquote",{children:"If you said PlayerController, good job! I'm proud of you. The first parameter in the callback is always the UObject calling the function. Aka, the context."})]}),"\n",(0,o.jsx)("br",{}),"\n",(0,o.jsx)("b",{children:"What's the point of this hook, why do so many scripts use it?"}),"\n",(0,o.jsxs)(n.p,{children:["Well, what does it do? It executes ",(0,o.jsx)(n.code,{children:"--do something"})," after the client restarts. It's a handy way to init stuff."]}),"\n",(0,o.jsxs)(n.p,{children:["Why do most scripts use it? Well, not everything is available right away when the game launches, so sometimes you need to delay your logic until you know whatever you want will be accessible. A general rule of thumb is anything that starts with ",(0,o.jsx)(n.code,{children:"/Script/"})," should be available immediately. Anything else, you probably should put behind a hook like this."]}),"\n",(0,o.jsx)(n.p,{children:"But this hook also sucks because it doesn't work for dedicated servers. So I'mma teach you a better one:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-lua",children:'RegisterHook("/Script/Engine.PlayerController:ServerAcknowledgePossession", function(Context)\r\n    -- do something\r\nend)\n'})}),"\n",(0,o.jsxs)(n.p,{children:["This ",(0,o.jsx)(n.em,{children:"should"})," get called whenever a client connects to the server. It also works for local games. I use it in most my scripts.",(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)("sup",{children:(0,o.jsx)("sub",{children:(0,o.jsx)(n.em,{children:"Sometimes it doesn't work and I don't know why but we don't talk about that and just claim ignorance and blame the person running the server for setting up something wrong, idk."})})})]}),"\n",(0,o.jsxs)(n.p,{children:["We said before the first parameter of the callback function is the UObject, but you can also get the params from the invoked function. The callback function of this is always: ",(0,o.jsx)(n.code,{children:"function(UObject self, UFunctionParams)"})]}),"\n",(0,o.jsxs)(n.p,{children:["So if I have ",(0,o.jsx)(n.code,{children:"StupidFunction(bool isTrue, int Id, string Message)"})," I can do"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-lua",children:'RegisterHook("/Script/Example.SomeObject:StupidFunction", function(Context, isTrue, Id, Message)\r\n    print("This message is: " .. Message:get())\r\n    print("The bool is: " .. isTrue:get())\r\n    print("The id is: " .. id:get())\r\n)\n'})}),"\n",(0,o.jsx)("br",{}),"\n",(0,o.jsxs)(t,{children:[(0,o.jsx)("summary",{children:(0,o.jsxs)("b",{children:["What's up with the ",(0,o.jsxs)("code",{children:[":get","()"]}),"?"]})}),(0,o.jsxs)("blockquote",{children:["If you don't remember from last lesson, some of the params we get from hooks are actually these weird things called ",(0,o.jsx)("code",{children:"RemoteUnrealParam"}),", for some reason that is above my level of understanding, so to get the ",(0,o.jsx)(n.em,{children:"actual"})," value of them, we need to call ",(0,o.jsxs)("code",{children:[":get","()"]})]})]}),"\n",(0,o.jsx)("br",{}),"\n",(0,o.jsx)(n.p,{children:"Of course it's never that easy because UE never uses easy to work with parameters, but you get the idea."}),"\n",(0,o.jsx)("br",{}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h3,{id:"notifyonnewobject",children:(0,o.jsx)(n.strong,{children:"NotifyOnNewObject"})}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.p,{children:"This is magic sauce #2 which allows us to watch for particular objects to be created. Wanna know every time someone goes to build an Electric Heater?"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-lua",children:'NotifyOnNewObject("/Game/Pal/Blueprint/MapObject/BuildObject/BP_BuildObject_HeaterElectric.BP_BuildObject_HeaterElectric_C", function(Context)\r\n    print("woah its a heater")\r\nend)\n'})}),"\n",(0,o.jsx)(n.p,{children:"But Teh! How do you know the long address string thing? Baby steps! That's a problem for future you. Just get an understanding of the functions and how to use them for now, I promise we'll get to it."}),"\n",(0,o.jsx)("br",{}),"\n",(0,o.jsxs)(n.p,{children:["If you were to run this code above as is, it may or may not work. Why? Remember what I said about things not always being available? Notice this isn't a ",(0,o.jsx)(n.code,{children:"/Script/"}),". This might not exist yet when you're trying to create the notify. So to be sure, you wrap it in a ",(0,o.jsx)(n.code,{children:"RegisterHook"})," with SAP or CR. And even that might not be enough...SAP sometimes fires too early, so we might need to wrap it with a delay too. We'll cover that in a bit, so for now we'll just take it as is."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-lua",children:'RegisterHook("/Script/Engine.PlayerController:ServerAcknowledgePossession", function(Context)\r\n    ExecuteWithDelay(5000,function()\r\n        NotifyOnNewObject("/Game/Pal/Blueprint/MapObject/BuildObject/BP_BuildObject_HeaterElectric_BP_BuildObject_HeaterElectric_C", function(Context)\r\n            print("woah its a heater")\r\n        end)\r\n    end)\r\nend)\n'})}),"\n",(0,o.jsxs)(n.p,{children:["But if you do that you're stupid. Because now every time that hook fires, you're creating a new notification. Two more players just joined your game. Now you have 3 ",(0,o.jsx)(n.code,{children:"NotifyOnNewObject"}),". Remember, these execute whatever is in it ",(0,o.jsx)(n.em,{children:"every time they fire"}),". So don't be stupid, and wrap it up."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-lua",children:'local not_hooked = true\r\nRegisterHook("/Script/Engine.PlayerController:ServerAcknowledgePossession", function(Context)\r\n    if not_hooked then\r\n        ExecuteWithDelay(5000,function()\r\n            NotifyOnNewObject("/Game/Pal/Blueprint/MapObject/BuildObject/BP_BuildObject_HeaterElectric_BP_BuildObject_HeaterElectric_C", function(Context)\r\n                print("woah its a heater")\r\n            end)\r\n        end)\r\n        not_hooked = false\r\n    end\r\nend)\n'})}),"\n",(0,o.jsx)(n.p,{children:"Now we're cooking with fire."}),"\n",(0,o.jsx)(n.p,{children:"Those two are going to be your bread and butter, but lets touch on a couple more useful UE4SS functions."}),"\n",(0,o.jsx)("br",{}),"\n",(0,o.jsx)("br",{}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h3,{id:"staticfindobject",children:(0,o.jsx)(n.strong,{children:"StaticFindObject"})}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsxs)(n.p,{children:["Sometimes you just want the default class object. A good example is ",(0,o.jsx)(n.code,{children:"PalUtility"}),". This bad boy has a lot of great commands in it. But you can't just do ",(0,o.jsx)(n.code,{children:"PalUtility:AwesomeFunction"})," in your code, you need the default class to call it. In comes ",(0,o.jsx)(n.code,{children:"StaticFindObject"})]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-lua",children:'local PalUtil = StaticFindObject("/Script/Pal.Default__PalUtility")\r\nPalUtil:AwesomeFunction()\n'})}),"\n",(0,o.jsx)("br",{}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h3,{id:"find-functions",children:(0,o.jsx)(n.strong,{children:"Find Functions"})}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsxs)(n.p,{children:["These are for locating objects. There are a bunch. You probably will use ",(0,o.jsx)(n.code,{children:"FindFirstOf"})," and ",(0,o.jsx)(n.code,{children:"FindAllOf"})," the most but there's also ",(0,o.jsx)(n.code,{children:"FindObject"})," and ",(0,o.jsx)(n.code,{children:"FindObjects"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"The first two can use short names, which is nice because we don't need those big long adddresses and be lazy and just do something like:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-lua",children:'local player = FindFirstOf("PalPlayerCharacter")\n'})}),"\n",(0,o.jsx)("br",{}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h3,{id:"loopasync-and-executewithdelay",children:(0,o.jsx)(n.strong,{children:"LoopAsync and ExecuteWithDelay"})}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsxs)(n.p,{children:["You saw ",(0,o.jsx)(n.code,{children:"ExecuteWithDelay"})," in the previous example. These are both useful at times in their own right and you'll probably use them occasionally. Sometimes you want to make sure something happens a bit later and in that case you can do:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-lua",children:"ExecuteWithDelay(later_in_ms, function()\r\n    --something\r\nend)\n"})}),"\n",(0,o.jsx)(n.p,{children:"Other times you want something to happen every so often, in which case you can do"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-lua",children:"LoopAsync(every_so_often, function()\r\n    --something\r\nend)\n"})}),"\n",(0,o.jsx)("br",{}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h3,{id:"fname--ftext",children:(0,o.jsx)(n.strong,{children:"FName + FText"})}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"FName"})," and ",(0,o.jsx)(n.code,{children:"FText"})," are special string based shit that UE uses for some reason idk why I'm not a UE guy I just know they're annoying on the Lua side. If you ever need to turn a string into ",(0,o.jsx)(n.code,{children:"FName"})," or ",(0,o.jsx)(n.code,{children:"FText"})," you can do that with these functions:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-lua",children:"local fname = FName(some_fname)\r\nlocal ftext = FText(some_text)\n"})}),"\n",(0,o.jsx)(n.p,{children:"You can also do the reverse in case some function hands you the nasty stuff:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-lua",children:'RegisterHook("/idk/some:function", function(fname_param, ftext_param)\r\n    local cool_string = fname_param:get():ToString()\r\n    local also_cool_string = ftext_param:get():ToString()\r\n    print(cool_string .. also_cool_string)\r\nend)\n'})}),"\n",(0,o.jsx)("br",{}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h3,{id:"callback-functions",children:(0,o.jsx)(n.strong,{children:"Callback Functions"})}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.p,{children:"Just to clarify..."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-lua",children:'RegisterHook("/idk/some:function", function(self)\r\n    --some complicated logic\r\nend)\n'})}),"\n",(0,o.jsx)(n.p,{children:"Can also be written as"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-lua",children:'local function complicatedFunction(self)\r\n    --some complicated logic\r\nend\r\n\r\nRegisterHook("/idk/some:function", complicatedFunction)\n'})}),"\n",(0,o.jsx)(n.p,{children:"In simple mods, people often just chose to nest the callback function because it can be a bit clearer at first glance, but as you get more and more complex code, it can be worth breaking these callbacks out into their own functions, else you be working with callbacks in callbacks in callbacks."}),"\n",(0,o.jsx)("br",{}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h3,{id:"more-functions",children:(0,o.jsx)(n.a,{href:"https://docs.ue4ss.com/dev/lua-api.html",children:(0,o.jsx)(n.strong,{children:"More functions"})})}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsxs)(n.p,{children:["There's a lot more functions available from the UE4SS API and I almost certainly underuse them and probably missed some useful ones, but these are personally the ones I have made the most use out of so far. For more info on that, base types, and other UE4SS api stuff, you can view their ",(0,o.jsx)(n.a,{href:"https://docs.ue4ss.com/dev/lua-api.html",children:"docs directly"})," instead of me trying to explain stuff I don't actually understand"]}),"\n",(0,o.jsx)("br",{})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var o=t(96540);const s={},i=o.createContext(s);function r(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);