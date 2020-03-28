export class Default {

    private _name: string;
    private _atk: number;
    private _pv: number;

    constructor(nom: string) {
        this._name = nom;
        this._atk = 20;
        this._pv = 100;
    }

    public get getName(): string {
        return this._name;
    }

    public set setName(nom: string) {
        this._name = nom;
    }

    public get getAtk(): number {
        return this._atk;
    }

    public set setAtk(atk: number) {
        this._atk = atk;
    }

    public get getPv(): number {
        return this._pv;
    }

    public set setPv(pv: number) {
        this._pv = pv;
    }
}