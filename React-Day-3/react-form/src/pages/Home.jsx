import { useNavigate } from 'react-router-dom'

const buttonGroup = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '10px',
    padding: '10px',
}

function Home() {
    const navigate = useNavigate();
    function navigateToFormA() {
        navigate('/form-a')
    }

    function navigateToFormB() {
        navigate('/form-b')
    }

    function navigateToFormC() {
        navigate('/form-c')
    }

    function navigateToFormD() {
        navigate('/form-d')
    }

    return(
        <div>
            <h1>Hello Home</h1>
            <div style={buttonGroup}>
                <button onClick={navigateToFormA}>Form A</button>
                <button onClick={navigateToFormB}>Form B</button>
                <button onClick={navigateToFormC}>Form C</button>
                <button onClick={navigateToFormD}>Form D</button>
            </div>
        </div>
    )
}

export default Home