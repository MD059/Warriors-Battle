import { Partie } from './Game/Game';


let partie: Partie = new Partie(15);
partie.initialiser(); 
partie.round(); 
partie.display_winner(); 
