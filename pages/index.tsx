import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import SearchBar from '../components/SearchBar'

const Home: NextPage = () => {
  return (
    <div className="flex justify-center h-screen w-screen items-center">
      <div className="border-2 border-white/30 w-[75%] h-[50%] rounded-[25px] bg-white/20 shadow-lg p-6">
        <SearchBar />
      </div>
    </div>
  )
}

export default Home
