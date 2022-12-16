import { teams } from "@prisma/client";
import { league } from "@prisma/client";
import { players } from "@prisma/client";
import { participant } from "@prisma/client";
import { fixture } from "@prisma/client";


export interface Tournament{
 
  league: league;
  teams: teams[] ;
  players: players[];
  fixtures: fixture[];
  

}
