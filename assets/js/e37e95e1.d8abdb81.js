"use strict";(self.webpackChunkbeta_BNB_Docs=self.webpackChunkbeta_BNB_Docs||[]).push([[1709],{3905:function(e,t,n){n.d(t,{Zo:function(){return h},kt:function(){return p}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},h=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,h=i(e,["components","mdxType","originalType","parentName"]),f=l(n),p=a,m=f["".concat(s,".").concat(p)]||f[p]||u[p]||o;return n?r.createElement(m,c(c({ref:t},h),{},{components:n})):r.createElement(m,c({ref:t},h))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},87049:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return h},default:function(){return f}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),c=["components"],i={},s="Cross-chain Communication",l={unversionedId:"beaconchain/faq/bsc/cross",id:"beaconchain/faq/bsc/cross",isDocsHomePage:!1,title:"Cross-chain Communication",description:"How much is cross-chain transfer fee?",source:"@site/docs/beaconchain/faq/bsc/cross.md",sourceDirName:"beaconchain/faq/bsc",slug:"/beaconchain/faq/bsc/cross",permalink:"/docs/beaconchain/faq/bsc/cross",editUrl:"https://github.com/bnb-chain/bnb-chain.github.io/docs/beaconchain/faq/bsc/cross.md",tags:[],version:"current",frontMatter:{}},h=[{value:"How much is cross-chain transfer fee?",id:"how-much-is-cross-chain-transfer-fee",children:[],level:2},{value:"What&#39;s is a BSC relayer?",id:"whats-is-a-bsc-relayer",children:[],level:2},{value:"What&#39;s is an Oracle relayer?",id:"whats-is-an-oracle-relayer",children:[],level:2},{value:"What&#39;s an oracle?",id:"whats-an-oracle",children:[],level:2},{value:"Which wallet support cross-chain transfer?",id:"which-wallet-support-cross-chain-transfer",children:[],level:2},{value:"How to send cross-chain transfer?",id:"how-to-send-cross-chain-transfer",children:[],level:2}],u={toc:h};function f(e){var t=e.components,n=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"cross-chain-communication"},"Cross-chain Communication"),(0,o.kt)("h2",{id:"how-much-is-cross-chain-transfer-fee"},"How much is cross-chain transfer fee?"),(0,o.kt)("p",null,"The total cost of transfer from BC to BSC is composed of 2 parts:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Fee for executing ",(0,o.kt)("inlineCode",{parentName:"p"},"bridge transfer-out")," transaction is 0.004BNB,  pay validators on Binance Chain")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Fee for BSC-relayers 0.004BNB. it will cover the fees of calling TokenHub Contract on BSC."))),(0,o.kt)("p",null,"The total cost of transfer from BSC to BC is composed of 2 parts:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Fee for Oracle-relayers 0.004BNB, pay for BSC relayers")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Call TokenHub Contract: You need to pay BNB for calling smart-contract on BSC, this transaction is metered by gas, which is a global parameter. At the moment, you need to pay about 0.0005BNB ~ 0.0015BNB."))),(0,o.kt)("h2",{id:"whats-is-a-bsc-relayer"},"What's is a BSC relayer?"),(0,o.kt)("p",null,"BSC relayer monitors cross chain packages on Binance Chain, builds and broadcasts transactions to BSC to deliver these packages, which is the key of cross chain communication from Binance Chain to BSC."),(0,o.kt)("h2",{id:"whats-is-an-oracle-relayer"},"What's is an Oracle relayer?"),(0,o.kt)("p",null,"Oracle Relayer watches the state change of Binance Smart Chain. Once it catches Cross-Chain Communication Events, it will submit to vote for the requests. After Oracle Relayers from \u2154 of the voting power of BC validators vote for the changes, the cross-chain actions will be performed. Only validators of Binance Chain are eligible to run Oracle relayers."),(0,o.kt)("h2",{id:"whats-an-oracle"},"What's an oracle?"),(0,o.kt)("p",null,"In blockchain network, an oracle refers to the element that connects smart contracts with data from the outside world. In the network of Binance Smart Chain, the execution of the transanction wil emit Events, and such events can be packaged and relayed onto BC. In this way, BC will get updates about changes of BSC."),(0,o.kt)("h2",{id:"which-wallet-support-cross-chain-transfer"},"Which wallet support cross-chain transfer?"),(0,o.kt)("p",null,"You need to use ",(0,o.kt)("a",{parentName:"p",href:"/docs/wallet/myetherwallet"},"MyEtherWallet")," to call contracts and use Binance Chain commandline client: ",(0,o.kt)("inlineCode",{parentName:"p"},"bnbcli"),"/ ",(0,o.kt)("inlineCode",{parentName:"p"},"tbnbcli")," for complementary commands"),(0,o.kt)("p",null,"Please refer to this ",(0,o.kt)("a",{parentName:"p",href:"/docs/cross-chain-transfer"},"guide")," for details"),(0,o.kt)("h2",{id:"how-to-send-cross-chain-transfer"},"How to send cross-chain transfer?"),(0,o.kt)("p",null,"You can use ",(0,o.kt)("a",{parentName:"p",href:"/docs/wallet/binance"},"Binance Chain extension wallet")," or"),(0,o.kt)("p",null,"use ",(0,o.kt)("a",{parentName:"p",href:"https://community.trustwallet.com/t/how-to-send-and-receive-bnb-on-smart-chain/67430"},"Trust wallet")))}f.isMDXComponent=!0}}]);