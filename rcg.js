
//with rgb
/*
var cbx = document.querySelectorAll(".colorbox");
var btn = document.getElementById("btn");

btn.addEventListener('click', generate);

function generate(e){

    cbx.forEach((cb)=>{
        var r = Math.round(Math.random()*255);
        var g = Math.round(Math.random()*255);
        var b = Math.round(Math.random()*255);
        
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
let divOfcolorboxes = document.getElementById('colorboxes');
let btn = document.getElementById("btn");

let num = document.getElementById('numOfboxes');
num.value = "";

btn.addEventListener('click', generate);

function generate(e) {
  //clear divOfcolorboxes
  // while(divOfcolorboxes.firstChild) {
  //   divOfcolorboxes.remove(divOfcolorboxes.firstChild);
  // }
  divOfcolorboxes.innerHTML = "";
  console.log(divOfcolorboxes.firstChild);
  const numOfboxes = document.getElementById('numOfboxes').value;

  for (let box = 0; box < numOfboxes; box++) {
    let newBox = document.createElement("div");
    newBox.classList.add("colorbox");
    //create div for hex number in it
    let hexnum = document.createElement("div");
    hexnum.classList.add("hex");
    //create copy button
    let newBtn = document.createElement("button");
    newBtn.classList.add("copy");
    newBtn.innerText = 'Copy';

    let newCopyIcon = document.createElement("i");
    newCopyIcon.classList.add("fas");
    newCopyIcon.classList.add("fa-copy");

    newBtn.appendChild(newCopyIcon);
    newBox.appendChild(hexnum);
    newBox.appendChild(newBtn);
    divOfcolorboxes.appendChild(newBox);

  }
  var cbx = document.querySelectorAll(".colorbox");

  cbx.forEach((cb) => {
    let a1 = Math.round(Math.random() * 15);
    let a2 = Math.round(Math.random() * 15);
    let a3 = Math.round(Math.random() * 15);
    let a4 = Math.round(Math.random() * 15);
    let a5 = Math.round(Math.random() * 15);
    let a6 = Math.round(Math.random() * 15);

    if (a1 > 9) a1 = hex[a1];
    if (a2 > 9) a2 = hex[a2];
    if (a3 > 9) a3 = hex[a3];
    if (a4 > 9) a4 = hex[a4];
    if (a5 > 9) a5 = hex[a5];
    if (a6 > 9) a6 = hex[a6];

    let hexnum = cb.getElementsByClassName('hex');

    hexnum[0].style.backgroundColor = `#${a1}${a2}${a3}${a4}${a5}${a6}`;
    //adding color hexnum to the colorbox div 
    hexnum[0].innerText = `#${a1}${a2}${a3}${a4}${a5}${a6}`;
  }
  )
};


var copyBtn = document.querySelectorAll('.colorbox button');
copyBtn.forEach(n => n.addEventListener('click', function (e) {
  copyColor(e, n);
}));
function myFunction() {
  alert("You copied text!");
}
function copyColor(e, n) {
  var hexToCopy = n.parentElement.getElementsByClassName('hex');

  //create a textarea and place the string we want to copy in it
  const textarea = document.createElement('textarea');
  textarea.value = hexToCopy[0].innerText;
  document.body.appendChild(textarea);
  //copy from textarea
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);
}
