import React from "react";
import { Link } from "react-router-dom";
import LogiForm from "../components2/LogiForm";

const Contact = () => {
  return (
    <>
    {/* mapsection */}

    <div class="container m-auto w-100">
      <div className="d-flex pt-5">
        <Link to="/" className="px-3">
          Home
        </Link>
        <Link to="/Contact">Contact</Link>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6808.558021538042!2d74.30248442367254!3d31.433984925592917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919012e2488f7fb%3A0x67e6caf9c4e2b5e7!2sGreen%20Town%2C%20Lahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1650947680217!5m2!1sen!2s"
        title="maps"
      ></iframe>
      contact
    </div>
    <LogiForm/>
    </>
  );
};

export default Contact;
