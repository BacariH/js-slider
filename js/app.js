var manipulated = document.querySelector('.manipulate');
var filterControls = document.querySelectorAll('input[type=range]');
var presetBtn = document.querySelector('.preset-Btn');
var leftBtn = document.querySelector('leftArr');
var rightBtn = document.querySelector('rightBtn');
var site = document.querySelector('.site-wrapper');

presetBtn.addEventListener('click', createNewFilters)
/*
document.addEventListener("DOMContentLoaded", ()=> {
    let wrapper = document.getElementById('wrapper');
    let topLayer = wrapper.querySelector('.top');
    let handle = wrapper.querySelector('.handle');
    let skew = 0;
    let delta = 0;


    if(wrapper.className.indexOf('skewed') != -1){
        skew = 1000;
    }
    
    wrapper.addEventListener('mouseover', (e) => {
        delta = (e.clientX - window.innerWidth / 2) * 0.5;
    
        handle.style.left = e.clientX + delta + 'px';

        topLayer.style.width = e.clientX + skew + delta + 'px';
    });
})
*/
//console.log(filterControls) outputs the nodeList 

function slider(){
    
}

function updateFilters(){
    let computerFilters = '';
    filterControls.forEach((item) => {
        computerFilters += item.getAttribute('data-filter') + '(' + item.value + item.getAttribute('data-scale') + ') ';
        
    });
    console.log(computerFilters)
    manipulated.style.filter = computerFilters;
    
}

function createNewFilters(){
    let presetContainer = document.querySelector('.preset-container');
    let html = '';
    let preset = document.createElement('span');
    html += `
        <button class="filterOption">Rose</button>
        <button class="filterOption">Rose</button>
        <button class="filterOption">Rose</button>
        <button class="filterOption">Rose</button>
    `;
    preset.innerHTML = html;
    presetContainer.insertAdjacentElement('beforeend', preset);

}



