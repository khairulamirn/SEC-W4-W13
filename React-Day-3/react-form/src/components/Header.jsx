import { useNavigate } from "react-router-dom"

    function Header() {
    const navigate = useNavigate()
    
    function navigateToHome() {
    navigate('/')
}

    return (
        <header>
            <h1>Header</h1>
            <button onClick={navigateToHome}>Back to home</button>
        </header>
    )
}

export default Header