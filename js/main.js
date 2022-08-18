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
        //formatResult("https://jhcghgjkjkjk.xyz", "https://google.com");
        const value = urlInput.value
        btn.innerHTML ="Loading...";
        const response  = await fetchData("shorten?url="+ value);
        formatResult(response.short_link3, value)
        urlInput.value = "";
    }catch(e){
        throw new Error(e.message)
    }finally{
        btn.innerHTML ="Shorten It!";
    }


}

const copyUrl = (url) =>{
    alert(url);
}

const formatResult = (shortUrl, originalUrl) => {
    const div = document.createElement('div');
    div.classList.add("result__wrapper");

    const content = `
        <ul class="flex result__list">
            <li> <a href="${originalUrl}">${originalUrl}</a></li>
            <li> <a href="${shortUrl}">${shortUrl}</a></li>
            <li> <a class="btn btn--cyan" onClick="return copyUrl('${shortUrl}')" href="#">Copy</a></li>
        </ul>
    `;
    div.innerHTML = content;

    resultDiv.appendChild(div);
}

// const formatResult = (shortUrl, originalUrl) =>{
//     const div = document.createElement('div');
//     div.classList.add("result__wrapper");

//     const ul = document.createElement("ul");
//     ul.classList.add("result__list", "flex");

//     const l1 = document.createElement("li");
//     const a1 = document.createElement('a');
//     a1.innerHTML = originalUrl;
//     a1.setAttribute("href", originalUrl)
//     l1.appendChild(a1)

//     const l2 = document.createElement("li");
//     const a2 = document.createElement('a');
//     a2.innerHTML = shortUrl;
//     a2.setAttribute("href", shortUrl)
//     l2.appendChild(a2)

//     const l3 = document.createElement("li");
//     const a3 = document.createElement('a');
//     a3.innerHTML = "copy";
//     a3.classList.add("btn", "btn--cyan")
//     a3.addEventListener("click", ()=> alert("I dey work o!"));
//     l3.appendChild(a3)

//     ul.appendChild(l1)
//     ul.appendChild(l2)
//     ul.appendChild(l3)
//     div.appendChild(ul)
//     resultDiv.appendChild(div);



//     // const txtNode = document.createTextNode(shortUrl + " " + originalUrl)
//     // p.append(txtNode);
//     // resultDiv.appendChild(p)
// }
