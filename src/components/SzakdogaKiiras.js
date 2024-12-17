import React, { useContext } from "react";
import { ApiContext } from "../contexts/ApiContext";
import { Container, Table, Button } from "react-bootstrap";
import Urlap from "./Urlap";

function SzakdogaKiiras() {
  const { szakdogaLista, deleteAdat } = useContext(ApiContext);

  const handleDelete = async (id) => {
    await deleteAdat("/api/szakdogak", id);
  };

  return (
    <Container>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Szakdoga Neve</th>
            <th>Oldal Link</th>
            <th>Github Link</th>
            <th>Készítők</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
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
        </tbody>
      </Table>

      <Urlap />
    </Container>
  );
}

export default SzakdogaKiiras;
