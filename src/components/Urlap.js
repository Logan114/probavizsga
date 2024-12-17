import React, { useContext, useState } from "react";
import { ApiContext } from "../contexts/ApiContext";
import { Container, Table, Button, Form } from "react-bootstrap";

function Urlap(){
    const [szakdogaNeve, setSzakdogaNeve] = useState("");
    const [keszitoNeve, setKeszitoNeve] = useState("");
    const [oldalLink, setOldalLink] = useState("");
    const [githubLink, setGithubLink] = useState("");
    const { szakdogaLista, postAdat, deleteAdat } = useContext(ApiContext);
    const handleFormSubmit = async (e) => {
        e.preventDefault();
    
        const newData = {
          szakdoga_nev: szakdogaNeve,
          tagokneve: keszitoNeve,
          oldallink: oldalLink,
          githublink: githubLink
        };
    
        await postAdat("/api/szakdogak", newData); // Assuming the URL is `/api/szakdogak`
      };
    

    return(
        <Form onSubmit={handleFormSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Szakdolgozat Neve</Form.Label>
          <Form.Control 
            type="text"
            value={szakdogaNeve}
            onChange={(e) => setSzakdogaNeve(e.target.value)} 
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Készítők neve</Form.Label>
          <Form.Control 
            type="text"
            value={keszitoNeve}
            onChange={(e) => setKeszitoNeve(e.target.value)} 
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Oldal elérhetősége</Form.Label>
          <Form.Control 
            type="url"
            value={oldalLink}
            onChange={(e) => setOldalLink(e.target.value)} 
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Github Link</Form.Label>
          <Form.Control 
            type="url"
            value={githubLink}
            onChange={(e) => setGithubLink(e.target.value)} 
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Új
        </Button>
      </Form>
    )
}

export default Urlap