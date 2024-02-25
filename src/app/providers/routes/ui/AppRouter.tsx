import { Suspense } from 'react';
import { Routes,Route } from 'react-router-dom';
import { routeConfig } from 'shared/config/route-config/routeConfig';
import { Loader } from 'widgets/loader';

export default function AppRouter() {
	return (
		
		<Routes>
			{
				routeConfig.map(({ path, element }) => 
					<Route
						element={
							<div className='page-wrapper'>
								<Suspense fallback={<Loader/>}>
									{element}
								</Suspense>
							</div>
						} 
						path={path}
						key={path}/>
				)  
			}
		</Routes>
	);
}
