
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
const Contact = () => {
    const form = useRef();


    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_9sghgqq', 'template_xlngcjf', form.current, {
            publicKey: 'rxea47ehjWZO9-2G4',
          })
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };
    return (
        <>
            <section id="contact" className="py-8 lg:py-16 mx-auto max-w-screen-lg" data-aos='fade-up' data-aos-delay='400'>
                <h2 className="mb-8 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
                    Contact Me
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    
                    <div className=" p-6 rounded-lg shadow-md ">
                        <h3 className="text-2xl font-bold mb-4  ">Send a Message</h3>
                        <form ref={form} onSubmit={sendEmail}>
                       <label>Name</label>
                         <input type="text" name="user_name" />
                          <label>Email</label>
                          <input type="email" name="user_email" />
                          <label>Message</label>
                          <textarea name="message" />
                         <input type="submit" value="Send" />
                         </form>
                    </div>

                    
                    <div className="bg-gray-50 p-6 rounded-lg shadow-md dark:bg-gray-800">
                        <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Contact Information</h3>
                        <ul className="space-y-4 text-gray-900 dark:text-gray-300">
                            <li>
                                <strong>Email:</strong> <a href="mailto:sharminshopna149@gmail.com" className="text-cyan-700 dark:text-white">sharminshopna149@gmail.com</a>
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
