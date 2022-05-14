//let jss = prompt(`Яка “офиційна” назва JavaScript?`, 'ECMAScript');
//if (jss == "ECMAScript") {
//	alert("Правильно");

//} else {
//	alert(`Не знаєте? “ECMAScript”!`);
//};

//let jsss = prompt(`Яка “офиційна” назва JavaScript?`, 'ECMAScript');
//(jsss == `ECMAScript`)
//	 alert("Правильно!")
//	: alert("Неправильно.");

//let namber = prompt("Число");
// Let Namber = Prompt ("Number");
//if (namber > 0) {
//	alert("1");
//} else if (namber < 0) {
//	alert("-1");
//} else if (namber == 0) {
//	alert("0");
//} else {
//	alert("Це не число");
//};

//let a = 1;
//let b = 3;
//let result = (a + b < 4) ? "Нижче" : "Вище";
//alert(result);

//let login = prompt("Посада", '')
//let massage = (login == "Працівник") ? 'Привіт' :
//	(login == 'Директор') ? 'Вітаю' :
//		(login == '') ? 'Немає логіну' :
//			'-';
//alert(massage);

//let hour = 12;
//let isWeekend = true;
//if (hour < 10 || hour > 18 || isWeekend) {
//	alert('Офіс зачинений.');
//}

//let firstName = '';
//let lastName = '';
//let nickName = '';
//alert(firstName || lastName || nickName || 'Anonim');

//let hour = 12;
//let minute = 30;
//if (hour == 12 && minute == 30) {
//	alert('Час 12:30');
//}

//alert(true || true);
//alert(false || true);
//alert(true || false);
//alert(false || false);

//if (0 || 0 || 1) {
//	alert('Правильно!');
//}

//let hour = 'h';

//if (hour < 10 || hour >= 18) {
//	alert('Офіс зачинений!');
//} else if (hour >= 10 || hour < 18) {
//	alert('Офіс відчинений!');
//} else {
//	alert('Невірні дані!');
//}

//6 > 7 || alert("виведеться");
//alert(4 < 6 && 5 > 6);

//let hour = 12;
//let minute = 30;

//if (hour == 12 && minute == 30 || hour == 1 && minute == 30) {
//	alert('Час: 12:30');
//} else {
//	alert('Помилка');
//}

//alert(!true);
//alert(!false);

//alert(!!'не пустий рядок');

//let age = 13;
//if (age >= 14 && age <= 90) {
//	alert('Вік в діапазоні!');
//} else if (!(age >= 14 && age <= 90)) {
//	alert('Вік не в діапазоні!');
//}
//} else if (age < 14 || age > 90) {
//	alert('Вік не в діапазоні!');
//};

//if (-1 && 0) alert('другий');


//?let user = prompt("Логін", "Admin");
//?if (user === "Admin") {
//?	let password = prompt("Пароль", "Господар");
//?	if (password === "Господар") {
//?		alert("Ласкаво Просимо!");
//?	} else if (password === "" || password === null) {
//?		alert("Скасовано");
//?	} else {
//?		alert("Неправильний пароль");
//?	}
//?} else if (user === "" || user === null) {
//?	alert("Скасовано");
//?} else if (user != "Admin") {
//?	alert("Я вас не знаю");
//?}



//let i = 1;
//while (i < 3) {
//	alert(i);
//	i++;
//}
//let i = 3;
//while (i) {
//	alert(i);
//	i--;
//}
//let i = 0;
//do {
//	alert(i);
//	i++;
//} while (i < 3);

//let i = 0;
//while (i < 3) {

//	alert(i);
//	i++;
//}

//let i = 0;
//do {
//	alert(i);
//	++i;
//} while (i < 3);

//let i = 0;
//for (; i < 6; i++) {
//	if (i == 3) break;
//	alert(i);
//}

//let sum = 0;
//while (true) {
//	let value = +prompt('Ваедіть число', '');
//	if (!value) break;
//	sum += value;
//}
//alert(`Сума:${sum}`);

//for (let i = 2; i <= 10; i++) {
//	if (i % 2 == 0) alert(i);
//}

//outer: for (let i = 0; i < 3; i++) {
//	for (let j = 0; j < 3; j++) {
//		let input = prompt(`Значення в координатах (I-${i},J-${j})`);
//		if (!input) break outer;
//	}
//}
//alert('Готово');
//let i = 3;
//while (i) {
//	alert(--i);
//}
//let i = 0;
//while (i < 3) {
//	alert(`число ${i}!`);
//	i++;
//}


//?let i = 0;
//?for (; i < 101; true) {
//?	i == prompt('введіть число більше ніж 100', '');
//?	if (i == '' || i == null) break;
//?	
//?}
//!let num;
//!do {
//!num = prompt('Ваедіть число більше ніж 100', '')
//!} while (num <= 100 && num;


//let a = 2 + 2;
//switch (a) {
//	case 3:
//		alert('Замало');
//		break;
//	case 4:
//		alert('Точнісінько!');
//		break;
//	case 5:
//		alert('Забагато');
//		break;

//	default: alert('Я не знаю таких значень');
//}


//let a = '1';
//let b = 0;
//switch (+a) {
//	case b + 1:
//		alert('виконано це,бо +а це 1, що строго дорівнює б+1');
//		break;

//	default: alert('це не буде виконано');
//		break;
//}

//let a = +prompt('введіть число від 3 до 5', '');;
//switch (a) {
//	case 4:
//		alert('Вірно');
//		break;
//	case 3:
//	case 5:
//		alert('Невірно!');
//		alert('Можливо вам варто відвідати урок математики?');

//		break;

//	default:
//		alert('Результат виглядає дивно. Дійсно.');
//}
//let browser = prompt('введіть назву браузера', 'browser');
//if (browser == "Edge") {
//	alert("You've got the Edge!");
//} else if (browser == 'browser') {
//	alert('switch = case');
//} else if (browser == 'Chrome' ?? 'Firefox' ?? 'Safari' ?? 'Opera') {
//	alert('Ми підтримуємо і ці браузери');
//} else {
//	alert('Маємо надію, що ця сторінка виглядає добре!');
//}


//let a = +prompt('a?', '');
//switch (a) {
//	case 0:
//		alert('0');
//		break;
//	case 1:
//		alert('1');
//		break;
//	case 2:
//	case 3:
//		alert('2,3');
//		break;
//}
