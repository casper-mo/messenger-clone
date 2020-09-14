import React, { forwardRef } from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import "./Message.css";
const Messages = forwardRef(({ username, message }, ref) => {
  //   if (!username) return null;
  const isUser = username === message.username;
  const messageColor = isUser ? "white" : "black";
  return (
    <div ref={ref} className={` message ${isUser && "message_user"}`}>
      <Card className={isUser ? "message_userCard  " : "message_guestCard"}>
        <CardContent>
          <Typography
            variant="h5"
            component="h2"
            style={{ color: messageColor }}
          >
            {!isUser && `${message.username || "Unknown User"}: `}
            {message.message}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
});

export default Messages;
