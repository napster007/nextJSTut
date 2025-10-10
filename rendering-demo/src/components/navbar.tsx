import {NavLinks} from "./nav-links";
import {NavSearch} from "./nav-search";

export const NavBar = () =>{
    console.log(`Nav Bar rendered`);

    return (
        <div>
            <NavLinks/>
            <NavSearch/>
        </div>
    );
}