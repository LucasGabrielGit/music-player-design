import { FastForward, Headphones, Heart, Play, Plus, Repeat, Rewind, Shuffle, Volume1, Volume2 } from "lucide-react"
import { Button } from "../ui/button"
import { Slider } from "../ui/slider"

export const MusicPlayer = () => {

  return (

    <div className="flex flex-col items-center justify-evenly py-5 w-[80rem] bg-[#fafafa]">
      <div className="flex flex-col justify-center items-center gap-4">
        <h2 className="text-2xl font-bold">Now Playing</h2>
        <img src="https://source.unsplash.com/random" className="object-cover w-[380px] h-[380px] rounded-md" />
        <div className="flex items-center justify-between w-full">
          <Button asChild variant={'outline'} size={'icon'} className='border-0 p-1 bg-transparent hover:text-white duration-200'>
            <Plus className="text-green-600 hover:bg-green-600 overflow-hidden" />
          </Button>
          <div className="flex flex-col gap-1 items-center">
            <label className="text-xl font-bold font-label">Money Machine</label>
            <span className="text-sm font-semibold text-[#4f4f4f]">1000 Gecks</span>
          </div>
          <Button asChild variant={'outline'} size={'icon'} className='border-0 p-1 bg-transparent hover:text-white duration-200'>
            <Heart className="text-green-600 hover:bg-green-600 overflow-hidden" />
          </Button>
        </div>
        <div className="flex flex-col gap-1 w-full">
          <div className="flex items-center justify-between w-full">
            <span className="text-[#828282] text-sm">2:12</span>
            <span className="text-[#828282] text-sm">{'-1:26'}</span>
          </div>
          <Slider defaultValue={[48]} step={1} max={100} />
        </div>

        <div className="flex items-center justify-evenly w-full">
          <Button asChild variant={'outline'} size={'icon'} className='border-0 p-1 bg-transparent hover:text-white duration-200 rounded-full'>
            <Shuffle className="text-green-600 hover:bg-green-600 overflow-hidden" />
          </Button>
          <Button asChild variant={'outline'} size={'icon'} className='border-0 p-1 bg-transparent hover:text-white duration-200 rounded-full'>
            <Rewind className="text-green-600 hover:bg-green-600 overflow-hidden w-auto" />
          </Button>
          <Button asChild variant={'default'} size={'icon'} className='flex border-4 bg-green-600 border-green-600 items-center justify-center w-16 h-16 pl-2 duration-200 rounded-full'>
            <Play className="text-white overflow-hidden" />
          </Button>
          <Button asChild variant={'outline'} size={'icon'} className='border-0 p-1 bg-transparent hover:text-white duration-200 rounded-full'>
            <FastForward className="text-green-600 hover:bg-green-600 overflow-hidden w-auto" />
          </Button>
          <Button asChild variant={'outline'} size={'icon'} className='border-0 p-1 bg-transparent hover:text-white duration-200 rounded-full'>
            <Repeat className="text-green-600 hover:bg-green-600 overflow-hidden" />
          </Button>
        </div>

        <div className="flex items-center justify-around w-full gap-1">
          <Button asChild variant={'outline'} size={'icon'} className='border-0 p-1 bg-transparent hover:text-white duration-200 rounded-full'>
            <Volume1 className="text-gray-600 hover:bg-green-600 overflow-hidden" />
          </Button>
          <Slider defaultValue={[40]} max={100} height="1" />
          <Button asChild variant={'outline'} size={'icon'} className='border-0 p-1 bg-transparent hover:text-white duration-200 rounded-full'>
            <Volume2 className="text-gray-600 hover:bg-green-600 overflow-hidden" />
          </Button>
        </div>

        <div className="flex items-center bg-green-100 p-1 rounded-full gap-3">
          <Headphones className="text-green-600 w-4" />
          <span className="font-normal text-sm text-[#828282]">Airpods Pro (Dave)</span>
        </div>
      </div>
    </div>
  )
}
