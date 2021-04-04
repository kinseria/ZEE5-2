
let button=document.querySelector("button");
let inp=document.querySelector("input");

let url;
let myJson;
const userAction = async (murl) => {
   const response = await fetch(murl);
   myJson = await response.json();
   console.log(myJson);
  console.log(myJson.Video_URL);
  if(myJson.status=='failed'){
    alert('INVALID URL');
  }
  else{
    var b = inp.value;
    console.log(b);
        jurl = 'http://127.0.0.1:5500/ZEE5/stream.html?name=' + b;
    
            window.location.assign('http://127.0.0.1:5500/ZEE5/stream.html?name=' + b);
    }
  
}


button.addEventListener('click',()=>{
  url="http://zee5api.herokuapp.com/z5api.php?q="+inp.value;
  // var b = inp.value;
  //       url = 'http://127.0.0.1:5500/ZEE5/stream.html?name=' + encodeURIComponent(b);
    
  //           window.location.assign(url);
  userAction(url);
 
            
    }

)

