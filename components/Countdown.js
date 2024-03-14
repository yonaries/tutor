import { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';

const Countdown = ({ targetDate }) => {
    const calculateTimeLeft = () => {
        const difference = +new Date(targetDate) - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });

    const timerComponents = [];

    Object.keys(timeLeft).forEach((interval) => {
        if (!timeLeft[interval]) {
            return;
        }
        timerComponents.push(timeLeft[interval] < 10 ? "0" + timeLeft[interval] : timeLeft[interval]);
    });

    return (
        <Stack justifyContent="center" alignItems="center" sx={{ position: 'fixed' }}>
            <Typography variant="h5" component="div" >
                Time
            </Typography>
            <Typography variant="h2" component="div">
                {timerComponents.length ? timerComponents.join(":") : <span>Time&apos;s up!</span>}
            </Typography>
        </Stack>
    );
};

export default Countdown;
