var manipulated = document.querySelector('.manipulate');
var filterControls = document.querySelectorAll('input[type=range]');
var presetBtn = document.querySelector('.preset-Btn');
var leftBtn = document.querySelector('leftArr');
var rightBtn = document.querySelector('rightBtn');
var site = document.querySelector('.site-wrapper');

presetBtn.addEventListener('click', createNewFilters)


function handleImageUpload(event){
    const file = event.target.files[0];
    const reader = new FileReader();
    
    
    reader.onload = function(e) {
        const preview = document.getElementById('preview');
        preview.src = e.target.result;
        preview.style.display = 'block';
    }
    //TODO: simplify this function to make the code neater
    reader.onloadend = () => {
        resetFilters();
        const anchor = document.createElement('a');
        anchor.innerText = "Download";
        anchor.className = 'download';
        document.getElementById('nav').appendChild(anchor);
    }
    reader.readAsDataURL(file);
}

// TODO: Add download functionality for user to retrieve the img they have edited

function slider(){
    // TODO: add more slider functionality 
    let grayscale = document.getElementById("grayscale").value;
    let imgSelected = document.getElementById("active");

    imgSelected.style.filter = `grayscale(${grayscale})`;
}

function resetFilters(){
    //TODO: need this function on load of the image so no filter settings persist
    let imgSelected = document.getElementById("active");
    imgSelected.style.filter = `grayscale(${0})`;
}


function updateFilters(){
    let computerFilters = '';
    filterControls.forEach((item) => {
        computerFilters += item.getAttribute('data-filter') + '(' + item.value + item.getAttribute('data-scale') + ') ';
        
    });
    console.log(computerFilters)
    manipulated.style.filter = computerFilters;
    
}

//TODO: Edit these buttons to correspond with 'default' filter features. 
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



