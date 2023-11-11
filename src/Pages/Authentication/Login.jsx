import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { googleLoginUser, signInUser } from '../../redux/user/userSlice';
import toast, { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';

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
    <div className="md:flex max-w-7xl h-screen items-center mx-auto overflow-hidden">
       <Toaster/>
      <div className="md:w-1/2">
        <img src='https://i.pinimg.com/originals/77/1b/8e/771b8ee247d670457faea7265818578f.png' className="h-full w-full" alt="" />
      </div>
      <div className="md:w-1/2 grid place-items-center">
        <div className="bg-primary/5 w-full max-w-sm rounded-lg grid place-items-center p-10">
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
              <button type="submit" className="btn btn-primary w-full">
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
            <button
              type="button"
              className="btn btn-primary w-full"
              onClick={handleGoogleLogin}
            >
              Login with Google
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
