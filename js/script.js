//1. Создаем пустой массив с именем numbers
const numbers = [];

//2. Заполняем  пустой массив numbers целыми числами от -10 до 10 (включительно) с помощью цикла.
for (let i = -10; i <= 10; i++) {
	numbers.push(i);
}

//3. Удаляем все отрицательные числа из массива
for (let i = 0; i < numbers.length; i++) {
	if (numbers[i] < 0) {
		numbers.splice(i, 1);
		i--;
	}
}

//4. Возводим каждое число в квадрат
for (let i of numbers) {
	numbers[i] = numbers[i] ** 2;
}

//5. Отсортировываем числа в порядке убывания
for (let i = 0; i < numbers.length; i++) {
	for (let j = 0; j < numbers.length - 1; j++) {
		if (numbers[j] < numbers[j + 1]) {
			// Меняем местами элементы, если текущий меньше следующего
			let sortArray = numbers[j];
			numbers[j] = numbers[j + 1];
			numbers[j + 1] = sortArray;
		}
	}
}

//6. Выводим полученный массив numbers в консоль
console.log(numbers);