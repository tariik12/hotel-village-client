import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import auth from '../../../firebase.config';
const initialState = {
  name: '',
  email: '',
  isLoading:true,
  isError:false,
  error:'',
};
export const createUser = createAsyncThunk('userSlice/createUser', async ({email, password, name,photo})  =>{ 

  const data = await createUserWithEmailAndPassword(auth, email, password);
  await updateProfile(auth.currentUser, {
    displayName:name,
    photoURL: photo
  })
  console.log(data);
  return {
    email:data.user.email,
    name:data.user.displayName,
    photo:data.user.photoURL
  } ;
});
export const signInUser = createAsyncThunk('userSlice/signInUser', async ({ email, password }) => {
  const data = await signInWithEmailAndPassword(auth, email, password);
console.log(data)
  return {
    email: data.user.email,
    name: data.user.displayName,
    photo: data.user.photoURL,
  };
});
const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    setUser:(state,{payload}) =>{
      state.name = payload.name;
      state.email = payload.email
      state.photo = payload.photo
    },
    toggleLoading:(state, {payload}) =>{
      state.isLoading = payload;
    },
    logout:(state) =>{
      state.name = '';
      state.email = '';
      state.photo = '';
    }
  },
  extraReducers:(builder) =>{
    builder.addCase(createUser.pending,(state) =>{
      state.isLoading = true;
      state.isError = false;
      state.email ='';
      state.name = '';
      state.photo = '';
      state.error = '';
    }).addCase(createUser.fulfilled,(state,{payload}) =>{
      state.isLoading = false;
      state.isError = false;
      state.name = payload.name;
      state.email = payload.email;
      state.photo = payload.photo;
      state.error = '';
    }).addCase(createUser.rejected,(state, action) =>{
      state.isLoading = false;
      state.isError = false;
      state.email ='';
      state.name = ''; 
      state.photo = ''; 
      state.error = action.error.message;
    })
  }
});
export const {setUser, toggleLoading, logout} = userSlice.actions
export default userSlice.reducer;
