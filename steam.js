setTimeout(function(){
    const e = document.querySelector("video"),
    n = e.getElementsByTagName("source")[0].src,
    o = {};
  if(Hls.isSupported()) {
    var config = {
      maxMaxBufferLength: 100,
    };
    const t = new Hls(config);
    t.loadSource(n), t.on(Hls.Events.MANIFEST_PARSED, function(n, l) {
      const s = t.levels.map(e => e.height);
      o.quality = {
        default: s[0],
        options: s,
        forced: !0,
        onChange: e => (function(e) {
          window.hls.levels.forEach((n, o) => {
            n.height === e && (window.hls.currentLevel = o)
          })
        })(e)
      };
      new Plyr(e, o)
    }), t.attachMedia(e), window.hls = t
  } else {
    new Plyr(e, o)
  }
},1000);

   
    
  window.onload = function () {
    var url = document.location.href,
        params = url.split('?')[1].split('&'),
        data = {}, tmp;
    for (var i = 0, l = params.length; i < l; i++) {
         tmp = params[i].split('=');
         data[tmp[0]] = tmp[1];
    }
    let url2='http://zee5api.herokuapp.com/z5api.php?q='+data.name;
    userAction2(url2);
}

  const userAction2 = async (murl) => {
      console.log(murl);
    const response = await fetch(murl);
    const myJson = await response.json();
    
    var mystring = myJson.video_url;
  mystring= mystring.replace('\/','/');
var thumb=myJson.thumbnail;
console.log(mystring);
document.querySelector("source").src=mystring;
document.querySelector("video").poster=thumb;
  }
  setTimeout(videovisible, 4000)

function videovisible() {
    document.getElementById('loading').style.display = 'none'
}