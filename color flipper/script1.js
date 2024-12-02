const colorBox=document.getElementById('colorBox');
const color=['red','white','blue','green','purple','orange','skyblue'];
const  colorname=document.getElementById('colorName');
const colorBtn=document.getElementById('colorBtn');

colorBtn.addEventListener('click',function(){
    const randomcolor=color[Math.floor(Math.random()*color.length)];
    console.log(randomcolor);
      colorBox.style.backgroundColor=randomcolor;
      colorname.textContent=randomcolor.charAt(0).toUpperCase()+randomcolor.slice(1);
})