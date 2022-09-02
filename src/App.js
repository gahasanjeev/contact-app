import "./App.css";
import { useState, useEffect } from "react";

const ContactCard = (prop) => {
  const [showAge, setShowAge] = useState(true);
  return (
    <div className="contact-card">
      <img src={prop.avatar} alt="profile" />
      <div className="user-details">
        <p>Name: {prop.name}</p>
        <p>Email: {prop.email}</p>
        <button onClick={() => setShowAge(!showAge)}>Toggle Age </button>
        {showAge && <p>Age: {prop.age}</p>}
      </div>
    </div>
  );
};

function App() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=3") //randomuser api
      .then((response) => response.json())
      .then((data) => {
        setContacts(data.results);
      });
  }, []);

  return (
    <>
      {contacts.map((contact) => (
        <ContactCard
          avatar={contact.picture.large}
          name={contact.name.first + " " + contact.name.last}
          email={contact.email}
          age={contact.dob.age}
        />
      ))}
    </>
  );
}

export default App;
