import * as readline from 'readline';
import { Personnage } from './Personnages/Personnage';
import { Combat } from './Partie/Combat';



let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});



/**
 * Instanciation des guerriers
 */
rl.question('Entrer le nom de votre guerrier : ', (answer) => {

    console.log(`Le nom de vôtre guerrier est : ${answer}`);

    let guerrier1: Personnage = new Personnage(answer);
    guerrier1.atk = 15;
    // guerrier1.def = 100; 
    guerrier1.pv = 100;


    let guerrier2: Personnage = new Personnage('Geoffrey');
    console.log(`Un guerrier ennemi du nom de ${guerrier2.nom} apparait !`);
    guerrier2.atk = 5;
    //  guerrier2.def = 70; 
    guerrier2.pv = 100;


    guerrier1.attack(guerrier1.atk, guerrier2); 
    console.log(`${guerrier1.nom} attaque ${guerrier2.nom} et lui inflige -${guerrier1.atk} pv`);
    console.log(`${guerrier2.nom} : ${guerrier2.pv} PV restant`); 

    rl.close();
})









