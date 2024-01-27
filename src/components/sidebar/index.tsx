import { Separator } from '../../components/ui/separator'
import { Compass, Headphones, Heart, Cylinder, UserCircle, Settings, LogOut } from "lucide-react"
import { Button } from '../ui/button'
import { ClipboardIcon } from "@radix-ui/react-icons"

export const SidebarMenu = () => {
  return (
    <aside className="flex p-2 flex-col justify-between items-center w-18">
      <div className='flex flex-col items-center gap-[.9rem] mt-3'>
        <Button asChild variant={'outline'} size={'icon'} className='border-0 p-1 bg-transparent hover:text-white hover:bg-green-600 duration-200'>
          <Cylinder className='w-10 text-green-600' />
        </Button>
        <Button asChild variant={'outline'} size={'icon'} className='border-0 p-1 bg-transparent hover:text-white hover:bg-green-600 duration-200'>
          <UserCircle className='w-10 text-green-600' />
        </Button>
        <Separator orientation='horizontal' />
        <Button asChild variant={'outline'} size={'icon'} className='border-0 p-1 bg-transparent hover:text-white hover:bg-green-600 duration-200'>
          <Compass className='w-10 text-green-600' />
        </Button>
        <Button asChild variant={'outline'} size={'icon'} className='border-0 p-1 bg-transparent hover:text-white hover:bg-green-600 duration-200'>
          <Headphones className='w-6 text-green-600' />
        </Button>
        <Button asChild variant={'outline'} size={'icon'} className='border-0 p-1 bg-transparent hover:text-white hover:bg-green-600 duration-200'>
          <Heart className=' text-green-600' />
        </Button>
        <Button asChild variant={'outline'} size={'icon'} className='border-0 p-1 bg-transparent hover:text-white hover:bg-green-600 duration-200'>
          <ClipboardIcon className=' text-green-600' />
        </Button>
      </div>
      <div className='flex flex-col items-center gap-[.9rem]'>
        <Button asChild variant={'outline'} size={'icon'} className='border-0 p-1 bg-transparent hover:text-white hover:bg-green-600 duration-200'>
          <Settings className='w-6 text-gray-600' />
        </Button>
        <Button asChild variant={'outline'} size={'icon'} className='border-0 p-1 bg-transparent hover:text-white hover:bg-green-600 duration-200'>
          <LogOut className='w-6 text-gray-600' />
        </Button>
      </div>
    </aside>
  )
}
