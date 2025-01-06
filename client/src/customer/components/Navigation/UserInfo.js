import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import {
  ChevronDownIcon,
  ArrowRightStartOnRectangleIcon,
  UserCircleIcon
} from '@heroicons/react/16/solid'

import { useSelector, useDispatch } from 'react-redux'
import { clearUser } from '../../../features/auth/authSlice'

const UserInfo = () => {
    const dispatch = useDispatch();
    const user = useSelector((state)=> state.auth.user);
    const handleLogout=()=> {
        dispatch(clearUser(user));
    }

    return (
        <div className="relative">
          <Menu>
            <MenuButton className="inline-flex items-center gap-2 rounded-md py-1.5 px-3 text-sm/6 font-semibold text-black shadow-inner shadow-white/10 focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white">
              {user.firstname}
              <ChevronDownIcon className="w-[20px]" />
            </MenuButton>
    
            <MenuItems
              transition
              anchor="bottom end"
              className="w-52 origin-top-right rounded-xl border border-white/5 bg-gray-100 shadow-2xl p-1 text-sm/6 text-black transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
            >
              <MenuItem>
                <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white">
                  <UserCircleIcon className="w-[20px]" />
                  My Profile
                </button>
              </MenuItem>
              <MenuItem>
                <button 
                onClick={handleLogout}
                className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white">
                  <ArrowRightStartOnRectangleIcon className="w-[20px]" />
                  Logout
                </button>
              </MenuItem>
            </MenuItems>
          </Menu>
        </div>
      )
}

export default UserInfo
