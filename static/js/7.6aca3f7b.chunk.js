(this["webpackJsonpberry-material-react-free"]=this["webpackJsonpberry-material-react-free"]||[]).push([[7],{324:function(e,t,a){"use strict";var r=a(0),o=r.createContext();t.a=o},328:function(e,t,a){"use strict";var r=a(0),o=r.createContext();t.a=o},521:function(e,t,a){"use strict";var r=a(2),o=a(4),n=a(0),i=(a(7),a(8)),c=a(209),s=a(10),l=a(6),d=a(162),b=a(210);function p(e){return Object(d.a)("MuiTableContainer",e)}Object(b.a)("MuiTableContainer",["root"]);var u=a(1),j=Object(l.a)("div",{},{name:"MuiTableContainer",slot:"Root",overridesResolver:function(e,t){return t.root}})({width:"100%",overflowX:"auto"}),O=n.forwardRef((function(e,t){var a=Object(s.a)({props:e,name:"MuiTableContainer"}),n=a.className,l=a.component,d=void 0===l?"div":l,b=Object(o.a)(a,["className","component"]),O=Object(r.a)({},a,{component:d}),g=function(e){var t=e.classes;return Object(c.a)({root:["root"]},p,t)}(O);return Object(u.jsx)(j,Object(r.a)({ref:t,as:d,className:Object(i.a)(g.root,n),styleProps:O},b))}));t.a=O},522:function(e,t,a){"use strict";var r=a(4),o=a(2),n=a(0),i=(a(7),a(8)),c=a(209),s=a(328),l=a(10),d=a(6),b=a(162),p=a(210);function u(e){return Object(b.a)("MuiTable",e)}Object(p.a)("MuiTable",["root","stickyHeader"]);var j=a(1),O=Object(d.a)("table",{},{name:"MuiTable",slot:"Root",overridesResolver:function(e,t){var a=e.styleProps;return Object(o.a)({},t.root,a.stickyHeader&&t.stickyHeader)}})((function(e){var t=e.theme,a=e.styleProps;return Object(o.a)({display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":Object(o.a)({},t.typography.body2,{padding:t.spacing(2),color:t.palette.text.secondary,textAlign:"left",captionSide:"bottom"})},a.stickyHeader&&{borderCollapse:"separate"})})),g="table",v=n.forwardRef((function(e,t){var a=Object(l.a)({props:e,name:"MuiTable"}),d=a.className,b=a.component,p=void 0===b?g:b,v=a.padding,h=void 0===v?"normal":v,m=a.size,f=void 0===m?"medium":m,y=a.stickyHeader,x=void 0!==y&&y,k=Object(r.a)(a,["className","component","padding","size","stickyHeader"]),T=Object(o.a)({},a,{component:p,padding:h,size:f,stickyHeader:x}),M=function(e){var t=e.classes,a={root:["root",e.stickyHeader&&"stickyHeader"]};return Object(c.a)(a,u,t)}(T),R=n.useMemo((function(){return{padding:h,size:f,stickyHeader:x}}),[h,f,x]);return Object(j.jsx)(s.a.Provider,{value:R,children:Object(j.jsx)(O,Object(o.a)({as:p,role:p===g?null:"table",ref:t,className:Object(i.a)(M.root,d),styleProps:T},k))})}));t.a=v},523:function(e,t,a){"use strict";var r=a(2),o=a(4),n=a(0),i=(a(7),a(8)),c=a(209),s=a(324),l=a(10),d=a(6),b=a(162),p=a(210);function u(e){return Object(b.a)("MuiTableHead",e)}Object(p.a)("MuiTableHead",["root"]);var j=a(1),O=Object(d.a)("thead",{},{name:"MuiTableHead",slot:"Root",overridesResolver:function(e,t){return t.root}})({display:"table-header-group"}),g={variant:"head"},v="thead",h=n.forwardRef((function(e,t){var a=Object(l.a)({props:e,name:"MuiTableHead"}),n=a.className,d=a.component,b=void 0===d?v:d,p=Object(o.a)(a,["className","component"]),h=Object(r.a)({},a,{component:b}),m=function(e){var t=e.classes;return Object(c.a)({root:["root"]},u,t)}(h);return Object(j.jsx)(s.a.Provider,{value:g,children:Object(j.jsx)(O,Object(r.a)({as:b,className:Object(i.a)(m.root,n),ref:t,role:b===v?null:"rowgroup",styleProps:h},p))})}));t.a=h},524:function(e,t,a){"use strict";var r=a(3),o=a(4),n=a(2),i=a(0),c=(a(7),a(8)),s=a(209),l=a(324),d=a(17),b=a(10),p=a(6),u=a(162),j=a(210);function O(e){return Object(u.a)("MuiTableRow",e)}var g=Object(j.a)("MuiTableRow",["root","selected","hover","head","footer"]),v=a(1),h=Object(p.a)("tr",{},{name:"MuiTableRow",slot:"Root",overridesResolver:function(e,t){var a=e.styleProps;return Object(n.a)({},t.root,a.head&&t.head,a.footer&&t.footer)}})((function(e){var t,a=e.theme;return t={color:"inherit",display:"table-row",verticalAlign:"middle",outline:0},Object(r.a)(t,"&.".concat(g.hover,":hover"),{backgroundColor:a.palette.action.hover}),Object(r.a)(t,"&.".concat(g.selected),{backgroundColor:Object(d.a)(a.palette.primary.main,a.palette.action.selectedOpacity),"&:hover":{backgroundColor:Object(d.a)(a.palette.primary.main,a.palette.action.selectedOpacity+a.palette.action.hoverOpacity)}}),t})),m=i.forwardRef((function(e,t){var a=Object(b.a)({props:e,name:"MuiTableRow"}),r=a.className,d=a.component,p=void 0===d?"tr":d,u=a.hover,j=void 0!==u&&u,g=a.selected,m=void 0!==g&&g,f=Object(o.a)(a,["className","component","hover","selected"]),y=i.useContext(l.a),x=Object(n.a)({},a,{component:p,hover:j,selected:m,head:y&&"head"===y.variant,footer:y&&"footer"===y.variant}),k=function(e){var t=e.classes,a={root:["root",e.selected&&"selected",e.hover&&"hover",e.head&&"head",e.footer&&"footer"]};return Object(s.a)(a,O,t)}(x);return Object(v.jsx)(h,Object(n.a)({as:p,ref:t,className:Object(c.a)(k.root,r),role:"tr"===p?null:"row",styleProps:x},f))}));t.a=m},525:function(e,t,a){"use strict";var r=a(3),o=a(4),n=a(2),i=a(0),c=(a(7),a(8)),s=a(209),l=a(9),d=a(17),b=a(328),p=a(324),u=a(10),j=a(6),O=a(162),g=a(210);function v(e){return Object(O.a)("MuiTableCell",e)}var h=Object(g.a)("MuiTableCell",["root","head","body","footer","sizeSmall","sizeMedium","paddingCheckbox","paddingNone","alignLeft","alignCenter","alignRight","alignJustify","stickyHeader"]),m=a(1),f=Object(j.a)("td",{},{name:"MuiTableCell",slot:"Root",overridesResolver:function(e,t){var a=e.styleProps;return Object(n.a)({},t.root,t[a.variant],t["size".concat(Object(l.a)(a.size))],"normal"!==a.padding&&t["padding".concat(Object(l.a)(a.padding))],"inherit"!==a.align&&t["align".concat(Object(l.a)(a.align))],a.stickyHeader&&t.stickyHeader)}})((function(e){var t=e.theme,a=e.styleProps;return Object(n.a)({},t.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:"1px solid\n    ".concat("light"===t.palette.mode?Object(d.i)(Object(d.a)(t.palette.divider,1),.88):Object(d.b)(Object(d.a)(t.palette.divider,1),.68)),textAlign:"left",padding:16},"head"===a.variant&&{color:t.palette.text.primary,lineHeight:t.typography.pxToRem(24),fontWeight:t.typography.fontWeightMedium},"body"===a.variant&&{color:t.palette.text.primary},"footer"===a.variant&&{color:t.palette.text.secondary,lineHeight:t.typography.pxToRem(21),fontSize:t.typography.pxToRem(12)},"small"===a.size&&Object(r.a)({padding:"6px 16px"},"&.".concat(h.paddingCheckbox),{width:24,padding:"0 12px 0 16px","& > *":{padding:0}}),"checkbox"===a.padding&&{width:48,padding:"0 0 0 4px"},"none"===a.padding&&{padding:0},"left"===a.align&&{textAlign:"left"},"center"===a.align&&{textAlign:"center"},"right"===a.align&&{textAlign:"right",flexDirection:"row-reverse"},"justify"===a.align&&{textAlign:"justify"},a.stickyHeader&&{position:"sticky",top:0,left:0,zIndex:2,backgroundColor:t.palette.background.default})})),y=i.forwardRef((function(e,t){var a,r=Object(u.a)({props:e,name:"MuiTableCell"}),d=r.align,j=void 0===d?"inherit":d,O=r.className,g=r.component,h=r.padding,y=r.scope,x=r.size,k=r.sortDirection,T=r.variant,M=Object(o.a)(r,["align","className","component","padding","scope","size","sortDirection","variant"]),R=i.useContext(b.a),w=i.useContext(p.a),C=w&&"head"===w.variant;a=g||(C?"th":"td");var H=y;!H&&C&&(H="col");var z=T||w&&w.variant,N=Object(n.a)({},r,{align:j,component:a,padding:h||(R&&R.padding?R.padding:"normal"),size:x||(R&&R.size?R.size:"medium"),sortDirection:k,stickyHeader:"head"===z&&R&&R.stickyHeader,variant:z}),P=function(e){var t=e.classes,a=e.variant,r=e.align,o=e.padding,n=e.size,i={root:["root",a,e.stickyHeader&&"stickyHeader","inherit"!==r&&"align".concat(Object(l.a)(r)),"normal"!==o&&"padding".concat(Object(l.a)(o)),"size".concat(Object(l.a)(n))]};return Object(s.a)(i,v,t)}(N),A=null;return k&&(A="asc"===k?"ascending":"descending"),Object(m.jsx)(f,Object(n.a)({as:a,ref:t,className:Object(c.a)(P.root,O),"aria-sort":A,scope:H,styleProps:N},M))}));t.a=y},526:function(e,t,a){"use strict";var r=a(2),o=a(4),n=a(0),i=(a(7),a(8)),c=a(209),s=a(324),l=a(10),d=a(6),b=a(162),p=a(210);function u(e){return Object(b.a)("MuiTableBody",e)}Object(p.a)("MuiTableBody",["root"]);var j=a(1),O=Object(d.a)("tbody",{},{name:"MuiTableBody",slot:"Root",overridesResolver:function(e,t){return t.root}})({display:"table-row-group"}),g={variant:"body"},v="tbody",h=n.forwardRef((function(e,t){var a=Object(l.a)({props:e,name:"MuiTableBody"}),n=a.className,d=a.component,b=void 0===d?v:d,p=Object(o.a)(a,["className","component"]),h=Object(r.a)({},a,{component:b}),m=function(e){var t=e.classes;return Object(c.a)({root:["root"]},u,t)}(h);return Object(j.jsx)(s.a.Provider,{value:g,children:Object(j.jsx)(O,Object(r.a)({className:Object(i.a)(m.root,n),as:b,ref:t,role:b===v?null:"rowgroup",styleProps:h},p))})}));t.a=h},531:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return y}));var r=a(0),o=a.n(r),n=a(226),i=a(297),c=a(221),s=a(169),l=a(224),d=a(522),b=a(526),p=a(525),u=a(521),j=a(523),O=a(524),g=a(51),v=a(1),h=Object(n.a)({table:{minWidth:650}});function m(e,t,a,r,o){return{name:e,calories:t,fat:a,carbs:r,protein:o}}var f=[m("Frozen yoghurt",159,6,24,4),m("Ice cream sandwich",237,9,37,4.3),m("Eclair",262,16,24,6),m("Cupcake",305,3.7,67,4.3),m("Gingerbread",356,16,49,3.9)];function y(){var e=h();return Object(v.jsx)(o.a.Fragment,{children:Object(v.jsx)(i.a,{container:!0,spacing:g.b,children:Object(v.jsx)(i.a,{item:!0,xs:12,children:Object(v.jsxs)(c.a,{children:[Object(v.jsx)(s.a,{title:"Dense Table"}),Object(v.jsx)(l.a,{}),Object(v.jsx)(u.a,{children:Object(v.jsxs)(d.a,{className:e.table,size:"small","aria-label":"a dense table",children:[Object(v.jsx)(j.a,{children:Object(v.jsxs)(O.a,{children:[Object(v.jsx)(p.a,{children:"Dessert (100g serving)"}),Object(v.jsx)(p.a,{align:"right",children:"Calories"}),Object(v.jsx)(p.a,{align:"right",children:"Fat\xa0(g)"}),Object(v.jsx)(p.a,{align:"right",children:"Carbs\xa0(g)"}),Object(v.jsx)(p.a,{align:"right",children:"Protein\xa0(g)"})]})}),Object(v.jsx)(b.a,{children:f.map((function(e){return Object(v.jsxs)(O.a,{children:[Object(v.jsx)(p.a,{component:"th",scope:"row",children:e.name}),Object(v.jsx)(p.a,{align:"right",children:e.calories}),Object(v.jsx)(p.a,{align:"right",children:e.fat}),Object(v.jsx)(p.a,{align:"right",children:e.carbs}),Object(v.jsx)(p.a,{align:"right",children:e.protein})]},e.name)}))})]})})]})})})})}}}]);
//# sourceMappingURL=7.6aca3f7b.chunk.js.map