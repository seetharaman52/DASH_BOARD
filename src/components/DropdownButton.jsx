import { Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Divider } from '@mui/material'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function DropdownButton(props) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className="transition-all duration-300 hover:scale-105 md:text-xl inline-flex items-center w-36 justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          {props.role}
          <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
        </MenuButton>
      </div>

      <Transition
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <MenuItems className="absolute left-0 top-10 sm:left-40 sm:top-0 z-10 mt-2 sm:w-40 w-32 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-10 focus:outline-none">
          <div className="py-1">
            <MenuItem>
              {({ focus }) => (
                <a
                  href="#"
                  className={classNames(
                    focus ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 md:text-xl',
                  )}
                  onClick={() => props.setRole('Admin')}
                >
                  Admin
                </a>
              )}
            </MenuItem>
            <Divider variant="fullWidth"/>
            <MenuItem disabled>
              {({ focus }) => (
                <a
                  href="#"
                  className={classNames(
                    focus ? 'bg-gray-100 text-gray-900' : 'text-gray-700 bg-gray-300',
                    'block px-4 py-2 md:text-xl',
                  )}
                  onClick={() => props.setRole('Department')}
                >
                  Department
                </a>
              )}
            </MenuItem>
            <Divider variant="fullWidth"/>
            <MenuItem disabled>
              {({ focus }) => (
                <a
                  href="#"
                  className={classNames(
                    focus ? 'bg-gray-100 text-gray-900' : 'text-gray-700 bg-gray-300',
                    'block px-4 py-2 md:text-xl',
                  )}
                  onClick={() => props.setRole('Manager')}
                >
                  Manager
                </a>
              )}
            </MenuItem>
            <Divider variant="fullWidth"/>
            <MenuItem disabled>
              {({ focus }) => (
                <button
                  type="submit"
                  className={classNames(
                    focus ? 'bg-gray-100 text-gray-900' : 'text-gray-700 bg-gray-300',
                    'block w-full px-4 py-2 text-left md:text-xl',
                  )}
                  onClick={() => props.setRole('Employee')}
                >
                  Employee
                </button>
              )}
            </MenuItem>
          </div>
        </MenuItems>
      </Transition>
    </Menu>
  )
}
