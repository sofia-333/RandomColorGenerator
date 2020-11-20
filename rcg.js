
//with rgb
/*
var cbx = document.querySelectorAll(".colorbox");
var btn = document.getElementById("btn");

btn.addEventListener('click', generate);

function generate(e){

    cbx.forEach((cb)=>{
        var r = Math.random()*255;
        var g = Math.random()*255;
        var b = Math.random()*255;
        
        cb.style.backgroundColor = `rgb(${r},${g},${b})`;
    });
}
*/
//with hexadecimal

var hex = {
10: 'A',
11: 'B',
12: 'C',
13: 'D',
14: 'E',
15: 'F'
}
var cbx = document.querySelectorAll(".colorbox");
var btn = document.getElementById("btn");

btn.addEventListener('click', generate);

function generate(e){
    cbx.forEach((cb)=>{
        //cb.removeChild('.hex');
        var a1 = Math.round(Math.random()*15);
        var a2 = Math.round(Math.random()*15);
        var a3 = Math.round(Math.random()*15);
        var a4 = Math.round(Math.random()*15);
        var a5 = Math.round(Math.random()*15);
        var a6 = Math.round(Math.random()*15);

        if(a1>9) a1 = hex[a1];
        if(a2>9) a2 = hex[a2];
        if(a3>9) a3 = hex[a3];
        if(a4>9) a4 = hex[a4];
        if(a5>9) a5 = hex[a5];
        if(a6>9) a6 = hex[a6];

        //console.log(a1,a2,a3,a4,a5,a6);
        cb.style.backgroundColor = `#${a1}${a2}${a3}${a4}${a5}${a6}`;
        
        var hexnum = cb.getElementsByClassName('hex');
        //adding color hexnum to the colorbox div 
        hexnum[0].innerText = `#${a1}${a2}${a3}${a4}${a5}${a6}`;
    }
)};


var cBtn = document.querySelectorAll('#copy');
cBtn.forEach(n=> n.addEventListener('click', function(e) { 
    copyColor(e, n);
}));

function copyColor(e, n){
    var hexToCopy = n.parentElement.getElementsByClassName('hex');
    //console.log(hexToCopy[0].innerText);

    //create a textarea and place the string we want to copy in it
    const textarea = document.createElement('textarea');
    textarea.value = hexToCopy[0].innerText;
    document.body.appendChild(textarea);
    //copy from textarea
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
}