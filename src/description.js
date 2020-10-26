import React, { useEffect, useState } from "react";
import { link } from "react-router-dom";
 import { useHistory } from "react-router-dom";
const Description = (props) => {
  const [movie, setMovie] = useState(null);
  const history = useHistory();
  const goHome = () => {
     history.push("/");
  };
  useEffect(() => {
    // setTimeout(()=> {
      setMovie(props.list.filter((el) => el.title == props.match.params.name)[0]);
    // }, 1000)
    
    console.log(props)
    // console.log(props.list.filter((el) => el.title == history.location.pathname.replace("/movie/" , ""))[0])
  });

  return (
    <div className="centrer">
      {movie && (
        <div>
          <h1>Description : </h1>
          <p style={{ fontSize: 18 }}>{movie.description}</p>
          <h1>Trailer link : </h1>
          <p style={{ fontSize: 18 }}>{movie.posterUrl}</p>
        </div>
      )}

      <button className="btn btn-secondary mt-4" onClick={goHome}>
        Logout
      </button>
    </div>
  );
};
export default Description;
