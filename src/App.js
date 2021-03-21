import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./components/ChatFeed";
import LoginForm from "./components/LoginForm";
import "./App.css";

const App = () => {
    if (!localStorage.getItem('username')) return <LoginForm />;
    return (<ChatEngine
        height="100vh"
        projectID="c9a4b00d-4ffa-4216-a641-a48c5e048090"
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />);
}

export default App;