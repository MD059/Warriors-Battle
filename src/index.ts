import * as readline from 'readline';
import { Personnage } from './Personnages/Personnage';
import { Combat } from './Partie/Combat';
import { Wizard } from './Personnages/Wizard'; 



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
    guerrier1.atk = 10;
    guerrier1.pv = 100;

    let guerrier2: Personnage = new Personnage("Hercule");
    guerrier2.atk = 10;
    guerrier2.pv = 100;

    let wizard1: Wizard = new Wizard('Harry');
    wizard1.atk = 40;
    wizard1.pv = 100;
    wizard1.mana = 50; 

    let wizard2: Wizard = new Wizard('Dumbledore');
    wizard2.atk = 40;
    wizard2.pv = 100;
    wizard2.mana = 50; 

    let warriors = [guerrier1, guerrier2]; 
    let wizards = [wizard1, wizard2]; 

    combat.Round(warriors, wizards); 

    rl.close();
})