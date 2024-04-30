import { useEffect } from "react";

function LogIn() {
	useEffect(() => {
		window.location.href = "/login/LogIn.html";
	}, []);

	return null;
}

export default LogIn;
