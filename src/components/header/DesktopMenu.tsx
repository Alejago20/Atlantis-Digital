interface Props {
  items: string[];
}

import { Link } from "react-router-dom";

const DesktopMenu = ({ items }: Props) => {
  return (
    <nav className="flex items-end gap-8">
      {items.map((item) =>
        item === "Contacto" ? (
          <Link
            key={item}
            to="/contacto"
            className="text-white hover:text-sky-400"
          >
            {item}
          </Link>
        ) : (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-white hover:text-sky-400"
          >
            {item}
          </a>
        )
      )}
    </nav>
  );
};

export default DesktopMenu;
