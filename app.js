const listsContainer=document.querySelector('[data-list]');
const listForm=document.querySelector('[list-form]');
const listText=document.querySelector('[list-input-text]');


const LOCAL_STORAGE_LIST_KEY = 'task.lists';
let lists = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || [];

function render() {
    clearElement(listsContainer); 
    lists.forEach(list=>{
    const listElement=document.createElement('li');
    listElement.classList.add("list-name");
    listElement.innerText=list.name;
    listsContainer.appendChild(listElement);
   });
}
function createlist(name) {
    return {id:Date.now().toString(),name:name,tasks:[]};
}
function clearElement(element) {
    while(element.firstChild){
        element.removeChild(element.firstChild);
    }
}
function saveAndRender() {
    save();
    render();
  }
  
  function save() {
    localStorage.setItem(LOCAL_STORAGE_LIST_KEY, JSON.stringify(lists));
  }

listForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    const inputText=listText.value;
    if(inputText=='' || inputText==null)return;
    const list=createlist(inputText);
    listText.value=null;
    lists.push(list);
    saveAndRender();
})
render();