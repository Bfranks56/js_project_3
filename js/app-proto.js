$(document).ready(function() {
    const outputCopy = $('#naming-info');
    const btnSubmit = $('#submit-button')
});

function handleButton() {

}
function playerSearch() {
    let firstName = $('#first-name').val;
    let lastName = $('#last-name').val;
};

// const countryCode = "US"
let playerId = 14

// const countryRequest = new XMLHttpRequest()
const playerRequest = new XMLHttpRequest()

playerRequest.addEventListener('readystatechange', (e) => {
    if(e.target.readyState === 4 && e.target.status === 200) {
        const data = JSON.parse(e.target.responseText)
        // console.log(data)
        const player = data.find((player) => player.id === playerId)
        console.log(player.team)
    } else if (e.target.readyState === 4) {
        console.log('unable to fetch data')
    }
})
// countryRequest.addEventListener('readystatechange', (e) => {
//     if(e.target.readyState === 4 && e.target.status === 200) {
//         const data = JSON.parse(e.target.responseText)
        // const country = data.find((country) => country.alpha2Code === countryCode)
        // console.log(country.name)
//     } else if (e.target.readyState === 4) {
//             console.log('unable to fetch data')
//         }
// })

playerRequest.open('GET', 'https://www.balldontlie.io/api/v1/players')
playerRequest.send()
// countryRequest.open('GET', 'http://restcountries.eu/rest/v2/all')
// countryRequest.send()