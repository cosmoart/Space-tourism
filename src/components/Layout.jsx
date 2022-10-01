import FollowCursor from "./FollowCursor.jsx";
import Header from "./Header";

export default function Layout({ children }) {
	return (
		<>
			<Header />
			{children}
			<FollowCursor />
		</>
	)
}