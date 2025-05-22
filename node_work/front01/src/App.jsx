import './App.css'
import axios from "axios";

function App() {
    const getUsers = async (event) => {
        // console.log(event);
        const result = await axios.get('http://localhost:8080/users')
        console.log(result);
    }

    return (
        <>
            <div>
                <h1 className={`text-3xl`}>
                    안녕
                </h1>
                <button
                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-0.5 focus:outline-none"
                    onClick={(event) => {
                        getUsers(event);
                    }}>불러오기
                </button>
            </div>
        </>
    )
}

export default App
