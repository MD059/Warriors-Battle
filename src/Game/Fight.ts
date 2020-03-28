import { Default } from '../Heros/Default';



export class Combat {


    public attack(striker: Default, target: Default) {

        if ((target.getPv - striker.getAtk) > 0) {
            target.setPv = target.getPv - striker.getAtk;
        }
        else {
            target.setPv = 0;
        }
    }



}