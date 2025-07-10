console.log('JS #2. Домашнє завдання. Від простих до складних обчислень і рядків')

/*
 * #1
 *
 * Створіть змінну i, для якої виконайте префіксний та постфіксний інкремент та декремент.
 * Поекспериментуйте з результатами, виводячи їх у консоль.
 */

// i
let i = 5;

console.log(++i); // префіксний інкремент → 6
console.log(i++); // постфіксний інкремент → 6 (але i вже 7)
console.log(--i); // префіксний декремент → 6
console.log(i--); // постфіксний декремент → 6 (але i вже 5)

/*
 * #2
 *
 * Створіть нову змінну myTest та присвойте їй значення 20.
 * Виконайте присвоєння з операцією, використовуючи оператори: +=, –=, *=, /=, %=.
 * Результати присвоюються в myTest, потім виводяться в консоль.
 * У розрахунках можна використовувати раніше оголошену змінну myNum та/або числа.
 */
var myNum = 10
var myTest = 20

myTest += myNum      // 30
console.log(myTest)

myTest -= 5          // 25
console.log(myTest)

myTest *= 2          // 50
console.log(myTest)

myTest /= 5          // 10
console.log(myTest)

myTest %= 3          // 1
console.log(myTest)

/*
 * #3
 *
 * Використовуючи властивості та методи об'єкта Math, присвойте змінним та відобразіть у консолі.
 */

var myPi = Math.PI // константа Pi → myPi
var myRound = Math.round(89.279) // округлене значення числа 89.279 → myRound
var myRandom = Math.random() * 10 // випадкове число між 0..10 (10 не включено) → myRandom
var myPow = Math.pow(3, 5) // 3 у 5 степені → myPow

console.log(myPi)
console.log(myRound)
console.log(myRandom)
console.log(myPow)

/*
 * #4
 *
 * Створіть об'єкт з ім'ям strObj.
 * Присвойте ключу str рядок тексту "Мама мыла раму, рама мыла маму", ключу length встановіть довжину цього рядка.
 */

var strObj = {
  str: 'Мама мыла раму, рама мыла маму',
  length: 'Мама мыла раму, рама мыла маму'.length
}
// Мама мыла раму, рама мыла маму
console.log(strObj)


/*
 * #5
 *
 * Перевірте наявність тексту 'рама' у полі str об'єкта strObj (див.п.4), результат збережіть у змінній isRamaPos та виведіть її у консоль.
 * Результатом для isRamaPos має бути індекс входження.
 * Результатом для isRama має бути буль true.
 */

var isRamaPos = strObj.str.indexOf('рама') // isRamaPos
var isRama = isRamaPos !== -1 // isRama

console.log(isRamaPos)
console.log(isRama)

/*
 * #6
 *
 * Виконайте перейменування підрядка у рядку.
 * Як вихідний рядок використовуйте значення поля str об'єкта strObj (див.п.4), результат збережіть у змінній strReplace та відобразіть у консолі.
 * Вихідний рядок: 'Мама мыла раму, рама мыла маму'
 *      Результат: 'Мама моет раму, Рама держит маму'
 */

var strReplace = strObj.str
  .replace('мыла', 'моет')
  .replace('рама мыла маму', 'Рама держит маму')

console.log(strReplace)

/*
 * #7
 *
 * Преобразуйте текст 'some STRING' у верхній, потім у нижній регістри, результат відобразіть у консолі.
 */

var someStr = 'some STRING' // var someStr = 'some STRING'
var upperStr = someStr.toUpperCase() // var upperStr
var lowerStr = someStr.toLowerCase() // var lowerStr

console.log(upperStr)
console.log(lowerStr)