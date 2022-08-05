const getShowById = async (id) => {
    const response = await fetch(
      'https://api.tvmaze.com/shows',
    );
    const result = await response.json();
    let singleShow = {};
    result.forEach((show) => {
        console.log('Funcin'+show.id);
      if (Number(show.id) === Number(id)) {
        console.log('entre');
       singleShow = show;
      }
    });
    return singleShow;
  };
  
  export default getShowById;
  