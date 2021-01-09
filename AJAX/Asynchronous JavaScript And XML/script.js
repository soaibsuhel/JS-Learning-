//Asynchronous Programing
//AJAX = Asynchronous JavaScript ANd XML
//Get data Without loading the page

document.getElementById('get_data').addEventListener('click',loadData);

function loadData() {
    // Create XHR Object (Xml Http Request)
    let xhr = new XMLHttpRequest();

    //open
    xhr.open('GET', 'data.txt',true);

    xhr.onload = function (){
        //HTTP statuses
        //200: "ok"
        //403: "Forbidden"
        //404: "Not found"
        if (this.status === 200) {
            document.getElementById('output').innerHTML = `<h4>${this.responseText}</h4?`  
            console.log(this.responseText);
            
        }
    }

    xhr.send();
    console.log(xhr);
}