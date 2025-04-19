/**
 * 관련 기획서:
 * - /기획/UI컴포넌트_기획.md
 * - /기획/상태관리_기획.md
 */
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import theme from './types';

interface ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeProvider = ({ children }: ThemeProviderProps): JSX.Element => {
  return <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>;
};

export default ThemeProvider;
