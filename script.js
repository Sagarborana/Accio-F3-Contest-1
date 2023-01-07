const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false";

//Handling Promise using async await
const fetchCoins = async () => {
    const response = await fetch(url);
    const jsonData = await response.json();
    return jsonData;
  }

  //Handling Promise using .then  --> just for the contest bcoz it's mentioned in the question
//   const fetchCoins = async () => {
//     const response = fetch(url);
//     return response.then(data => data.json())
//   }

  const setCoins = async () => {
    const data = await fetchCoins();
    let rows = "";
    const coinBody = document.getElementById("coin-body");

    data.map((item) => {
        const percent = item.price_change_percentage_24h.toFixed(2);
        const symbol = item.symbol.toUpperCase();
        rows += `<tr>
                    <td class="imgName" ><img width="15px" src="${item.image}">${item.name}</td>
                    <td >${symbol}</td>
                    <td >$${item.current_price}</td>
                    <td >$${item.total_volume}</td>
                    <td  class="${percent > 0 ? "positive" : "negative"}">${percent}%</td>
                    <td>Mkt Cap : $${item.market_cap}</td>
                </tr>`;
    });
    coinBody.innerHTML = rows;
  }
  setCoins();