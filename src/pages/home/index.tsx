import React, { useEffect } from "react";
import { useUserStore } from "../../stores/useUserStore";
import User from "../../classes/User";

const Home: React.FC = () => {
  const user = useUserStore((state) => state.user);
  const setUser = useUserStore((state) => state.setUser);
  const authToken = useUserStore((state) => state.accessToken);

  const [loading, setLoading] = React.useState<boolean>(true);

  useEffect(() => {
    const getUserData = async (token: string) => {
      await fetch("https://api.spotify.com/v1/me", {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setUser(User.fromJSON(data));
        })
        .then(() => setLoading(false))
        .catch((error) => {
          console.log(error);
        });
    };

    if (authToken) {
      getUserData(authToken);
    }
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {!user || loading ? (
        <h1>fdgdf</h1>
      ) : (
        <div>
          <img src={user?.getImages()[1].getUrl()} alt="profile-img" />
          <h1>{user?.getDisplayName()}</h1>
          <p>Followers:{user?.getFollowers()}</p>
          <a target="_blank" rel="noreferrer" href={user?.getUserLink()}>
            Spotify Link
          </a>
        </div>
      )}
    </>
  );
};

export default Home;
