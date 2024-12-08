alert('Welcome to my site')
let myName = prompt('Enter your name')
document.write('Welcome ' + myName)

const tempStatus = (temp) => console.log(temp >= 30 ? 'HOT' : 'Cold')

tempStatus(15)
tempStatus(30)
tempStatus(35)