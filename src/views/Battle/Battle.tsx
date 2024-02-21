import {Button, Grid, useTheme} from "@mui/material";
import {useState} from "react";
import {BATTLE_ROUNDS, MS_PER_ROUND} from "../../constants/battle.ts";
import {BattleResult} from "../../types/common.ts";
import {BattleArena} from "../../components/battle/BattleArena.tsx";
import {PlayersWrapper} from "../../components/players/PlayersWrapper.tsx";

export const Battle = () => {
    const [battleMatch, setBattleMatch] = useState(1)
    const [isFighting, setIsFighting] = useState(false)
    const [match, setMatch] = useState<BattleResult | null>(null)

    const theme = useTheme()

    const startBattle = () => {
        setIsFighting(true)
        setBattleMatch((prevState) => {
            return prevState + 1
        })

        setTimeout(() => {
            setIsFighting(false)
        }, BATTLE_ROUNDS * MS_PER_ROUND)
    }

    return (
        <Grid
            container
            direction="column"
            justifyContent="space-between"
            alignItems="stretch"
            sx={{
                minHeight: '60vh',
                [theme.breakpoints.down('sm')]: {
                    minHeight: '100vh'
                }
            }}
        >
            <Grid item container alignItems="center" justifyContent="center">
                <PlayersWrapper battleResult={match} />
            </Grid>
            <Grid item container alignItems="center" justifyContent="center">
                {isFighting && <BattleArena battleMatch={battleMatch} setMatch={setMatch} />}
            </Grid>
            <Grid item container justifyContent="center" padding={2}>
                <Button onClick={startBattle} disabled={isFighting} variant="contained">Start Battle</Button>
            </Grid>
        </Grid>
    );
};