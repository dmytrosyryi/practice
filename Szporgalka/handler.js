Обработчик елементов

const btn = querySelectorAll('button');
btn.addEventListener('click', () =>{
    alert('Click');
}); 

// .addEventListener() cлушатель за событием 
// два аргумента первый 'click' названия события
// второй аргумент call back function которая и будет вызывать действие

const btn = querySelectorAll('button');
btn.addEventListener('mouseenter', () =>{
    alert('Hover');
});

// выполняется  когда пользователь наводит мышку


const btn = querySelectorAll('button');
btn.addEventListener('mouseenter', (event) =>{
    alert('Hover');
});
// event обэкт который описывает что произошло с елементом, всегда первый аргумент
const btn = querySelectorAll('button');
btn.addEventListener('mouseenter', (event) =>{
    console.log(event.target);
});
// получаем доступ к свойствам target

const btn = querySelectorAll('button');
btn.addEventListener('mouseenter', (event) =>{
    console.log(event.target);
    event.target.remove();
});
// при наводе курсора на кнопку она удаляется

let i = 0;
const deleteElement = (e) =>{
    console.log(e.target);
    i++;
    if (i == 0){
        btn.removeEventListener("click", deleteElement);
    }
};
btn.addEventListener('click', deleteElement);

btn.addEventListener('click', deleteElement, {once: true});
//.removeEventListener удаляет обработчик события после его применения
// {once: true} третий аргумент опция , {once: true} удаляет обработчик события после его применения




Отмена стандартного поведения браузера


const link = document.querySelectorAll('a');
link.addEventListener('click', (event)=>{
    event.preventDefault();
    console.log(event.target)
});
// 'a' ccылка на youtube 
// .removeEventListener отменяет стантартоне поведение 
//  при 'click' выводит в косоль event.target



Добавление обработчика на несколько обэктов


const btns = querySelectorAll('button');
btns.forEach(btn => {
    btn..addEventListener('click', deleteElement);
});

