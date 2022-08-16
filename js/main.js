const base_url = "https://api.shrtco.de/v2/";

const btn = document.getElementById('btn');
const urlInput = document.getElementById('url');
const resultDiv = document.getElementById('result')


const fetchData = async(endpoint) =>{
    const webAdd = `${base_url}${endpoint}`;
    let response =  await fetch(webAdd);
    response = await response.json()
    return response.result; 
}

const submitListener = async(e) => {
    try{
        const value = urlInput.value
        btn.innerHTML ="Loading...";
        const response  = await fetchData("shorten?url="+ value);
        btn.innerHTML ="Shorten It!";
        formatResult(response.short_link3, value)
    }catch(e){
        throw new Error(e.message)
      }


}

const formatResult = (shortUrl, originalUrl) =>{
    const p = document.createElement('p');
    const txtNode = document.createTextNode(shortUrl + " " + originalUrl)
    p.append(txtNode);
    resultDiv.appendChild(p)
}
