//Prima traccia

// function giocoDadi(n){
//     let somma1=0;
//     let somma2=0;
//     for(let i=1; i<=n; i++){
//         let t1=Math.floor(Math.random()*(6-1)+1);
//         console.log("Il primo giocatore tira:",t1);
//         somma1=somma1+t1;

//         let t2=Math.floor(Math.random()*(6-1)+1);
//         console.log("Il secondo giocatore tira:",t2);
//         somma2=somma2+t2;
//     }
//     if(somma1>somma2){
//         console.log("Ha vinto il primo giocatore!");
//     }else if(somma1<somma2){
//         console.log("Ha vinto il secondo giocatore!");
//     }else if(somma1==somma2){
//         console.log("Parità!");
//     }
// }
// giocoDadi(parseInt(prompt("Quanti lanci hanno a disposizione i giocatori?")));



//Seconda traccia

// function fizzbuzz(n){
//     for (let i=1;i<=n;i++){
//         if(i%15==0){
//             console.log("FizzBuzz");           
//         }else if(i%5==0){
//             console.log("Buzz");
//         }else if(i%3==0){
//             console.log("Fizz");
//         }else{
//             console.log(i);
//         }
//     }
// }
// fizzbuzz(100);

//Terza traccia

// function contaCifre(n){
//     console.log(Math.log(n)*Math.LOG10E+1|0);
// }
// contaCifre(10000);

// function contaCifre(n){
//     if(Number.isInteger(n)==false){
//         console.log("Non è un numero intero!");
//     }else if(n>=0 && n<10){
//             console.log("Una cifra");
//         }else if(n>=10 && n<100){
//             console.log("Due cifre");
//         }else if(n>=100 && n<1000){
//             console.log("Tre cifre");
//         }else if(n>=1000 && n<=9999){
//             console.log("Quattro cifre");
//         }else if(n>9999){
//             console.log("Il numero è troppo grande");
//         }
//     }
// contaCifre(1325);