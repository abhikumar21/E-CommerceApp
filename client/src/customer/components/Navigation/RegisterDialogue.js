import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { useState } from 'react'
import './Navigation.css'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../../../features/auth/authSlice';
import UserInfo from './UserInfo';

export default function MyModal() {
  const user = useSelector((state)=>state.auth.user);
  const token = useSelector((state)=>state.auth.token);
  // console.log(user);

  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [alreadyRegistered, setAlreadyRegistered] = useState(false);
  const [loggedIn, setLoggedIn] = useState(true);
  const [avatar, setAvatar] = useState('');

  const [data, setData] = useState({firstname:"", lastname:"", email:"", phone:"", password:""})
  // const [user, setUser] = useState(null);

  const handleChange =(e) => {
    setData({...data, [e.target.name]:e.target.value})
  }

  const handleSubmitRegister = async (e) => {
    e.preventDefault();
    // console.log(data); 
    try {
      const res = await axios.post('/auth/register', data);
      // setUser(res.data);
      setData({firstname:"", lastname:"", email:"", phone:"", password:""});
      close();
    } catch (error) {
      console.error('Error:', error.response?.data || error.message);
    }
  };

  const handleSubmitLogin = async(e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/auth/login', data)
      setData({firstname:"", lastname:"", email:"", phone:"", password:""});
      dispatch(setUser({
        user: res.data.oldUser,
        token: res.data.token,
      }));
      // setUser(res.data);
      console.log(res.data);
      close();
    } catch (error) {
      console.log("Error: ",  error.message);
    }
  }
  

  function open() {
    setIsOpen(true)
  }
  function close() {
    setIsOpen(false)
  }

  const changetoLogin = () => {
    setAlreadyRegistered(true);
  }
  const changetoRegister = () => {
    setAlreadyRegistered(false);
  }


  return (
    <>
    {!user ? 
      <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
          <Button onClick={() => {
            open();
            changetoLogin();
            }} 
          href="#" className="text-sm font-medium text-gray-700 hover:text-gray-800">
              Sign in
          </Button>
          <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
          <Button onClick={() => {
            open();
            changetoRegister();
            }} 
            href="#" className="text-sm font-medium text-gray-700 hover:text-gray-800">
              Create account
          </Button>
      </div>
      : 
      <div className='avatar'>
        <UserInfo/>
      </div>
      }

      <Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none" onClose={close} __demoMode>
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="register-dialogue w-full max-w-4xl rounded-xl p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              {!alreadyRegistered ? 
              //Register
              <form action="submit w-full">
                <div className="box w-full flex flex-col px-16">

                <div className="head relative">
                    <div className="title-register font-bold text-2xl flex mb-8 mt-4">REGISTER</div>
                  </div>

                  <div className="name flex justify-between mb-5">
                    <div className="firstname w-[340px] flex flex-col">
                      <label htmlFor="firstname">Firstname</label>
                      <input required
                      autoComplete="on"
                      type="text" id="firstname" name="firstname" 
                      value={data.firstname}
                      onChange={handleChange}
                      className='border-2 border-slate-500  h-10 px-4 text-lg rounded-md'
                      />
                    </div>
                    <div className="lastname w-[340px] flex flex-col">
                      <label htmlFor="lastname">Lastname</label>
                      <input required 
                      autoComplete="on"
                      value={data.lastname}
                      onChange={handleChange}
                      type="text" id="lastname" name="lastname"
                      className='border-2 border-slate-500  h-10 px-4 text-lg rounded-md'
                      />
                    </div>
                  </div>

                  <div className="contact flex justify-between mb-5">
                    <div className="email w-[340px] flex flex-col">
                      <label htmlFor="email">E-mail</label>
                      <input required 
                      autoComplete="on"
                      value={data.email}
                      onChange={handleChange}
                      type="email" id="email" name="email" 
                      className='border-2 border-slate-500  h-10 px-4 text-lg rounded-md'
                      />
                    </div>
                    <div className="phone w-[340px] flex flex-col">
                      <label htmlFor="phone">Phone Number</label>
                      <input required 
                      autoComplete="on"
                      value={data.phone}
                      onChange={handleChange}
                      type="text" id="phone" name="phone" 
                      className='border-2 border-slate-500  h-10 px-4 text-lg rounded-md'
                      />
                    </div>
                  </div>

                  <div className="password flex justify-between mb-5">
                    <div className="password w-[340px] flex flex-col">
                      <label htmlFor="password">Password</label>
                      <input required 
                      autoComplete="on"
                      value={data.password}
                      onChange={handleChange}
                      type="text" id="password" name="password" 
                      className='border-2 border-slate-500  h-10 px-4 text-lg rounded-md'
                      />
                    </div>
                    <div className="w-[340px] flex flex-col">
                    </div>
                  </div>

                  <div className="have flex justify-center gap-2">
                     <div className=''>Already have an acconunt?</div>
                     <div className="btn text-blue-700 font-medium cursor-pointer" onClick={changetoLogin}>Sign In</div>
                  </div>

                  <div className="password flex justify-between mb-5">
                    <div className="submmit-button w-full">
                      <button
                      onClick={handleSubmitRegister}
                      className="register-btn bg-gradient-to-r from-teal-400 to-blue-500 w-full h-10 mt-6 mb-2 rounded-md text-xl font-bold">
                        Submit
                      </button>
                    </div>
                  </div>

                </div>
              </form>

              : //Login
                            <form action="submit w-full">
                <div className="box w-full flex flex-col px-60">

                  <div className="head relative">
                    <div className="title-register font-bold text-2xl flex mb-8 mt-4">LOGIN</div>
                  </div>

                  <div className="contact flex justify-between mb-5">
                    <div className="email w-full flex flex-col">
                      <label htmlFor="email">E-mail</label>
                      <input required 
                      value={data.email}
                      onChange={handleChange}
                      type="email" id="email" name="email" 
                      className='border-2 border-slate-500  h-10 px-4 text-lg rounded-md'
                      />
                    </div>
                  </div>

                  <div className="password flex justify-between mb-5">
                    <div className="password w-full flex flex-col">
                      <label htmlFor="password">Password</label>
                      <input required 
                      value={data.password}
                      onChange={handleChange}
                      type="text" id="password" name="password" 
                      className='border-2 border-slate-500  h-10 px-4 text-lg rounded-md'
                      />
                    </div>
                  </div>

                  <div className="have flex justify-center gap-2">
                     <div className=''>Don't have an acconunt?</div>
                     <div className="btn text-blue-700 font-medium cursor-pointer" onClick={changetoRegister}>Sign Up</div>
                  </div>

                  <div className="password flex justify-between mb-5">
                    <div className="submmit-button w-full">
                      <button 
                      onClick={handleSubmitLogin}
                      className="register-btn bg-gradient-to-r from-teal-400 to-blue-500 w-full h-10 mt-6 mb-2 rounded-md text-xl font-bold">
                        Submit
                      </button>
                    </div>
                  </div>

                </div>
              </form>
              }
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  )
}
