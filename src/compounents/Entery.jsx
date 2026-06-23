import React from 'react'

const Entery = () => {
  return (
    <div>

      <div className="header flex justify-between">
        <div className="logo h-[19vh] w-[19vw] mt-[1vh] mb-[10vh] ml-[4vw]">
          <img  className="border-2 rounded-6xl"src="./src/assets/logo2.png" alt="Logo" />
        </div>

<div className="login  border-2   bg-red-500 rounded-3xl h-[9vh] w-[10vw] mt-1 mr-[8vw] flex justify-center items-center">

    <div className="button ">
      Visit Site
    </div>


</div>



      </div>

      <div className="live-status flex items-center gap-2 mt-1 ml-1">
        <div className="blinking-dot"></div>
        <span className="text-white text-lg font-semibold">24/7 live and update</span>
      </div>
      

      <div className="content flex ml-1 flex-col mt-10">
        <h1 className="text-4xl text-white font-bold mb-4">Welcome to UHD Movies</h1>
        <p className="text-gray-400 text-lg mb-6">Your ultimate destination for high-quality movies and entertainment.</p>
        <button className="bg-red-500 text-white h-[5vh] w-[15vw] rounded-lg hover:bg-red-600 transition duration-300">Explore Now</button>
        </div>


<div className="colour flex gap-6  mt-10 ml-1 text-white text-">
  <div className="red">  
    <h1 className='font font-bold text-2xl'> 1080p</h1>
  <p>Max Quality</p>
  </div>

   <div className="red">  
    <h1 className='font font-bold text-2xl'> Hindi</h1>
  <p>Dubbed</p>
  </div>

   <div className="red">  
    <h1 className='font font-bold text-2xl'> 24/7</h1>
  <p>support</p>
  </div>

   <div className="red">  
    <h1 className='font font-bold text-2xl'> Daily Updates</h1>
  <p>Latest Content</p>
  </div>

</div>


<div className="category  gap-6 mt-10 ml-1 text-white text-2xl">
 
  <div className="text-2 flex align-items-center items-center justify-center mb-10">
    <h1 className='font font-bold text-2xl'> Categories</h1>
  </div>

   <div className="flex flex-wrap gap-4 justify-center   w-[90vw]">


  <div className="box  flex align-items-center items-center justify-center border-2 rounded-3xl h-[40vh] blur-box bg-gray-80 w-[25vw]">  
  <h1 className='box-2 font-bold text-2xl'> Action</h1>
  </div>


  <div className="box  flex align-items-center items-center justify-center border-2 rounded-3xl h-[40vh] blur-box bg-gray-80 w-[25vw]">  
  <h1 className='box-2 font-bold text-2xl'> Action</h1>
  </div>


  <div className="box  flex align-items-center items-center justify-center border-2 rounded-3xl h-[40vh] blur-box bg-gray-80 w-[25vw]">  
  <h1 className='box-2 font-bold text-2xl'> Action</h1>
  </div>


  <div className="box  flex align-items-center items-center justify-center border-2 rounded-3xl h-[40vh] blur-box bg-gray-80 w-[25vw]">  
  <h1 className='box-2 font-bold text-2xl'> Action</h1>
  </div>


  <div className="box  flex align-items-center items-center justify-center border-2 rounded-3xl h-[40vh] blur-box bg-gray-80 w-[25vw]">  
  <h1 className='box-2 font-bold text-2xl'> Action</h1>
  </div>



  <div className="box  flex align-items-center items-center justify-center border-2 rounded-3xl h-[40vh] blur-box bg-gray-80 w-[25vw]">  
  <h1 className='box-2 font-bold text-2xl'> Action</h1>
  </div>
</div>

</div>


      </div>
      
    
  )
}

export default Entery