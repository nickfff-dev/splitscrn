import { teams} from '@prisma/client';
import { players } from '@prisma/client';
import { Participant } from './Participant';

export interface League{
  name: string,
  region: string,
  owner: string,
  inviteOnly: string,
  inviteCode: string,
  buyIn: boolean,
  buyInFee: number,
  draftTime: string,
  startDate: string,
  endDate: string,
  duration: string,
 players: Array<players>,
  teams: Array<teams>,
  minPlayers: number,
  maxPlayers: number,
  houseFee: number,
  members: Array<Participant>,
  
}
