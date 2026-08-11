/* AjouCU Notice UI v2026.08 - compatibility helpers */
(function(){
  'use strict';
  document.addEventListener('DOMContentLoaded', function(){
    // Make wide legacy tables horizontally scrollable on phones without rewriting markup.
    document.querySelectorAll('table').forEach(function(table){
      if(table.parentElement && table.parentElement.classList.contains('ui-table-scroll')) return;
      var wrap=document.createElement('div');
      wrap.className='ui-table-scroll';
      table.parentNode.insertBefore(wrap,table);
      wrap.appendChild(table);
    });
    // Safer responsive defaults for old images/iframes.
    document.querySelectorAll('img').forEach(function(img){ if(!img.getAttribute('loading')) img.setAttribute('loading','lazy'); });
  });
})();
