import { Link } from "react-router-dom";
import "./Navigation.style.css";

function Navigation() {
	return (
		<div className='navbar_blog'>
			<Link to='./Home'>Home</Link>
			<Link to='./Blogs'>All blogs</Link>
			<Link to='./Wishlist'>Favorite Blogs</Link>
		</div>
	);
}

export default Navigation;
