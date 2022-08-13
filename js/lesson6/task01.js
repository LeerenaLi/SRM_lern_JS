const filterStudent = (allStudent, failedStudent) => {
    const passStudent = allStudent.filter(i => !failedStudent.includes(i));

    return passStudent;
}

console.log(filterStudent(['Иванов', 'Петров', 'Сидоров', 'Кузнецов', 'Смирнов', 'Попов', 'Соколов'],
                        ['Сидоров', 'Смирнов', 'Попов']));