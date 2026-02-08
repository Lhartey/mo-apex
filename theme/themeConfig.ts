import type { ThemeConfig } from 'antd';

const theme: ThemeConfig = {
    token: {
        fontSize: 16,
        colorPrimary: '#C5A059', // Muted Gold
        colorTextHeading: '#000000',
        colorTextBase: '#262626',
        fontFamily: 'var(--font-inter)',
        borderRadius: 0, // Sharp edges for "structural" feel
    },
    components: {
        Button: {
            colorPrimary: '#121212',
            algorithm: true,
            fontWeight: 600,
            controlHeightLG: 50,
            borderRadius: 0,
        },
        Typography: {
            fontWeightStrong: 700,
            fontFamilyCode: 'var(--font-inter)',
        }
    },
};

export default theme;
