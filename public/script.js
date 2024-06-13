

var convertBtn = document.querySelector('.convert-button'); 
var URLinput = document.querySelector('.URL-input');
convertBtn.addEventListener('click', () => { 
    console.log(`URL: ${URLinput.value.split("v=")[1]}`); 
   dados(URLinput.value.split("=")[1].trim()); 
    
});


async function dados(url){
    console.log(url);
    api_key = 'AIzaSyAgSMRuR4tyzg7qCbMIL89TtU-9DUqE-t8'
    const respose = await fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${url}&key=${api_key}`)
    const data = await respose.json()
    const title = data.items[0].snippet.title
    console.log(title);

   sendURL (url,title)


}
async function  sendURL( URL, title ) { 
    fetch(`https://nettube-gray.vercel.app/download?URL=${URL}&title=${title}`, { 
        método:'GET' 
    }).then( res => res.json()) 
    .then( json => console.log(json)); 
    window.location.href = `https://nettube-gray.vercel.app/download?URL=${URL}&title=${title}`; 


}