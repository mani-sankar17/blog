import { useNavigate } from "react-router-dom";

const Thanks = () => {
    const navigate = useNavigate();

    return (
        <div className="thanks">
            <h3>Thanks for subscribing to our newsletter</h3>
            <button onClick={() => navigate("/")}>Back to Home</button>
        </div>
    )
}

export default Thanks; 