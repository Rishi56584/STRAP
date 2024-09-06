

import React, { useState, useEffect } from 'react';
import './rescue.css'; // Importing CSS file
import axios from 'axios';

const Rescue = () => {
    const [c, setC] = useState(0);
    const [data, setData] = useState([]);
    const [fileChosen, setFileChosen] = useState(false); // New state variable

    useEffect(() => {
        // axios.get('/clinics')
        //   .then(response => {
        //     console.log("Data received:", response.data); // Add this line to log data
        //     setData(response.data); 
        //     console.log(response);
        //   })
        //   .catch(error => {
        //     console.error('Error fetching data:', error);
        //   });
    }, []);

    const [location, setLocation] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');
    const [mobile,setMobile]=useState('');
    const [issue,setIssue]=useState('');
    const[lat,setLat]=useState('');
    const[lng,setLng]=useState('');

    // Function to handle file upload
    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            setFileChosen(true); // Set fileChosen to true when file is chosen
            getLocation();
        }
    };

    // Function to get current location
    const getLocation = () => {
        setC(1);
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                displayLocation,
                displayError
            );
        } else {
            setErrorMessage("Geolocation is not supported by this browser.");
        }
    };

    // Function to display location
    const displayLocation = (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        const accuracy = position.coords.accuracy;
        const message = `Latitude: ${latitude}, Longitude: ${longitude}, Accuracy: ${accuracy} meters`;
        setLat(latitude);
        setLng(longitude);
        // postlocation(latitude,longitude);
        setLocation(message);


        // You can optionally send this data to your server for further processing
        // Here's an example of sending the data using fetch API
        // fetch('/store-location', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({ latitude, longitude }),
        // });
    };
    async function postlocation(){
        getLocation();
        const data = {
            mobile: mobile,
            issue:issue,
            location: {
                type: "Point",
                coordinates: [lng, lat]
            }
        };
        try {
            const response = await fetch('http://localhost:4000/registerHelp', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
    
            if (response.ok) {
                alert('Rescue Registration  successful');
            } else {
                const errorData = await response.json();
                alert(`Registration failed: ${errorData.message}`);
            }
        } catch (error) {
            alert(`Error submitting form: ${error.message}`);
        }
        
    }

    // Function to handle errors
    const displayError = (error) => {
        switch (error.code) {
            case error.PERMISSION_DENIED:
                setErrorMessage("User denied the request for Geolocation.");
                break;
            case error.POSITION_UNAVAILABLE:
                setErrorMessage("Location information is unavailable.");
                break;
            case error.TIMEOUT:
                setErrorMessage("The request to get user location timed out.");
                break;
            case error.UNKNOWN_ERROR:
                setErrorMessage("An unknown error occurred.");
                break;
            default:
                setErrorMessage("An unknown error occurred.");
                break;
        }
    };

    const dataa = data.map((d) => {
        return (
            <div className='db-data' key={d.id}> {/* Make sure to provide a unique key */}
                <p>
                    <b>clinic:</b>{d.name}
                </p>
                <p>
                    <b>location:</b>{d.location}
                </p>
                <p>
                    <b>distance:</b>{d.distance}
                </p>
            </div>
        )
    });

    return (
        <div className='rescue-main'>
            <div>
                <h1>Click photo and attach the image to rescue the animal</h1>
            </div>
            <div className='submit'>
                <input type="file" onChange={handleFileUpload} accept="image/*" />
                <button onClick={getLocation}>Confirm Location</button>
            </div>
            <div className='input'>
                <h4>phone no:</h4>
                <input type='text' onChange={(e)=>{setMobile(e.target.value)}}></input>
                <h4>describe the issue:</h4>
                <input type='textbox' onChange={(e)=>{setIssue(e.target.value)}} style={{ height: 100 }}></input>
            </div>
            <button onClick={postlocation}>Submit RescueForm</button>
            <div id="result">
                {location ? (
                    <div>{location}</div>
                ) : (
                    <div>{errorMessage}</div>
                )}
            </div>
            <h1>
                Message SENT
            </h1>
            <div className='db'>
                {/* Render dataa only if a file is chosen */}
                {fileChosen ? dataa : null}
            </div>
        </div>
    );
};

export default Rescue;
