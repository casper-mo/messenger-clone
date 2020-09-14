import React, { useState, useEffect } from "react";
import {
  FormControl,
  IconButton,
  Input,
  Grid,
  Typography,
} from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import firebase from "firebase";
import FlipMove from "react-flip-move";

import Messages from "./Components/Messages/Messages";
import db from "./firebase";
import messengerIcon from "./assets/messenger.png";
import "./App.css";
function App() {
  const [input, setInput] = useState("");
  const [username, setUsername] = useState("");
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => ({ id: doc.id, message: doc.data() }))
        );
      });
  }, []);
  useEffect(() => {
    setUsername(prompt("Enter your Name:"));
  }, []);

  const submitHangler = (e) => {
    e.preventDefault();
    db.collection("messages").add({
      username: username,
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    // setMessages([...messages, { username: username, message: input }]);
    setInput("");
  };

  return (
    <Grid container>
      <Grid item xs={12} style={{ textAlign: "center", margin: "20px 0" }}>
        <img
          src={messengerIcon}
          alt="messenger Icon"
          style={{ width: "100px", height: "100px" }}
        />
        <Typography variant="h2" component="h1" className="heading">
          Messenger Clone
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <FormControl component="form" className="messenger_form">
          {/* <InputLabel>Enter Message</InputLabel>
          <Input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          /> */}
          <div className="app_form">
            <Input
              placeholder="Enter a Message"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="app_input"
            />
            <IconButton
              type="submit"
              onClick={submitHangler}
              variant="contained"
              disabled={!input}
              color="primary"
              className="app_icon"
            >
              <SendIcon />
            </IconButton>
          </div>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <FlipMove>
          {messages.map(({ id, message }) => (
            <Messages username={username} message={message} key={id} />
          ))}
        </FlipMove>
      </Grid>
    </Grid>
  );
}

export default App;
