import { LoginPage } from '../scenes/public/login';
import { HomeScene } from '../scenes/private/Physician/home';
import { RegisterPage } from '../scenes/public/register/register';
import { createForms } from '../scenes/private/Physician/Forms/forms';


export const routes = {
    private: [
        { path: '/dashboard/home', component: HomeScene },
        { path: '/dashboard/forms', component: createForms }

    ],
    public: [
        { path: '/login', component: LoginPage },
        { path: '/register', component: RegisterPage }
    ]
};