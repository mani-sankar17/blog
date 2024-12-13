import { useEffect, useState } from 'react'

const useFetch = (url) => {
    const [memory, setMemory] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            fetch(url)
            .then(res => res.json())
            .then(data => {
                setMemory(data)
                setLoading(false);
            })
            .catch((e) => {
                console.log(e); 
                setLoading(false);
                setError(true);
            })
        }, 500);
    },[url]);

    return {memory, loading, error}
}

export default useFetch;