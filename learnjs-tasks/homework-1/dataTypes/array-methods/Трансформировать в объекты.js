let usersTransformed = usersOld.map(user => ({
    fullName: `${user.name} ${user.surname}`,
    id: user.id
}));
