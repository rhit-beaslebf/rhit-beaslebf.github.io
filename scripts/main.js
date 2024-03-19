const emailElement = document.getElementById('emailAddress');

const emailAddress = emailElement.textContent.trim();

const mailtoLink = `mailto:${emailAddress}`;

emailElement.setAttribute('href', mailtoLink);