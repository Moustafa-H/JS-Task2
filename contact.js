let userName;
do {
    userName = prompt('Enter your name');
} while (!isNaN(userName));

let birthDate;
do {
    birthDate = prompt('Enter your birth year');
} while (isNaN(birthDate) || +birthDate >= 2010);

let age = 2024 - birthDate;

document.write(
    '<b><u>Name:</u></b> ' + userName
    + '<br><b><u>Birth year:</u></b> ' + birthDate
    + '<br><b><u>Age:</u></b> ' + age
);