'use strict'
const bars = document.querySelector('.fa-bars');
const list = document.querySelectorAll('.li');
const viewMore = document.getElementById('view-more');
const box = document.querySelectorAll('.box');

bars.addEventListener('click', function() {
    list.forEach(item => {
        // Check the current display style and toggle it
        if (item.style.display === 'none' || item.style.display === '') {
            item.style.display = 'flex'; // Show the item
        } else {
            item.style.display = 'none'; // Hide the item
        }
    });
});

viewMore.addEventListener('click', function(){
    box.forEach(item => {
        item.style.display = 'grid';
        item.style.gridTemplateColumns = 'repeat(3, 1fr)';
        viewMore.textContent = 'View Less';
        viewMore.position = 'absolute';
        item.style.width = '8rem';
        item.style.height = '8rem';
        if(!item.style.display === 'none'){
            item.style.display = 'none';
            viewMore.textContent = 'View More';
        }
    })
})


