import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import "./App.css";
import Message from "./components/Message";
import MessageEditor from "./components/MessageEditor";

import {
  addDoc,
  collection,
  getDocs,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";

import { db } from "./config";

function App() {
  const [messages, setMessages] = useState([]);
  const [pseudo, setPseudo] = useState(useParams().pseudo);
  const messagesCollectionRef = collection(db, "chatbox");

  // Récupération des messages dans la BDD
  useEffect(() => {
    const request = query((messagesCollectionRef), orderBy("timestamp", "asc"));
    onSnapshot(request, (snapshot) => {
      setMessages(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
  }, []);

  // Permet d'ajouter un message à la BDD
  async function addMessage(message, timestamp) {
    await addDoc(messagesCollectionRef, { message: message, pseudo: pseudo, timestamp:timestamp });
  }

  // Fonction qui permet d'afficher tous les messages
  const allMessages = messages.map((message) => {
    return (
      <Message
        key={message.id}
        pseudo={message.pseudo}
        message={message.message}
      />
    );
  });

  return (
    <div className="box h-screen bg-gradient-to-br from-blue-600 to-indigo-600 flex flex-col justify-center items-center w-full py-10">
      <div className="form container flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-100 p-4 w-3/4 mx-2 h-full justify-end">
        <div className="messages mb-6">
          <div className="message flex flex-col">{allMessages}</div>
        </div>
        <MessageEditor addMessage={addMessage} pseudo={pseudo} />
      </div>
    </div>
  );
}

export default App;
