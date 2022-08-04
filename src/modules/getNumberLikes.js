 const getNumberLikes = async () => {
  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/wTuKRCdWCi0TS2pluTow/likes');
  const data = await response.json();
  return data;
};

export default getNumberLikes;