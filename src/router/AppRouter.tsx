import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainPage from "../components/MainPage";
import BaseLayout from "../layout/BaseLayout";
import Card from "../components/Card";

const AppRouter = () => {
	const router = createBrowserRouter(
		[
			{
				path: "/",
				element: <BaseLayout />,
				children: [
					{
						index: true,
						element: <MainPage />,
					},
					{
						path: ":address/inner",
						element: <Card />,
					},
				],
			},
			{
				path: "*",
				element: <h1>Not Found Page 404</h1>,
			},
		],
		{
			future: {
				v7_relativeSplatPath: true, 
			},
		}
	);
	return <RouterProvider router={router} />;
};

export default AppRouter;
