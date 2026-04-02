import React, { useEffect, useState } from 'react'

function Home() {
  const [data,setdata]=useState([])

  useEffect(()=>{
    const FetchJson = async()=>{
      const myjson = await fetch('http://localhost:3000/product')
      const mydata = await myjson.json()

      setdata(mydata)
    }

    FetchJson()
  },[])

  console.log(data)


  return (
    <div className='grid grid-cols-4 gap-2'>
       

       {
        data.map(product=>(
          <div
            class="bg-white border border-gray-200 shadow-md w-full max-w-sm rounded-lg overflow-hidden mx-auto mt-4">
            <div class="aspect-[3/2]">
                <img src={product.image_url} class="w-full h-full object-cover" alt="Card image" />
            </div>

            <div class="p-6">
                <h3 class="text-slate-900 text-xl font-semibold">{product.name}</h3>
                <p class="mt-3 text-sm text-slate-500 leading-relaxed">Lorem ipsum dolor s
                    at fermentum dui. Maecenas 
                </p>
                <button type="button"
                    class="mt-6 px-6 py-2.5 rounded-lg text-white text-sm font-medium tracking-wider border-none outline-none bg-blue-600 hover:bg-blue-700 active:bg-blue-600 cursor-pointer">{product.price}$</button>
            </div>
        </div>
        ))
       }




      



    </div>
  )
}

export default Home
