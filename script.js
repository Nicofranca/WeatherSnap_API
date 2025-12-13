const latitude = -26.486;
const longitude = -49.067;
const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,cloudcover,wind_speed_10m,precipitation,snowfall,is_day`

fetch(url)
    .then((response) => response.json())
    .then((data) => {
        const horaAtual = 0;
        const temperature = data.hourly.temperature_2m[horaAtual];
        const nuvens = data.hourly.cloudcover[horaAtual];
        const precipitation = data.hourly.precipitation[horaAtual];
        const windSpeed = data.hourly.wind_speed_10m[horaAtual];
        const snowfall = data.hourly.snowfall[horaAtual];

        documentgetElementById('temperature').innerText = `${temperature} ${data.hourly_units.temperature_2m}`;

        if(isDia === 1){
            console.log("Está de dia");
        } else{
            console.log("Está de noite");
        }

        if(precipitation > 0.5){
            console.log("Está chovendo");
        } else if(precipitation < 0.5 ){
            console.log("Chuva Fraca")
        } else{
            console.log("Não está chovendo");
        }

        if(snowfall > 0){
            console.log("Está nevando");
        } else{
            console.log("Não está nevando");
        }

        if(nuvens > 75){
            console.log("Céu muito nublado");
        } else if(nuvens > 50){
            console.log("Céu parcialmente nublado");
        } else{
            console.log("Céu limpo");
        }

        if(windSpeed > 30){
            console.log("Vento forte");
        } else if(windSpeed > 15){
            console.log("Vento moderado");
        } else{
            console.log("Vento fraco");
        }
    })
    .catch((error) => console.error('Erro ao obter dados meteorológicos:', error));

    