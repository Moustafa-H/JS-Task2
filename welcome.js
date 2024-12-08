const hello = () => {
    let text = ''

    for (let i = 1; i <= 6; i++) {
        text += '<h' + i + '>welcome to my page</h' + i + '>'
    }

    document.write(text)
}

hello()