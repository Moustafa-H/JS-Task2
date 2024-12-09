const nameExp = /^[A-Za-z]{2,}$/
const phoneExp = /^[0-9]{8}$/
const mobileExp = /^(010|011|012)[0-9]{8}$/
const emailExp = /^[a-z0-9.-_]+@[a-z0-9]+.com$/i

let userName, phone, mobile, email

do {
    userName = prompt('Enter your name')
    console.log('meow');
    
    console.log(nameExp.test(userName));
    
} while (!nameExp.test(userName))

do {
    phone = prompt('Enter your phone number (8 digits)')
} while (!phoneExp.test(phone))

do {
    mobile = prompt('Enter your mobile number (11 digits)')
} while (!mobileExp.test(mobile))

do {
    email = prompt('Enter your Email')
} while (!emailExp.test(email))

let userColor
do {
    userColor = prompt("Choose a color: 'red', 'green' or 'blue'")
} while (!userColor.match(/^(red|green|blue)$/i));

const date = new Date()

document.write(`
    <p><span>Welcome dear guest</span> ${userName}</p><br>
    <p><span>Your telephone number is</span> ${phone}</p><br>
    <p><span>Your mobile number is</span> ${mobile}</p><br>
    <p><span>Your email address is</span> ${email}</p><br>
    <br><br>
    <p><span>today is</span> ${date.getDay() + 1}</p><br>
    <p><span>we are in month</span> ${date.getMonth() + 1}</p>
`)

spans = document.getElementsByTagName('span')
for (let i = 0; i < spans.length; i++)
    spans[i].style.color = userColor