import{t as e}from"./graphlib-DAsJVdn_.js";import{B as t,Bt as n,Ct as r,E as i,G as a,St as o,Y as s,c,dn as l,j as u,m as d,v as f,w as p,wt as m,x as h,xt as g,z as _}from"./mermaid-59c9be08-l6frwTFl.js";import{t as v}from"./channel-B7nPL3A0.js";import{t as y}from"./index-bf99f535-BtiRgsRx.js";function b(e){return typeof e==`string`?new o([document.querySelectorAll(e)],[document.documentElement]):new o([m(e)],r)}function x(e,t){return!!e.children(t).length}function S(e){return w(e.v)+`:`+w(e.w)+`:`+w(e.name)}var C=/:/g;function w(e){return e?String(e).replace(C,`\\:`):``}function T(e,t){t&&e.attr(`style`,t)}function E(e,t,n){t&&e.attr(`class`,t).attr(`class`,n+` `+e.attr(`class`))}function D(e,t){var r=t.graph();if(n(r)){var i=r.transition;if(l(i))return i(e)}return e}function O(e,t){var n=e.append(`foreignObject`).attr(`width`,`100000`),r=n.append(`xhtml:div`);r.attr(`xmlns`,`http://www.w3.org/1999/xhtml`);var i=t.label;switch(typeof i){case`function`:r.insert(i);break;case`object`:r.insert(function(){return i});break;default:r.html(i)}T(r,t.labelStyle),r.style(`display`,`inline-block`),r.style(`white-space`,`nowrap`);var a=r.node().getBoundingClientRect();return n.attr(`width`,a.width).attr(`height`,a.height),n}var k={},A=function(e){let t=Object.keys(e);for(let n of t)k[n]=e[n]},j=async function(e,t,n,r,a,o){let s=r.select(`[id="${n}"]`),l=Object.keys(e);for(let n of l){let r=e[n],l=`default`;r.classes.length>0&&(l=r.classes.join(` `)),l+=` flowchart-label`;let p=h(r.styles),m=r.text===void 0?r.id:r.text,g;if(i.info(`vertex`,r,r.labelType),r.labelType===`markdown`)i.info(`vertex`,r,r.labelType);else if(d(f().flowchart.htmlLabels))g=O(s,{label:m}).node(),g.parentNode.removeChild(g);else{let e=a.createElementNS(`http://www.w3.org/2000/svg`,`text`);e.setAttribute(`style`,p.labelStyle.replace(`color:`,`fill:`));let t=m.split(c.lineBreakRegex);for(let n of t){let t=a.createElementNS(`http://www.w3.org/2000/svg`,`tspan`);t.setAttributeNS(`http://www.w3.org/XML/1998/namespace`,`xml:space`,`preserve`),t.setAttribute(`dy`,`1em`),t.setAttribute(`x`,`1`),t.textContent=n,e.appendChild(t)}g=e}let _=0,v=``;switch(r.type){case`round`:_=5,v=`rect`;break;case`square`:v=`rect`;break;case`diamond`:v=`question`;break;case`hexagon`:v=`hexagon`;break;case`odd`:v=`rect_left_inv_arrow`;break;case`lean_right`:v=`lean_right`;break;case`lean_left`:v=`lean_left`;break;case`trapezoid`:v=`trapezoid`;break;case`inv_trapezoid`:v=`inv_trapezoid`;break;case`odd_right`:v=`rect_left_inv_arrow`;break;case`circle`:v=`circle`;break;case`ellipse`:v=`ellipse`;break;case`stadium`:v=`stadium`;break;case`subroutine`:v=`subroutine`;break;case`cylinder`:v=`cylinder`;break;case`group`:v=`rect`;break;case`doublecircle`:v=`doublecircle`;break;default:v=`rect`}let y=await u(m,f());t.setNode(r.id,{labelStyle:p.labelStyle,shape:v,labelText:y,labelType:r.labelType,rx:_,ry:_,class:l,style:p.style,id:r.id,link:r.link,linkTarget:r.linkTarget,tooltip:o.db.getTooltip(r.id)||``,domId:o.db.lookUpDomId(r.id),haveCallback:r.haveCallback,width:r.type===`group`?500:void 0,dir:r.dir,type:r.type,props:r.props,padding:f().flowchart.padding}),i.info(`setNode`,{labelStyle:p.labelStyle,labelType:r.labelType,shape:v,labelText:y,rx:_,ry:_,class:l,style:p.style,id:r.id,domId:o.db.lookUpDomId(r.id),width:r.type===`group`?500:void 0,type:r.type,dir:r.dir,props:r.props,padding:f().flowchart.padding})}},M=async function(e,t,n){i.info(`abc78 edges = `,e);let r=0,a={},o,l;if(e.defaultStyle!==void 0){let t=h(e.defaultStyle);o=t.style,l=t.labelStyle}for(let n of e){r++;let d=`L-`+n.start+`-`+n.end;a[d]===void 0?(a[d]=0,i.info(`abc78 new entry`,d,a[d])):(a[d]++,i.info(`abc78 new entry`,d,a[d]));let m=d+`-`+a[d];i.info(`abc78 new link id to be used is`,d,m,a[d]);let g=`LS-`+n.start,_=`LE-`+n.end,v={style:``,labelStyle:``};switch(v.minlen=n.length||1,n.type===`arrow_open`?v.arrowhead=`none`:v.arrowhead=`normal`,v.arrowTypeStart=`arrow_open`,v.arrowTypeEnd=`arrow_open`,n.type){case`double_arrow_cross`:v.arrowTypeStart=`arrow_cross`;case`arrow_cross`:v.arrowTypeEnd=`arrow_cross`;break;case`double_arrow_point`:v.arrowTypeStart=`arrow_point`;case`arrow_point`:v.arrowTypeEnd=`arrow_point`;break;case`double_arrow_circle`:v.arrowTypeStart=`arrow_circle`;case`arrow_circle`:v.arrowTypeEnd=`arrow_circle`;break}let y=``,b=``;switch(n.stroke){case`normal`:y=`fill:none;`,o!==void 0&&(y=o),l!==void 0&&(b=l),v.thickness=`normal`,v.pattern=`solid`;break;case`dotted`:v.thickness=`normal`,v.pattern=`dotted`,v.style=`fill:none;stroke-width:2px;stroke-dasharray:3;`;break;case`thick`:v.thickness=`thick`,v.pattern=`solid`,v.style=`stroke-width: 3.5px;fill:none;`;break;case`invisible`:v.thickness=`invisible`,v.pattern=`solid`,v.style=`stroke-width: 0;fill:none;`;break}if(n.style!==void 0){let e=h(n.style);y=e.style,b=e.labelStyle}v.style=v.style+=y,v.labelStyle=v.labelStyle+=b,n.interpolate===void 0?e.defaultInterpolate===void 0?v.curve=p(k.curve,s):v.curve=p(e.defaultInterpolate,s):v.curve=p(n.interpolate,s),n.text===void 0?n.style!==void 0&&(v.arrowheadStyle=`fill: #333`):(v.arrowheadStyle=`fill: #333`,v.labelpos=`c`),v.labelType=n.labelType,v.label=await u(n.text.replace(c.lineBreakRegex,`
`),f()),n.style===void 0&&(v.style=v.style||`stroke: #333; stroke-width: 1.5px;fill:none;`),v.labelStyle=v.labelStyle.replace(`color:`,`fill:`),v.id=m,v.classes=`flowchart-link `+g+` `+_,t.setEdge(n.start,n.end,v,r)}},N={setConf:A,addVertices:j,addEdges:M,getClasses:function(e,t){return t.db.getClasses()},draw:async function(n,r,a,o){i.info(`Drawing flowchart`);let s=o.db.getDirection();s===void 0&&(s=`TD`);let{securityLevel:c,flowchart:l}=f(),u=l.nodeSpacing||50,d=l.rankSpacing||50,p;c===`sandbox`&&(p=g(`#i`+r));let m=g(c===`sandbox`?p.nodes()[0].contentDocument.body:`body`),h=c===`sandbox`?p.nodes()[0].contentDocument:document,v=new e({multigraph:!0,compound:!0}).setGraph({rankdir:s,nodesep:u,ranksep:d,marginx:0,marginy:0}).setDefaultEdgeLabel(function(){return{}}),x,S=o.db.getSubGraphs();i.info(`Subgraphs - `,S);for(let e=S.length-1;e>=0;e--)x=S[e],i.info(`Subgraph - `,x),o.db.addVertex(x.id,{text:x.title,type:x.labelType},`group`,void 0,x.classes,x.dir);let C=o.db.getVertices(),w=o.db.getEdges();i.info(`Edges`,w);let T=0;for(T=S.length-1;T>=0;T--){x=S[T],b(`cluster`).append(`text`);for(let e=0;e<x.nodes.length;e++)i.info(`Setting up subgraphs`,x.nodes[e],x.id),v.setParent(x.nodes[e],x.id)}await j(C,v,r,m,h,o),await M(w,v);let E=m.select(`[id="${r}"]`);if(await y(m.select(`#`+r+` g`),v,[`point`,`circle`,`cross`],`flowchart`,r),t.insertTitle(E,`flowchartTitleText`,l.titleTopMargin,o.db.getDiagramTitle()),_(v,E,l.diagramPadding,l.useMaxWidth),o.db.indexNodes(`subGraph`+T),!l.htmlLabels){let e=h.querySelectorAll(`[id="`+r+`"] .edgeLabel .label`);for(let t of e){let e=t.getBBox(),n=h.createElementNS(`http://www.w3.org/2000/svg`,`rect`);n.setAttribute(`rx`,0),n.setAttribute(`ry`,0),n.setAttribute(`width`,e.width),n.setAttribute(`height`,e.height),t.insertBefore(n,t.firstChild)}}Object.keys(C).forEach(function(e){let t=C[e];if(t.link){let n=g(`#`+r+` [id="`+e+`"]`);if(n){let e=h.createElementNS(`http://www.w3.org/2000/svg`,`a`);e.setAttributeNS(`http://www.w3.org/2000/svg`,`class`,t.classes.join(` `)),e.setAttributeNS(`http://www.w3.org/2000/svg`,`href`,t.link),e.setAttributeNS(`http://www.w3.org/2000/svg`,`rel`,`noopener`),c===`sandbox`?e.setAttributeNS(`http://www.w3.org/2000/svg`,`target`,`_top`):t.linkTarget&&e.setAttributeNS(`http://www.w3.org/2000/svg`,`target`,t.linkTarget);let r=n.insert(function(){return e},`:first-child`),i=n.select(`.label-container`);i&&r.append(function(){return i.node()});let a=n.select(`.label`);a&&r.append(function(){return a.node()})}}})}},P=(e,t)=>{let n=v;return a(n(e,`r`),n(e,`g`),n(e,`b`),t)},F=e=>`.label {
    font-family: ${e.fontFamily};
    color: ${e.nodeTextColor||e.textColor};
  }
  .cluster-label text {
    fill: ${e.titleColor};
  }
  .cluster-label span,p {
    color: ${e.titleColor};
  }

  .label text,span,p {
    fill: ${e.nodeTextColor||e.textColor};
    color: ${e.nodeTextColor||e.textColor};
  }

  .node rect,
  .node circle,
  .node ellipse,
  .node polygon,
  .node path {
    fill: ${e.mainBkg};
    stroke: ${e.nodeBorder};
    stroke-width: 1px;
  }
  .flowchart-label text {
    text-anchor: middle;
  }
  // .flowchart-label .text-outer-tspan {
  //   text-anchor: middle;
  // }
  // .flowchart-label .text-inner-tspan {
  //   text-anchor: start;
  // }

  .node .katex path {
    fill: #000;
    stroke: #000;
    stroke-width: 1px;
  }

  .node .label {
    text-align: center;
  }
  .node.clickable {
    cursor: pointer;
  }

  .arrowheadPath {
    fill: ${e.arrowheadColor};
  }

  .edgePath .path {
    stroke: ${e.lineColor};
    stroke-width: 2.0px;
  }

  .flowchart-link {
    stroke: ${e.lineColor};
    fill: none;
  }

  .edgeLabel {
    background-color: ${e.edgeLabelBackground};
    rect {
      opacity: 0.5;
      background-color: ${e.edgeLabelBackground};
      fill: ${e.edgeLabelBackground};
    }
    text-align: center;
  }

  /* For html labels only */
  .labelBkg {
    background-color: ${P(e.edgeLabelBackground,.5)};
    // background-color: 
  }

  .cluster rect {
    fill: ${e.clusterBkg};
    stroke: ${e.clusterBorder};
    stroke-width: 1px;
  }

  .cluster text {
    fill: ${e.titleColor};
  }

  .cluster span,p {
    color: ${e.titleColor};
  }
  /* .cluster div {
    color: ${e.titleColor};
  } */

  div.mermaidTooltip {
    position: absolute;
    text-align: center;
    max-width: 200px;
    padding: 2px;
    font-family: ${e.fontFamily};
    font-size: 12px;
    background: ${e.tertiaryColor};
    border: 1px solid ${e.border2};
    border-radius: 2px;
    pointer-events: none;
    z-index: 100;
  }

  .flowchartTitleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${e.textColor};
  }
`;export{T as a,x as c,E as i,b as l,F as n,D as o,O as r,S as s,N as t};