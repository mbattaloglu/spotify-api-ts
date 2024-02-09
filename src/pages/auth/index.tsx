import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUserStore } from "../../stores/useUserStore";
import { createLink } from "../../utils/auth";
import styles from "./styles.module.css";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const setAuthToken = useUserStore((state) => state.setAccessToken);

  useEffect(() => {
    const hash = new URLSearchParams(window.location.hash.substr(1));
    const accessToken = hash.get("access_token");

    if (accessToken) {
      setAuthToken(accessToken);
      navigate("/home");
    }
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Spotifyer</h1>
      <a
        className={styles.login}
        href={createLink()}
      >
        Login to Spotify
      </a>
    </div>
  );
};

export default Login;
