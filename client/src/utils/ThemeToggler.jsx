import useDark from "./useDark";
import {useState} from "react";
import { DarkModeSwitch } from 'react-toggle-dark-mode';
export default function ThemeToggler(){
	const [colorTheme,setTheme] = useDark();
	const [darkTheme,setDarkTheme] = useState(colorTheme === 'light' ? 'true' : 'false')
	const toggleDark = checked =>{
		setTheme(colorTheme);
		setDarkTheme(checked);
	}

	return (
		<>
			<div>
				<DarkModeSwitch checked={darkTheme} onChange={toggleDark} size={26} />
			</div>
		</>
	);
}