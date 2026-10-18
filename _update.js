/* 轻简趣·青年 全局启动自检新版本机制 (QJQ-YOUTH-UPDATE-V1) */
(function(){
  function updBanner(text, onOk){
    var bar=document.getElementById('updbar');
    if(!bar){bar=document.createElement('div');bar.id='updbar';bar.className='updbar';
      bar.innerHTML='<span id="updText"></span><button style="background:#F5A623" onclick="location.reload()">立即更新</button><button style="background:rgba(255,255,255,.2)" onclick="this.parentNode.style.display=\'none\'">稍后</button>';
      document.body.appendChild(bar);}
    var t=document.getElementById('updText');if(t)t.textContent=text;
    bar.style.display='flex';
  }
  try{
    var VER='1.0.0';
    var xhr=new XMLHttpRequest();
    xhr.open('GET','https://hub.qingjianqu.cn/api/apps.json?_='+Date.now(),true);
    xhr.onload=function(){
      try{
        var d=JSON.parse(xhr.responseText),apps=d.apps||d||[];
        for(var i=0;i<apps.length;i++){
          if((apps[i].platform||'').toLowerCase().indexOf('youth')>=0){
            var nv=apps[i].version||'';
            if(nv && nv!==VER){ updBanner('轻简趣·青年 发现新版本 v'+nv+'（当前 v'+VER+'）'); }
            break;
          }
        }
      }catch(e){}
    };
    xhr.send();
  }catch(e){}
})();
