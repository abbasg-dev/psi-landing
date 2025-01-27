import { useState } from "react";
import { Modal } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import Chatbot, { createChatBotMessage } from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import { DeviceFrameset } from "react-device-frameset";
import "react-device-frameset/styles/marvel-devices.min.css";
import Button from "../button/button.component";
import assets from "../../assets";
import "./chat-bot.scss";
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
    const message = this.createChatbotMessage("Hello, Need help?");
    this.setState((prevState: any) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };
}

const ChatBotModal = (props: Props) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const BotAvatar = () => {
    return (
      <>
        <div className="react-chatbot-kit-chat-bot-avatar">
          <div
            className="react-chatbot-kit-chat-bot-avatar-container"
            style={{
              background: `url(${assets.botProfile})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              border: "1px solid #fff",
            }}
          ></div>
        </div>
      </>
    );
  };

  const UserAvatar = () => {
    return (
      <div className="react-chatbot-kit-user-chat-message-container">
        <div className="react-chatbot-kit-user-avatar">
          <div
            className="react-chatbot-kit-user-avatar-container"
            style={{
              background: `url(${assets.userProfile})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          ></div>
        </div>
      </div>
    );
  };

  const config = {
    botName: "Helper Bot",
    initialMessages: [
      createChatBotMessage("Welcome to PSI Bot!", { delay: 500 }),
    ],
    customComponents: {
      header: () => (
        <>
          <div
            className={`d-flex w-100 align-items-center justify-content-between ${
              isMobile ? "mt-1 gap-4" : "mt-4"
            }`}
          >
            <div className={`d-block ${isMobile && "w-100"}`}>
              <div className="d-flex align-items-center gap-4">
                <div
                  style={{
                    background: `url(${assets.botProfile})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    border: "1px solid #fff",
                  }}
                />
                <div>
                  <p className="mb-0 title">PSI Bot</p>
                  <div className="status gap-2 align-items-center d-flex">
                    <img src={assets.status} alt="status" />
                    Online
                  </div>
                </div>
              </div>
              {isMobile && (
                <hr
                  style={{
                    marginBottom: 5,
                    borderImage: "linear-gradient(45deg, #f86cf8, #64cef5) 1",
                  }}
                />
              )}
            </div>
            {!isMobile ? (
              <Button
                imgSrc={isHovered ? assets.placholder : assets.chatPlaceholder}
                altText={"close"}
                text={"Close Chat"}
                btnClass="close-chat-btn"
                click={props.onClose}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              />
            ) : (
              <div
                style={{
                  background: `url(${assets.mbBotVectary})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  width: "20%",
                  height: 120,
                }}
                onClick={props.onClose}
              ></div>
            )}
          </div>
        </>
      ),
      botAvatar: () => <BotAvatar />,
      userAvatar: () => <UserAvatar />,
    },
  };

  return (
    <Modal
      className={"chatbot-modal"}
      show={props.showChatBot}
      onHide={props.onClose}
      centered
      size="lg"
      dialogClassName="modal-100w"
    >
      {!isMobile ? (
        <DeviceFrameset device="MacBook Pro" color="gold">
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
      ) : (
        <div className="mx-4">
          <Modal.Body className="px-0 py-0">
            <Chatbot
              config={config}
              messageParser={MessageParser}
              actionProvider={ActionProvider}
            />
          </Modal.Body>
        </div>
      )}
    </Modal>
  );
};

export default ChatBotModal;
