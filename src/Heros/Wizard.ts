import { Default } from '../Heros/Default';


export class Wizard extends Default {

    private _mana: number;
    private care_mana: number;


    constructor(nom: string) {
        super(nom);
        this._mana = 30;
        this.care_mana = 10;
    }

    public get getMana(): number {
        return this._mana;
    }


    public healing = () => {

        if (this._mana >= 10) {
            this._mana = this._mana - this.care_mana;
            this.setPv = this.getPv + this.care_mana;
            console.log(`\n${this.getName} active sort de soin (+10 PV) | PV total: ${this.getPv}`);
            console.log("Mana restante : " + this.getMana);  
        }
    }



}