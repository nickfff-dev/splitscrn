import { League } from './League';
import { Team } from './Team';
import { Player } from './Player';
export interface Participant
{

  username: string,
  leagues: Array<League>,
  teams: Array<Team>,
  players: Array<Player>,

  }
  

