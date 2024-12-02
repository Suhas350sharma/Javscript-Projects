const quotes=['I may disagree with what you say, but I will defend to death your right to say it. ','I may disagree with what you say, but I will defend to death your right to say it. ','Ignorance is bliss.','A masterpiece is born a masterpiece.','A masterpiece is born a masterpiece.','A masterpiece is born a masterpiece.']

const api='https://api.quotable.io/random'

const randquot=document.getElementById('quote');
const btn=document.getElementById('btn');

// btn.addEventListener('click',function(){
//     // randquot.innerText=
//    const quote=quotes[Math.floor(Math.random()*quotes.length)]
//    randquot.innerText=quote;
//    console.log(quote)
// })
async function app(){
try {
    const a= await fetch(api);
    const b=await a.json()
    console.log(b);
} catch (error) {
    console.log('error fetching api',error);   
}
}
app();
