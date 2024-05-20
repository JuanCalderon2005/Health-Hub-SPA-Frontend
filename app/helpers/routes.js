import { LoginPage } from '../scenes/public/login';
import { HomeScene } from '../scenes/private/Physician/home';


export const routes = {
    private: [
        { path: '/dashboard/home', component: HomeScene }
    ],
    public: [
        { path: '/login', component: LoginPage }
    ]
};