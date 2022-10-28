type User = {
    name: string,
    email: string,
    address: {
        city: string,
        state?: string,
    }
}

function showWelcomeMessage(user: User) {
    return `Welcome ${user.name},
    you email is ${user.email}.
    Your city is ${user.address.city}
    and your state is ${user.address.state}.`;
}

const message = showWelcomeMessage({
    name: 'John Doe',
    email: 'john@doe.com',
    address: {
        city: 'New York',
        state: 'NY',
    }
});

console.log(message);
