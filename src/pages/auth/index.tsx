import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const navigate = useNavigate();

  const CLIENT_ID = "62ad9d989a8b4ce5a729b355c32f4f68";
  const REDIRECT_URI = "http://localhost:3000";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";

  useEffect(() => {
    const hash = window.location.hash;
    let t = window.localStorage.getItem("auth_token");

    if (!t && hash) {
      t = hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"))!
        .split("=")[1];

      if (t) {
        window.location.hash = "";
        window.localStorage.setItem("auth_token", t);
        navigate("/home");
      }
    }

    if (t){
      navigate("/home");
    }

  }, []);
  return (
    <a
      href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
    >
      Login to Spotify
    </a>
  );
};

export default Login;
