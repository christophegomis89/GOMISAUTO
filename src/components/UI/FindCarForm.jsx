import React from "react";
import "../../styles/FindCarForm.css";
import { Form, FormGroup } from "reactstrap";
const FindCarForm = () => {
  return (
    <Form className="form">
      <div className="d-flex align-items-center jsutify-content-between flex-wrap">
        <FormGroup className="form_group">
          <input type="text" placeholder="Adresse de départ" />
        </FormGroup>
        <FormGroup className="form_group">
          <input type="text" placeholder="Adresse d'arrivé " required />
        </FormGroup>
        <FormGroup className="form_group">
          <input type="date" placeholder="Date du Voyage" required />
        </FormGroup>
        <FormGroup className="form_group">
          <input
            className="journey_time"
            type="time"
            placeholder="Durée du trajet"
            required
          />
        </FormGroup>
        <FormGroup className="select_group">
          <select name="" id="">
            <option value="ac">FRANCAISES</option>
            <option value="non-ac">AUTRES</option>
          </select>
        </FormGroup>
        <FormGroup className="form_group">
          <button className="find_car-btn">Trouver une voiture</button>
        </FormGroup>
      </div>
    </Form>
  );
};

export default FindCarForm;
