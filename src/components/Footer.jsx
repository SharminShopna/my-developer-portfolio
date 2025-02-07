const Footer = () => {
    return (
        <>
            <footer className="footer footer-center bg-base-200 text-base-content rounded p-10">
                <nav className="grid grid-flow-col gap-4">
                    <a href="#" className="link link-hover">Home</a>
                    <a href="#about" className="link link-hover">About</a>
                    <a href="#skills" className="link link-hover">Skills</a>
                    <a href="#language" className="link link-hover">Language</a>
                    <a href="#projects" className="link link-hover">Projects</a>
                    <a href="#education" className="link link-hover">Education</a>
                </nav>
                <nav>
                    <div className="grid grid-flow-col gap-4">
                        <a href="https://www.facebook.com/sharmin.shopna.338" target="_blank" rel="noopener noreferrer">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="fill-[#1877F2]">
                                <path
                                    d="M9 8H6v4h3v12h5V12h3.642l.358-4h-4V6.333C14 5.378 14.192 5 15.115 5H18V0h-3.808C10.596 0 9 1.583 9 4.615V8z"></path>
                            </svg>
                        </a>
                        <a href="https://www.linkedin.com/in/sharmin-shopna/" target="_blank" rel="noopener noreferrer">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="fill-[#0A66C2]">
                                <path
                                    d="M4.98 3.5c0 1.379-1.12 2.5-2.5 2.5S0 4.879 0 3.5C0 2.121 1.12 1 2.5 1S4.98 2.121 4.98 3.5zM.15 24h4.68V7.99H.15V24zM8.56 7.99v16.01h4.68v-8.99c0-2.39 1.98-3.99 4.36-3.99 2.34 0 3.22 1.48 3.22 3.73V24h4.68V13.5c0-5.02-2.68-7.36-6.26-7.36-2.68 0-3.86 1.48-4.52 2.51V7.99H8.56z"></path>
                            </svg>
                        </a>
                        <a href="https://github.com/SharminShopna" target="_blank" rel="noopener noreferrer">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="fill-[#181717]">
                                <path
                                    d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.799 8.207 11.385.6.11.793-.26.793-.577v-2.17c-3.34.726-4.042-1.416-4.042-1.416-.546-1.386-1.333-1.756-1.333-1.756-1.09-.744.082-.728.082-.728 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.805 1.304 3.49.997.11-.776.42-1.304.76-1.605-2.66-.303-5.46-1.33-5.46-5.91 0-1.304.465-2.37 1.235-3.204-.123-.303-.535-1.528.117-3.18 0 0 1.007-.322 3.3 1.22.957-.266 1.98-.4 3-.405 1.02.005 2.043.14 3 .405 2.29-1.543 3.3-1.22 3.3-1.22.653 1.652.24 2.877.117 3.18.77.834 1.235 1.9 1.235 3.204 0 4.59-2.805 5.605-5.475 5.9.435.375.81 1.11.81 2.24v3.32c0 .32.195.693.8.576C20.565 21.794 24 17.3 24 12c0-6.63-5.37-12-12-12z"></path>
                            </svg>
                        </a>
                    </div>
                </nav>

                <aside>
                    <p>Copyright © {new Date().getFullYear()} Portfolio. - Sharmin Akter</p>
                </aside>
            </footer>
        </>
    );
};

export default Footer;
