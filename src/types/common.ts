export type FightType = 'strength' | 'speed';

export type Fight = {
    round: number
    power: number
    attackType: FightType
    resist: number
    defenceType: FightType
};

export type FightLog = Fight[]

export type BattleResult = {
    playerDamage: number
    enemyDamage: number
    battleMatch: number
    playerDamageHistory: number[]
    enemyDamageHistory: number[]
    playerFightLog: FightLog
    enemyFightLog: FightLog
}