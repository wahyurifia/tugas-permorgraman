import{P as x,t as j,m as u,c as p,R as f,r as h,j as e}from"./index-6f0d7676.js";import{R as y,C as o}from"./Col-77f3c9a7.js";import{B as n}from"./Button-0787857e.js";import{C as m}from"./Card-4ef03b10.js";var b=["className","cssModule","tag"];function d(){return d=Object.assign?Object.assign.bind():function(a){for(var l=1;l<arguments.length;l++){var r=arguments[l];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(a[s]=r[s])}return a},d.apply(this,arguments)}function N(a,l){if(a==null)return{};var r=v(a,l),s,t;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(a);for(t=0;t<i.length;t++)s=i[t],!(l.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(a,s)&&(r[s]=a[s])}return r}function v(a,l){if(a==null)return{};var r={},s=Object.keys(a),t,i;for(i=0;i<s.length;i++)t=s[i],!(l.indexOf(t)>=0)&&(r[t]=a[t]);return r}var O={className:x.string,cssModule:x.object,tag:j};function c(a){var l=a.className,r=a.cssModule,s=a.tag,t=s===void 0?"p":s,i=N(a,b),g=u(p(l,"card-text"),r);return f.createElement(t,d({},i,{className:g}))}c.propTypes=O;const S=[{name:"Wahyu Rifia Rizki",email:"wahyu@gmail.com",alamat:"Jln. Poris Indah, Tangerang, Banten",jabatan:"Manager"}],k=[{jabatan:"Manager"}],I=[{divisi:"Umum"}],R=()=>{const a=JSON.parse(localStorage.getItem("users")||"[]").length,l=localStorage.getItem("users"),r=localStorage.getItem("jabatans"),s=localStorage.getItem("divisis");return h.useEffect(()=>{l||localStorage.setItem("users",JSON.stringify(S)),r||localStorage.setItem("jabatans",JSON.stringify(k)),s||localStorage.setItem("divisis",JSON.stringify(I))},[]),e.jsxs(y,{children:[e.jsx("h5",{className:"mb-3 mt-3",children:"Dashboard"}),e.jsx(o,{md:"6",lg:"3",children:e.jsxs(m,{body:!0,color:"dark",inverse:!0,className:"",children:[e.jsx("div",{className:"",children:e.jsx(n,{color:"primary block px-5 py-3",size:"lg",children:e.jsx("i",{className:"bi bi-people text-lg"})})}),e.jsxs("div",{className:"d-flex flex-column",children:[e.jsx(c,{className:"my-3",children:"Data Pegawai"}),e.jsx(n,{color:"info",className:"my-3",children:a})]})]})}),e.jsx(o,{md:"6",lg:"3",children:e.jsxs(m,{body:!0,color:"dark",inverse:!0,className:"",children:[e.jsx("div",{className:"",children:e.jsx(n,{color:"primary block px-5 py-3",size:"lg",children:e.jsx("i",{className:"bi bi-people text-lg"})})}),e.jsxs("div",{className:"d-flex flex-column",children:[e.jsx(c,{className:"my-3",children:"Absensi Hari ini"}),e.jsx(n,{color:"info",className:"my-3",children:"10"})]})]})}),e.jsx(o,{md:"6",lg:"3",children:e.jsxs(m,{body:!0,color:"dark",inverse:!0,className:"",children:[e.jsx("div",{className:"",children:e.jsx(n,{color:"primary block px-5 py-3",size:"lg",children:e.jsx("i",{className:"bi bi-people text-lg"})})}),e.jsxs("div",{className:"d-flex flex-column",children:[e.jsx(c,{className:"my-3",children:"Izin menunggu Konfirmasi"}),e.jsx(n,{color:"info",className:"my-3",children:"5"})]})]})}),e.jsx(o,{md:"6",lg:"3",children:e.jsxs(m,{body:!0,color:"dark",inverse:!0,className:"",children:[e.jsx("div",{className:"",children:e.jsx(n,{color:"primary block px-5 py-3",size:"lg",children:e.jsx("i",{className:"bi bi-people text-lg"})})}),e.jsxs("div",{className:"d-flex flex-column",children:[e.jsx(c,{className:"my-3",children:"Lembur menunggu Konfirmasi"}),e.jsx(n,{color:"info",className:"my-3",children:"6"})]})]})})]})};export{R as default};