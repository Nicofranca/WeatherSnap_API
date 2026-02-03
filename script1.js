const latitude = -26.486; 
const longitude = -49.067;
const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m&cloudcover&wind_speed_10m&precipitation&snowfall&is_day&timezone=auto`;

fetch(url)
    .then((response) => response.json())
    .then((data) => {
        const horaAtual = 0; 
        
        const temperature = data.hourly.temperature_2m[horaAtual];
        const nuvens = data.hourly.cloudcover[horaAtual];
        const precipitation = data.hourly.precipitation[horaAtual];
        const windSpeed = data.hourly.wind_speed_10m[horaAtual];
        const snowfall = data.hourly.snowfall[horaAtual];
        const isDia = data.hourly.is_day[horaAtual]; 
        const horario = data.hourly.timezone=auto[horaAtual]
        
        document.getElementById('temperature').innerText = `${temperature} ${data.hourly_units.temperature_2m}`;


        if (isDia === 1) {
            console.log("Está de dia");
            document.getElementById('imagem-nuvem').src = "images/nuvemComSol.png";
        } else {
            console.log("Está de noite");
            document.getElementById('imagem-nuvem').src = "images/lua.png";
        }

        if (precipitation > 2.5) { 
            console.log("Chuva Forte");
            document.getElementById('condicao').innerText = "Chuva Forte";
        } else if (precipitation > 0.0) { 
            console.log("Chuva Fraca ou Leve");
        } else {
            console.log("Não está chovendo");
        }
        
        if (snowfall > 0) {
            document.getElementById('condicao').innerText = "Está nevando";
        } else {
        }

        if (nuvens > 75) {
            console.log("Céu muito nublado");
            document.getElementById('condicao').innerText = "Céu nublado";
            document.getElementById('imagem-nuvem').src = "images/nuvem.png";
        } else if (nuvens > 50) {
            console.log("Céu parcialmente nublado");
            document.getElementById('condicao').innerText = "Céu nublado";
        } else {
        }

        if (windSpeed > 30) {
            console.log("Vento forte");
        } else if (windSpeed > 15) {
            console.log("Vento moderado");
        } else {
        }

        console.log("Horario: ");
        document.getElementById('current-time').innerText = `${horario}`
        
    })
    .catch((error) => console.error('Erro ao obter dados meteorológicos:', error));