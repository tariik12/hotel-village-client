import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { googleLoginUser, signInUser } from '../../redux/user/userSlice';
import toast, { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';
import login from '/login.mp4'
const Login = () => {
  const { register, handleSubmit } = useForm();
  const {isLoading,email, isError, error} =useSelector((state)=>state.userSlice) 
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const onSubmit = ({ email, password }) =>{
    dispatch(signInUser({email, password}))
  };


  const handleGoogleLogin = () => {
   dispatch(googleLoginUser())
  };
  useEffect(() =>{

    if(isError || error){
      toast.error(error)
    }
  },[isError, error])

  useEffect(() =>{
    if(!isLoading && email){
      toast.success('Wow !! your Sing In Successful')
      navigate('/')
    }
  },[isLoading,email, navigate])
  return (
    <div className="md:flex  h-screen items-center mx-auto overflow-hidden bg-gradient-to-t from-[#f1f1f3ef] via-[#228eac3d] to-[#f7f4f483]">
       <Toaster/>
       <div className="md:h-full  h-[300px]">
      <video
          className="relative h-full w-full object-fill"
          muted
          autoPlay
          loop
          src={login}
        ></video>
      </div>
      <div className=" w-full grid place-items-center">
        <div className=" w-full max-w-sm rounded-lg grid place-items-center p-10">
          <h1 className="mb-10 font-medium text-2xl">Login</h1>
          <form className="space-y-3 w-full" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col items-start">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                className="w-full rounded-md"
                {...register('email')}
              />
            </div>
            <div className="flex flex-col items-start">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                className="w-full rounded-md"
                {...register('password')}
              />
            </div>
            <div className="relative !mt-8">
              <button type="submit" className=" mt-4 w-full bg-slate-50 px-3 py-2 border-2 border-orange-400 hover:text-white hover:bg-[#ff4500] hover:border-4 rounded-xl hover:border-[#6a2d18] ">
                Login
              </button>
            </div>
            <div>
              <p>
                Don&apos;t have an account?{' '}
                <span
                  className="text-primary hover:underline cursor-pointer"
                  onClick={() => navigate('/register')}
                >
                  Sign up
                </span>
              </p>
            </div>
            <button type="button" className=" mt-4 w-full bg-slate-50 px-3 py-2 border-2 border-orange-400 hover:text-white hover:bg-[#ff4500] hover:border-4 rounded-xl hover:border-[#6a2d18] " onClick={handleGoogleLogin} >Login with Google</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
