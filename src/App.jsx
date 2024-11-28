import React, { useState } from "react";
import Logo from "./assets/darkor_logo.svg";
import insta from "./assets/insta.svg";
import git from "./assets/github.svg";
import facebook from "./assets/facebook.svg";
import earth from "./assets/earth.svg";
import telegram from "./assets/telegram.svg";
import Image from "./assets/img.png";

function App() {
  const [komp, setKomp] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [dav, setDav] = useState("");
  const [shah, setShah] = useState("");
  const [nationality, setNationality] = useState("uzbek");
  const [joy, setJoy] = useState("");
  const [son, setSon] = useState(0);
  const [izoh, setIzoh] = useState("");
  const [card, setCard] = useState([]);

  function validate() {
    if (komp.length < 3) {
      alert("Bunday nomlik kompaniya mavjud emas");
      return false;
    }
    if (email.length <= 4 || !email.endsWith("@gmail.com")) {
      alert(
        "Email kamida 5 ta belgi bo‘lishi va '@gmail.com' bilan tugashi kerak"
      );
      return false;
    }
    const telPattern = /^\+998\d{9}$/;
    if (!telPattern.test(tel)) {
      alert(
        "Telefon raqam faqat sonlardan iborat bo‘lishi va '+998' bilan boshlanishi kerak"
      );
      return false;
    }
    if (dav.length < 2) {
      alert("Davlat nomini to‘liq kiriting");
      return false;
    }
    if (shah.length < 2) {
      alert("Shahar nomini to‘liq kiriting");
      return false;
    }
    if (joy.length < 2) {
      alert("Yashash joyini to‘liq kiriting");
      return false;
    }
    if (son <= 0) {
      alert("Hodimlar soni musbat bo‘lishi kerak");
      return false;
    }
    if (izoh.length < 10) {
      alert("Izoh kamida 10 ta belgidan iborat bo‘lishi kerak");
      return false;
    }

    return true;
  }

  function handleSave(event) {
    event.preventDefault();
    const isValid = validate();
    if (!isValid) {
      return;
    }
    setKomp("");
    setEmail("");
    setTel("");
    setDav("");
    setShah("");
    setNationality("");
    setJoy("");
    setSon(0);
    setIzoh("");

    const User = {
      komp: komp,
      email: email,
      tel: tel,
      dav: dav,
      shah: shah,
      nationality: nationality,
      joy: joy,
      son: son,
      izoh: izoh,
    };

    const copiedCard = [...card];
    copiedCard.push(User);
    setCard(copiedCard);
  }

  return (
    <div>
      <header>
        <div className="container header_container">
          <div className="logo">
            <img src={Logo} alt="Logo" />
          </div>
          <nav>
            <ul className="menu">
              <li>
                <a href="#">Vakansiyalar</a>
              </li>
              <li>
                <a href="#">Kandidatlar</a>
              </li>
              <li>
                <a href="#">Kompaniyalar</a>
              </li>
              <li>
                <a href="#">Xizmatlar</a>
              </li>
              <li>
                <a href="#">Ta’lim</a>
              </li>
            </ul>
          </nav>
          <div className="header_buttons">
            <div className="select-box">
              <select
                value={nationality}
                onChange={(e) => {
                  setNationality(e.target.value);
                }}
              >
                <option value="">Uzbek</option>
                <option value="English">English</option>
                <option value="Russia">Russia</option>
                <option value="Spanish">Spanish</option>
              </select>
            </div>
            <button id="btn">Boshlash</button>
          </div>
        </div>
      </header>
      <div className="container kompaniya_container">
        <div className="block">
          <h2>Kompaniya ma’lumotlari</h2>
          <p>Kompaniya haqidagi ma’lumotlarni kiriting</p>
          <div className="img">
            <img src={Image} alt="" />
            <h3>Yuklash</h3>
          </div>
          <div className="inputs">
            <h5>
              Kompaniya nomi <span>*</span>
            </h5>
            <input
              value={komp}
              onChange={(e) => {
                setKomp(e.target.value);
              }}
              type="text"
              id="komp"
              placeholder="Kompaniya nomi"
            />
            <h5>
              Email <span>*</span>
            </h5>
            <input
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type="text"
              id="email"
              placeholder="Email "
            />
            <h5>
              Telefon raqami <span>*</span>
            </h5>
            <input
              value={tel}
              onChange={(e) => {
                setTel(e.target.value);
              }}
              type="text"
              id="tel"
              placeholder="UZ +9989"
            />
          </div>
          <div className="linklar">
            <h5>
              Linklar <span>*</span>
            </h5>
            <div className="links">
              <img src={earth} alt="" />
              <img src={insta} alt="" />
              <img src={telegram} alt="" />
              <img src={facebook} alt="" />
              <img src={git} alt="" />
            </div>
          </div>
          <div className="davlat_inp">
            <div className="davlat">
              <h5>
                Davlat <span>*</span>
              </h5>
              <input
                value={dav}
                onChange={(e) => {
                  setDav(e.target.value);
                }}
                type="text"
                id="davlat"
                placeholder="Davlat"
              />
            </div>
            <div className="shahar">
              <h5>
                Shahar <span>*</span>
              </h5>
              <input
                value={shah}
                onChange={(e) => {
                  setShah(e.target.value);
                }}
                type="text"
                id="shahar"
                placeholder="Shahar"
              />
            </div>
          </div>
          <h5>
            Yashash joyi <span>*</span>
          </h5>
          <input
            value={joy}
            onChange={(e) => {
              setJoy(e.target.value);
            }}
            type="text"
            id="joy"
            placeholder="Yashash joyi"
          />
          <h5>
            Hodimlar soni<span>*</span>
          </h5>
          <input
            value={son}
            onChange={(e) => {
              setSon(e.target.value);
            }}
            type="number"
            id="son"
            placeholder="Hodimlar soni"
          />
          <h5>
            Izoh <span>*</span>
          </h5>
          <textarea
            value={izoh}
            onChange={(e) => {
              setIzoh(e.target.value);
            }}
            id="Izoh"
            placeholder="Kompaniya haqida izoh qoldiring"
          ></textarea>
          <div className="buttons">
            <button id="ort">Ortga</button>
            <button onClick={handleSave} id="key">
              Keyingisi
            </button>
          </div>
        </div>
      </div>
      <div className="container card_container">
        {card.length > 0 &&
          card.map((user, index) => {
            return (
              <div key={index} className="card">
                <h3>
                  <strong>Kompaniya nomi:</strong> {user.komp}
                </h3>
                <h3>
                  <strong>Email:</strong> {user.email}
                </h3>
                <h3>
                  <strong>Telefon nomer:</strong> {user.tel}
                </h3>
                <h3>
                  <strong>Davalat:</strong> {user.dav}
                </h3>
                <h3>
                  <strong>Shahar:</strong> {user.shah}
                </h3>
                <h3>
                  <strong>Yashash joyi:</strong> {user.joy}
                </h3>
                <h3>
                  <strong>Hodimlar soni:</strong> {user.son}
                </h3>
                <h3>
                  <strong>Kompaniya haqida izoh:</strong> {user.izoh}
                </h3>
                <h3>
                  <strong>Til:</strong> {user.nationality}
                </h3>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default App;
