import Image from 'next/image'
import { Inter } from 'next/font/google'
import From from './form';
import Mypage from './mypage';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <main>
        <From/>
        <Mypage/>
    </main>
  )
}
