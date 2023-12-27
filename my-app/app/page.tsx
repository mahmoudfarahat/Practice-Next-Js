 
 import Hero from '@/components/hero';
import homeImg from '@/public/home.jpg';

console.log(homeImg)
export default function Home() {
  return <div>
    {/* Home Page */}
  <Hero imgData={homeImg} title='Professional cloud Hosting' imgAlt='helo' /> 
    
    {/* <div className='flex flex-row'>
      <Image height={600} width={800} src={homeImg} alt='asdas'/> 
      <div>Buy Our Project</div>
    </div> */}
    </div>
}
