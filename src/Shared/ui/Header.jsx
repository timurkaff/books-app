import { Link } from 'react-router-dom';

const Header = () => (
  <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
    <h1 className="text-2xl font-bold">
      <Link to="/">Books App</Link>
    </h1>
    <nav>
      <Link to="/liked" className="ml-4 text-white hover:underline">
      ❤️ Лайкнутые книги
      </Link>
    </nav>
  </header>
);

export default Header;