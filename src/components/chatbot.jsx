import React,{useEffect, useState} from 'react';
import { Widget,addResponseMessage } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';

const Chatbot = () => {
    const [messages,setMessages] = useState([])
    useEffect(() => {
        addResponseMessage('Welcome to Pet Life Companion');
      }, []);
    
    const handleNewUserMessage = async(newMessage) => {
        console.log(`New message incoming! ${newMessage}`);
        try {
            const response = await fetch(
              "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyDr3kO79pEZKJUISdwuyLwf9yMSNOmWzrU",
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    "contents": [{
                        "parts":[{"text": newMessage}]
                        }]
                }),
              }
            );
        
            if (!response.ok) {
              throw new Error("Oops! Something went wrong while processing your request.");
            }
        
            const responseData = await response.json();
            console.log(responseData);
            // setMessages((prevMessages) => [
            //   ...prevMessages,
            //   {
            //     role: "assistant",
            //     content: responseData.choices[0].message.content,
            //   },
            // ]);
             addResponseMessage(responseData.candidates[0].content.parts[0].text)

          } catch (error) {
            console.error("Error while fetching chat data:", error);
          }

    };
    return <Widget handleNewUserMessage={handleNewUserMessage}  title="Pet Life Companion"
    subtitle="Ask Me Anything"/>

};
export default Chatbot;