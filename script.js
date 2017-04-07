const li = document.querySelector('[data-dropdown-item]');
const ul=document.querySelector('[data-dropdown-item]>ul');
const form = document.querySelector('#form>form')
const itemInput = document.getElementById('item');
const model = [];

li.addEventListener('click', function (ev) {
    ev.stopPropagation();
    const target = ev.target;
    target.classList.toggle('active');
})

form.addEventListener('submit', function (ev) {
    ev.preventDefault();
    const value=itemInput.value;
    if (value&&model.indexOf(value)===-1) model.push(value);
    itemInput.value = '';
    model.sort((a, b) => { if (a > b) return 1; else return -1; })
    ul.innerHTML = model.reduce((prev, curr) => prev+`<li>${curr}</li>`,'');
})

window.onclick = function (e) {
    const activeElements = document.querySelectorAll('[data-dropdown-item].active');
    activeElements.forEach(elem => { elem.classList.remove('active') })
}