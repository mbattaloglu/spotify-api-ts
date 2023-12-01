import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import { useUserStore } from "../../stores/useUserStore";
import User from "../../classes/User";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const setUser = useUserStore((state) => state.setUser);
  const setAuthToken = useUserStore((state) => state.setAuthToken);

  const CLIENT_ID = "62ad9d989a8b4ce5a729b355c32f4f68";
  const REDIRECT_URI = "http://localhost:3000";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";

  useEffect(() => {
    const hash = window.location.hash;
    let t = new URLSearchParams(hash).get("#access_token")!;

    if (t) {
      window.location.hash = "";
      setAuthToken(t);

      const getUserData = async () => {
        await fetch("https://api.spotify.com/v1/me", {
          headers: {
            Authorization: "Bearer " + t,
          },
        })
          .then((response) => response.json())
          .then((data) => {
            setUser(User.fromJSON(data));
            navigate("/home");
          });
      };

      getUserData();
    }
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Spotifyer</h1>
      <a
        className={styles.login}
        href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
      >
        Login to Spotify
      </a>
    </div>
  );
};

export default Login;
