

const Contact = () => {
    return (
        <>
            <section id="contact" className="py-8 lg:py-16 mx-auto max-w-screen-lg" data-aos='fade-up' data-aos-delay='400'>
                <h2 className="mb-8 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
                    Contact Me
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    
                    <div className="bg-gray-50 p-6 rounded-lg shadow-md dark:bg-gray-800">
                        <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Send a Message</h3>
                        <form action="#" className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full p-2.5 text-sm rounded-lg border border-gray-300 focus:ring-cyan-600 focus:border-cyan-600 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                                    placeholder="Enter your name"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                    Your Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full p-2.5 text-sm rounded-lg border border-gray-300 focus:ring-cyan-600 focus:border-cyan-600 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                                    placeholder="Enter your email"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                    Your Message
                                </label>
                                <textarea
                                    id="message"
                                    rows="5"
                                    className="w-full p-2.5 text-sm rounded-lg border border-gray-300 focus:ring-cyan-600 focus:border-cyan-600 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                                    placeholder="Write your message here..."
                                    required
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full text-white bg-cyan-700 hover:bg-cyan-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                    
                    <div className="bg-gray-50 p-6 rounded-lg shadow-md dark:bg-gray-800">
                        <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Contact Information</h3>
                        <ul className="space-y-4 text-gray-900 dark:text-gray-300">
                            <li>
                                <strong>Email:</strong> <a href="mailto:example@example.com" className="text-cyan-700 dark:text-white">sharminshopna149@gmail.com</a>
                            </li>
                            <li>
                                <strong>Phone:</strong> <a href="tel:8801303058388" className="text-cyan-700 dark:text-white">+8801303058388</a>
                            </li>
                            <li>
                                <strong>WhatsApp:</strong> <a href="https://wa.me/01303058388" className="text-cyan-700 dark:text-white">+8801303058388</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;
