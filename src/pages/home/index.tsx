import { useEffect, useState } from "react";
import { useUserStore } from "../../stores/useUserStore";

const Home: React.FC = () => {
  const user = useUserStore((state) => state.user);
  const authToken = useUserStore((state) => state.authToken);

  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const getTopArtists = async () => {
      await fetch("https://api.spotify.com/v1/me/top/artists", {
        headers: {
          Authorization: "Bearer " + authToken, 
        }
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        });
    };

    getTopArtists();
  }, [])

  return (
    <div>
      <img src={user?.getImages()[1].getUrl()} alt="profile-img" />
      <h1>{user?.getDisplayName()}</h1>
      <p>Followers:{user?.getFollowers()}</p>
      <a target="_blank" rel="noreferrer" href={user?.getUserLink()}>
        Spotify Link
      </a>
    </div>
  );
};


export default Home;