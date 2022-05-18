/* 1. • Создайте смешанный массив, например [1, 2, 3, ‘a’, ‘b’, ‘c’,
‘4’, ‘5’, ‘6’]. Посчитайте сумму всех его чисел, включая строковые. Выведите
сумму в alert.*/
/*let arr = [1, 2, 3, 'a', 'b', 'c', '4', '5','6'];
let result = arr.reduce((sum, current) => {
   if(!isNaN(+current)) {
      return sum + +current;
   }
   return sum;
}, 0);

alert(result); */
/* 2. •	Создайте массив со значениями: ‘AngularJS’, ‘jQuery’
        •	Добавьте в начало массива значение ‘Backbone.js’
        •	Добавьте в конец массива значения ‘ReactJS’ и ‘Vue.js’
        •	Добавьте в массив значение ‘CommonJS’ вторым элементом
        •	Найдите и удалите из массива значение ‘jQuery’, выведите его в alert со словами “Это здесь лишнее”*/
/*let arr = ['AngularJS', 'jQuery'];
arr.unshift('Backbone.js');
arr.push('ReactJS', 'Vue.js');
arr.splice(1, 0, 'CommonJS');
alert(arr);*/
// Можно так по простинькому
/*let removed = arr.splice(3, 1);
alert(removed + ' - Это здесь лишнее');*/
// Или такой вориант по надежнее
/*for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 'jQuery') {
   alert(arr[i] + ' - Это здесь лишнее');
   delete arr[i];
    }
}*/
/* 3. Создайте строку с текстом ‘Как однажды Жак звонарь сломал фонарь головой’. 
Разбейте ее на массив слов, и переставьте слова в порядке 
‘Как Жак звонарь однажды сломал головой фонарь’ с помощью любых методов массива (indexOf, splice ...). 
Затем объедините элементы массива в строку и выведите в alert исходный и итоговый варианты.*/
/*let str = 'Как однажды Жак звонарь сломал фонарь головой';
alert(str + ' - Исходный варианты');
let arr = str.split(' ');
arr[1] = arr.splice(4, 0, arr[1])[0];
str = arr.join(' ');
alert(str + " - Итоговый варианты");*/
/* 4. Создайте ассоциативный массив person, описывающий персону, с произвольным количеством произвольных полей. 
С помощью оператора in или typeof проверьте наличие в объекте свойства, прочитанного из prompt, и выведите его на экран. 
Если свойства нет, то добавляйте его в объект со значением, которое также запрашивается из prompt.*/
/*let person = {
   name: 'Borat',
   age: 30,
   sex: 'men'
};
let option = prompt('Add property', '');
if (option in person) {
   typeof person[option] !== 'undefined'
    alert(person[option]);
  } else {
    person[option] = prompt('The property was not found. Please add property ' + option + ' ' + 'to' + ' ' + person.name);
        alert('Property ' + option + ' has value ' + person[option] + ' ' + 'to' + ' ' + person.name);
};
console.log(person);*/
/* 5. Сгенерируйте объект, описывающий модель телефона, 
заполнив все свойства значениями, прочитанными из prompt (например: brand, model, resolution, color...), 
не используя вспомогательные переменные. 
Добавьте этот гаджет персоне, созданной ранее.*/
/*let person = { name: 'Lionel Messi'};
let modelPhone = {
   brand: prompt('Add device brand', 'Sony'),
   model: prompt('Add device model', 'S1'),
   color: prompt('what color is the device?', 'red') 
};
person.modelPhone = modelPhone;
console.log(person);
//////====== А можно и так заморочится=)
alert(JSON.stringify(person));*/
/* 6. Создайте пустой массив. В цикле до n на каждой итерации запускайте prompt для ввода любых символов, 
полученное значение добавляйте в конец созданного массива. 
После выхода из цикла посчитайте сумму всех чисел массива и выведите в alert полученный результат.*/
/*let arr = [];
for (let i = 0; i < Infinity; i++) {
   let num = prompt('Enter something', '');
   if (!isNaN(+num) && num ) {
      arr.push(+num);
   } else if (num) {
      alert('You did not enter a number!');
   } else break;
}
let sumArr = arr.reduce((sum, current) => sum + current);
alert('The total sum of the numbers is - ' + sumArr);*/
/* 8. Используя вложенные циклы, сформируйте двумерный массив, содержащий таблицу умножения - (задача со звездочкой)*/
/*let tab = [];
for (let i = 1; i <= 10; i++) {
   tab[i] = [];

   for (let j = 1; j <= 10; j++) {
      tab[i].push(`${i} x ${j} = ${i * j}`);
   }
}
console.log(tab);*/






  

 


