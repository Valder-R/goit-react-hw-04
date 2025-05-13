import toast, { Toaster } from 'react-hot-toast';
import { useState } from 'react';


export default function SearchBar({ handler}) {

    const [topic, setTopic] = useState("")

    const handleSubmit = (evt) => {
        evt.preventDefault();
        if (topic == "") {
            toast('Provide search value');
        }
        else {
            handler(topic);
        }
    }
    return (
        <header>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    value={topic}
                    onChange={(evt) => {
                        setTopic(evt.target.value)
                    }}
                />
                <button type="submit">Search</button>
                <Toaster />
            </form>
        </header>

    )
}