import App from './app/App';
import { BrowserRouter} from 'react-router-dom';
import { ThemeProvider } from './app/providers/ThemeProvider';
import 'shared/config/i18n/i18n';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
	<ThemeProvider>
		<BrowserRouter>
			<App/> 
		</BrowserRouter>
	</ThemeProvider>
);