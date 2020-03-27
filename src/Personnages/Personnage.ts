import { Combat } from '../Partie/Combat';
import { Wizard } from './Wizard';


export class Personnage extends Combat {

    private _name: string;
    private _atk: number;
    private _def: number;
    private _pv: number;


    constructor(nom: string) {
        super();
        this._name = nom;
        this._atk = 0;
        this._def = 0;
        this._pv = 0;
    }


    public get name(): string {
        return this._name;
    }

    public set name(nom: string) {
        this._name = nom;
    }

    public get atk(): number {
        return this._atk;
    }

    public set atk(atk: number) {
        this._atk = atk;
    }

    public get def(): number {
        return this._def;
    }

    public set def(def: number) {
        this._def = def;
    }

    public get pv(): number {
        return this._pv;
    }

    public set pv(pv: number) {
        this._pv = pv;
    }


}