"use strict"

// header
    const iconMenu = document.querySelector ('.header__menu-icon');
    if(iconMenu){
        const menuBody = document.querySelector ('.header__menu-body');
        iconMenu.addEventListener("click", function() {
            document.body.classList.toggle('_lock'); //не прокручивается страница при открытом меню
            iconMenu.classList.toggle('_active');
            menuBody.classList.toggle('_active');
        });
    }




const yearSpan = document.getElementById('year'); 
const currentYear = new Date().getFullYear();
yearSpan.textContent = currentYear;

function startCountdown(duration, display) {
    let timer = duration, hours, minutes, seconds;
    
    const countdownInterval = setInterval(function () {
        hours = Math.floor(timer / 3600);
        minutes = Math.floor((timer % 3600) / 60);
        seconds = Math.floor(timer % 60);

        // Форматируем часы, минуты и секунды с ведущими нулями
        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        // Отображаем обратный отсчет
        display.textContent = hours + ":" + minutes + ":" + seconds;

        // Уменьшаем таймер
        if (--timer < 0) {
            clearInterval(countdownInterval);
            display.textContent = "Время вышло!";
        }
    }, 1000);
}

function initializeCountdowns() {
    // Находим все элементы с классом "countdown"
    const countdownElements = document.querySelectorAll('.amazing__card-count');

    countdownElements.forEach(function (element) {
        // Получаем время обратного отсчета из атрибута data-time
        const timeParts = element.getAttribute('data-time').split(':');
        const hours = parseInt(timeParts[0], 10);
        const minutes = parseInt(timeParts[1], 10);
        const seconds = parseInt(timeParts[2], 10);
        
        // Рассчитываем продолжительность в секундах
        const countdownDuration = hours * 3600 + minutes * 60 + seconds;

        // Запускаем обратный отсчет для каждого элемента
        startCountdown(countdownDuration, element);
    });
}

window.onload = function () {
    initializeCountdowns();
};