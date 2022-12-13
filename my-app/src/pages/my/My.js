import React from "react";
import "./My.css";
import Menubar from "../../component/menubar";

import { StoreContext } from "../../App";
import { useNavigate } from "react-router-dom";

function My() {
  const navigation = useNavigate();

  //App에서 StoreContext 받아온 후 로그인세션 사용
  const { loginUser } = React.useContext(StoreContext);

  const [State, setState] = React.useState({
    session: "로그인",
  });

  React.useEffect(() => {
    if (loginUser.mem_userid !== undefined) {
      setState({ session: "마이" });
    }
  }, [loginUser]);

  return (
    <div className="container">
      <Menubar session={State.session} />
      <div className="contents-container">
        <div>마이페이지입니다.</div>
      </div>
    </div>
  );
}

export default My;
