import {useCalculateBattleResult} from "../../hooks/useCalculateBattleResult.tsx";
import {BATTLE_ROUNDS} from "../../constants/battle.ts";
import {BattleResult} from "../../types/common.ts";
import {Dispatch, FC, memo, SetStateAction, useEffect} from "react";

const battlePreset = {
    src: '/public/media/battle.gif',
    alt: 'battle'
}

type Props = {
    battleMatch: number,
    setMatch: Dispatch<SetStateAction<BattleResult | null>>;
};

export const BattleArena: FC<Props> = memo(({battleMatch, setMatch}) => {
    const battleResult = useCalculateBattleResult(BATTLE_ROUNDS, battleMatch)

    useEffect(() => {
        setMatch(battleResult)
    }, [battleMatch])

    const fightScene = <img style={{width: 250, height: 250}} src={battlePreset.src} alt={battlePreset.alt}/>

    return (
        <>
            {fightScene}
        </>
    );
});