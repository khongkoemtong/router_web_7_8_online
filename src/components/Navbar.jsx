import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
    return (
        <div>

            <header class="bg-white shadow">
                <div class="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                    <h1 class="text-2xl font-bold text-blue-600">MyBrand</h1>
                    <nav class="space-x-6 hidden md:block">
                        <Link  to={'/'}><a href="#" class="text-gray-700 hover:text-blue-600">Home</a></Link>
                        <Link to={'/about'}>About</Link>
                        <a href="#" class="text-gray-700 hover:text-blue-600">Services</a>
                        <a href="#" class="text-gray-700 hover:text-blue-600">Contact</a>
                    </nav>
                    <button class="bg-blue-600 text-white px-4 py-2 rounded-lg">Login</button>
                </div>
            </header>

        </div>
    )
}

export default Navbar
