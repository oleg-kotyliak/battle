import {Box, Card, CardMedia, Typography} from "@mui/material";
import {useEffect, useState} from "react";
import {BATTLE_ROUNDS, INITIAL_HEALTH, MS_PER_ROUND} from "../../constants/battle.ts";

type Props = {
    playerName: 'player' | 'enemy',
    damageHistory: number[] | null,
    winner: boolean
}

export const PlayerCard = ({playerName, damageHistory, winner}: Props) => {
    const [health, setHealth] = useState(INITIAL_HEALTH)
    const [showResult, setShowResult] = useState(false)
    const playerImg = `/public/media/${playerName}.jpg`

    useEffect(() => {
        setHealth(100)
        setShowResult(false)
    }, [damageHistory])

    useEffect(() => {
        if (damageHistory) {
            let round = 0
            const roundsIteration = setInterval(() => {
                const damage = damageHistory?.pop()

                setHealth((prevState) => {
                    return prevState - (damage || 0)
                })

                round += 1
                if (round === BATTLE_ROUNDS) {
                    clearInterval(roundsIteration)
                    setShowResult(true)
                }
            }, MS_PER_ROUND)
        }
    }, [damageHistory])

    return (
        <Card sx={{ display: 'flex' }}>
            <CardMedia
                component="img"
                sx={{ width: 150 }}
                image={playerImg}
                alt={playerName}
            />

            <Box sx={{ display: 'flex', flexDirection: 'column', p: 1 }}>
                <Typography variant={'h6'}>{playerName}</Typography>
                <Typography>Health: {health}</Typography>
                <Typography>{showResult ? winner ? 'Victory' : 'Defeat' : null}</Typography>
            </Box>
        </Card>
    );
};