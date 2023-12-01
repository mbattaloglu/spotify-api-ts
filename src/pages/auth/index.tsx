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
  const CLIENT_SECRET = "0fcb26a7eb80407c9fbf6dab237e4fd4";
  const REDIRECT_URI = "http://localhost:3000";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";

  const requestAuthToken = async () => {
    await fetch("https://accounts.spotify.com/api/token", {
      body: `grant_type=client_credentials&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      method: "POST",
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  // useEffect(() => {
  //   const hash = window.location.hash;
  //   let t = new URLSearchParams(hash).get("#access_token")!;

  //   if (t) {
  //     window.location.hash = "";
  //     setAuthToken(t);

  //     const getUserData = async () => {
  //       await fetch("https://api.spotify.com/v1/me", {
  //         headers: {
  //           Authorization: "Bearer " + t,
  //         },
  //       })
  //         .then((response) => response.json())
  //         .then((data) => {
  //           setUser(User.fromJSON(data));
  //           navigate("/home");
  //         });
  //     };

  //     getUserData();
  //   }
  // }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Spotifyer</h1>
      <button
        onClick={requestAuthToken}
        className={styles.login}
        //href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
      >
        Login to Spotify
      </button>
    </div>
  );
};

export default Login;
