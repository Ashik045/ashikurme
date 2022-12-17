/* eslint-disable react/jsx-props-no-spreading */
import CustomCursor from 'custom-cursor-react';
import 'custom-cursor-react/dist/index.css';
import { useEffect, useState } from 'react';
import '../styles/globals.css';
import styles from '../styles/home.module.scss';

function MyApp({ Component, pageProps }) {
    const [loading, setLoading] = useState(false);

    // eye loading effectt
    useEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => {
            console.log('run');
            setLoading(false);
        }, 4000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
        {/* show the beautiful eye loading animation */}
        {loading ? (
                <div className={styles.loader_main}>
                    <span className={styles.loader} />
                </div>
            ) : (
                <>
                <Component {...pageProps} />
                <div>
                    <CustomCursor
                        targets={['.link', '.your-css-selector']}
                        customClass="custom-cursor"
                        dimensions={45}
                        opacity={0.3}
                        strokeWidth={8}
                        fill="#ccd6f6"
                        strokeColor="#64ffda"
                        smoothness={{
                            movement: 0.2,
                            scale: 0.2,
                            opacity: 0.2,
                        }}
                        targetOpacity={0.5}
                    />
                </div>
                </>
            )}
            </>
    );
}

export default MyApp;
