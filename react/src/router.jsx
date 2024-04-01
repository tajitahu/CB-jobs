import HomepageLayout from './Components/Layouts/Homepage.jsx';
import Homepage from './Components/Homepage.jsx';

import SignUpPage from "./Components/signup.jsx";
import LoginPage from "./Components/login.jsx";
import DashboardPage from "./Components/dashboardpage.jsx";
import NotFound from "./Components/404.jsx";
import Blog from "./Components/blog.jsx";
import ForgotPassword from "./Components/forgotpassword.jsx";
import DashBoardLayout from "./Components/Layouts/DashBoardLayout.jsx";
import GuestLayout from "./Components/Layouts/GuestLayout.jsx";
// Define the routes array
export const routes = [
    {
        path: '/',
        element: () => (
            
                <HomepageLayout />
            
        ),
        children: [
            {
                path: '/',
                element: () => (
                    
                        <Homepage />
                    
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
        element: () =><GuestLayout>
             <SignUpPage />
        </GuestLayout>,
    },
    {
        path: '/login',
        element: () => <GuestLayout>
            <LoginPage />
        </GuestLayout>,
    },
    {
        path: '/restore-password',
        element: () => <GuestLayout>
            <ForgotPassword />
            </GuestLayout>,
    }
];

// Export the routes array

