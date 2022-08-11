const modifideString = (incorrectString) => {
    const correctString = incorrectString.slice(0, 1).toUpperCase() + incorrectString.substring(1).toLowerCase();
    return correctString;
}

console.log(modifideString("привет Мир"));