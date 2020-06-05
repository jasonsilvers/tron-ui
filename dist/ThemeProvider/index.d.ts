/// <reference types="react" />
import { MyTheme } from '../theme/theme';
declare type Props = {
    children: React.ReactNode;
    theme: MyTheme;
};
declare const ThemeProvider: {
    ({ theme, children }: Props): JSX.Element;
    defaultProps: {
        theme: MyTheme;
    };
};
declare function useTronTheme(): MyTheme;
export { ThemeProvider, useTronTheme };
