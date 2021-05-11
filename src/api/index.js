const API_URL = "http://localhost:3000/"

export const api = async endPoint => {
    try {
        const response = await fetch(`${API_URL}${endPoint}`);
        return await response.json();
    }
    catch(err) {
     alert(err)
    }
  
}