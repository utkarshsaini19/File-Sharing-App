import './App.css';
import {useEffect, useRef, useState} from 'react'
import upload from './services/api';

function App() {

  const inputRef = useRef()
  const [file, setFile] = useState()
  const [url, setUrl] = useState()


  useEffect(()=>{
    const getLink = async () => {
      const form = new FormData();
      form.append('name',file.name)
      form.append('file',file)
      const Data = await upload(form)
      const data = await Data.json();
      setUrl(data.message)

    }
    if(file)
    {
      getLink();
    }
  },[file])

  const handleClick = (e) => {
    inputRef.current.click();
  }

  return (
    <div className="parentdiv">
      <div className="firstdiv">
        <img src="fileshare.jpg" alt="loading..." />
      </div>
      <div className="secondDiv">
        <div className="insideDiv" >
          <h1>Share you File on Cloud!</h1>
          <button onClick={handleClick}>UPLOAD</button>
          <input ref={inputRef} type="file" onChange={(e)=> setFile(e.target.files[0])} />
          {
            url && <a href={url} target='_blank'>{url}</a>
          }
        </div>
      </div>
    </div>
  );
}

export default App;
