console.log('dssdf')

const baseUrl = 'http://localhost:3000/v1/search/text/'

async function fetchAsync (text) {
    const url = baseUrl+text;
    let response = await fetch(url);
    let data = await response.json();
    appendData(data)
    console.log(data)
    return data;
}

const onKeyUp = (event) => {
    if(event.value.length > 2) {
        fetchAsync(event.value);
    }
    else {
        dom = document.getElementById("search_result_list")
        dom.innerHTML = ''
    }
}

const appendData = (data) => {
    let html = '';
    for(let i =0;i<data.length;i++) {
        const temp = `<tr>`+
        `<th scope="row">${i}</th>`+
        `<td>${data[i].name}</td>`+
        `<td>${data[i].score}</td>`+
      `</tr>`
      html = html + temp;
    }
    dom = document.getElementById("search_result_list")
    dom.innerHTML = html
}

// http://localhost:3000/v1/search/text/Bou