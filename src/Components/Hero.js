const Hero = () =>{
    return(
        <>
        <div className="hero blur-corners bg-full bg-center h-80 w-full p-3">
            <img src='hero_icon.png' className='h-48 w-48' alt='hero_icon'/>
        </div>
        <div className="grid place-items-center text-center p-3 w-[320px] md:w-[730px] mx-auto">
            <h1 className="clash text-5xl"> Give the best shot at your <strong className="bg-gradient-to-r from-[#B10612] via-[#8A0007] to-[#B10612] bg-clip-text text-transparent"> Dream University </strong></h1>
            <p className="nunito py-1 text-2xl"> Get expert help, personalised guidance, and all the support you need to <strong> increase your chances of success with Ambitio Elite.</strong></p>
            <br/>
            <button className="btn">10x your chances with Ambitio</button>
        </div>
        <br/>
        <br/>
        <div className='grid place-items-center'>
            <div className='bg_section text-center w-5/6 p-5'>
                <h2 className='clash text-3xl'>We let <strong className="bg-gradient-to-r from-[#B10612] via-[#8A0007] to-[#B10612] bg-clip-text text-transparent">our numbers </strong> do the talking</h2>
                <p>Our users love us and we know you will to! Explore our products.</p>
                <br/>
                <div className='flex flex-col md:flex-row justify-evenly items-center text-center align-center gap-4'>
                    <div>
                        <h2 className='clash text-3xl'><strong className="bg-gradient-to-r from-[#B10612] via-[#8A0007] to-[#B10612] bg-clip-text text-transparent">98.2%</strong></h2>
                        <p className='text-sm'>got into their Target Program</p>
                    </div>
                    <div>
                        <h2 className='clash text-3xl'><strong className="bg-gradient-to-r from-[#B10612] via-[#8A0007] to-[#B10612] bg-clip-text text-transparent">4.92</strong></h2>
                        <p className='text-sm'>Google Rating</p>
                    </div>
                    <div>
                        <h2 className='clash text-3xl'><strong className="bg-gradient-to-r from-[#B10612] via-[#8A0007] to-[#B10612] bg-clip-text text-transparent">5000+</strong></h2>
                        <p className='text-sm'>Students Assisted</p>
                    </div>
                </div>
            </div>
        </div>
        <br/>
        </>
    );
};

export default Hero;