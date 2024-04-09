const Footer = () => {
    return (
        <footer className="footer px-10 py-20 text-base-content mt-20 flex justify-between text-[16px]">
            <nav>
                <h6 className="footer-title text-lg">Services</h6> 
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </nav> 
            <nav>
                <h6 className="footer-title text-lg">Company</h6> 
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </nav> 
            <nav>
                <h6 className="footer-title text-lg">Legal</h6> 
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav> 
            <form>
                <h6 className="footer-title text-lg">Newsletter</h6> 
                <fieldset className="form-control w-80">
                <label className="label">
                    <span className="label-text">Enter your email address</span>
                </label> 
                <div className="join">
                    <input type="text" placeholder="username@site.com" className="input input-bordered join-item" /> 
                    <button className="btn text-white bg-[#FF5A3D] join-item">Subscribe</button>
                </div>
                </fieldset>
            </form>
        </footer>
    );
};

export default Footer;