const commentsCounter = () => {
  const numItems = (document.querySelectorAll('.itemComment')).length;
  return numItems;
};

export default commentsCounter;
