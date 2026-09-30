import { useEffect, useState } from "react"

const useImageURL = () => {
    const [imageURL, setImaheURL] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://picsum.photos/v2/list')
        .then((response) => {
            if (response.status >= 400) {
                throw new Error("server error");
            }
            return response.json();
        })
        .then((response) => setImaheURL(response[0].download_url))
        .catch((error) => {
            console.log(error);
            setError(error);
        })
        .finally(() => setLoading(false));
    }, []);

    if (loading) return <p>Loading</p>
    if (error) return <p className="text-red-500 mb-4">Network error was encountered!</p>
   
  return (
    <div className="px-12 py-6">
      <h1>An image</h1>
      <p>Fetching data from an API!</p>
      
      {imageURL && (
        <img src={imageURL} alt={"laptop image"} width={300} height={300} />
      )}
    </div>
  );
};

export default useImageURL