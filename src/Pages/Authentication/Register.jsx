import { useEffect, useState } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import toast,{Toaster} from 'react-hot-toast';
import { createUser, googleLoginUser } from '../../redux/user/userSlice';

const Register = () => {
  const { handleSubmit, register, control } = useForm();
  const password = useWatch({ control, name: 'password' });
  const confirmPassword = useWatch({ control, name: 'confirmPassword' });
  const navigate = useNavigate();
  const [disabled, setDisabled] = useState(true);
  const dispatch = useDispatch();
const {isLoading, isError, error,email} = useSelector((state) =>state.userSlice);
  useEffect(() => {
    if (
      password !== undefined &&
      password !== '' &&
      confirmPassword !== undefined &&
      confirmPassword !== '' &&
      password === confirmPassword
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [password, confirmPassword]);


  const onSubmit = ({ name, email, password, photo }) => {
    // Email Password signup
    dispatch(createUser({email, password, name, photo}))
    console.log(name, email, password, photo);
  };
  useEffect(()=>{
    if(isError || error){
  
      toast.error(error)
    }
  },[isError,error]);
  useEffect(()=>{
    if(!isLoading && email){
      toast.success('Wow!! Your Sing Up Successful')
      navigate('/')
    }
  },[isLoading,email,navigate])
  const handleGoogleLogin = () => {
   dispatch(googleLoginUser())
  };

  return (
    <div className="md:flex max-w-7xl mx-auto h-screen items-center">
      <Toaster/>
      <div className="md:w-1/2">
        <img src='https://i.pinimg.com/originals/77/1b/8e/771b8ee247d670457faea7265818578f.png' className="h-full w-full" alt="" />
      </div>
      <div className="md:w-1/2  grid place-items-center">
        <div className="bg-primary/5 w-full max-w-sm rounded-lg grid place-items-center p-10">
          <h1 className="mb-10 font-medium text-2xl">Sign up</h1>
          <form className="space-y-5 w-full" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col items-start">
              <label htmlFor="email">Name</label>
              <input
                type="text"
                id="name"
                className="w-full rounded-md"
                {...register('name')}
              />
            </div>
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
              <label htmlFor="photo">Photo</label>
              <input
                type="url"
                id="photo"
                className="w-full rounded-md"
                {...register('photo')}
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
            <div className="flex flex-col items-start">
              <label htmlFor="confirm-password">Confirm Password</label>
              <input
                type="password"
                id="confirm-password"
                className="w-full rounded-md"
                {...register('confirmPassword')}
              />
            </div>
            <div className="!mt-8 ">
              <button
                type="submit"
                className="btn btn-primary w-full disabled:bg-gray-300 disabled:cursor-not-allowed"
                disabled={disabled}
              >
                Sign up
              </button>
            </div>
            <div>
              <p>
                Already have an account?{' '}
                <span
                  className="text-primary hover:underline cursor-pointer"
                  onClick={() => navigate('/login')}
                >
                  Login
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

export default Register;
