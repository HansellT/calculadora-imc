function calcularIMC() {
    let peso = parseFloat(prompt("Introduce tu peso en kg:"));
    let altura = parseFloat(prompt("Introduce tu altura en metros:"));
    let containerDOM = document.getElementById("container");

    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        containerDOM.innerHTML = `
            <h1>⚠️ Datos inválidos</h1>
            <p>Por favor, ingrese valores correctos.</p>
            <button onclick="reiniciar()">Reintentar</button>
        `;
        containerDOM.style.backgroundColor = "  #e0245c";
    } else {
        let imc = peso / (altura * altura);
        let mensaje = "";
        let imgSrc = "";

        if (imc < 18.5) {
            mensaje = "Bajo peso";
            imgSrc = "./images/bajo.jpg";
            containerDOM.style.backgroundColor = "  #f4c542";
        } else if (imc < 24.9) {
            mensaje = "Peso normal";
            imgSrc = "./images/normal.jpg";
            containerDOM.style.backgroundColor = "  #24e085";
        } else if (imc < 29.9) {
            mensaje = "Sobrepeso";
            imgSrc = "./images/sobre.jpg";
            containerDOM.style.backgroundColor = "  #f4a742";
        } else {
            mensaje = "Obesidad";
            imgSrc = "./images/obe.jpg";
            containerDOM.style.backgroundColor = "  #e0245c";
        }

        containerDOM.innerHTML = `
            <h1>Tu IMC es <b>${imc.toFixed(2)}</b></h1>
            <p>${mensaje}</p>
            <img src="${imgSrc}" alt="IMC">
            <button onclick="reiniciar()">Reintentar</button>
        `;
    }
}

function reiniciar() {
    document.getElementById("container").innerHTML = '';
    calcularIMC();
}


calcularIMC();