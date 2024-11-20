import React, { useState } from "react";
import { database } from "../firebase/firebaseConfig";
import { ref, set } from "firebase/database";

const InsertData = () => {
    const [image, setImage] = useState(null);
    const [jsonData, setJsonData] = useState(null);

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleJsonChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onload = () => {
            try {
                const parsedData = JSON.parse(reader.result);
                setJsonData(parsedData);
            } catch (error) {
                alert("Invalid JSON file");
            }
        };

        reader.readAsText(file);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!jsonData) {
            alert("Please upload a valid JSON file.");
            return;
        }

        const reader = new FileReader();

        reader.onload = () => {
            const base64Image = reader.result.split(",")[1];

            const dataRef = ref(database, "data");

            
            set(dataRef, {
                seo: jsonData.seo,
                main: jsonData.main,
                socials: jsonData.socials,
                homepage: jsonData.homepage,
                about: jsonData.about,
                articles: jsonData.articles,
                projects: jsonData.projects,
                image: base64Image,
            })
                .then(() => {
                    alert("Data and image saved successfully!");
                })
                .catch((error) => {
                    console.error("Error saving data: ", error);
                });
        };

        if (image) {
            reader.readAsDataURL(image); 
        } else {
            alert("Please upload an image.");
        }
    };

    return (
        <div className="container mt-5">
            <div className="card shadow">
                <div className="card-header bg-primary text-white text-center">
                    <h3>Insert Data</h3>
                </div>
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="jsonFile" className="form-label">
                                JSON File
                            </label>
                            <input
                                type="file"
                                id="jsonFile"
                                accept=".json"
                                className="form-control"
                                onChange={handleJsonChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="profileImage" className="form-label">
                                Profile Picture
                            </label>
                            <input
                                type="file"
                                id="profileImage"
                                className="form-control"
                                onChange={handleImageChange}
                            />
                        </div>
                        <div className="text-center">
                            <button type="submit" className="btn btn-success">
                                Save Data
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default InsertData;
