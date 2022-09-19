import { ITheme } from '../../styles/themes'

export interface ThemeContext {
    theme: ITheme,
    toggle: ()=> void;
}
