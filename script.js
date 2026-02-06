const botao = document.getElementById('btn-busca');
const form = document.getElementById('form-busca');
const input = document.getElementById('input-cidade');
const textoCidade = document.getElementById('cidade-texto')
const tempDisplay = document.getElementById('temp-valor')

botao.addEventListener('click', () => {
    
    botao.classList.add('hidden');

    form.classList.remove('hidden');

});

form.addEventListener('submit', (event) => {
    event.preventDefault(); //nao deixa a pagina recarre no ente

    const cidade = input.value;

    textoCidade.innerText = cidade;
    form.classList.add('hidden');
    botao.classList.remove('hidden');


    
console.log("Cidade: "+cidade)

const urlGeoApi = `https://geocoding-api.open-meteo.com/v1/search?name=${cidade}&count=1&language=pt&format=json`
fetch(urlGeoApi)

    .then((response) => response.json())

    .then((data) => {

        const latitude = data.results[0].latitude
        const longitude = data.results[0].longitude 

        console.log(latitude)
        console.log(longitude)

        const urlClimaApi = `https://api.open-meteo.com/v1/forecast?&latitude=${latitude}&longitude=${longitude}&current_weather=true&daily=temperature_2m_max,temperature_2m_min,weathercode&timezone=auto`;

        
        fetch(urlClimaApi)
            .then((response) => response.json())
            .then((data) => { 
    
            const temperatura = data.current_weather.temperature;

            tempDisplay.innerText = Math.round(temperatura)

            console.log(temperatura)
            console.log(data)
        })

})

})
