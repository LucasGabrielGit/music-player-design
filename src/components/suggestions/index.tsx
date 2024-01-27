import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "../ui/select"

export const Suggestions = () => {
  return (
    <div className="flex flex-col p-3 bg-white/35 w-[20rem] gap-4">
      <h2 className='text-3xl font-bold'>Discover <br />New music</h2>

      <div className="flex flex-col">
        <div className="flex justify-between items-center">
          <label>Top-chart</label>
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
      </div>
    </div >
  )
}
