import {useMemo} from "react";
import {generateFightLog} from "../helpers/battle.ts";
import {BattleResult, FightLog} from "../types/common.ts";

export const useCalculateBattleResult = (rounds: number, battleMatch: number): BattleResult => {
    return useMemo(() => {
        const result = {
            playerDamage: 0,
            enemyDamage: 0,
            playerDamageHistory: [] as number[],
            enemyDamageHistory: [] as number[],
            battleMatch
        }

        const playerFightLog: FightLog = generateFightLog(rounds)
        const enemyFightLog: FightLog = generateFightLog(rounds)

        for (let i = 0; i <= rounds; i++) {
            if (playerFightLog[i] && enemyFightLog[i]) {
                const playerDefence = playerFightLog[i].defenceType === enemyFightLog[i].attackType ? playerFightLog[i].resist : 0
                const enemyDefence = enemyFightLog[i].defenceType === playerFightLog[i].attackType ? enemyFightLog[i].resist : 0

                const playerDamage = playerDefence < enemyFightLog[i].power ? enemyFightLog[i].power - playerDefence : 0
                const enemyDamage = enemyDefence < playerFightLog[i].power ? playerFightLog[i].power - enemyDefence : 0

                result.playerDamage += playerDamage
                result.enemyDamage += enemyDamage
                result.playerDamageHistory.push(playerDamage)
                result.enemyDamageHistory.push(enemyDamage)
            }
        }

        return {...result, playerFightLog, enemyFightLog, playerWins: result.playerDamage < result.enemyDamage}
    }, [rounds, battleMatch])
};