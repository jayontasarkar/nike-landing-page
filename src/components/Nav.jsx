import { headerLogo } from '../assets/images';
import { hamburger } from '../assets/icons';
import { navLinks } from '../constants';

const Nav = () => {
  return (
    <header className="absolute z-10 w-full py-8 padding-x">
      <nav className="flex items-center justify-between max-container">
        <a href="/">
          <img src={headerLogo} alt="nike logo" width={130} height={29} />
        </a>
        <ul className="flex items-center justify-center flex-1 gap-16 max-lg:hidden">
          {navLinks.map((navLink) => (
            <li key={navLink.label}>
              <a
                href={navLink.href}
                className="text-lg leading-normal font-montserrat text-slate-gray"
              >
                {navLink.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex gap-2 text-lg font-medium leading-normal font-montserrat max-lg:hidden wide:mr-24">
          <a href="/">Sign in</a>
          <span>/</span>
          <a href="/">Explore now</a>
        </div>

        <div className="hidden max-lg:block">
          <img src={hamburger} alt="hamburger menu" height={25} width={25} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
