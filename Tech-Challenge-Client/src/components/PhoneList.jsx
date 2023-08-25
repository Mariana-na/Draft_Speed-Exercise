import { useState, useEffect } from 'react';
import axios from "axios";

function PhoneList () {

    const [phones, setPhones] = useState([]);

    useEffect (() => {
        const fetchPhones = async () => {
            try {
                const phoneList = await axios.get("/api/phones")
                setPhones(phoneList.data);
            } catch (error) {
                console.error(error);
            }
        }

        fetchPhones();
    }, []);

    return (
        <div>
            <h1>All Our Phones:</h1>
            <ul>
                {phones.map(phones => (
                    <li key={phones.id}>
                        {phones.name} - {phones.manufacturer}
                    </li>
                ))}
            </ul>
        </div>
    )

}

export default PhoneList