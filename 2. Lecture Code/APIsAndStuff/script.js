var elem = document.querySelector('.currency')

async function getCurrPrice(){
    elem.innerHTML = ""
    var response = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
    var data = await response.json()
    console.log(data)
    // console.log(data.bpi.USD.rate)

    for(let curr in data.bpi){
        console.log(curr)
        elem.innerHTML += `<div class="currType">
                                <h1>${curr}:</h1>
                                <h1>${data.bpi[curr].rate}</h1>
                           </div>`
    }
}

window.onload = getCurrPrice()

