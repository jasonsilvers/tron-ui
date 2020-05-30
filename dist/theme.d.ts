declare const theme: {
    breakpoints: string[];
    space: number[];
    fontSizes: number[];
    borderWidths: (string | number)[];
    radii: (string | number)[];
    lineHeights: string[];
    measures: string[];
    typefaces: {
        serif: string;
        sansSerif: string;
        mono: string;
    };
    textStyles: {
        caps: {
            textTransform: string;
            letterSpacing: string;
        };
        'tracked-tight': {
            letterSpacing: string;
        };
        copy: {
            lineHeight: number;
            maxWidth: string;
        };
        title: {
            lineHeight: number;
            maxWidth: string;
        };
        capitalize: {
            textTransform: string;
        };
    };
    colors: {
        'dark-red': string;
        red: string;
        'light-red': string;
        'washed-red': string;
        orange: string;
        gold: string;
        yellow: string;
        'light-yellow': string;
        'washed-yellow': string;
        purple: string;
        'light-purple': string;
        'dark-pink': string;
        'hot-pink': string;
        pink: string;
        'light-pink': string;
        'dark-green': string;
        green: string;
        'light-green': string;
        'washed-green': string;
        navy: string;
        'dark-blue': string;
        blue: string;
        'light-blue': string;
        'lightest-blue': string;
        'washed-blue': string;
        black: string;
        'near-black': string;
        'dark-gray': string;
        'mid-gray': string;
        gray: string;
        silver: string;
        'light-silver': string;
        'moon-gray': string;
        'light-gray': string;
        'near-white': string;
        white: string;
        'black-90': string;
        'black-80': string;
        'black-70': string;
        'black-60': string;
        'black-50': string;
        'black-40': string;
        'black-30': string;
        'black-20': string;
        'black-10': string;
        'black-05': string;
        'black-025': string;
        'black-0125': string;
        'white-90': string;
        'white-80': string;
        'white-70': string;
        'white-60': string;
        'white-50': string;
        'white-40': string;
        'white-30': string;
        'white-20': string;
        'white-10': string;
        'white-05': string;
        'white-025': string;
        'white-0125': string;
    };
};
export default theme;
