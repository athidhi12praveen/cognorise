// script.js
document.getElementById('convert-btn').addEventListener('click', () => {
    const amount = document.getElementById('amount').value;
    const fromCurrency = document.getElementById('from-currency').value;
    const toCurrency = document.getElementById('to-currency').value;
    const url = `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const rate = data.rates[toCurrency];
            const convertedAmount = amount * rate;
            document.getElementById('result').innerText = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
        })
        .catch(error => console.error('Error fetching exchange rates:', error));
});

// Populate currency options (example)
const currencies = [
    { code: "", name:'Select the country' },
    { code: 'ARS', name: 'Argentine Peso' },
    { code: 'BSD', name: 'Bahamian Dollar' },
    { code: 'BND', name: 'Brunei Dollar' },
    { code: 'ALL', name: 'Lek' },
    { code: 'NZD', name: 'New Zealand Dollar' },
    { code: 'KYD', name: 'Cayman Islands Dollar' },
    { code: 'CAD', name: 'Canadian Dollar' },
    { code: 'BHD', name: 'Bahraini Dinar' },
    { code: 'EUR', name: 'Euro' },
    { code: 'CHF', name: 'Swiss Franc' },
    { code: 'AUD', name: 'Australian Dollar' },
    { code: 'SAR', name: 'Saudi Riyal' },
    { code: 'USD', name: 'US Dollar' },
    { code: 'BBD', name: 'Barbadian Dollar' },
    { code: 'GBP', name: 'British Pound Sterling' },
    { code: 'JPY', name: 'Japanese Yen' },
    { code: 'BZD', name: 'Belize Dollar' },
    { code: 'INR', name: 'Indian Rupee' }
];
const fromCurrencySelect = document.getElementById('from-currency');
const toCurrencySelect = document.getElementById('to-currency');

currencies.forEach(currency => {
    const option1 = document.createElement('option');
    option1.value = currency.code;
    option1.text = currency.name;
    fromCurrencySelect.add(option1);

    const option2 = document.createElement('option');
    option2.value = currency.code;
    option2.text = currency.name;
    toCurrencySelect.add(option2);
});
