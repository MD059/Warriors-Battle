import { Default } from "../Heros/Default";
import { Warrior } from "../Heros/Warrior";
import { Wizard } from "../Heros/Wizard";
import { Combat } from "../Game/Fight";

export class Partie {

    private _tour: number;
    private warrior: Warrior[];
    private wizard: Wizard[];


    constructor(tour: number) {
        this._tour = tour;
        this.warrior = new Array<Warrior>();
        this.wizard = new Array<Wizard>();
    }


    public initialiser = () => {
        let Massi: Warrior = new Warrior('Massi');
        let Voldemort: Wizard = new Wizard('Voldemort');

        this.warrior.push(Massi);
        this.wizard.push(Voldemort);
    }


    public round = () => {
        
        let atk = new Combat();

        for (let h = 0; h < this._tour; h++) {
            console.log("\nTour " + h);
            for (let i = 0; i < this.warrior.length; i++) {
                for (let j = 0; j < this.wizard.length; j++) {
                    if (this.warrior[i].getPv == 0 || this.wizard[j].getPv == 0) {
                        console.log("Fin de la partie!");
                        return;
                    }
                    else {
                        atk.attack(this.warrior[i], this.wizard[j]);
                        console.log("\n" + this.warrior[i].getName + " vient d'attaquer " + this.wizard[j].getName);
                        console.log("PV restants de " + this.wizard[i].getName + " : " + this.wizard[i].getPv);

                        this.wizard[j].healing();
                        atk.attack(this.wizard[j], this.warrior[i]);
                        console.log("\n" + this.wizard[i].getName + " vient d'attaquer " + this.warrior[j].getName);
                        console.log("PV restants de " + this.warrior[i].getName + " : " + this.warrior[i].getPv);
                    }
                }
            }
        }
    }


    public display_winner = () => {

        for (let i = 0; i < this.warrior.length; i++) {
            for (let j = 0; j < this.wizard.length; j++) {
                if (this.warrior[i].getPv == 0) {
                    console.log(this.warrior[i].getName + " a perdu!")
                }
                else if (this.wizard[j].getPv == 0) {
                    console.log(this.wizard[j].getName + " a perdu!");
                }
            }
        }

    }


}