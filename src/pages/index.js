import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const username = "斎藤 元";
  const num = 1;
  let deta = 80;


  return (
    <main>
      <section>
        <div className='flex'>
          <h2>
            {username}
          </h2>
          <p>{num}</p>
        </div>

        <div>
          
          <p>革命！！！</p>
          <div className="radial-progress" style={{"--value":deta}} role="progressbar">80%</div>
        </div>
      </section>
      
    </main>
  )
}
