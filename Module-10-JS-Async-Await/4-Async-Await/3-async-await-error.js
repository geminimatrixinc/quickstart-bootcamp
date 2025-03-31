async function getAccountBalance(userId) {
    try {
        const response = await fetch('https://api.github.com/users/github/repos');
        if (!response.ok) {
            throw new Error('Error fetching balance');
        }
        const { balance } = await response.json();
        return balance;
    } catch (error) {
        console.error('Failed to fetch user balance:', error);
        return 0; // return default balance in case of error
    }
}

async function displayBalance() {
    const balance = await getAccountBalance(123);
    console.log(`User balance: $${balance}`);
}

displayBalance();
