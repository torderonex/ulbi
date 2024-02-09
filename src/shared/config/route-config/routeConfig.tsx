import { AboutPage } from 'pages/about-page';
import { MainPage } from 'pages/main-page';
import { RouteProps } from 'react-router-dom';

export enum AppRoutes{
    MAIN = 'main',
    ABOUT = 'about',
}

export const routePath : Record<AppRoutes,string> = {
	[AppRoutes.MAIN] : '/',
	[AppRoutes.ABOUT] : '/about'
};

export const routeConfig : RouteProps[] = [
	{
		path : routePath.main,
		element : <MainPage/>,
	},
	{
		path : routePath.about,
		element : <AboutPage/>,
	}
];