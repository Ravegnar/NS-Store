import {NavLink} from "react-router-dom";

export const StoreNavigation = () => {
  const navLink = `px-1 md:px-3 py-2 flex items-center text-sm md:text-base lg:text-lg text-white font-bold leading-snug hover:opacity-75`

  return (
      <div className=" px-1 mx-auto flex-row flex-wrap items-center">
          <ul className="flex flex-row justify-center list-none sm:ml-auto">
            <li>
              <NavLink className={(navData) => navData.isActive ? `${navLink} text-cyan-600` : `${navLink}` } to="/NS-Store/store/NSO" end>Operatives</NavLink>
            </li>
            <li>
              <NavLink className={(navData) => navData.isActive ? `${navLink} text-cyan-600` : `${navLink}` } to="/NS-Store/store/NSW/weapons">Weapons</NavLink>
            </li>
            <li>
              <NavLink className={(navData) => navData.isActive ? `${navLink} text-cyan-600` : `${navLink}` } to="/NS-Store/store/NSW/tools">Tools</NavLink>
            </li>
            <li>
              <NavLink className={(navData) => navData.isActive ? `${navLink} text-cyan-600` : `${navLink}` } to="/NS-Store/store/NSW/equipment">Equipment</NavLink>
            </li>
          </ul>
      </div>
  );
}