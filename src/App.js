import { useState } from 'react';
import FormComponent from './components/FormComponent';
import ResultComponent from './components/ResultComponent';
import fetchPrediction from './APIUtils/imageApi';

function App() {
  const [choosenPicture, setChoosenPicture] = useState(null);
  const [containerCode, setContainerCode] = useState(null);
  const [imgUrl, setImgUrl] = useState(null);
  const [dragOver, setDragOver] = useState(false);
  const [searching, setSearching] = useState(false)

  // Event Handlers
  const handlePicture = async (event) => {
    try {
      const file = event.target.files[0];
      await handleFile(file);
    } catch (error) {
      setContainerCode("Error handling picture");
      console.error('Error handling picture:', error);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = () => {
    setDragOver(false);
  };

  const handleDrop = async (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    await handleFile(file);
    setDragOver(false);
  };

  // File Handling
  const handleFile = async (file) => {
    setContainerCode(null);
    setSearching(true);
    try {
      const url = await readFileAsDataURL(file);
  
      setImgUrl(url);
      setChoosenPicture(file);
  
      const formData = new FormData();
      formData.append('image', file);
      const data = await fetchPrediction(formData);
  
      if (data.code === 400) {
        setContainerCode(data.message);
      } else {
        setContainerCode(data.serial_number);
      }
    } catch (error) {
      setContainerCode("Error handling file");
      console.error('Error handling file:', error);
    } finally {
    setSearching(false); // Set searching back to false once all operations complete
    }
  };
  
  const readFileAsDataURL = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (event) => resolve(event.target.result);
      reader.onerror = (error) => reject(error);
      reader.readAsDataURL(file);
    });
  };

  return (
    <div 
      className={`App d-flex flex-column justify-content-center align-items-center ${dragOver && "drag-over"}`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <FormComponent  choosenPicture={choosenPicture} drop={"drop-here.png"} imgUrl={imgUrl} handlePicture={handlePicture}/>
      <ResultComponent containerCode={containerCode} searching={searching}/>
    </div>
  );
}

export default App;
