import Header from './Components/Header.js'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import MainPage from './Components/MainPage.js';
import Product from './Components/Product.js';
import ProductEdit from './Components/ProductComponents/ProductEdit.js';

const router = createBrowserRouter([
	{
		path: "/",
		element: (<div className='w-full overflow-y-visible'><Header/>
		<Outlet/>
		</div>),
		children: [
			{
				path: "/",
				element: <MainPage/>,
			},
			{
				path:"/product",
				element:<div><Outlet/></div>,
				children:[
					{
						path:'',
						element:<Product/>
					},
					{
						path:':edit',
						element:<Product/>
					}
				]
			}
		],
	},
]);


function App() {

	
	return (
		<RouterProvider router={router} />
	);
}

export default App;
