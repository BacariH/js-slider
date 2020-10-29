var manipulated = document.querySelector('.manipulate');
var filterControls = document.querySelectorAll('input[type=range]');

//console.log(filterControls) outputs the nodelist 

function updateFilters(){
    let computerFilters = '';
    filterControls.forEach((item) => {
        computerFilters += item.getAttribute('data-filter') + '(' + item.value + item.getAttribute('data-scale') + ') ';
        
    });
    console.log(computerFilters)
    manipulated.style.filter = computerFilters;
    
}



