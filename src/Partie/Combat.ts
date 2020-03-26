import { Personnage } from '../Personnages/Personnage';



export class Combat {


    public attack(atk: number, target: Personnage) {
        if ((target.pv - atk) > 0) {
            target.pv = target.pv - atk;
        }
        else {
            target.pv = 0;
        }
    }


    public TurnByTurn(player1: Personnage, player2: Personnage) {

        while (player1.pv > 0 || player2.pv > 0) {

            if (player2.pv == 0) {
                console.log(`\n${player1.nom} est le vainqueur !`);
                break;
            }

            this.attack(player2.atk, player1);
            console.log(`\n${player2.nom} attaque ${player1.nom}`);
            console.log(`PV restant de ${player1.nom} : ${player1.pv}`);

            if (player1.pv == 0) {
                console.log(`\n${player2.nom} est le vainqueur !`);
                break;
            }

            this.attack(player1.atk, player2);
            console.log(`\n${player1.nom} attaque ${player2.nom}`);
            console.log(`PV restant de ${player2.nom} : ${player2.pv}`);

        }
    }
}