import React from 'react'

function Aboutpage() {
    return (
        <div>

            <section class="bg-blue-100 text-center py-16">
                <h2 class="text-4xl font-bold text-gray-800 mb-4">About Us</h2>
                <p class="text-gray-600">Learn more about who we are and what we do</p>
            </section>


            <section class="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">

                <img src="https://source.unsplash.com/600x400/?team" class="rounded-xl shadow" />

                <div>
                    <h3 class="text-2xl font-bold mb-4">Our Story</h3>
                    <p class="text-gray-600 mb-4">
                        We started our journey with a simple goal — to build modern and fast websites using simple tools like Tailwind CSS.
                    </p>
                    <p class="text-gray-600">
                        Our team focuses on clean design, performance, and user experience. We believe simplicity is powerful.
                    </p>
                </div>

            </section>


            <section class="bg-white py-16">
                <div class="max-w-7xl mx-auto px-4 text-center">
                    <h3 class="text-3xl font-bold mb-10">Our Team</h3>

                    <div class="grid md:grid-cols-3 gap-8">

                        <div class="bg-gray-50 p-6 rounded-xl shadow">
                            <img src="https://source.unsplash.com/100x100/?man" class="mx-auto rounded-full mb-4" />
                            <h4 class="font-semibold">John Doe</h4>
                            <p class="text-gray-500">Frontend Developer</p>
                        </div>

                        <div class="bg-gray-50 p-6 rounded-xl shadow">
                            <img src="https://source.unsplash.com/100x100/?woman" class="mx-auto rounded-full mb-4" />
                            <h4 class="font-semibold">Jane Smith</h4>
                            <p class="text-gray-500">Backend Developer</p>
                        </div>

                        <div class="bg-gray-50 p-6 rounded-xl shadow">
                            <img src="https://source.unsplash.com/100x100/?developer" class="mx-auto rounded-full mb-4" />
                            <h4 class="font-semibold">Alex Lee</h4>
                            <p class="text-gray-500">UI Designer</p>
                        </div>

                    </div>
                </div>
            </section>
            


            <footer class="bg-gray-800 text-white text-center py-6">
                <p>© 2026 MyBrand. All rights reserved.</p>
            </footer>

        </div>
    )
}

export default Aboutpage
