const parseCSVInput = (input) => {
    const out = [];
    if(input && input.givenName) 
        out.push(input.givenName)
    if(input && input.middleName) 
        out.push(input.middleName)
    if(input && input.surname) 
        out.push(input.surname)
    return out;
}

const parseTextToWords = (text) => {
    console.log(text)
    return text.split(" ").map(elm => elm.trim()).filter(elm => elm!='')
}

module.exports = {
    parseCSVInput,
    parseTextToWords
}