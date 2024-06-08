import React from 'react'

const images = [
    "/img1.jpeg",
    "/img2.jpeg",
    "/img3.jpeg",
    "/img4.jpeg"
]

const Products = () => {
    return (
        <div className='flex md:flex-row md:px-10 px-5 md:flex-wrap gap-4 flex-col mt-[100px] items-center justify-center'>
            <h1 className='text-4xl font-bold text-[#13274F]'>GALLERY</h1>
            {
                images.map((img, i) => {
                    return (
                        <div className='md:w-[35%] relative flex items-center justify-center h-[300px]'>
                            <div className='absolute top-0 w-[100%] h-[100%] rounded-lg bg-gradient-to-b from-[rgba(0,0,0,0.2)] to-[rgba(0,0,0,0.4)]'> </div>
                            <img src={img} key={i} className='w-[100%] h-[100%] rounded-lg'/>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Products
