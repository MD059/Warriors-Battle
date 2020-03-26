import { Personnage } from '../Personnages/Personnage';

export class Combat {


    public attack(atk: number, target: Personnage) {
        target.pv = target.pv - atk; 
    }
}