type User = {
    name: string,
    email: string,
    address: {
        city: string,
        state?: string,
    }
}

// Usa o type para a tipagem do formato dos dados a serem utilizados.

function showWelcomeMessage(user: User) {
    return `Welcome ${user.name},
    you email is ${user.email}.
    Your city is ${user.address.city}
    and your state is ${user.address.state}.`;
}

const user = {
    name: 'John Doe',
    email: 'john@doe.com',
    address: {
        city: 'New York',
        state: 'NY',
    }
}

const message = showWelcomeMessage(user);
