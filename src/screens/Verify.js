import {useEffect} from 'react'
import Container from '../components/Container'
import check_circle from "../assets/images/check_circle.png"
import cancel from "../assets/images/cancel.png"
import forward from "../assets/images/forward.png"
import { useNavigate, useParams } from 'react-router-dom'
import Loader from '../components/Loader'
import { useDispatch, useSelector } from 'react-redux'
import { verifyEmail } from '../redux/slices/userSlice'


const Verify = () => {
  const params = useParams()
  const dispatch = useDispatch()

  const verify = useSelector((state) => state?.user);

  console.log(verify?.loading);

  useEffect(() => {
    dispatch(verifyEmail(params))
  }, [params, dispatch])

  const navigate = useNavigate()
  
  return (
    <Container>
        <div className='h-[300px] w-full flex flex-col justify-center items-center'>
            {verify?.loading ? (
              <Loader/>
            ) : (
              <>
              <img src={!verify?.vData?.status ? cancel : check_circle} alt="" className='h-[50px] w-[50px] mb-12' />
            <p className='font-[500] mb-4 text-sm md:text-[20px] text-center'>{verify?.vData?.message}</p>
            <span className='font-[500] cursor-pointer text-link flex items-center ' onClick={() => navigate("/dashboard")}>Go to Dashboard
                <img src={forward} alt="" className='ml-2 h-5 w-5 ' />
            </span></>
            )}
        </div>
    </Container>
  )
}

export default Verify