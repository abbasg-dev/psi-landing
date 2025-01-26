import { Modal } from "react-bootstrap";
import Chatbot, { createChatBotMessage } from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import { DeviceFrameset } from "react-device-frameset";
import "react-device-frameset/styles/marvel-devices.min.css";
// import assets from "../../assets";
import styles from "./chat-bot.module.scss";
import "./bot.scss";

type Props = {
  onClose?: () => void;
  showChatBot?: boolean;
};

class MessageParser {
  actionProvider: ActionProvider;

  constructor(actionProvider: ActionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message: string) {
    console.log("User message:", message);
    if (message.toLowerCase().includes("hello")) {
      this.actionProvider.handleHello();
    }
  }
}

class ActionProvider {
  createChatbotMessage: any;
  setState: any;
  createClientMessage: any;

  constructor(
    createChatbotMessage: any,
    setStateFunc: any,
    createClientMessage: any
  ) {
    this.createChatbotMessage = createChatbotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
  }

  handleHello = () => {
    const message = this.createChatbotMessage("Hello! How can I help?");
    this.setState((prevState: any) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };
}

const config = {
  botName: "Helper Bot",
  initialMessages: [createChatBotMessage("Hello world!", { delay: 500 })],
};

const ChatBotModal = (props: Props) => {
  return (
    <Modal
      className={styles.chatbotModal}
      show={props.showChatBot}
      onHide={props.onClose}
      centered
      size="lg"
      dialogClassName="modal-100w"
    >
      <DeviceFrameset device="MacBook Pro" color="gold">
        <div className="d-flex justify-content-between align-items-center mx-4 my-3"></div>
        <div className="mx-4">
          <Modal.Body className="px-0 py-0">
            <Chatbot
              config={config}
              messageParser={MessageParser}
              actionProvider={ActionProvider}
            />
          </Modal.Body>
        </div>
      </DeviceFrameset>
    </Modal>
  );
};

export default ChatBotModal;
