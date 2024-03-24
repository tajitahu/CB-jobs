import HomepageLayout from './Components/Layouts/Homepage.jsx';
import Homepage from './Components/Homepage.jsx';
import { ContextProvider } from './Context/ContextProvider';
import SignUpPage from "./Components/signup.jsx";
import LoginPage from "./Components/login.jsx";
import DashboardPage from "./Components/dashboardpage.jsx";
import NotFound from "./Components/404.jsx";
import Blog from "./Components/blog.jsx";
import ForgotPassword from "./Components/forgotpassword.jsx";
import DashBoardLayout from "./Components/Layouts/DashBoardLayout.jsx";

// Define the routes array
export const routes = [
    {
        path: '/',
        element: () => (
            <ContextProvider>
                <HomepageLayout />
            </ContextProvider>
        ),
        children: [
            {
                path: '/',
                element: () => (
                    <ContextProvider>
                        <Homepage />
                    </ContextProvider>
                )
            }
        ]
    },
    {
        path: '*',
        element: () => <NotFound />,
    },
    {
        path: '/blog',
        element: () => <Blog />,
    },
    {
        path: '/dashboard',
        element: () => (
            <DashBoardLayout>
                <DashboardPage />
            </DashBoardLayout>
        )
    },
    {
        path: '/signup/:userType',
        element: () => <SignUpPage />,
    },
    {
        path: '/login',
        element: () => <LoginPage />,
    },
    {
        path: '/restore-password',
        element: () => <ForgotPassword />,
    }
];

// Export the routes array

