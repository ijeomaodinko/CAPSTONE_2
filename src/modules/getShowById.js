const getShowById = async (id) => {
  const response = await fetch("https://api.tvmaze.com/shows");
  const result = await response.json();
  let singleShow = {};
  result.forEach((show) => {
    if (Number(show.id) === Number(id)) {
      singleShow = show;
    }
  });
  return singleShow;
};

export default getShowById;
