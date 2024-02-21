import {PlayerCard} from "./PlayerCard.tsx";
import {Grid} from "@mui/material";
import {BattleResult} from "../../types/common.ts";

export const PlayersWrapper = ({battleResult}: {battleResult: BattleResult | null}) => {

    return (
        <Grid container justifyContent="space-between" spacing={2}>
            <Grid item xs={12} md={6}>
                <PlayerCard
                    playerName={'player'}
                    winner={battleResult?.playerWins || null}
                    damageHistory={battleResult?.playerDamageHistory || null} />
            </Grid>
            <Grid item xs={12} md={6}>
                <PlayerCard
                    playerName={'enemy'}
                    winner={!battleResult?.playerWins || null}
                    damageHistory={battleResult?.enemyDamageHistory || null} />
            </Grid>
        </Grid>
    );
};