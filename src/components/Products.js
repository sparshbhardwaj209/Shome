import React from 'react'

const Products = () => {
  return (
    <div className="my-3">

        <div className="content text-center">
            <h1 className='font-bold text-3xl text-black pb-2'>Featured Items</h1>
            <p className='text-[#595959] pb-10'>There are many variations of passengers of Lorem Ipsum available</p>
        </div>

        <div className="card container w-[14rem]">
          <div style={{display: 'flex'}}>
            {/* <span class="badge rounded-pill bg-danger">{source}</span> */}
          </div>
          <img
            src= "../Images/leatherShoes.webp" alt="leatherShoes"
            className="card-img-top"
          />
          <div className="card-body">
            <h5 className="card-title text-md font-normal text-[#666]">Men/Women</h5>
            <p className="font-bold pb-1">Leather Mens Slipper</p>
            <p className="text-xl font-normal text-[#666]">$240.00</p>
            
          </div>
        </div>
    </div>
  )
}

export default Products