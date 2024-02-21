import {FightLog} from "../types/common.ts";
import {random} from "./common.ts";
import {FIGHT_TYPES, MAX_POWER, MAX_RESIST} from "../constants/battle.ts";

export const generateFightLog = (rounds: number): FightLog => {
    const fightLog = [];

    for (let i = 1; i <= rounds; i++) {
        fightLog.push({
            round: i,
            power: random(1, MAX_POWER),
            attackType: FIGHT_TYPES[random(0, 1)],
            resist: random(1, MAX_RESIST),
            defenceType: FIGHT_TYPES[random(0, 1)],
        });
    }

    return fightLog;
};