const getComments = async (id) => {
  const response = await fetch(
    `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/tC8kuxLLK9p84n1K7Qba/comments?item_id=${id}`,
  );
  const data = await response.json();
  return data;
};

export default getComments;
