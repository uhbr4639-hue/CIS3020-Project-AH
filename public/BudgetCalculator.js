const balanceEl = document.getElementById('balance');
const transactionListEl = document.getElementById('transaction-list');
const formEl = document.getElementById('transaction-form');
const nameInput = document.getElementById('name');
const amountInput = document.getElementById('amount');

let transactions = [];

function updateBalance() {
    const total = transactions.reduce((acc, transaction) => acc + transaction.amount, 0);
    balanceEl.textContent = total;
}

function addTransaction(e) {
    e.preventDefault();
    const name = nameInput.value;
    const amount = parseFloat(amountInput.value);

    if (!name || isNaN(amount)) {
        alert('Please enter a proper name and amount.');
        return;
    }

    const transaction = {
        name,
        amount
    };

    transactions.push(transaction);
    updateTransactionList();
    updateBalance();
    formEl.reset();
}

function updateTransactionList() {
    transactionListEl.innerHTML = '';
    let highestExpense = 0;
    const expenses = transactions.filter(t => t.amount < 0);
    if (expenses.length > 0) {
        highestExpense = Math.min(...expenses.map(t => t.amount));
    }

    transactions.forEach(transaction => {
        const li = document.createElement('li');
        li.textContent = `${transaction.name}: $${transaction.amount.toFixed(2)}`;
        
        if (transaction.amount >= 0) {
            li.classList.add('income');
        }
        
        if (transaction.amount === highestExpense && transaction.amount !== 0) {
            li.classList.add('highest-expense');
        }
        transactionListEl.appendChild(li);
    });
}

formEl.addEventListener('submit', addTransaction);

document.getElementById('add-income').addEventListener('click', (e) => {
    e.preventDefault();
    const name = nameInput.value;
    const amount = parseFloat(amountInput.value);

    if (!name || isNaN(amount)) {
        alert('Please enter a proper name and amount.');
        return;
    }

    const transaction = {
        name,
        amount
    };
    transactions.push(transaction);
    updateTransactionList();
    updateBalance();
    formEl.reset();
});

document.getElementById('add-expense').addEventListener('click', (e) => {
    e.preventDefault();
    const name = nameInput.value;
    const amount = -1 * Math.abs(parseFloat(amountInput.value));

    if (!name || isNaN(amount)) {
        alert('Please enter a proper name and amount.');
        return;
    }

    const transaction = {
        name,
        amount
    };
    transactions.push(transaction);
    updateTransactionList();
    updateBalance();
    formEl.reset();
});