(this["webpackJsonpberry-material-react-free"]=this["webpackJsonpberry-material-react-free"]||[]).push([[10],{332:function(e,t,n){"use strict";var a=n(0);t.a=function(){var e=Object(a.useRef)(!0);return Object(a.useEffect)((function(){return function(){e.current=!1}}),[]),e}},333:function(e,t,n){"use strict";t.a=n.p+"static/media/social-google.9887eb8e.svg"},542:function(e,t,n){"use strict";n.r(t);var a=n(3),i=n(0),r=n.n(i),c=n(48),s=n(226),o=n(24),l=n(274),d=n(297),j=n(221),u=n(222),m=n(168),b=n(224),p=n(13),h=n(121),x=n.n(h),g=n(141),O=n(12),f=n(143),v=n(31),w=n(8),y=n(355),k=n(354),C=n(319),N=n(275),S=n(285),W=n(308),I=n(293),E=n(298),R=n(316),B=n(304),z=n(229),A=n(309),D=n(541),T=n(332),F=n(352),P=n.n(F),q=n(353),G=n.n(q),H=n(333),V=n(18),J=n.n(V),M=function(e){var t=0;return e.length>5&&t++,e.length>7&&t++,function(e){return new RegExp(/[0-9]/).test(e)}(e)&&t++,function(e){return new RegExp(/[!#@$%^&*)(+=._-]/).test(e)}(e)&&t++,function(e){return new RegExp(/[a-z]/).test(e)&&new RegExp(/[A-Z]/).test(e)}(e)&&t++,t},L=n(1),U=["className"],Z=Object(s.a)((function(e){return{root:{},redButton:Object(a.a)({fontSize:"1rem",fontWeight:500,backgroundColor:e.palette.grey[50],border:"1px solid",borderColor:e.palette.grey[100],color:e.palette.grey[600],textTransform:"none","&:hover":{backgroundColor:e.palette.primary.light}},e.breakpoints.down("sm"),{fontSize:"0.875rem"}),signDivider:{flexGrow:1},signText:{cursor:"unset",margin:e.spacing(2),padding:"5px 56px",borderColor:e.palette.grey[100]+" !important",color:e.palette.grey[900]+"!important",fontWeight:500},margin:{marginTop:e.spacing(3),marginBottom:e.spacing(1)},forgot:{textDecoration:"none"},loginIcon:Object(a.a)({marginRight:"16px"},e.breakpoints.down("sm"),{marginRight:"8px"}),title:{color:e.palette.grey[600]},login:{backgroundColor:e.palette.purple.main,"&:hover":{backgroundColor:e.palette.purple.dark}},loginput:{marginTop:e.spacing(1),marginBottom:e.spacing(1),"& > label":{top:"23px",left:0,color:e.palette.grey[500],'&[data-shrink="false"]':{top:"5px"}},"& > div > input":{padding:"30.5px 14px 11.5px !important"},"& legend":{display:"none"},"& fieldset":{top:0}},startAdornment:{color:e.palette.grey[500],marginTop:"18px",width:"auto"}}})),$=function(e){var t=e.className,n=Object(f.a)(e,U),a=Z(),s=Object(T.a)(),o=Object(v.c)((function(e){return e.customization})),l=r.a.useState(!1),j=Object(O.a)(l,2),u=j[0],h=j[1],F=r.a.useState(!0),q=Object(O.a)(F,2),V=q[0],$=q[1],_=r.a.useState(0),K=Object(O.a)(_,2),Q=K[0],X=K[1],Y=r.a.useState(""),ee=Object(O.a)(Y,2),te=ee[0],ne=ee[1],ae=function(){var e=Object(g.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ie=function(){h(!u)},re=function(e){e.preventDefault()},ce=function(e){var t,n=M(e);X(n),ne((t=n)<2?{label:"Poor",color:J.a.red500}:t<3?{label:"Weak",color:J.a.amber500}:t<4?{label:"Normal",color:J.a.deepOrange200}:t<5?{label:"Good",color:J.a.A200}:t<6?{label:"Strong",color:J.a.A700}:void 0)};return Object(i.useEffect)((function(){ce("123456")}),[]),Object(L.jsxs)(r.a.Fragment,{children:[Object(L.jsxs)(d.a,{container:!0,direction:"column",justifyContent:"center",spacing:2,children:[Object(L.jsx)(d.a,{item:!0,xs:12,children:Object(L.jsxs)(C.a,{disableElevation:!0,fullWidth:!0,className:a.redButton,onClick:ae,size:"large",variant:"contained",children:[Object(L.jsx)("img",{src:H.a,alt:"google",width:"20px",className:a.loginIcon})," Sign up with Google"]})}),Object(L.jsx)(d.a,{item:!0,xs:12,children:Object(L.jsxs)(N.a,{alignItems:"center",display:"flex",children:[Object(L.jsx)(b.a,{className:a.signDivider,orientation:"horizontal"}),Object(L.jsx)(C.a,{variant:"outlined",className:a.signText,sx:{borderRadius:o.borderRadius+"px"},disableRipple:!0,disabled:!0,children:"OR"}),Object(L.jsx)(b.a,{className:a.signDivider,orientation:"horizontal"})]})}),Object(L.jsx)(d.a,{item:!0,xs:12,container:!0,alignItems:"center",justifyContent:"center",children:Object(L.jsx)(N.a,{mb:2,children:Object(L.jsx)(m.a,{variant:"subtitle1",className:a.title,children:"Sign up with Email address"})})})]}),Object(L.jsx)(k.a,{initialValues:{email:"adrian@mail.com",password:"123456",submit:null},validationSchema:y.a().shape({email:y.b().email("Must be a valid email").max(255).required("Email is required"),password:y.b().max(255).required("Password is required")}),onSubmit:function(){var e=Object(g.a)(x.a.mark((function e(t,n){var a,i,r;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=n.setErrors,i=n.setStatus,r=n.setSubmitting;try{s.current&&(i({success:!0}),r(!1))}catch(t){console.error(t),s.current&&(i({success:!1}),a({submit:t.message}),r(!1))}case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),children:function(e){var i=e.errors,s=e.handleBlur,o=e.handleChange,l=e.handleSubmit,j=e.isSubmitting,b=e.touched,h=e.values;return Object(L.jsxs)("form",Object(p.a)(Object(p.a)({noValidate:!0,onSubmit:l,className:Object(w.a)(a.root,t)},n),{},{children:[Object(L.jsxs)(d.a,{container:!0,spacing:2,children:[Object(L.jsx)(d.a,{item:!0,xs:12,sm:6,children:Object(L.jsx)(S.a,{fullWidth:!0,label:"First Name",margin:"normal",name:"fname",type:"text",defaultValue:"Adrian",variant:"outlined",className:a.loginput})}),Object(L.jsx)(d.a,{item:!0,xs:12,sm:6,children:Object(L.jsx)(S.a,{fullWidth:!0,label:"Last Name",margin:"normal",name:"lname",type:"text",defaultValue:"Sudbury",variant:"outlined",className:a.loginput})})]}),Object(L.jsxs)(W.a,{fullWidth:!0,error:Boolean(b.email&&i.email),className:a.loginput,variant:"outlined",children:[Object(L.jsx)(I.a,{htmlFor:"outlined-adornment-email-register",children:"Email Address / Username"}),Object(L.jsx)(E.a,{id:"outlined-adornment-email-register",type:"email",value:h.email,name:"email",onBlur:s,onChange:o,labelWidth:70,inputProps:{classes:{notchedOutline:a.notchedOutline}}}),b.email&&i.email&&Object(L.jsxs)(R.a,{error:!0,id:"standard-weight-helper-text--register",children:[" ",i.email," "]})]}),Object(L.jsxs)(W.a,{fullWidth:!0,error:Boolean(b.password&&i.password),className:a.loginput,variant:"outlined",children:[Object(L.jsx)(I.a,{htmlFor:"outlined-adornment-password-register",children:"Password"}),Object(L.jsx)(E.a,{id:"outlined-adornment-password-register",type:u?"text":"password",value:h.password,name:"password",onBlur:s,onChange:function(e){o(e),ce(e.target.value)},endAdornment:Object(L.jsx)(B.a,{position:"end",children:Object(L.jsx)(z.a,{"aria-label":"toggle password visibility",onClick:ie,onMouseDown:re,edge:"end",children:u?Object(L.jsx)(P.a,{}):Object(L.jsx)(G.a,{})})}),labelWidth:70,inputProps:{classes:{notchedOutline:a.notchedOutline}}}),b.password&&i.password&&Object(L.jsxs)(R.a,{error:!0,id:"standard-weight-helper-text-password-register",children:[" ",i.password," "]})]}),0!==Q&&Object(L.jsx)(W.a,{fullWidth:!0,children:Object(L.jsx)(N.a,{mb:2,children:Object(L.jsxs)(d.a,{container:!0,spacing:2,alignItems:"center",children:[Object(L.jsx)(d.a,{item:!0,children:Object(L.jsx)(N.a,{width:85,height:8,borderRadius:7,backgroundColor:te.color})}),Object(L.jsx)(d.a,{item:!0,children:Object(L.jsx)(m.a,{variant:"subtitle1",fontSize:"0.75rem",children:te.label})})]})})}),Object(L.jsx)(d.a,{container:!0,alignItems:"center",justifyContent:"space-between",children:Object(L.jsx)(d.a,{item:!0,children:Object(L.jsx)(A.a,{control:Object(L.jsx)(D.a,{checked:V,onChange:function(e){return $(e.target.checked)},name:"checked",color:"primary"}),label:Object(L.jsx)(r.a.Fragment,{children:Object(L.jsxs)(m.a,{variant:"subtitle1",children:["Agree with \xa0",Object(L.jsx)(m.a,{variant:"subtitle1",component:c.b,to:"#",children:"Terms & Condition."})]})})})})}),i.submit&&Object(L.jsx)(N.a,{mt:3,children:Object(L.jsx)(R.a,{error:!0,children:i.submit})}),Object(L.jsx)(N.a,{mt:2,children:Object(L.jsx)(C.a,{disableElevation:!0,disabled:j,fullWidth:!0,size:"large",type:"submit",variant:"contained",className:a.login,children:"Sign up"})})]}))}})]})},_=n(140),K=Object(s.a)((function(e){var t;return{root:{backgroundColor:e.palette.primary.light,height:"100%",minHeight:"100vh",width:"100%",maxWidth:"calc(100% + 16px)"},card:(t={margin:e.spacing(0)+" auto",maxWidth:"475px",overflow:"visible",display:"flex",position:"relative","& > *":{flexGrow:1,flexBasis:"50%"}},Object(a.a)(t,e.breakpoints.down("lg"),{maxWidth:"400px"}),Object(a.a)(t,e.breakpoints.down("sm"),{maxWidth:"80%"}),t),content:Object(a.a)({padding:e.spacing(5)},e.breakpoints.down("lg"),{padding:e.spacing(3)}),title:{color:e.palette.grey[600],textDecoration:"none"}}}));t.default=function(){var e=K(),t=Object(o.a)(),n=Object(l.a)(t.breakpoints.down("sm"));return Object(L.jsx)(d.a,{container:!0,justifyContent:n?"center":"space-between",alignItems:"flex-start",className:e.root,children:Object(L.jsx)(d.a,{item:!0,xs:12,sx:{minHeight:"100vh",height:"100%"},children:Object(L.jsxs)(d.a,{sx:{minHeight:"100vh",height:"100%",p:n?0:"0 80px"},container:!0,direction:"column",alignItems:n?"center":"flex-start",spacing:n?5:6,justifyContent:"space-between",children:[Object(L.jsx)(d.a,{item:!0,xs:12,sx:{mt:"40px",width:"100%",textAlign:"center"},children:Object(L.jsx)(c.b,{to:"#",children:Object(L.jsx)("img",{alt:"Auth method",src:_.a,width:"100"})})}),Object(L.jsx)(d.a,{item:!0,xs:12,container:!0,justifyContent:"center",alignItems:"center",children:Object(L.jsx)(j.a,{className:e.card,children:Object(L.jsx)(u.a,{className:e.content,children:Object(L.jsxs)(d.a,{container:!0,direction:"column",spacing:2,justifyContent:"center",children:[Object(L.jsx)(d.a,{item:!0,xs:12,children:Object(L.jsx)(d.a,{container:!0,direction:n?"column-reverse":"row",alignItems:"center",justifyContent:"center",children:Object(L.jsx)(d.a,{item:!0,children:Object(L.jsxs)(d.a,{container:!0,direction:"column",alignItems:"center",spacing:1,children:[Object(L.jsx)(d.a,{item:!0,container:!0,direction:"column",alignItems:"center",children:Object(L.jsx)(d.a,{item:!0,children:Object(L.jsx)(m.a,{color:t.palette.purple.main,gutterBottom:!0,variant:n?"h3":"h2",children:"Sign up"})})}),Object(L.jsx)(d.a,{item:!0,children:Object(L.jsxs)(m.a,{variant:"caption",fontSize:"16px",children:[" ","Enter your credentials to continue"]})})]})})})}),Object(L.jsx)(d.a,{item:!0,xs:12,children:Object(L.jsx)($,{})}),Object(L.jsx)(d.a,{item:!0,xs:12,children:Object(L.jsx)(b.a,{})}),Object(L.jsx)(d.a,{item:!0,xs:12,children:Object(L.jsx)(d.a,{item:!0,container:!0,direction:"column",alignItems:"center",xs:12,children:Object(L.jsx)(m.a,{component:c.b,to:"/pages/login/login3",variant:"subtitle1",className:e.title,children:"Having an account?"})})})]})})})}),Object(L.jsx)(d.a,{sx:{mb:"40px"},item:!0,container:!0,justifyContent:n?"center":"space-between",direction:n?"column":"row",alignItems:"center",spacing:n?2:0})]})})})}}}]);
//# sourceMappingURL=10.674860a5.chunk.js.map