import { useEffect } from "react";
import add_filled from "../assets/images/add_filled.png";
import Card from "../components/Card";
import Header from "../components/Header";
import Notify from "../components/Notify";
import { useDispatch, useSelector } from "react-redux";
import { fetchItems } from "../redux/slices/itemSlice";
import { setItemModal } from "../redux/slices/modalSlice";
import Loader from "../components/Loader";

const Dashboard = () => {
    const dispatch = useDispatch()

    const items = useSelector((state) => state?.items?.items);
    const loading = useSelector((state) => state?.items?.loading);
    const user = useSelector((state) => state?.user?.user);

    console.log(items);

    useEffect(() => {
        dispatch(fetchItems())
    }, [dispatch])

    return (
        <>
        {!user?.emailVerificationStatus &&   <Notify/>}
        <Header screenTitle="Dashboard"/>
            {loading ? (
              <div className='h-[300px] w-full flex flex-col justify-center items-center'>
              <Loader/>
              </div>
            ) : (
              items?.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-[4%] my-6">
              {items?.map((item) => (
                <Card key={item?._id} item={item} />
              ))}
            </div>
              ): (
                <div className='h-[300px] w-full flex flex-col justify-center items-center'>
                <p className='font-[500] mb-4 text-sm md:text-[20px] text-center'>No Item Found.</p>
                <span className='font-[500] cursor-pointer text-[#004cbd] flex items-center' onClick={() => dispatch(setItemModal({status:true, item: null}))}>Click here to add an Item</span>
           
            </div>
           
               
              )
            )}
           
    
            <img
              onClick={() => dispatch(setItemModal({status:true, item: null}))}
              src={add_filled}
              alt="add"
              className="h-10 w-10 cursor-pointer block my-10 ml-auto mr-8  md:absolute right-20 bottom-10"
            />
    
            <div className="h-10"></div>
    
        </>
    );
};

export default Dashboard;