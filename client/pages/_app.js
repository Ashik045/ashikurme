/* eslint-disable react/jsx-props-no-spreading */
import CustomCursor from 'custom-cursor-react';
import 'custom-cursor-react/dist/index.css';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
    return (
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
    );
}

export default MyApp;
