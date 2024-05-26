//Traccia 1
// let n=2;
// for(let i=1; i<=10; i++){
//     console.log(n*i);
// }

//Traccia 2
// let somma=0;
// let c=0;
// for(let i=1; i<=20; i++){
//     if(i%2==0){
//         console.log(i);
//     }else{
//         somma=somma+i;
//         c++;
//     }
// }
// console.log(`La media è: ${somma/c}`);

//Traccia 3
//let n=parseInt(prompt("Inserisci il numero della bevanda"));
// let t=0;
// for(let i=0; i<=t; i++){
//     if(n!=1 && n!=2 && n!=3){
//         t++;
//         n=parseInt(prompt("Reinserisci il numero della bevanda"));
//     }else if(n==1){
//         alert("È stata selezionata l'acqua");
//     }else if(n==2){
//         alert("È stata selezionata la Coca Cola");
//     }else if(n==3){
//         alert("È stata selezionata la birra");
//     }
// }

// let choice;
// do{
//     choice = parseInt(prompt(`Scegli una bevanda:
//     1- Acqua
//     2- Coca Cola
//     3- Birra`))
// }while(choice!=1 && choice!=2 && choice!=3);

// switch (choice){
//     case 1:
//         alert("Ecco la tua acqua");
//         break;
//     case 2:
//         alert("Ecco la tua Coca Cola");
//         break;
//     case 3:
//         alert("Ecco la tua birra");
//         break;
// }