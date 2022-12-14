import React, { useRef } from "react";
import axios from "axios";
import $ from "jquery";
import classnames from "classnames";
import "./Join.css";
import logoimg from "../img/logo_oco.png";

import { useNavigate } from "react-router-dom";

function Join() {
  const navigation = useNavigate();

  const [emsg1, setEmsg1] = React.useState("");
  const [emsg2, setEmsg2] = React.useState("");
  const [emsg3, setEmsg3] = React.useState("");
  const [emsg4, setEmsg4] = React.useState("");
  const [emsg5_1, setEmsg5_1] = React.useState("");
  const [emsg5_2, setEmsg5_2] = React.useState("");
  const [emsg5_3, setEmsg5_3] = React.useState("");
  const [emsg6, setEmsg6] = React.useState("");
  const [emsg7, setEmsg7] = React.useState("");
  const [emsg8, setEmsg8] = React.useState("");
  const [emsg9, setEmsg9] = React.useState("");

  const [id, setId] = React.useState("");
  const [idisvalid, setIdisvalid] = React.useState(false);
  const [dupidisvalid, setDupidisvalid] = React.useState(false);

  const [pw, setPw] = React.useState("");
  const [rpw, setRpw] = React.useState("");
  const [samepwisvalid, setSamepwisvalid] = React.useState(false);

  const [name, setName] = React.useState("");
  const [nameisvalid, setNameisvalid] = React.useState(false);

  const [birth, setBirth] = React.useState({
    year: "",
    month: "",
    day: "",
  });

  const [email, setEmail] = React.useState("");
  const [emailisvalid, setEmailisvalid] = React.useState(false);
  const [dupemailisvalid, setDupemailisvalid] = React.useState(false);

  const [gender, setGender] = React.useState("");
  const [genderidvalid, setGenderisvalid] = React.useState(false);

  const [nickname, setNickname] = React.useState("");
  const [nicknameisvalid, setNicknameisvalid] = React.useState(false);
  const [dupnicknameisvalid, setDupnicknameisvalid] = React.useState(false);

  const [phone, setPhone] = React.useState("");
  const [phoneisvalid, setPhoneisvalid] = React.useState(true);

  const date = new Date();
  const currentyear = date.getFullYear();
  let yearArr = [];
  for (let i = currentyear; i > currentyear - 100; i--) {
    yearArr.push(i);
  }
  const monthArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const dayArr = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ];

  const inputRef = useRef([]);

  const idvaluechange = (event) => {
    const idRegex = /^[A-Za-z0-9]{4,12}$/;
    const vid = event.target.value;
    setId(vid);
    setDupidisvalid(false);
    //????????? ????????????
    if (vid === "") {
      setEmsg1("???????????????.");
      setIdisvalid(false);
    } else {
      if (!idRegex.test(vid)) {
        setEmsg1("??????+?????? 4~12 ????????? ??????????????????.");
        setIdisvalid(false);
      } else {
        setEmsg1("");
        setIdisvalid(true);
      }
    }
  };

  const pwvaluechange = (event) => {
    const passwordRegex =
      /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,20}$/;
    const vpw = event.target.value;
    setPw(vpw);
    //???????????? ????????????
    if (vpw === "") {
      setEmsg2("???????????????.");
      setSamepwisvalid(false);
    } else {
      setEmsg2("");
      if (vpw === rpw) {
        setEmsg3("??????????????? ???????????????.");
        setSamepwisvalid(true);
      } else {
        setEmsg3("??????????????? ???????????? ????????????.");
        setSamepwisvalid(false);
      }
      // if (!passwordRegex.test(vpw)) {
      //   setEmsg2("??????+?????????+???????????? ???????????? 8~20?????? ??????????????????.");
      //   setPwisvalid(false);
      // } else {
      //   setEmsg2("");
      // }
    }
  };

  const repwvaluechange = (event) => {
    const vrpw = event.target.value;
    setRpw(vrpw);
    //?????????????????? ????????????
    if (vrpw === "") {
      setEmsg3("???????????????.");
      setSamepwisvalid(false);
    } else {
      if (vrpw === pw) {
        setEmsg3("??????????????? ???????????????.");
        setSamepwisvalid(true);
      } else {
        setEmsg3("??????????????? ???????????? ????????????.");
        setSamepwisvalid(false);
      }
    }
  };

  const namevaluechange = (event) => {
    const vname = event.target.value;
    setName(vname);
    //?????? ????????????
    if (vname === "") {
      setEmsg4("???????????????.");
      setNameisvalid(false);
    } else {
      if (vname.length < 2 || vname.length > 5) {
        setEmsg4("2?????? ?????? 5?????? ???????????? ??????????????????.");
        setNameisvalid(false);
      } else {
        setEmsg4("");
        setNameisvalid(true);
      }
    }
  };

  const birthvaluechange = (event) => {
    const target = $(event.target);
    const name = target.closest("select").attr("id");
    const vbrith = event.target.value;

    const cloneData = { ...birth };
    cloneData[name] = vbrith;
    setBirth(cloneData);

    // console.log(cloneData);

    if (name === "year" && vbrith === "") {
      setEmsg5_1("???????????????.");
    } else if (name === "month" && vbrith === "") {
      setEmsg5_2("???????????????.");
    } else if (name === "day" && vbrith === "") {
      setEmsg5_3("???????????????.");
    } else if (name === "year" && vbrith) {
      setEmsg5_1("");
    } else if (name === "month" && vbrith) {
      setEmsg5_2("");
    } else if (name === "day" && vbrith) {
      setEmsg5_3("");
    }
  };

  const emailvaluechange = (event) => {
    const emailRegex =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    const vemail = event.target.value;
    setEmail(vemail);
    setDupemailisvalid(false);
    //email ????????????
    if (vemail === "") {
      setEmsg6("???????????????.");
      setEmailisvalid(false);
    } else {
      if (!emailRegex.test(vemail)) {
        setEmsg6("????????? ????????? ????????????.");
        setEmailisvalid(false);
      } else {
        setEmsg6("");
        setEmailisvalid(true);
      }
    }
  };

  const gendervaluechange = (event) => {
    const vgender = event.target.value;
    // console.log(vgender);
    setGender(vgender);
    if (vgender === "") {
      setEmsg7("???????????????.");
      setGenderisvalid(false);
    } else {
      setEmsg7("");
      setGenderisvalid(true);
    }
  };

  const nicknamevaluechange = (event) => {
    const vnname = event.target.value;
    setNickname(vnname);
    setDupnicknameisvalid(false);
    //?????? ????????????
    if (vnname === "") {
      setEmsg8("???????????????.");
      setNicknameisvalid(false);
    } else {
      if (vnname.length > 12) {
        setEmsg8("12?????? ???????????? ??????????????????.");
        setNicknameisvalid(false);
      } else {
        setEmsg8("");
        setNicknameisvalid(true);
      }
    }
  };

  const phonevaluechange = (event) => {
    const phoneRegex = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;
    const vphone = event.target.value;

    setPhone(vphone);

    if (vphone === "") {
      setEmsg9("");
      setPhoneisvalid(true);
      return;
    }
    if (!phoneRegex.test(vphone)) {
      setEmsg9("????????? ???????????????. ?????? ??????????????????.");
      setPhoneisvalid(false);
    } else {
      setEmsg9("");
      setPhoneisvalid(true);
    }
  };

  /**
   * ????????? ????????????
   */
  const duplicateIdCheck = async () => {
    if (!idisvalid) {
      // console.log("???????????? ???????????? ????????????");
      return;
    }
    if (dupidisvalid) {
      // console.log("????????? ?????? ?????? ??????");
      return;
    }
    await axios({
      url: "http://localhost:5000/idcheck",
      method: "POST",
      data: { id: id },
    })
      .then((res) => {
        const { code, message } = res.data;
        if (code === "error") {
          setEmsg1(message);
          setIdisvalid(false);
          setDupidisvalid(false);
        } else {
          setEmsg1(message);
          setIdisvalid(true);
          setDupidisvalid(true);
        }
      })
      .catch((e) => {
        console.log("????????? ???????????? ??????!", e);
      });
  };

  /**
   * ????????? ????????????
   */
  const duplicateEmailCheck = async () => {
    if (!emailisvalid) {
      // console.log("???????????? ???????????? ????????????");
      return;
    }
    if (dupemailisvalid) {
      // console.log("????????? ?????? ?????? ??????");
      return;
    }
    await axios({
      url: "http://localhost:5000/emailcheck",
      method: "POST",
      data: { email: email },
    })
      .then((res) => {
        const { code, message } = res.data;
        if (code === "error") {
          setEmsg6(message);
          setEmailisvalid(false);
          setDupemailisvalid(false);
        } else {
          setEmsg6(message);
          setEmailisvalid(true);
          setDupemailisvalid(true);
        }
      })
      .catch((e) => {
        console.log("????????? ???????????? ??????!", e);
      });
  };

  /**
   * ????????? ????????????
   */
  const duplicatenickCheck = async () => {
    if (!nicknameisvalid) {
      // console.log("???????????? ???????????? ????????????");
      return;
    }
    if (dupnicknameisvalid) {
      // console.log("????????? ?????? ?????? ??????");
      return;
    }
    await axios({
      url: "http://localhost:5000/nicknamecheck",
      method: "POST",
      data: { nickname: nickname },
    })
      .then((res) => {
        const { code, message } = res.data;
        if (code === "error") {
          setEmsg8(message);
          setNicknameisvalid(false);
          setDupnicknameisvalid(false);
        } else {
          setEmsg8(message);
          setNicknameisvalid(true);
          setDupnicknameisvalid(true);
        }
      })
      .catch((e) => {
        console.log("????????? ???????????? ??????!", e);
      });
  };
  /**
   * ???????????? ??? ????????? ??????
   */
  const joinisvalid = () => {
    if (!idisvalid) {
      // console.log("???????????? ???????????????");
      inputRef.current[0].focus();
      return;
    }
    if (!dupidisvalid) {
      // console.log("????????? ????????? ???????????????");
      return;
    }
    if (!samepwisvalid) {
      // console.log("??????????????? ???????????????");
      inputRef.current[1].focus();
      return;
    }
    if (!nameisvalid) {
      // console.log("????????? ???????????????");
      inputRef.current[2].focus();
      return;
    }
    //??????
    if (!birth.year || !birth.month || !birth.day) {
      // console.log("????????? ???????????????");
      return;
    }
    if (!emailisvalid) {
      // console.log("???????????? ???????????????");
      inputRef.current[3].focus();
      return;
    }
    if (!dupemailisvalid) {
      // console.log("????????? ????????? ???????????????");
      return;
    }
    if (!genderidvalid) {
      // console.log("????????? ???????????????");
      return;
    }
    if (!nicknameisvalid) {
      // console.log("???????????? ???????????????");

      inputRef.current[4].focus();
      return;
    }
    if (!dupnicknameisvalid) {
      // console.log("????????? ????????? ???????????????");
      return;
    }
    if (!phoneisvalid) {
      // console.log("????????? ???????????????");
      return;
    }

    // console.log({
    //   id: id,
    //   pw: pw,
    //   name: name,
    //   birth: birth,
    //   email: email,
    //   gender: gender,
    //   nickname: nickname,
    //   phone: phone,
    // });

    joincheck();
  };

  const joincheck = async () => {
    await axios({
      url: "http://localhost:5000/join",
      method: "POST",
      data: {
        id: id,
        pw: pw,
        name: name,
        birth: birth,
        email: email,
        gender: gender,
        nickname: nickname,
        phone: phone,
      },
    })
      .then((res) => {
        const { code, message } = res.data;
        if (code === "error") {
          alert(message);
          return;
        }
        navigation("/login");
      })
      .catch((e) => {
        console.log("???????????? ??????!", e);
      });
  };

  return (
    <div className="join-container">
      {/* <div className="toast">?????????????????????????????????</div>; */}
      <div className="centerfix">
        <img
          src={logoimg}
          alt="logo?????????"
          onClick={() => {
            navigation("/main");
          }}
        />
        <span className="title">????????????</span>
        <div className="userinfo">
          <div className="idcontainer">
            <section className="title">
              <span>?????????</span>
              <span className="essential">*</span>
            </section>
            <input
              ref={(el) => (inputRef.current[0] = el)}
              type="text"
              name="id"
              placeholder="?????????"
              className="item overlap"
              onChange={idvaluechange}
            />
            <button
              className={classnames("overlapbtn", { over: dupidisvalid })}
              onClick={duplicateIdCheck}
            >
              ????????????
            </button>
            <section className="msgtitle">
              <span className="msg">{emsg1}</span>
            </section>
          </div>
          <div className="pwcontainer">
            <section className="title">
              <span>????????????</span>
              <span className="essential">*</span>
            </section>
            <input
              ref={(el) => (inputRef.current[1] = el)}
              type="password"
              name="pw"
              placeholder="????????????"
              className="item"
              onChange={pwvaluechange}
            />
            <span>
              8~20????????? ??????,??????,????????????(_!@#$%^&*)?????? ???????????? ??????
            </span>
            <section className="msgtitle">
              <span className="msg">{emsg2}</span>
            </section>
          </div>
          <div className="repwcontainer">
            <section className="title">
              <span>???????????? ?????????</span>
              <span className="essential">*</span>
            </section>
            <input
              type="password"
              name="repw"
              placeholder="???????????? ?????????"
              className="item"
              onChange={repwvaluechange}
            />
            <section className="msgtitle">
              <span className="msg">{emsg3}</span>
            </section>
          </div>
          <div className="namecontainer">
            <section className="title">
              <span>??????</span>
              <span className="essential">*</span>
            </section>
            <input
              ref={(el) => (inputRef.current[2] = el)}
              type="text"
              name="name"
              placeholder="??????"
              className="item"
              onChange={namevaluechange}
            />
            <section className="msgtitle">
              <span className="msg">{emsg4}</span>
            </section>
          </div>
          <div className="birthcontainer">
            <section className="title">
              <span>????????????</span>
              <span className="essential">*</span>
            </section>
            <select
              className="b-box"
              id="year"
              required
              onChange={birthvaluechange}
            >
              <option value="">??????</option>
              {yearArr.map((year, index) => (
                <option key={index} value={year}>
                  {year}
                </option>
              ))}
            </select>
            <select
              className="b-box second"
              id="month"
              required
              onChange={birthvaluechange}
            >
              <option value="">???</option>
              {monthArr.map((month, index) => (
                <option key={index} value={month}>
                  {month}
                </option>
              ))}
            </select>
            <select
              className="b-box"
              id="day"
              required
              onChange={birthvaluechange}
            >
              <option value="">???</option>
              {dayArr.map((day, index) => (
                <option key={index} value={day}>
                  {day}
                </option>
              ))}
            </select>
            <div className="line">
              <section className="msgtitle">
                <span className="msg">{emsg5_1}</span>
              </section>
              <section className="msgtitle">
                <span className="msg">{emsg5_2}</span>
              </section>
              <section className="msgtitle">
                <span className="msg">{emsg5_3}</span>
              </section>
            </div>
          </div>
          <div className="emailcontainer">
            <section className="title">
              <span>?????????</span>
              <span className="essential">*</span>
            </section>
            <input
              ref={(el) => (inputRef.current[3] = el)}
              type="text"
              name="email"
              placeholder="geenee@gmail.com"
              className="item overlap"
              onChange={emailvaluechange}
            />
            <button
              className={classnames("overlapbtn", { over: dupemailisvalid })}
              onClick={duplicateEmailCheck}
            >
              ????????????
            </button>
            <section className="msgtitle">
              <span className="msg">{emsg6}</span>
            </section>
          </div>
          <div className="gendercontainer">
            <section className="title">
              <span>??????</span>
              <span className="essential">*</span>
            </section>
            <select
              className="g-box full"
              id="gender-list"
              required
              onChange={gendervaluechange}
            >
              <option value="">??????</option>
              <option value="M">??????</option>
              <option value="F">??????</option>
            </select>
            <section className="msgtitle">
              <span className="msg">{emsg7}</span>
            </section>
          </div>
          <div className="nicknamecontainer">
            <section className="title">
              <span>?????????</span>
              <span className="essential">*</span>
            </section>
            <input
              ref={(el) => (inputRef.current[4] = el)}
              type="text"
              name="nickname"
              placeholder="?????????"
              className="item overlap"
              onChange={nicknamevaluechange}
            />
            <button
              className={classnames("overlapbtn", { over: dupnicknameisvalid })}
              onClick={duplicatenickCheck}
            >
              ????????????
            </button>
            <section className="msgtitle">
              <span className="msg">{emsg8}</span>
            </section>
          </div>
          <div className="phonecontainer">
            <section className="title">
              <span>????????? ??????</span>
            </section>
            <input
              type="text"
              name="phone"
              placeholder="010-1234-1234"
              className="item"
              onChange={phonevaluechange}
            />
            <section className="msgtitle">
              <span className="msg">{emsg9}</span>
            </section>
          </div>
          <button className="joinbtn" onClick={joinisvalid}>
            ????????????
          </button>
        </div>
      </div>
    </div>
  );
}

export default Join;
