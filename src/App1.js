import { useState } from 'react';
import './App.css';
import drop from "./pictures/drop-here.png";
import fetchPrediction from './APIUtils/imageApi';

function App() {
  const [choosenPicture, setChoosenPicture] = useState(null);
  const [containerCode, setContainerCode] = useState(null);
  const [error, setError] = useState(null);
  const [imgUrl, setImgUrl] = useState(null);
  const [dragOver, setDragOver] = useState(false);

  const handlePicture = async (event) => {
    try {
      const file = event.target.files[0];
      await handleFile(file);
    } catch (error) {
      setError(error.message);
      console.error('Error:', error);
    }
  };

  const handleFile = async (file) => {
    const reader = new FileReader();
    reader.onload = function (e) {
      const url = e.target.result;
      setImgUrl(url);
    };
    reader.readAsDataURL(file);
    setChoosenPicture(file);

    const formData = new FormData();
    formData.append('image', file);

    const data = await fetchPrediction(formData)
    console.log(data)

    if (data.code === 400) {
      setContainerCode(data.message);
    } else {
      setContainerCode(data.serial_number);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = () => {
    setDragOver(false);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    handleFile(file);
    setDragOver(false);
  };

  return (
    <div 
      className={`App d-flex justify-content-center align-items-center bg-secondary ${dragOver && "drag-over"}`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <label htmlFor="image" className='bg-dark-subtle w-50 align-content-center rounded-5 border border-secondary m-5'>
        {!choosenPicture ? <img src={drop} alt='drop here' width="70%" />
          : <img src={imgUrl} alt="Preview" width="50%" />}
        <input type='file' id='image' name='image' onChange={handlePicture} accept='image/*' style={{ display: 'none' }} width="100%"/>
        <h3>Drag and drop picture here or</h3>
        <h3><strong>Click</strong> to upload</h3>
      </label>
      {containerCode ? 
        <div className='bg-dark-subtle w-30 align-content-center rounded-5 p-3 m-2'>
          <p className='fs-4 m-3 text-dark'>Your container code:</p>
          <h1>{containerCode}</h1>
        </div> 
        : error ? 
        <h1 className='bg-dark-subtle w-30 align-content-center rounded-5 p-3 m-2'>{error}</h1> 
        : ""
      }
    </div>
  );
}

export default App;
