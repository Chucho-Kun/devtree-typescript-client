import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginView from './views/LoginView.tsx'
import RegisterView from './views/RegisterView'
import MainView from './views/MainView'
import AuthLayout from './layouts/AuthLayout'


export default function Router() {

    return (
        <BrowserRouter>
            <Routes>
                <Route element={ <AuthLayout /> }>
                    <Route path="/" element={<MainView /> } />
                    <Route path="/auth/login" element={<LoginView />} />
                    <Route path="/auth/register" element={<RegisterView />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}