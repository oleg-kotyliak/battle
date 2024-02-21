import {Box, Paper, useTheme} from "@mui/material";
import {ReactElement} from "react";
import {green} from "@mui/material/colors";

type Props = {
    children: ReactElement
}
export const MainLayout = ({children} : Props) => {
    const theme = useTheme()

    return (
        <Box
            sx={{
                backgroundColor: green[800],
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'flex-start',
                paddingTop: '100px',
                width: '100%',
                [theme.breakpoints.down('sm')]: {
                    alignItems: 'flex-start',
                    paddingTop: 0,
                    height: '100hv'
                },
            }}
        >
            <Paper
                elevation={2}
                sx={{
                    background: '#fff',
                    position: 'relative',
                    width: '100%',
                    maxWidth: theme.breakpoints.values.md,
                    borderRadius: '5px',
                    flexGrow: 1,
                    minHeight: '60vh',
                    [theme.breakpoints.down('sm')]: {
                        maxWidth: 'sm',
                        paddingTop: 0,
                        height: '100vh',
                        borderRadius: '0'
                    },
                }}
            >
                {children}
            </Paper>
        </Box>
    );
};