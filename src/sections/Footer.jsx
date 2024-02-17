import { copyrightSign } from '../assets/icons';
import { footerLogo } from '../assets/images';
import { footerLinks, socialMedia } from '../constants';

const Footer = () => {
  return (
    <footer id="footer" className="max-container">
      <div className="flex flex-wrap items-start justify-between gap-20 max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/">
            <img src={footerLogo} alt="footer logo" width={150} height={46} />
          </a>
          <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">
            Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size In Store. Get Rewards
          </p>
          <p className="flex items-center gap-5 mt-8">
            {socialMedia.map((sm, idx) => (
              <div
                key={idx}
                className="flex items-center justify-center bg-white rounded-full size-12"
              >
                <img src={sm.src} alt={sm.alt} className="size-6" />
              </div>
            ))}
          </p>
        </div>
        <div className="flex flex-wrap justify-between flex-1 gap-20 lg:gap-10">
          {footerLinks.map((link, idx) => (
            <div key={idx}>
              <h4 className="mb-6 text-2xl font-medium leading-normal text-white font-montserrat">
                {Selection.title}
              </h4>
              <ul>
                {link.links.map((l) => (
                  <li
                    key={l.name}
                    className="mt-3 text-base leading-normal cursor-pointer text-white-400 font-montserrat hover:text-slate-gray"
                  >
                    <a href="#">{l.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between mt-24 text-white-400 max-sm:flex-col max-sm:items-center">
        <div className="flex items-center justify-start flex-1 gap-2 cursor-pointer font-montserrat">
          <img
            src={copyrightSign}
            alt="copy right sign"
            className="m-0 rounded-full size-5"
          />
          <p>Copyright. All rights reserved.</p>
        </div>
        <p className="cursor-pointer font-monserrat">Terms & Conditions</p>
      </div>
    </footer>
  );
};

export default Footer;
