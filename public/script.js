

var convertBtn = document.querySelector('.convert-button'); 
var URLinput = document.querySelector('.URL-input');
convertBtn.addEventListener('click', () => { 
    console.log(`URL: ${URLinput.value}`); 
    sendURL(URLinput.value); 
});
async function  sendURL( URL ) { 
    fetch(`http://localhost:3000/download?URL=${URL}`, { 
        método:'GET' 
    }).then( res => res.json()) 
    .then( json => console.log(json)); 
    window.location.href = `http://localhost:3000/download?URL=${URL}`; 


}