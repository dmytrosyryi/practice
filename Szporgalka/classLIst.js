
                            //CLASSLIST

// const btns = document.querySelectorAll('button');
// console.log(btns[0].classList.length); //c помощю classList.length можно узнать свойства btns и количество класов

// console.log(btns[0].classList.item(1)); // c методом item(1) получаем доступ к классу через его индекс

// console.log(btns[0].classList.add('red'));// метод .add('red') Добавляет класс через ',' можно добавлять еще классы

// console.log(btns[0].classList.remove('red'));// метод remove('red') удаляет клаасс через ',' можно добавлять еще классы

// console.log(btns[0].classList.toggle('red')); // метод .toggle('red')  добавляет или удаляет класс


// if(btns[0].classList.contains('red')){
//     console.log('trueFalse');            // метод .contains('red') возвращает булиновое значение
// }

// btns[0].addEventListener('click',() =>{
//     if (!btns[1].classList.contains('red')){
//         btns[1].classList.add('red');
//     } else {                               // при клике на первую кнопку добавляем и удаляем класс 'red'
//         btns[1].classList.remove('red')
//     }}
// );

// btns[0].addEventListener('click', () =>{
//     btns[1].classList.toggle('red')       // // при клике на первую кнопку добавляем и удаляем класс 'red'
// });



                        // Делегиривоние событий

const wrapper = document.querySelector(".btn-block");

wrapper.addEventListener('click', (event) =>{
    if(event.target && event.target.tagName == "BUTTON"){  //tagName получаем с помощю console.dir(event.target)
        console.log('Hello');    //при клике на любую кнопку надпись HELLO
    }
});

