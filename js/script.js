
const btnControl = document.querySelector('.flip-card__control-btn');

btnControl.disabled = true;

const flipItem = document.querySelectorAll('.flip-card__item');

let count = 0;

let activFlip =

flipItem.forEach(function(item) {
    item.addEventListener("mouseover", function() {
        item.classList.add('active');

        let activeFlip = document.querySelectorAll('.flip-card__item.active');

        if (activeFlip.length == flipItem.length) {
        btnControl.disabled = false;
        
        }

    });

    
});
