"use strict";(self.webpackChunkreact_material_berry_dashboard=self.webpackChunkreact_material_berry_dashboard||[]).push([[931],{4387:function(e,t,n){n(2791);t.Z=n.p+"static/media/social-google.9887eb8eb43729cb99f402cfa0de3c44.svg"},5878:function(e,t,n){var i=n(2791);t.Z=function(){var e=(0,i.useRef)(!0);return(0,i.useEffect)((function(){return function(){e.current=!1}}),[]),e}},8931:function(e,t,n){n.r(t),n.d(t,{default:function(){return M}});var i=n(6222),r=n(2791),a=n(1523),s=n(6931),o=n(4807),l=n(6574),c=n(9426),d=n(6087),u=n(1233),m=n(5477),p=n(8087),h=n(8489),x=n(7166),g=n(3032),Z=n(3430),j=n(3738),f=n(1899),b=n(8182),v=n(2078),w=n(2506),y=n(4872),k=n(93),C=n(5506),N=n(5068),S=n(8665),W=n(3065),I=n(8405),E=n(9366),R=n(6477),B=n(1517),z=n(1183),A=n(5878),_=n(1900),D=n(859),T=n(4387),O=n(8781),F=function(e){var t=0;return e.length>5&&t++,e.length>7&&t++,function(e){return new RegExp(/[0-9]/).test(e)}(e)&&t++,function(e){return new RegExp(/[!#@$%^&*)(+=._-]/).test(e)}(e)&&t++,function(e){return new RegExp(/[a-z]/).test(e)&&new RegExp(/[A-Z]/).test(e)}(e)&&t++,t},P=n(184),q=["className"],G=(0,s.Z)((function(e){return{root:{},redButton:(0,i.Z)({fontSize:"1rem",fontWeight:500,backgroundColor:e.palette.grey[50],border:"1px solid",borderColor:e.palette.grey[100],color:e.palette.grey[600],textTransform:"none","&:hover":{backgroundColor:e.palette.primary.light}},e.breakpoints.down("sm"),{fontSize:"0.875rem"}),signDivider:{flexGrow:1},signText:{cursor:"unset",margin:e.spacing(2),padding:"5px 56px",borderColor:e.palette.grey[100]+" !important",color:e.palette.grey[900]+"!important",fontWeight:500},margin:{marginTop:e.spacing(3),marginBottom:e.spacing(1)},forgot:{textDecoration:"none"},loginIcon:(0,i.Z)({marginRight:"16px"},e.breakpoints.down("sm"),{marginRight:"8px"}),title:{color:e.palette.grey[600]},login:{backgroundColor:e.palette.purple.main,"&:hover":{backgroundColor:e.palette.purple.dark}},loginput:{marginTop:e.spacing(1),marginBottom:e.spacing(1),"& > label":{top:"23px",left:0,color:e.palette.grey[500],'&[data-shrink="false"]':{top:"5px"}},"& > div > input":{padding:"30.5px 14px 11.5px !important"},"& legend":{display:"none"},"& fieldset":{top:0}},startAdornment:{color:e.palette.grey[500],marginTop:"18px",width:"auto"}}})),H=function(e){var t=e.className,n=(0,j.Z)(e,q),i=G(),s=(0,A.Z)(),o=(0,f.v9)((function(e){return e.customization})),l=r.useState(!1),d=(0,Z.Z)(l,2),u=d[0],H=d[1],U=r.useState(!0),V=(0,Z.Z)(U,2),M=V[0],J=V[1],L=r.useState(0),$=(0,Z.Z)(L,2),K=$[0],Q=$[1],X=r.useState(""),Y=(0,Z.Z)(X,2),ee=Y[0],te=Y[1],ne=function(){var e=(0,g.Z)((0,x.Z)().mark((function e(){return(0,x.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ie=function(){H(!u)},re=function(e){e.preventDefault()},ae=function(e){var t,n=F(e);Q(n),te((t=n)<2?{label:"Poor",color:O.Z.red500}:t<3?{label:"Weak",color:O.Z.amber500}:t<4?{label:"Normal",color:O.Z.deepOrange200}:t<5?{label:"Good",color:O.Z.A200}:t<6?{label:"Strong",color:O.Z.A700}:void 0)};return(0,r.useEffect)((function(){ae("123456")}),[]),(0,P.jsxs)(r.Fragment,{children:[(0,P.jsxs)(c.Z,{container:!0,direction:"column",justifyContent:"center",spacing:2,children:[(0,P.jsx)(c.Z,{item:!0,xs:12,children:(0,P.jsxs)(y.Z,{disableElevation:!0,fullWidth:!0,className:i.redButton,onClick:ne,size:"large",variant:"contained",children:[(0,P.jsx)("img",{src:T.Z,alt:"google",width:"20px",className:i.loginIcon})," Sign up with Google"]})}),(0,P.jsx)(c.Z,{item:!0,xs:12,children:(0,P.jsxs)(k.Z,{alignItems:"center",display:"flex",children:[(0,P.jsx)(p.Z,{className:i.signDivider,orientation:"horizontal"}),(0,P.jsx)(y.Z,{variant:"outlined",className:i.signText,sx:{borderRadius:o.borderRadius+"px"},disableRipple:!0,disabled:!0,children:"OR"}),(0,P.jsx)(p.Z,{className:i.signDivider,orientation:"horizontal"})]})}),(0,P.jsx)(c.Z,{item:!0,xs:12,container:!0,alignItems:"center",justifyContent:"center",children:(0,P.jsx)(k.Z,{mb:2,children:(0,P.jsx)(m.Z,{variant:"subtitle1",className:i.title,children:"Sign up with Email address"})})})]}),(0,P.jsx)(w.J9,{initialValues:{email:"adrian@mail.com",password:"123456",submit:null},validationSchema:v.Ry().shape({email:v.Z_().email("Must be a valid email").max(255).required("Email is required"),password:v.Z_().max(255).required("Password is required")}),onSubmit:function(){var e=(0,g.Z)((0,x.Z)().mark((function e(t,n){var i,r,a;return(0,x.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i=n.setErrors,r=n.setStatus,a=n.setSubmitting;try{s.current&&(r({success:!0}),a(!1))}catch(t){console.error(t),s.current&&(r({success:!1}),i({submit:t.message}),a(!1))}case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),children:function(e){var s=e.errors,o=e.handleBlur,l=e.handleChange,d=e.handleSubmit,p=e.isSubmitting,x=e.touched,g=e.values;return(0,P.jsxs)("form",(0,h.Z)((0,h.Z)({noValidate:!0,onSubmit:d,className:(0,b.Z)(i.root,t)},n),{},{children:[(0,P.jsxs)(c.Z,{container:!0,spacing:2,children:[(0,P.jsx)(c.Z,{item:!0,xs:12,sm:6,children:(0,P.jsx)(C.Z,{fullWidth:!0,label:"First Name",margin:"normal",name:"fname",type:"text",defaultValue:"Adrian",variant:"outlined",className:i.loginput})}),(0,P.jsx)(c.Z,{item:!0,xs:12,sm:6,children:(0,P.jsx)(C.Z,{fullWidth:!0,label:"Last Name",margin:"normal",name:"lname",type:"text",defaultValue:"Sudbury",variant:"outlined",className:i.loginput})})]}),(0,P.jsxs)(N.Z,{fullWidth:!0,error:Boolean(x.email&&s.email),className:i.loginput,variant:"outlined",children:[(0,P.jsx)(S.Z,{htmlFor:"outlined-adornment-email-register",children:"Email Address / Username"}),(0,P.jsx)(W.Z,{id:"outlined-adornment-email-register",type:"email",value:g.email,name:"email",onBlur:o,onChange:l,labelWidth:70,inputProps:{classes:{notchedOutline:i.notchedOutline}}}),x.email&&s.email&&(0,P.jsxs)(I.Z,{error:!0,id:"standard-weight-helper-text--register",children:[" ",s.email," "]})]}),(0,P.jsxs)(N.Z,{fullWidth:!0,error:Boolean(x.password&&s.password),className:i.loginput,variant:"outlined",children:[(0,P.jsx)(S.Z,{htmlFor:"outlined-adornment-password-register",children:"Password"}),(0,P.jsx)(W.Z,{id:"outlined-adornment-password-register",type:u?"text":"password",value:g.password,name:"password",onBlur:o,onChange:function(e){l(e),ae(e.target.value)},endAdornment:(0,P.jsx)(E.Z,{position:"end",children:(0,P.jsx)(R.Z,{"aria-label":"toggle password visibility",onClick:ie,onMouseDown:re,edge:"end",children:u?(0,P.jsx)(_.Z,{}):(0,P.jsx)(D.Z,{})})}),labelWidth:70,inputProps:{classes:{notchedOutline:i.notchedOutline}}}),x.password&&s.password&&(0,P.jsxs)(I.Z,{error:!0,id:"standard-weight-helper-text-password-register",children:[" ",s.password," "]})]}),0!==K&&(0,P.jsx)(N.Z,{fullWidth:!0,children:(0,P.jsx)(k.Z,{mb:2,children:(0,P.jsxs)(c.Z,{container:!0,spacing:2,alignItems:"center",children:[(0,P.jsx)(c.Z,{item:!0,children:(0,P.jsx)(k.Z,{width:85,height:8,borderRadius:7,backgroundColor:ee.color})}),(0,P.jsx)(c.Z,{item:!0,children:(0,P.jsx)(m.Z,{variant:"subtitle1",fontSize:"0.75rem",children:ee.label})})]})})}),(0,P.jsx)(c.Z,{container:!0,alignItems:"center",justifyContent:"space-between",children:(0,P.jsx)(c.Z,{item:!0,children:(0,P.jsx)(B.Z,{control:(0,P.jsx)(z.Z,{checked:M,onChange:function(e){return J(e.target.checked)},name:"checked",color:"primary"}),label:(0,P.jsx)(r.Fragment,{children:(0,P.jsxs)(m.Z,{variant:"subtitle1",children:["Agree with \xa0",(0,P.jsx)(m.Z,{variant:"subtitle1",component:a.rU,to:"#",children:"Terms & Condition."})]})})})})}),s.submit&&(0,P.jsx)(k.Z,{mt:3,children:(0,P.jsx)(I.Z,{error:!0,children:s.submit})}),(0,P.jsx)(k.Z,{mt:2,children:(0,P.jsx)(y.Z,{disableElevation:!0,disabled:p,fullWidth:!0,size:"large",type:"submit",variant:"contained",className:i.login,children:"Sign up"})})]}))}})]})},U=n(7430),V=(0,s.Z)((function(e){var t;return{root:{backgroundColor:e.palette.primary.light,height:"100%",minHeight:"100vh",width:"100%",maxWidth:"calc(100% + 16px)"},card:(t={margin:e.spacing(0)+" auto",maxWidth:"475px",overflow:"visible",display:"flex",position:"relative","& > *":{flexGrow:1,flexBasis:"50%"}},(0,i.Z)(t,e.breakpoints.down("lg"),{maxWidth:"400px"}),(0,i.Z)(t,e.breakpoints.down("sm"),{maxWidth:"80%"}),t),content:(0,i.Z)({padding:e.spacing(5)},e.breakpoints.down("lg"),{padding:e.spacing(3)}),title:{color:e.palette.grey[600],textDecoration:"none"}}})),M=function(){var e=V(),t=(0,o.Z)(),n=(0,l.Z)(t.breakpoints.down("sm"));return(0,P.jsx)(c.Z,{container:!0,justifyContent:n?"center":"space-between",alignItems:"flex-start",className:e.root,children:(0,P.jsx)(c.Z,{item:!0,xs:12,sx:{minHeight:"100vh",height:"100%"},children:(0,P.jsxs)(c.Z,{sx:{minHeight:"100vh",height:"100%",p:n?0:"0 80px"},container:!0,direction:"column",alignItems:n?"center":"flex-start",spacing:n?5:6,justifyContent:"space-between",children:[(0,P.jsx)(c.Z,{item:!0,xs:12,sx:{mt:"40px",width:"100%",textAlign:"center"},children:(0,P.jsx)(a.rU,{to:"#",children:(0,P.jsx)("img",{alt:"Auth method",src:U.Z,width:"100"})})}),(0,P.jsx)(c.Z,{item:!0,xs:12,container:!0,justifyContent:"center",alignItems:"center",children:(0,P.jsx)(d.Z,{className:e.card,children:(0,P.jsx)(u.Z,{className:e.content,children:(0,P.jsxs)(c.Z,{container:!0,direction:"column",spacing:2,justifyContent:"center",children:[(0,P.jsx)(c.Z,{item:!0,xs:12,children:(0,P.jsx)(c.Z,{container:!0,direction:n?"column-reverse":"row",alignItems:"center",justifyContent:"center",children:(0,P.jsx)(c.Z,{item:!0,children:(0,P.jsxs)(c.Z,{container:!0,direction:"column",alignItems:"center",spacing:1,children:[(0,P.jsx)(c.Z,{item:!0,container:!0,direction:"column",alignItems:"center",children:(0,P.jsx)(c.Z,{item:!0,children:(0,P.jsx)(m.Z,{color:t.palette.purple.main,gutterBottom:!0,variant:n?"h3":"h2",children:"Sign up"})})}),(0,P.jsx)(c.Z,{item:!0,children:(0,P.jsxs)(m.Z,{variant:"caption",fontSize:"16px",children:[" ","Enter your credentials to continue"]})})]})})})}),(0,P.jsx)(c.Z,{item:!0,xs:12,children:(0,P.jsx)(H,{})}),(0,P.jsx)(c.Z,{item:!0,xs:12,children:(0,P.jsx)(p.Z,{})}),(0,P.jsx)(c.Z,{item:!0,xs:12,children:(0,P.jsx)(c.Z,{item:!0,container:!0,direction:"column",alignItems:"center",xs:12,children:(0,P.jsx)(m.Z,{component:a.rU,to:"/pages/login/login3",variant:"subtitle1",className:e.title,children:"Having an account?"})})})]})})})}),(0,P.jsx)(c.Z,{sx:{mb:"40px"},item:!0,container:!0,justifyContent:n?"center":"space-between",direction:n?"column":"row",alignItems:"center",spacing:n?2:0})]})})})}}}]);
//# sourceMappingURL=931.039d30d2.chunk.js.map