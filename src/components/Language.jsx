

const Language = () => {
    const languages = [
        { code:'En', name:'English', level:'Good'},
        { code:'Bn', name:'Bangla', level:'Maternal'},
        { code:'Ja', name:'Japanese', level:'Average'},
        { code:'Hi', name:'Hindi', level:'Common'},
    ]
    return (
        <>
           <div data-aos='fade-up' data-aos-delay='400' className="flex flew-wrap md:flex-nowrap items-center justify-center gap-10 md:gap-20 h-[300px] text-cyan-700 mt-11">
            <div className="grid grid-cols-2 gap-10 md:gap-20">
                {
                    languages.map((language, index) =>(
                        <div key={index} className="achievement flex flex-col items-center">
                            <div className="circle w-20 h-20 md:w-16 md:h-16 bg-white rounded-full relative flex items-center justify-center text-lg md:text-xl font-bold mb-6 md:mb-8 shadow-lg">
                               
                                <div className="absolute top-[-6px] right-[-6px]bottom-[-6px] md:top-[-8px] md:left-[-8px] md:right-[-8px] md:bottom-[-8px] rounded-full bg-gradient-to-b from-cyan-700 to-sky-700 shadow-[0_0_20px_rgba(255,165,0,0.7)] z-0">
                                <span className="z-10">{language.code}</span>
                                </div>
                                     <span className="text-xl md:text-xl text-white">{language.name}</span>
                                     <span className="text-cyan-700 text-lg md:text-xl font-bold">{language.level}</span>
                            </div>

                        </div>
                    ))
                }

            </div>
            
            </div> 
        </>
    );
};

export default Language;