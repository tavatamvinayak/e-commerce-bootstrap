import Image from 'next/image'
import React from 'react'

function ProductCards({ ProductImage, ProductName, ProductDetails, ProductPrice, }) {
    return (
        <>

            <div className="col">
                <div className="card shadow-sm">
                <img src={ProductImage} alt="" className='rounded-top ' />
                  
                   
                    <div className="card-body">
                        <h1 className='text-center'>{ProductName}</h1>
                        <p className="card-text text-center"> {ProductDetails} </p>

                        <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                                <h3 className='fw-bold'>{ProductPrice} ₹</h3>

                            </div>
                            <button type="button" className="btn btn-sm btn-outline-secondary m-3 fw-bold">Buy</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductCards
