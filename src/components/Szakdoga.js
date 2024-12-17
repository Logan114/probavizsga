import React, { useContext } from "react";
import { ApiContext } from "../contexts/ApiContext";
import { Container, Table, Button } from "react-bootstrap";
import Urlap from "./Urlap";

function Szakdoga() {
  const { szakdogaLista, deleteAdat } = useContext(ApiContext);

  const handleDelete = async (id) => {
    await deleteAdat("/api/szakdogak", id);
  };

  return (

          {szakdogaLista.map((elem, index) => (
            <tr key={index}>
              <td>{elem.szakdoga_nev}</td>
              <td>
                <a href={elem.oldallink}>Oldal link</a>
              </td>
              <td>
                <a href={elem.githublink}>Github link</a>
              </td>
              <td>{elem.tagokneve}</td>
              <td>
                <Button variant="warning" className="me-2">
                  📝
                </Button>
                <Button variant="danger" onClick={() => handleDelete(elem.id)}>
                  ❌
                </Button>
              </td>
            </tr>
          ))}

  );
}

export default SzakdogaKiiras;
