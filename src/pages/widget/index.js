import widgetIcon from "../../assets/icons/widget-icon.png";
import backButton from "../../assets/icons/back-button.svg";
import groupPhoto from "../../assets/icons/group-photo.png";
import "./widget.css";
import { useState } from "react";

const Widget = () => {
  const [popup, setPopup] = useState(false);

  const handlePopup = () => {
    setPopup((prev) => !prev);
  };

  return (
    <main className="container">
      <section>
        {popup && (
          <article className="card">
            <div className="headerContainer">
              <header className="headerNavBar">
                <img
                  src={backButton}
                  alt="back-button"
                  className="headerBackButton"
                />
                <h3 className="headerNavHeading">NoCapMeta</h3>
              </header>

              <section className="headerBody">
                <img
                  src={groupPhoto}
                  alt="groupphoto"
                  className="groupPhoto"
                  width={220}
                  height={86}
                />
                <h4 className="h4Heading">We typically reply within a day</h4>
                <p className="pHeading">
                  We help your business grow by connecting you to your
                  customers. For more support, tips & tricks, check out the
                  Community
                  <br />
                  https://community.intercom.com
                </p>
              </section>
            </div>
            <section className="bodyWrapper">
              <div>
                <img
                  alt="chatlefticon"
                  src="https://static.intercomassets.com/assets/default-avatars/fin/128-6a5eabbb84cc2b038b2afc6698ca0a974faf7adc9ea9f0fb3c3e78ac12543bc5.png"
                  width={32}
                  height={32}
                  className="chatlefticon"
                />
              </div>
              <section>
                <div className="botChat">
                  <p>Hi there, welcome to NoCapMeta 👋</p>
                  <p>How can help you today?</p>
                </div>
              </section>
            </section>
            <section>
              <div className="userChat">
                <div className="topChat">
                  <p>I'd like to learn about NoCapMeta</p>
                  <p>See Fin in action</p>
                </div>
                <div className="horizontal">
                  <p>I'm a customer with a question</p>
                  <p>Just browsing</p>
                </div>
              </div>
            </section>

            <section className="inputWrapper">
              <input placeholder="Message..." />
            </section>
          </article>
        )}
      </section>
      <section onClick={handlePopup}>
        <img src={widgetIcon} className="widgetIconStyles" alt="widget-icon" />
      </section>
      <p>hello</p>
    </main>
  );
};

export default Widget;
