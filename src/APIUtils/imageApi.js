async function fetchPrediction(formData) {
  
    try {
      const response = await fetch("http://52.155.253.3:8080/predict/v1", {
        method: "POST",
        body: formData
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
      return null;
    }
  }

export default fetchPrediction