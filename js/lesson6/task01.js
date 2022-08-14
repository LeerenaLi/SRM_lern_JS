'use strict';

// Напишите функцию filter()
// функция принимает в параметрах 2 массива
// Первый массив — список всех студентов, второй — список студентов не сдавших экзамен.
// Результат функции: массив из всех студентов, которые сдали экзамен.

const filterStudent = (allStudent, failedStudent) => {
    const passStudent = allStudent.filter(i => !failedStudent.includes(i));

    return passStudent;
}

console.log(filterStudent(['Иванов', 'Петров', 'Сидоров', 'Кузнецов', 'Смирнов', 'Попов', 'Соколов'],
                        ['Сидоров', 'Смирнов', 'Попов']));