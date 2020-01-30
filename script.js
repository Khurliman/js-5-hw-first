let id = 1;
for(let i = 0; i < 10; i++) {
    const users = {
        Пользователь: id,
        Имя: prompt('Your name'),
        Возраст: +prompt('Your age')
    }
    for(const key in users) {
        console.log(`${key} ${users[key]}`);
    }
    id++;
}