const getNumberLikes = async () => {
  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/tC8kuxLLK9p84n1K7Qba/likes');
  const data = await response.json();
  return data;
};

export default getNumberLikes;