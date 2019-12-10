$(document).ready(function() {
    const outputCopy = $('#naming-info');
    let westImage = 'img/logos/west.png';
    let eastImage = 'img/logos/east.png';


    // initializes Hero Carousel
    $('.autoplay').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
      });

    $('#submit-button').click(function() {
        let playerID = Math.floor(Math.random() * (3257 - 0 + 1)) + 0;
        let url = 'http://www.balldontlie.io/api/v1/players/' + playerID;

        $.getJSON(url, function(data) {
            console.log(data)
            let playerFirstName = data.first_name
            let playerLastName = data.last_name
            let playerTeam = data.team.full_name
            let confImage = ''

            // Swaps image based on what conference player is in.
            if (data.team.conference === 'West') {
                confImage = westImage
            } else {
                confImage = eastImage
            }

            // ouputs copy
            outputCopy.html(
                `<h1>${playerFirstName} ${playerLastName}</h1>
                <p>is in the </p>
                <img style ="width: 200px;" src="${confImage}">
                <br><br>
                <p>Playing for the</p>
                <img style="width: 200px;" src="img/logos/${data.team.abbreviation}.png">
                <p>${playerTeam}</p>`)
        });
    });
});