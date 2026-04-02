import React, { useEffect, useState } from 'react'

function Home() {
  const [count,setcount] = useState(0)
  const [hello,sethello]= useState(0)
 

  useEffect(()=>{
    console.log("hello world ")
  },[count])

  console.log("hello = ",hello)
  console.log("Counnt = ",count)

  

  return (
    <div>

      <button className='bg-red-700' onClick={()=>setcount(count+1)}>Click count </button>
      <button className='bg-blue-700' onClick={()=>sethello(hello+1)}>Click hello </button>
      <section class="text-center py-20 bg-blue-100">
        <h2 class="text-4xl font-bold text-gray-800 mb-4">
          Build Your Website Faster
        </h2>
        <p class="text-gray-600 mb-6">
          Create modern websites using Tailwind CSS easily and quickly.
        </p>
        <button class="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700">
          Get Started
        </button>
      </section>


      <section class="max-w-7xl mx-auto px-4 py-16">
        <div class="grid md:grid-cols-3 gap-8">

          <div class="bg-white p-6 rounded-xl shadow text-center">
            <h3 class="text-xl font-semibold mb-2">Fast</h3>
            <p class="text-gray-600">Build UI quickly with utility classes.</p>
          </div>

          <div class="bg-white p-6 rounded-xl shadow text-center">
            <h3 class="text-xl font-semibold mb-2">Responsive</h3>
            <p class="text-gray-600">Looks great on all devices.</p>
          </div>

          <div class="bg-white p-6 rounded-xl shadow text-center">
            <h3 class="text-xl font-semibold mb-2">Customizable</h3>
            <p class="text-gray-600">Easily change styles as you want.</p>
          </div>

        </div>
      </section>


      <footer class="bg-gray-800 text-white text-center py-6">
        <p>© 2026 MyBrand. All rights reserved.</p>
      </footer>

    </div>
  )
}

export default Home
