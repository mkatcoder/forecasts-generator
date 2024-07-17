/* Генерация предсказания должна происходить при клике на кнопку «предсказать судьбу» */
const button = document.querySelector('.forecast-btn');
button.addEventListener('click', function() {

/* Заранее заготовь 3-5 предсказаний и в зависимости от того, как лягут карты судьбы (или что скажет Math.random) показывай их пользователю */
const predictionChoice = getRandomInt(1, 5);
let predictionText;

switch (predictionChoice) {
    case 1:
        predictionText = "Звёзды сложились так, что ваш релиз выйдет вовремя! Но только если Меркурий не ретроградный. Погодите, он ретроградный? Упс...";
        break;
    case 2:
        predictionText = "Ваша команда настолько увлеклась обсуждением смешных видео с котиками, что забыли о дедлайне. Зато настроение отличное!";
        break;
    case 3:
        predictionText = "В офисе закончился кофе, и все разработчики ушли на массовую забастовку, требуя срочной поставки эспрессо. Пока кофе не будет, релиз не выйдет!";
        break;
    case 4:
        predictionText = "Релиз будет вовремя! Но только если вы не забудете обновить документацию. Ага, вот в чём подвох...";
        break;
    case 5:
        predictionText = "Релиз будет вовремя, если ваш менеджер не решит добавить новую фичу за день до релиза. Помните, всё в ваших руках!";
        break;
}

/* Подставляй текст нового предсказания в .current-forecast h1 */
const newPrediction = document.querySelector('.current-forecast h1');
newPrediction.textContent = predictionText;

/* Показывай процент вероятности, с которым предсказание сбудется — в верстке это .current-forecast p */
/* Данный процент также нужно генерировать автоматически, он может принимать значения от 0 до 100% */
const predictionProbability = document.querySelector('.current-forecast p');
const probabilityChoice = getRandomInt(0, 100);
predictionProbability.textContent = `Вероятность: ${probabilityChoice}%`;

/* Совет: заведи функцию-хелпер, которая будет заниматься только генерацией данных в диапазоне от min до max и используй ее где нужно */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/* При генерации нового предсказания старое предсказание должно добавляться в начало списка «Мои предсказания» — .forecasts  */

/* Для добавления предсказания в список воспользуйся шаблоном forecast-item */
const template = document.querySelector('#forecast-item');
const myPrediction = template.content.cloneNode(true);
myPrediction.querySelector('h3').textContent = predictionText;
myPrediction.querySelector('p').textContent = predictionProbability.textContent;

const forecastsContainer = document.querySelector('.forecasts');
forecastsContainer.prepend(myPrediction);

})


