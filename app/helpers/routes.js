import { LoginPage } from '../scenes/public/login';
import { HomeScene } from '../scenes/private/Physician/home';
import { RegisterPage } from '../scenes/public/register/register';


export const routes = {
    private: [
        { path: '/dashboard/home', component: HomeScene }

    ],
    public: [
        { path: '/login', component: LoginPage },
        { path: '/register', component: RegisterPage }
    ]
};