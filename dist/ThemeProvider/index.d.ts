/// <reference types="react" />
import { ITheme } from '../theme/theme';
declare type Props = {
    children: React.ReactNode;
    theme: ITheme;
};
declare const ThemeProvider: {
    ({ theme, children }: Props): JSX.Element;
    defaultProps: {
        theme: import("../theme/theme").DefaultTheme;
    };
};
export default ThemeProvider;
