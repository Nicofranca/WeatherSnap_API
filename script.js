const botao = document.getElementById('btn-busca');
const form = document.getElementById('form-busca');
const input = document.getElementById('input-cidade');
const textoCidade = document.getElementById('cidade-texto');
const tempDisplay = document.getElementById('temp-valor');

const tempMax = document.getElementById('max');
const tempMin = document.getElementById('min');

const tempMax1 = document.getElementById('tempMaxAmanha1');
const tempMin1 = document.getElementById('tempMinAmanha1');
const tempMax2 = document.getElementById('tempMaxAmanha2');
const tempMin2 = document.getElementById('tempMinAmanha2');
const tempMax3 = document.getElementById('tempMaxAmanha3');
const tempMin3 = document.getElementById('tempMinAmanha3');

const diaSemana1 = document.getElementById('diaSemana1');
const diaSemana2 = document.getElementById('diaSemana2');
const diaSemana3 = document.getElementById('diaSemana3');


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

        const latitude = data.results[0].latitude;
        const longitude = data.results[0].longitude ;

        console.log(latitude)
        console.log(longitude)

        const urlClimaApi = `https://api.open-meteo.com/v1/forecast?&latitude=${latitude}&longitude=${longitude}&current_weather=true&daily=temperature_2m_max,temperature_2m_min,weathercode&timezone=auto`;

        
        fetch(urlClimaApi)
            .then((response) => response.json())
            .then((data) => { 
    
            const temperatura = data.current_weather.temperature;
            const temperaturaMax = data.daily.temperature_2m_max[0];
            const temperaturaMin = data.daily.temperature_2m_min[0];
            const temperaturaMax1 = data.daily.temperature_2m_max[1];
            const temperaturaMin1 = data.daily.temperature_2m_min[1];
            const temperaturaMax2 = data.daily.temperature_2m_max[2];
            const temperaturaMin2 = data.daily.temperature_2m_min[2];
            const temperaturaMax3 = data.daily.temperature_2m_max[3];
            const temperaturaMin3 = data.daily.temperature_2m_min[3];
            const day1 = data.daily.time[1];
            const day2 = data.daily.time[2];
            const day3 = data.daily.time[3];

            tempDisplay.innerText = Math.round(temperatura);
            tempMax.innerText = Math.round(temperaturaMax);
            tempMin.innerText = Math.round(temperaturaMin);
            tempMax1.innerText = Math.round(temperaturaMax1);
            tempMin1.innerText = Math.round(temperaturaMin1);
            tempMax2.innerText = Math.round(temperaturaMax2);
            tempMin2.innerText = Math.round(temperaturaMin2);
            tempMax3.innerText = Math.round(temperaturaMax3);
            tempMin3.innerText = Math.round(temperaturaMin3);
            diaSemana1.innerText = pegarNomeSemana(day1);
            diaSemana2.innerText = pegarNomeSemana(day2);
            diaSemana3.innerText = pegarNomeSemana(day3);


            console.log(tempMaxAmanha)
            console.log(temperaturaMax)
            console.log(temperaturaMin)
            console.log(temperatura)
            console.log(data)
        })

})

})

function pegarNomeSemana(dataISO) {
    const diasSemana = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
    const data = new Date(dataISO + 'T00:00:00'); 
    return diasSemana[data.getDay()];
}