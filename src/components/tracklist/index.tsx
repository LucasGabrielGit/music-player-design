import { Menu, Repeat, Shuffle } from "lucide-react"
import { Button } from "../ui/button"

export const TrackList = () => {

  const musics = [
    { title: "Bohemian Rhapsody", album: "A Night at the Opera", duration: "6:07", year: 1975, explicit: true },
    { title: "Imagine", album: "Imagine", duration: "3:03", year: 1971, explicit: false },
    { title: "Hotel California", album: "Hotel California", duration: "6:30", year: 1976, explicit: true },
    { title: "Stairway to Heaven", album: "Led Zeppelin IV", duration: "8:02", year: 1971, explicit: false },
    { title: "Hey Jude", album: "The Beatles (The White Album)", duration: "7:11", year: 1968, explicit: false },
    { title: "Thriller", album: "Thriller", duration: "5:57", year: 1982, explicit: true },
    { title: "Smells Like Teen Spirit", album: "Nevermind", duration: "5:01", year: 1991, explicit: false },
    { title: "Like a Rolling Stone", album: "Highway 61 Revisited", duration: "6:13", year: 1965, explicit: true },
    { title: "Billie Jean", album: "Thriller", duration: "4:54", year: 1982, explicit: true },
    { title: "Imagine", album: "Imagine", duration: "3:03", year: 1971, explicit: true }
  ]
  return (
    <div className="p-5 z-10 shadow-2xl w-[36rem] flex flex-col gap-3">

      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-bold">Track list</h2>
        <div className="flex items-center">
          <Button asChild variant={'ghost'} size={'icon'} className='cursor-pointer border-0 p-1 bg-transparent rounded-full'>
            <Shuffle className="text-[#bdbdbd] w-[2rem]" />
          </Button>
          <Button asChild variant={'ghost'} size={'icon'} className='cursor-pointer border-0 p-1 bg-transparent rounded-full'>
            <Repeat className="text-[#bdbdbd] w-[2rem]" />
          </Button>
        </div>
      </div>

      <div className="flex flex-col gap-2 overflow-y-auto">
        <span className="font-medium text-[#bdbdbd] text-xl">Playing next</span>

        <div className="flex flex-col gap-2">
          {musics.map((music, index) => (
            <div className="flex items-center ">
              <div className="flex items-center gap-4 w-full">
                <Button asChild variant={'ghost'} size={'icon'} className='cursor-grab border-0 p-1 bg-transparent rounded-full'>
                  <Menu className="text-[#bdbdbd]" />
                </Button>
                <img src={`https://picsum.photos/200/300?random=${index}`} className="object-cover w-[4rem] h-[4rem] rounded-md" />
                <div className="flex flex-col items-start">
                  <div className="flex items-center gap-2">
                    <span className="font-label font-medium text-[#333333] text">{music.title}</span>
                    {!!music.explicit && <Button asChild variant={"ghost"} className="w-[1px] h-0.5 border border-gray-300 bg-[#bdbdbd] hover:bg-[#bdbdbd]">
                      <strong className="font-extrabold text-xs">EX</strong>
                    </Button>}
                  </div>
                  <span className="text-[#bdbdbd] break-words">{music.album}</span>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <span className="font-title font-bold text-sm text-[#333]">{music.duration}</span>
                <span className="text-[#828282] text-xs">{music.year}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
