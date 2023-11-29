import { useEffect } from "react";

const Home: React.FC = () => {
  useEffect(() => {
    const authToken = window.localStorage.getItem("auth_token")!;

    const getUserData = async () => {
      await fetch("https://api.spotify.com/v1/me", {
        headers: {
          Authorization: "Bearer " + authToken,
        },
      })
        .then((response) => response.json())
        .then((data) => console.log(data));
    };

    getUserData();
  }, []);

  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

export default Home;
