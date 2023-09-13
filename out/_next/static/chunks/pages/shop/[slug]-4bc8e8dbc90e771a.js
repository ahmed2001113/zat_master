(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[828],{22688:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/shop/[slug]",function(){return t(69701)}])},69701:function(n,e,t){"use strict";t.r(e),t.d(e,{__N_SSG:function(){return k},default:function(){return v}});var r=t(85893),o=t(14157),a=t(56225);t(85231);var s=t(82729),c=t(93801);function i(){let n=(0,s._)(["\nquery Product_Category($first: Int, $after: String, $before: String, $last: Int, $minPrice: Float, $maxPrice: Float, $stockStatues: [StockStatusEnum], $onSale: Boolean, $category: [String], $orderby: [ProductsOrderbyInput]) {\n    products(\n           first: $first\n         after: $after\n         before: $before\n         last: $last\n         \n         where: {minPrice: $minPrice, maxPrice: \n           $maxPrice, onSale: $onSale, stockStatus: \n           $stockStatues, categoryIn: $category,\n             orderby:$orderby\n             }\n           ) {\n                 pageInfo {\n           hasNextPage\n           endCursor\n           hasPreviousPage\n           startCursor\n         }\n   nodes{\n      productCategories{\n       nodes{\n         name\n         id\n         count\n     \n         \n       }\n     }\n                 title\n                 name\n                 slug\n                 productId\n                 shortDescription,\n                 ... on SimpleProduct {\n                   price(format: RAW)\n                   regularPrice(format: RAW)\n                   stockStatus\n                   status\n                   stockQuantity\n                   onSale\n                   manageStock\n                 }\n                 id\n                 averageRating\n                 slug\n                 description\n                 galleryImages {\n                   nodes {\n                     sourceUrl\n                     altText\n                     srcSet\n                   }\n                 }\n                 image {\n                   uri\n                   title\n                   srcSet\n                   sourceUrl\n                 }\n               }\n     }\n   }"]);return i=function(){return n},n}let u=(0,c.ZP)(i());function l(){let n=(0,s._)(["\nquery Product_Category($first: Int,\n    $after: String, $before: String, $last: Int,\n    $minPrice: Float, $maxPrice: Float,\n    $stockStatues: [StockStatusEnum], \n    $onSale: Boolean, $category: [String],\n    $orderby: [ProductsOrderbyInput], \n    $slug: [String]) {\n    productCategories\n      (where:{slug:$slug}){\n        \n      nodes {\n        \n        name\n        description\n        image {\n          id\n          sourceUrl\n          altText\n          srcSet\n        }\n        products(\n        first: $first\n      after: $after\n      before: $before\n      last: $last\n      \n      where: {minPrice: $minPrice, maxPrice: \n        $maxPrice, onSale: $onSale, stockStatus: \n        $stockStatues, categoryIn: $category,\n          orderby:$orderby\n          }\n        ) {\n              pageInfo {\n        hasNextPage\n        endCursor\n        hasPreviousPage\n        startCursor\n      }\n         nodes{\n              title\n              name\n              slug\n              productId\n              shortDescription,\n              ... on SimpleProduct {\n                price(format: RAW)\n                regularPrice(format: RAW)\n                stockStatus\n                status\n                stockQuantity\n                onSale\n                manageStock\n              }\n              id\n              averageRating\n              slug\n              description\n              galleryImages {\n                nodes {\n                  sourceUrl\n                  altText\n                  srcSet\n                }\n              }\n              image {\n                uri\n                title\n                srcSet\n                sourceUrl\n              }\n            }\n          \n        }\n      }\n    }\n  }"]);return l=function(){return n},n}(0,c.ZP)(l());var d=t(92638),g=t(54457),f=t(29231),m=t(82512),$=t(45910),S=t(18446),P=t.n(S),p=t(9008),y=t.n(p);t(25675),t(11163);var h=t(67294),b=t(35005),x=t(9473),k=!0,v=n=>{let{data:e,footer_header:t,price:s,slug:c,loadingApi:i,categories:l}=n,[S,p]=(0,h.useState)((0,m.Z)(null==e?void 0:e.nodes));console.log(S);let{Filters:k,sort:v,Filtered:_}=(0,x.v9)(g.N),[I,C]=(0,h.useState)(i),E=(0,x.I0)(),{description:N,image:j,name:T}=e,[Z,w]=(0,h.useState)(null==e?void 0:e.pageInfo),F=(0,h.useRef)(!0);console.log(s),(0,h.useEffect)(()=>{P()(e,S)||(E(d.NH.addPrices(s)),p((0,m.Z)(null==e?void 0:e.nodes)))},[e]);let[R,{loading:A,error:U,data:W,refetch:O,fetchMore:q}]=(0,$.t)(u,{onCompleted:n=>{console.log(n);let{products:e}=n,{pageInfo:t,nodes:r}=e;p((0,m.Z)(r)),w(t),C(A)},onError:n=>{}}),B=async()=>{C(!0);try{R({variables:{first:6,...k,category:c}}),document.body.scrollTop=0,document.documentElement.scrollTop=0}catch(n){}};(0,h.useEffect)(()=>{F.current||B(),F.current=!1},[k,_]);let D=async()=>{C(!0),R({variables:{first:6,...k,after:Z.endCursor,category:c}}),document.body.scrollTop=0,document.documentElement.scrollTop=0},Q=async()=>{C(!0),R({variables:{last:6,before:Z.startCursor,...k,category:c}}),document.body.scrollTop=0,document.documentElement.scrollTop=0};return console.log(S),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(y(),{children:(0,r.jsxs)("title",{children:[T," - zat98"]})}),I?(0,r.jsx)(o.Z,{}):null,(0,r.jsxs)(a.Z,{headerFooter:t,categories:l,children:[S&&(0,r.jsx)(f.Z,{category:T,loading:I,products:S}),(0,r.jsxs)("div",{className:"end_nav",children:[(0,r.jsxs)(b.Z,{variant:"dark",onClick:Q,disabled:!Z.hasPreviousPage&&!A,children:["Previous Page",I&&(0,r.jsx)(r.Fragment,{children:"loading"})]}),(0,r.jsxs)(b.Z,{variant:"dark",onClick:D,disabled:!Z.hasNextPage&&!A,children:["Next Page",I&&(0,r.jsx)(r.Fragment,{children:"loading"})]})]})]})]})}},85231:function(n,e,t){"use strict";var r=t(82729);function o(){let n=(0,r._)(["\nquery productPrice($category:[String]){\n  products(first: 1000,where:{categoryIn: $category}) {\n    nodes {\n         ... on SimpleProduct {\n        price(format: RAW)\n      }\n      productCategories {\n        nodes {\n          slug\n          name\n        }\n      }\n    }\n    \n  }\n}"]);return o=function(){return n},n}(0,t(93801).ZP)(o())}},function(n){n.O(0,[675,146,155,739,470,185,442,962,724,446,225,469,774,888,179],function(){return n(n.s=22688)}),_N_E=n.O()}]);