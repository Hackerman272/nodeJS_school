function getAverageAge(usersAge) {
    return usersAge.reduce((prev, user) => prev + user.age, 0) / usersAge.length;
}
