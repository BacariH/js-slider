var manipulated = document.querySelector('.manipulate');
var filterControls = document.querySelectorAll('input[type=range]');
var presetBtn = document.querySelector('.preset-btn');

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

function updateFilters(){
    let computerFilters = '';
    filterControls.forEach((item) => {
        computerFilters += item.getAttribute('data-filter') + '(' + item.value + item.getAttribute('data-scale') + ') ';
        
    });
    console.log(computerFilters)
    manipulated.style.filter = computerFilters;
    
}

function createNewFilters(){
    let html = '';
    let preset = document.querySelector('.preset').parentElement.presetBtn;


    html += `
    <div class="presetFilters">
        <div class="inner-content">
            <button class="filterOption">Rose</button>
            <button class="filterOption">Rose</button>
            <button class="filterOption">Rose</button>
            <button class="filterOption">Rose</button>
        </div>
    
    </div>
    `;
    console.log(html);
    preset.insertAdjacentElement('beforeend', html);

}



