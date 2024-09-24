import 'styled-components';
import { ColorsType } from './globalTheme';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: ColorsType;
  }
}
