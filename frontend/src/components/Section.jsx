import React from 'react'

const Section = () => {
  return (
    <div>
        <div class="border-2 border-black border-solid  h-100 ml-2 mr-2">
            <div class="border-2 border-black border-solid h-70 m-4 ">
                <div className="flex justify-center">
                    <span class="text-2xl text-amber-800  underline">Category</span></div>
                    <div class="border-2 border-solid border-black h-40 m-2 flex justify-center  ">
                        <div class="border-2 border-solid border-black w-40 h-30 m-2 hover:bg-green-300"></div>
                        <div class="border-2 border-solid border-black w-40 h-30 m-2 hover:bg-green-300"></div>
                        <div class="border-2 border-solid border-black w-40 h-30 m-2 hover:bg-green-300"></div>
                        <div class="border-2 border-solid border-black w-40 h-30 m-2 hover:bg-green-300"></div>
                    </div>

            </div>

        </div>
      
    </div>
  )
}

export default Section
