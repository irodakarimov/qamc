// Запрашиваем имя пользователя через prompt
const userName = prompt('Введите ваше имя:');

// Находим элемент в DOM, куда будем выводить имя
const nameContainer = document.getElementById('nameContainer');

// Выводим имя в элемент
nameContainer.textContent = `Привет, ${userName}!`;
