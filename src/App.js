import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router";
import "./App.css";
import Message from "./components/Message";
import MessageEditor from "./components/MessageEditor";

import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
  limit
} from "firebase/firestore";

import { db } from "./config";

  //ToDo : Ajouter un system de pagination des messages (Offset) couplé au Limit dans le useEffect afin de pouvoir afficher les messages antérieur
  //Todo : Afficher les pseudos des utilisateur devant les messages


function App() {
  // State
  const [messages, setMessages] = useState([]);
  const [user] = useState(useParams().pseudo);
  const messagesCollectionRef = collection(db, "chatbox");

  // Déclaration des réf
  const bottomRef = useRef(null);

  // Récupération des messages dans la BDD


  useEffect(() => {
    const request = query(messagesCollectionRef, orderBy("timestamp", "desc"), limit(25));
    onSnapshot(request, (snapshot) => {
      setMessages(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));

      // Syteme de scroll auto vers le bas 
      bottomRef.current.scrollIntoView();

    });

  },[]);

  //Verifier si un message afficher est ecrit par l utilisateur sur la sesion
  const isUser = pseudo => pseudo === user;


  // Permet d'ajouter un message à la BDD
  async function addMessage(message, timestamp) {
    await addDoc(messagesCollectionRef, {
      message: message,
      pseudo: user,
      timestamp: timestamp,
    });
  }

  // Fonction qui permet d'afficher tous les messages
  const allMessages = messages.map((message) => {
    return (
      <Message
        key={message.id}
        pseudo={message.pseudo}
        message={message.message}
        isUser={isUser}
      />
    );
  });

  return (
    <div className="box h-screen bg-gradient-to-br from-blue-600 to-indigo-600 flex flex-col justify-center items-center w-full py-10">
      <div className="form container flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-100 p-4 pr-0 w-3/4 mx-2 h-full justify-end">
        <div className="messages overflow-y-scroll mb-6 pr-4">
          <div className="message flex flex-col-reverse"> {allMessages}</div>
          <span ref={bottomRef}></span>
        </div>
        <MessageEditor addMessage={addMessage} pseudo={user} />
      </div>
    </div>
  );
}

export default App;
