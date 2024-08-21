async function fetchPrediction(formData) {
  
    try {
      const response = await fetch("https://europe-west3-woven-perigee-425918-q9.cloudfunctions.net/containers-server", {
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