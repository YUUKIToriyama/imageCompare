// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "input[type=range]{-webkit-appearance:none;-webkit-tap-highlight-color:rgba(255,255,255,0);width:110px;height:10px;margin:0;border:none;padding:1px 2px;border-radius:30px;background:#F1F0EE;outline:0}input[type=range]::-ms-track{border:inherit;color:transparent;background:0 0}input[type=range]::-ms-fill-lower,input[type=range]::-ms-fill-upper{background:0 0}input[type=range]::-ms-tooltip{display:none}input[type=range]::-ms-thumb{width:15px;height:18px;border-radius:12px;border:0;background-image:linear-gradient(to bottom,#1253A4 0,#1253A4 100%)}.leaflet-control-layers-label{margin:0 0 8px 1px}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}