import axios from 'axios';

function App() {


async function handleClick()
{
  const response = await axios.get("http://localhost:12000/users");
  const realData= response.data ;
}

  return (
    <>
      <button onClick={handleClick }>fetch data</button>
      {
        <div> {}    </div>
      }
    </>
  );
}


export default App;

