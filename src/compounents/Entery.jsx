import React from 'react'

const Entery = () => {
  return (
    <div>

      <div className="header flex justify-between">
        <div className="logo h-[15vh] w-[15vw] mt-[10vh] ml-[8vw]">
          <img  className="border-2 rounded-3xl"src="./src/assets/logo.png" alt="Logo" />
        </div>

<div className="login  border-2   bg-blue-500 rounded-3xl h-[9vh] w-[10vw] mt-1 mr-[8vw] flex justify-center items-center">

    <div className="button ">
      Visit Site
    </div>
</div>

      </div>
    </div>
  )
}

export default Entery