import {PlayerCard} from "./PlayerCard.tsx";
import {Grid} from "@mui/material";
import {BattleResult} from "../../types/common.ts";

export const PlayersWrapper = ({battleResult}: {battleResult: BattleResult | null}) => {

    const playerWins = (battleResult?.playerDamage || 0) < (battleResult?.enemyDamage || 0)

    return (
        <Grid container justifyContent="space-between">
            <Grid item xs={12} md={6}>
                <PlayerCard playerName={'player'} winner={playerWins} damageHistory={battleResult?.playerDamageHistory || null} />
            </Grid>
            <Grid item xs={12} md={6}>
                <PlayerCard playerName={'enemy'} winner={!playerWins} damageHistory={battleResult?.enemyDamageHistory || null} />
            </Grid>
        </Grid>
    );
};