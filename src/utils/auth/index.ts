const CLIENT_ID = "62ad9d989a8b4ce5a729b355c32f4f68";
const REDIRECT_URI = "http://localhost:3000";
const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
const RESPONSE_TYPE = "token";

export const createLink = (): string => {
  const scope =
    "user-read-playback-state user-read-currently-playing playlist-read-private user-follow-read user-top-read user-read-recently-played user-library-read user-read-email user-read-private";
  const url =
    AUTH_ENDPOINT +
    "?" +
    new URLSearchParams({
      client_id: CLIENT_ID,
      response_type: RESPONSE_TYPE,
      scope: scope,
      redirect_uri: REDIRECT_URI,
    });

  return url;
}