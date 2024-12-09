const largest = (s) => {
    res = ''
    
    strs = s.split(' ')
    console.log(strs)
    
    for (let str of strs) {
        res = str.length > res.length ? str : res
    }
    
    return res
}

let inputStr = prompt('Enter string to check')

document.write(largest(inputStr))