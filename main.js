// 图片转换器
let myImg = document.querySelector('img');
myImg.onclick = function(){
    let mySrc = myImg.getAttribute('src');
    // alert(mySrc === "imgfiles/newyearimg.png")
    if(mySrc === "imgfiles/newyearimg.png"){
        myImg.setAttribute('src',"imgfiles/newyearimg2.png")
    }else{
        myImg.setAttribute('src',"imgfiles/newyearimg.png")
    }
}

// 设定个性标题(点击事件)
let Myheading = document.querySelector('h1');
let MyButton = document.querySelector('button');

function setUserName(){
    let myName = prompt("请输入");
    if(!myName){
        setUserName();
    }else{
        localStorage.setItem('name',myName);
        Myheading.textContent = myName;
    }
}

//初始代码
if(!localStorage.getItem('name')){
    setUserName()
}else{
    let myStored = localStorage.getItem('name');
    Myheading.textContent = myStored;
}

//点击事件
MyButton.onclick = function(){
    setUserName();
}