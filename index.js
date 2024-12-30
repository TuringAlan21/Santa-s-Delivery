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
        item.style.display = 'flex';
    })
})

