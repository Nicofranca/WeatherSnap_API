const cidade = "Jaraguá do Sul"
const url2 = `https://geocoding-api.open-meteo.com/v1/search?name=${cidade}&count=1&language=pt&format=json`
fetch(url2)

    .then((response) => response.json())

    .then((data) => {

        const latitude = data.results[0].latitude
        const longitude = data.results[0].longitude 

        console.log(latitude)
        console.log(longitude)

        const url = `https://api.open-meteo.com/v1/forecast?&latitude=${latitude}&longitude=${longitude}&current_weather=true&daily=temperature_2m_max,temperature_2m_min,weathercode&timezone=auto`;

        
        fetch(url)
            .then((response) => response.json())
            .then((data) => { 
    
            const temperatura = data.current_weather.temperature;

            console.log(temperatura)
            console.log(data)
        })

})


const botao = document.getElementById('btn-busca');
const form = document.getElementById('form-busca');
const input = document.getElementById('input-cidade');

botao.addEventListener('click', () => {
    
    botao.classList.add('hidden');

    form.classList.remove('hidden');

});
