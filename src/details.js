import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";
import Navbar from "./nav";

const Details = () => {
    const navigate = useNavigate();
    const {id} = useParams();
    const { memory } = useFetch(`http://localhost:7000/memory/${id}`);

    const handleDelete = () => {
        fetch(`http://localhost:7000/memory/${id}`, {
            method : "DELETE",
        })
        navigate("/")
    }
    return(
        <div className="details-section">
        <Navbar />
        <div className="details-container">
            <div className="details">
                <div className="img-card">
                    <img src={memory.url} alt={memory.title}/>
                    <div className="img-details">
                        <p>{memory.date}</p>
                        <p>~ {memory.name}</p>
                    </div>
                </div>
                <div className="content">
                    <h3 className="grey-qo-regular ">{memory.title}</h3>
                    <p>{memory.desc}</p>
                </div>
            </div>
        <button className="memory-delete" onClick={handleDelete}>Delete memory</button>
        </div>
        </div>
    )
}

export default Details;