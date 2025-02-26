const chaveDaApi = "c3e473277bf5432ea5b184459252602";
const botaoDeBusca = document.querySelector(".btn-busca");

botaoDeBusca.addEventListener("click", async () => {
    const cidade = document.getElementById("input-busca").value;

    const dados = await buscarDadosDaCidade(cidade);

    console.log(dados);

    preencherDadosNaTela(dados, cidade)
});

async function buscarDadosDaCidade(cidade) {
    const apiUrl = 'https://api.weatherapi.com/v1/current.json?key=${chaveDaApi}&q=${cidade}$aqi=no&lang=pt';

    const resposta = await fetch(apiUrl);

    const dados = resposta.json();

    return dados;
}

function preencherDadosNaTela(dados, cidade) {
    const temperatura = dados.current.temp_c;
    console.log(temperatura);
    
    document.getElementById("cidade").textContent = cidade;

    document.getElementById("temperatura").textContent = '${temperatura} °C';
}