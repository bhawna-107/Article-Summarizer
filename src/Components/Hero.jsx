// import logobg from '../assets/logobg.png';
// import summarizer from '../assets/brainlogo.jpg';
import brainlogo from '../assets/brainlogo.png';
const Hero = () => {
  return (
    <header className="w-full flex flex-col justify-center items-center orange-gradient text-[30px]">
    <nav className="flex justify-between items-center w-full ">
      <div className='flex justify-center items-center'>
      <img src={brainlogo} alt="summarize" className="w-[15%] h-[15%] mt-0" /> 
            <h1>Summarizer</h1>
      </div>
            <button className='black-btn' onClick={()=>(
              window.open("https://github.com/bhawna-107/Article-Summarizer", '_blank')
            )}>Github</button>
    </nav>
    <h1 className='head-text'>Summarize Articles With <br className='max:md-hidden'/><span className="orange-gradient">OpenAI GPT-4 </span></h1>

    <h2 className='desc'>
        Simplify your reading with Summarizer, an open-source article summarizer
        that transforms lengthy articles into clear and concise summaries.
    </h2>
  </header>
    
  )
}

export default Hero;