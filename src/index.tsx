/**
 * 관련 기획서:
 * - /기획/프로젝트_메인기획.md
 */
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(<App />);
