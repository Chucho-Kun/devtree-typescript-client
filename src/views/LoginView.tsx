import React from 'react'
import { Link } from 'react-router-dom'

export default function LoginView() {
return (
    <>
        <h1 className="text-4xl text-white font-bold">Iniciar Sesión</h1>
        
        <nav>
            <Link to="/auth/register" >
                ¿No tienes una cuenta?
            </Link>
        </nav>
    </>
)
}