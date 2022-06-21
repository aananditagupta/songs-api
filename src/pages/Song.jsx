import React from 'react';
import Card from '../components/Card';
import { useParams } from 'react-router-dom'

export const Song = () => {
    const { id } = useParams()
    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios
        .get(`https://cors-anywhere.herokuapp.com/https://openwhyd.org/adrien/{id}?format=json&limit=14`, {
            params:{
            _limit: 10
            }
        })
        .then(response => {
            setPosts(response.data)
            console.log(response.data)
        })
    }, [])

    return (
        <>
        <h1>Space X Ships</h1>
        <div className="App" style={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr", rowGap: "10px", columnGap: "20px"}}>
            <Card image={id.image} name={id.name} />
        </div>
        </>
    );
};

export default Song;