const newtaskinput=document.getElementById('new-task');
const addtaskbtn=document.getElementById('add-task-btn');
const tasklist=document.getElementById('task-list');
const filters=document.getElementById('filters');
const clearcompletedbtn=document.getElementById('clear-completed btn');


let tasks=JSON.parse(localStorage.getItem('tasks'))|| [];

function rendertasks(filter ='all'){
    tasklist.innerHTML='';
    const filteredtasks=tasks.filter(task=>
        filter ==='completed'? task.completed:
        filter==='pending'?!task.completed:true
    );
    filteredtasks.foreach((task,index)=>{
        const li=document.createElement('li');
        li.className=task.completed ? 'completed':'';

        const tasktext=document.createElement('span');
        tasktext.innerText=task.text;
        tasktext.isContentEditable=true;

        tasktext.addEventListener('click',()=>togglecompletd(index));

        const deletbtn=document.createElement('button');
        deletbtn.innerText='delet';
        deletbtn.addEventListener('click',()=>deletetask(index));

        li.appendChild(tasktext);
        li.appendChild(deletbtn);
        tasklist.appendChild(li);
    });
}

function addtasks(){
    const text=newtaskinput.value.trim();
    if(!text) return alert('task cannot be empty');
    tasks.push({text,completed:false});
    newtaskinput.value='';
    saveAndRender();
}
function deletetask(index){
   tasks.splice(index,1);
   saveAndRender();
}
function saveAndRender(){
    localStorage.setItem('tasks'.JSON.stringify(tasks));
    rendertasks();
}
addtaskbtn.addEventListener('click',addtasks);
clearcompletedbtn.addEventListener('click',clearcompletedtasks);
filters.addEventListener('click',(e)=>{
    rendertasks(e.target.dataset.filter);
});

rendertasks();


const nums=[1,57,8,554,657,345];
nums.forEach(()=>{
    console.log();
})

(a=>{
console.log(2);
});

function add(a,b,cd){
    let result =a+b;
   cd(result);

}
add(1,3,function (val){
console.log(val);
})
add();
()=>{

}

(function(){
    console.log('dsabx');
})();                                                                                                                                                             
(function() {
    console.log("This runs immediately!");
  })();
  