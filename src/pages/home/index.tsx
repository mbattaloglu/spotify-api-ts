import { useUserStore } from "../../stores/useUserStore";

const Home: React.FC = () => {
  const user = useUserStore((state) => state.user);

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