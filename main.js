function createGame(player1, hour, player2){
    return`
        <li>
            <img src="./assets/icon-${player1}.svg" alt="${player1}">
            <strong>${hour}</strong>
            <img src="./assets/icon-${player2}.svg" alt="${player2}">
        </li>
    `
}
let delay = -0.2;                   //variável de controle
function createCard(date,day,games){
    delay = delay + 0.2           // calculado a cada chamada da função, e aplicado no css da div.class
    return`
        <div class="card" style="animation-delay: ${delay}s">  
            <h2>${date} <span>${day}</span></h2>
            <ul> 
                ${games}    
            </ul>
        </div>
    `
}
document.querySelector('#cards').innerHTML =
        createCard(
            "24/11",
            "quinta",
            createGame('switzerland','07:00','cameroon')+
            createGame('portugal','13:00','ghana')+
            createGame('brazil','16:00','serbia')
        )+

        createCard(
            "28/11",
            "segunda",
            createGame('southKorea','10:00','ghana')+
            createGame('brazil','13:00','switzerland')+
            createGame('portugal','16:00','uruguai')
        )+

        createCard(
            "02/12",
            "sexta",
            createGame('southKorea','12:00','portugal')+
            createGame('ghana','12:00','uruguai')+
            createGame('brazil','16:00','cameroon')
        )   






//código antes do refatoramento (refactor)

// document.querySelector('#app').innerHTML =`
//     <header>
//         <img src="./assets/logo.svg" alt="Logo da NLW">
//     </header>
//     <main id="cards">
//         ${createCard(
//             "24/11",
//             "quinta",
//             createGame('switzerland','07:00','cameroon')+
//             createGame('portugal','13:00','ghana')+
//             createGame('brazil','16:00','serbia')
//             )}

//         ${createCard(
//             "28/11",
//             "segunda",
//             createGame('southKorea','10:00','ghana')+
//             createGame('brazil','13:00','switzerland')+
//             createGame('portugal','16:00','uruguai')

//             )}

//         ${createCard(
//             "02/12",
//             "sexta",
//             createGame('southKorea','12:00','portugal')+
//             createGame('ghana','12:00','uruguai')+
//             createGame('brazil','16:00','cameroon')
            
//             )}
//     </main>
// `