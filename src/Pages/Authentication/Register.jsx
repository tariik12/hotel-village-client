import { useEffect, useState } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import toast,{Toaster} from 'react-hot-toast';
import { createUser, googleLoginUser } from '../../redux/user/userSlice';
import sing_up from '/sing_up.mp4'
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
    <div className="md:flex   h-screen items-center bg-gradient-to-t from-[#f1f1f3ef] via-[#228eac3d] to-[#f7f4f483]">
      <Toaster/>
      <div className="md:h-full  h-[300px]">
      <video
          className="relative h-full w-full object-fill"
          muted
          autoPlay
          loop
          src={sing_up}
        ></video>
      </div>
      <div className="w-full  grid place-items-center mx-auto">
        <div className=" w-full max-w-sm rounded-lg grid place-items-center p-10">
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
              <button  disabled={disabled} type="submit" className=" w-full mt-4 bg-slate-50 px-3 py-2 border-2 border-orange-400 hover:text-white hover:bg-[#ff4500] hover:border-4 rounded-xl hover:border-[#ff4500] disabled:bg-gray-300 disabled:cursor-not-allowed" >Sign up</button>
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
            <button type="button" className=" mt-4 w-full bg-slate-50 px-3 py-2 border-2 border-orange-400 hover:text-white hover:bg-[#ff4500] hover:border-4 rounded-xl hover:border-[#6a2d18] " onClick={handleGoogleLogin} >Login with Google</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
