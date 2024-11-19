/**
 * This is an example of a basic node.js script that performs
 * the Client Credentials oAuth2 flow to authenticate against
 * the Spotify Accounts.
 *
 * For more information, read
 * https://developer.spotify.com/documentation/web-api/tutorials/client-credentials-flow
 */

const client_id = 'c54bd3a1d79740c9a320ef950e0b5036'; 
const client_secret = '5407efb98f0344bab27373f49cd655ec';

async function getToken() {
  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    body: new URLSearchParams({
      'grant_type': 'client_credentials',
    }),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + (Buffer.from(client_id + ':' + client_secret).toString('base64')),
    },
  });

  return await response.json();
}

async function getTrackInfo(access_token) {
  const response = await fetch("https://api.spotify.com/v1/tracks/4cOdK2wGLETKBW3PvgPWqT", {
    method: 'GET',
    headers: { 'Authorization': 'Bearer ' + access_token },
  });

  return await response.json();
}

getToken().then(response => {
  getTrackInfo(response.access_token).then(profile => {
    console.log(profile)
    console.log(profile['artists'][0]['uri'])
    console.log(profile['artists']['uri'])
    
  })
});












// async function getProfile(accessToken) {
//     // let accessToken = localStorage.getItem('access_token');
  
//     const response = await fetch('https://api.spotify.com/v1/me', {
//       headers: {
//         Authorization: 'Bearer ' + accessToken
//       }
//     });
  
//     const data = await response.json();
//     console.log(data);
    
//   }

// getProfile('11dFghVXANMlKmJXsNCbNl')