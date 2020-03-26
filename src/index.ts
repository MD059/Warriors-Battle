import * as readline from 'readline';
import { Personnage } from './Personnages/Personnage';
import { Combat } from './Partie/Combat';



let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});



let combat: Combat = new Combat(); 



/**
 * Instanciation des guerriers
 */
rl.question('\nEntrer le nom de votre guerrier : ', (answer) => {

    let guerrier1: Personnage = new Personnage(answer);
    guerrier1.atk = 25;
    guerrier1.pv = 100;


    let guerrier2: Personnage = new Personnage('Hercule');
    console.log(`\r\nLe guerrier ${guerrier2.nom} vous provoque en Duel !`);
    guerrier2.atk = 43;
    guerrier2.pv = 100;


    combat.TurnByTurn(guerrier1, guerrier2); 

    rl.close();
})