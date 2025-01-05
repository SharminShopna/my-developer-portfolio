const Language = () => {
    const languages = [
        { code: 'En', name: 'English', level: 'Good' },
        { code: 'Bn', name: 'Bangla', level: 'Maternal' },
        { code: 'Ja', name: 'Japanese', level: 'Average' },
        { code: 'Hi', name: 'Hindi', level: 'Common' },
    ];

    return (
        <>
         <div id="language" data-aos="fade-up"
                data-aos-delay="400" className="mt-11 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-cyan-700 mb-8">
                Languages I Know
            </h2>
            <div
                
                className="flex flex-wrap justify-center gap-6 mt-11"
            >
                {languages.map((language, index) => (
                    <div
                        key={index}
                        className="card bg-white shadow-lg rounded-lg p-6 flex flex-col items-center w-40 h-52 md:w-48 md:h-60"
                    >
                        
                        <div className="circle w-16 h-16 md:w-20 md:h-20 bg-gradient-to-b from-cyan-700 to-sky-700 rounded-full flex items-center justify-center mb-4 shadow-lg">
                            <span className="text-white text-lg md:text-xl font-bold">
                                {language.code}
                            </span>
                        </div>
                        
                        <span className="text-cyan-700 text-lg md:text-xl font-bold">
                            {language.name}
                        </span>
                      
                        <span className="text-gray-500 text-sm md:text-base mt-1">
                            {language.level}
                        </span>
                    </div>
                ))}
            </div>
            </div>
        </>
    );
};

export default Language;
