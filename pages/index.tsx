import type { NextPage } from 'next'
import SearchBar from '../components/SearchBar'

const Home: NextPage = () => {
  return (
    <div className="flex justify-center h-screen  items-center">
      <div className="border-2 border-white/30 rounded-[25px] bg-white/20 shadow-lg p-10">
        <SearchBar />
      </div>
    </div>
  )
}

export default Home
