import { Suspense } from 'react';
import { Routes,Route } from 'react-router-dom';
import { routeConfig } from 'shared/config/route-config/routeConfig';

export default function AppRouter() {
  return (
    <Suspense fallback={<div>loading</div>}>
        <Routes>
          {
            routeConfig.map(({path, element}) => 
              <Route
               element={
                <div className='page-wrapper'>
                  {element}
                </div>
              } 
               path={path}
               key={path}/>
            )  
          }
        </Routes>
      </Suspense>
  )
}
