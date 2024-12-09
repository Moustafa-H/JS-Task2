const arr = []

for (let i = 0; i < 5; i++) {
    let temp 
    
    do {
        temp = prompt('Enter number at index ' + i)
    } while (!temp.match(/^-{0,1}[0-9]+$/))
    
    arr[i] = temp
}

document.write(`
    <p><span>You've entered the values</span> ${arr.join(', ')}</p><br>
    <p><span>Your values after being sorted descendingly</span> ${arr.sort((a, b) => b - a).join(', ')}</p><br>
    <p><span>Your values after being sorted ascendingly</span> ${arr.sort((a, b) => a - b).join(', ')}</p><br>
`)

spans = document.getElementsByTagName('span')
for (let i = 0; i < spans.length; i++)
    spans[i].style.color = 'red'