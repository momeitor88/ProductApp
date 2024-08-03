import { createBrowserRouter,  } from 'react-router-dom';
import { Root } from '../layout/Root/Root';
import { HomePage } from '../pages';
export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root/>,
        children: [
            {
                path: '/home',
                element: <HomePage/>
            }
        ]
    }
]);