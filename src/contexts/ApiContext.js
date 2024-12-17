import { createContext, useEffect, useState } from "react";
import { myAxios } from "./MyAxios";

export const ApiContext = createContext("");

export const ApiProvider = ({ children }) => {
  const [szakdogaLista, setSzakdogaLista] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getAdat = async (url) => {
    try {
      const response = await myAxios.get(url);
      console.log("Adatok sikeresen lekérve:", response.data);
      setSzakdogaLista(response.data);
    } catch (err) {
      console.error("Hiba történt az adatok bekérésekor", err);
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const putAdat = async (url, id, adat) => {
    try {
      const response = await myAxios.put(`${url}/${id}`, adat);
      console.log("Sikeres módosítás:", response.data);
    } catch (err) {
      console.error("Put hiba:", err);
      setError(err);
    }
  };

  const postAdat = async (url, adat) => {
    try {
      const response = await myAxios.post(url, adat);
      console.log("Sikeres feltöltés:", response.data);
      return response.data;
    } catch (err) {
      console.error("POST hiba:", err);
      setError(err);
    }
  };
  const deleteAdat = async(url,id)=>{
    try{
      const response = await myAxios.delete(url+"/"+id);
      console.log(response)
    }
    catch(err){
      console.log("Nem sikerült kitörölni az adatot")
    }
  }

  useEffect(() => {
    getAdat("/api/szakdogak/");
  }, []);

  return (
    <ApiContext.Provider value={{ szakdogaLista, loading, error, getAdat, putAdat, postAdat, deleteAdat }}>
      {children}
    </ApiContext.Provider>
  );
};
