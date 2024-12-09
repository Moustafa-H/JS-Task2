let radius, val, angle

do {
    radius = prompt("What is the value of your circle's radius")
} while (!radius.match(/^[0-9.]+$/));

alert('Total area of the circle is ' + Math.PI * Math.pow(radius, 2))

do {
    val = prompt("What is the value you want to calculate its square root")
} while (!val.match(/^[0-9.]+$/));

alert('Square root of ' + val + ' is ' + Math.sqrt(val))

do {
    angle = prompt("Enter angle to get cos")
} while (!angle.match(/^[0-9.]+$/));

document.write('cos ' + angle + '&deg; is ' + Math.cos(angle * Math.PI / 180, 2).toFixed(4))