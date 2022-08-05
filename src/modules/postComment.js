const postComment = async (id, userName, userComment) => {
  await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/tC8kuxLLK9p84n1K7Qba/comments', {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({
      item_id: id,
      username: userName,
      userComment:userComment,
    }),
  });
};

export default postComment;
