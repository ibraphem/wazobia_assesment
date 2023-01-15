import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setItemModal } from '../redux/slices/modalSlice'


const Card = ({item}) => {
  const dispatch = useDispatch()
  const removeItem = async() => {
   
  }

  return (
    <div className=' border-[1px] border-[#f0f0f0] rounded-lg px-[20px] py-4 bg-white '>
        <p className='mb-2 text-xs'>Name</p>
        <p className="font-[500] text-xl mb-4">{item?.name}</p>
        <p className='mb-2 text-xs'>Description</p>
        <p className='mb-2'>{item?.description}</p>
        <div className="flex justify-end m-4">
            <button className='h-[36px] w-[60px] mx-4 border-[1px] border-brdLight2 font-[500] rounded-[4px]' onClick={() => dispatch(setItemModal({status:true, item}))}>Edit</button>
            {/* <button disabled={loading} onClick={removeItem} className={`h-[36px] w-[85px] px-3 text-white font-[500] rounded-[4px] ${loading ? "bg-btnDisabled2" : "bg-btnActive"}`}>{loading ? "Deleting" : "Delete"}</button> */}
        </div>
       
    </div>
  )
}

export default Card