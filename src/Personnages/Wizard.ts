import { Personnage } from './Personnage';



export class Wizard extends Personnage {

    private _mana: number;
    private care_mana: number;


    constructor(nom: string) {
        super(nom);
        this._mana = 0;
        this.care_mana = 10;
    }


    public get mana(): number {
        return this._mana;
    }

    public set mana(mana: number) {
        this._mana = mana;
    }


    /**
     * Méthode de soin 
     * qui consomme 10 de mana
     * et rajoute 10 de pts de vie
     */
    public healing = () => {
        if ((this._mana - this.care_mana) >= 0) {
            this._mana = this._mana - this.care_mana;
            this.pv = this.pv + this.care_mana;
            console.log(`\n${this.name} utilise sort de soin (+10 pv restauré)`); 
            console.log(`pv total : ${this.pv}`); 
        }
        else {
            console.log(`${this.name} tente de se soigner mais mana insuffisante`);
        }
    }



}