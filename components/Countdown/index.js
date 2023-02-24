import React, {useMemo} from "react";
import styles from './style.module.scss';
import cn from 'classnames';

const Countdown = ({  count, label }) => {

    const padCount = useMemo(() => {
        return String(count).padStart(2, '0');
    }, [count]);

    return (
        <div className={styles.countdown}>
            <div className={styles.countdownBlock}>
                <div className={styles.top}>
                    {padCount}
                </div>
        
            </div>
            <p className={styles.label}>
                {label}
            </p>
        </div>
    );
};

export default Countdown;
