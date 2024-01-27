
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "../ui/select"

export const Suggestions = () => {

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
    <div className="flex flex-col p-5 bg-white/35 gap-8 shadow-2xl z-10 overflow-hidden w-[26rem]">
      <h2 className='text-3xl font-bold font-title'>Discover <br />New music</h2>

      <div className="flex flex-col gap-4 overflow-hidden">
        <div className="flex justify-between items-center">
          <label className="font-bold text-2xl">Top-chart</label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Choose..." />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="week">Week</SelectItem>
                <SelectItem value="month">Month</SelectItem>
                <SelectItem value="year">Year</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex flex-row justify-between">
            <div className="flex flex-col gap-4 overflow-hidden ">
              <img src="https://source.unsplash.com/random" className="w-[9rem] h-[9rem] rounded-lg object-cover" />
              <div className="flex flex-col">
                <span className="font-label font-bold text-[#333]">Lorem Ipsum</span>
                <small className="text-[#4F4F4F]">Radiohead, <span className="font-medium">2001</span></small>
              </div>
            </div>
            <div className="flex flex-col gap-4 overflow-hidden ">
              <img src="https://source.unsplash.com/random" className="w-[9rem] h-[9rem] rounded-lg object-cover" />
              <div className="flex flex-col">
                <span className="font-label font-bold text-[#333]">Lorem Ipsum</span>
                <small className="text-[#4F4F4F]">Radiohead, <span className="font-medium">2001</span></small>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-between">
            <div className="flex flex-col gap-4 overflow-hidden w-fit">
              <img src="https://source.unsplash.com/random" className="w-[9rem] h-[9rem] rounded-lg object-cover" />
              <div className="flex flex-col">
                <span className="font-label font-bold text-[#333]">Lorem Ipsum</span>
                <small className="text-[#4F4F4F]">Radiohead, <span className="font-medium">2001</span></small>
              </div>
            </div>
            <div className="flex flex-col gap-4 overflow-hidden ">
              <img src="https://source.unsplash.com/random" className="w-[9rem] h-[9rem] rounded-lg object-cover" />
              <div className="flex flex-col">
                <span className="font-label font-bold text-[#333]">Lorem Ipsum</span>
                <small className="text-[#4F4F4F]">Radiohead, <span className="font-medium">2001</span></small>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold my-2">You may like</h2>
          <div className="flex flex-col gap-2 max-h-[26rem] overflow-y-auto">
            {musics.map((music, index) => (
              <div className="flex items-center">
                <div className="flex items-center w-full gap-2">
                  <img src={`https://picsum.photos/200/300?random=${index}`} className="w-[3rem] h-[3rem] rounded-md object-cover" />
                  <div className="flex flex-col">
                    <label className="font-bold text-base">{music.title}</label>
                    <small className="font-medium text-sm text-[#4f4f4f]">{music.album}</small>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <label className="font-bold text-base">{music.duration}</label>
                  <small className="text-sm font-semibold text-gray-500">{music.year}</small>
                </div>
              </div>
            ))}
          </div>
        </div >
      </div >
    </div >
  )
}
