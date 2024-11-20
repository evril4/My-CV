import { useEffect } from "react";


import { useState } from "react";

import { Routes, Route } from "react-router-dom";
import ReactGA from "react-ga4";

import Homepage from "./pages/homepage";
import About from "./pages/about";
import Projects from "./pages/projects";
import Contact from "./pages/contact";
import Notfound from "./pages/404";

import { TRACKING_ID } from "./data/tracking";
import "./app.css";


import InsertData from "./pages/insertdata";
import { database, ref, get } from "./firebase/firebaseConfig";

function App() {


	const [data, setData] = useState(null);
	const [pageSeo, setPageSeo] = useState(null); 
	
	
	useEffect(() => {
		const fetchData = async () => {
			const dataRef = ref(database, "data"); 
			try {
				const snapshot = await get(dataRef); 
				if (snapshot.exists()) {
					const fetchedData = snapshot.val();
					setData(fetchedData); 
					
					
					const homeSeo = fetchedData.seo.find((item) => item.page === "home");
					setPageSeo(homeSeo);  
				} else {
					console.error("No data found");
				}
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};

		fetchData();
	}, []);

	useEffect(() => {
		if (TRACKING_ID !== "") {
			ReactGA.initialize(TRACKING_ID);
		}
	}, []);

	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Homepage data={data} pageSeo={pageSeo}/>} />
				<Route path="/about" element={<About data={data} pageSeo={pageSeo}/>} />
				<Route path="/projects" element={<Projects data={data} pageSeo={pageSeo}/>} />
				<Route path="/contact" element={<Contact data={data} pageSeo={pageSeo}/>} />
				
				<Route path="*" element={<Notfound />} />

				<Route path="/insert-data" element={<InsertData />} />
			</Routes>
		</div>
	);
}

export default App;
