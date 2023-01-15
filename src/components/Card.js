import { useDispatch, useSelector } from 'react-redux'
import { deleteItem, fetchItems } from '../redux/slices/itemSlice';
import { setItemModal } from '../redux/slices/modalSlice'


const Card = ({item}) => {
  const dispatch = useDispatch()
  const deleteLoading = useSelector((state) => state.item?.deleteLoading);

  const removeItem = async() => {
    dispatch(deleteItem({id: item?._id})).then((res)=> {
      console.log(res?.payload?.staus);
      if(res?.payload?.status) {
        dispatch(fetchItems())
      }
    })
  }

  return (
    <div className=' border-[1px] border-[#f0f0f0] rounded-lg px-[20px] py-4 bg-white '>
        <p className='mb-2 text-xs'>Name</p>
        <p className="font-[500] text-xl mb-4">{item?.name}</p>
        <p className='mb-2 text-xs'>Description</p>
        <p className='mb-2'>{item?.description}</p>
        <div className="flex justify-end m-4">
            <button className='h-[36px] w-[60px] mx-4 border-[1px] border-brdLight2 font-[500] rounded-[4px]' onClick={() => dispatch(setItemModal({status:true, item}))}>Edit</button>
            <button disabled={deleteLoading} onClick={removeItem} className={`h-[36px] w-[85px] px-3 text-white font-[500] rounded-[4px] ${deleteLoading ? "bg-btnDisabled2" : "bg-btnActive"}`}>{deleteLoading ? "Deleting" : "Delete"}</button>
        </div>
       
    </div>
  )
}

export default Card