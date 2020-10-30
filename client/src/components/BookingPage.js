import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Container } from "reactstrap";

export default function BookingPage() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});
  const { movieId } = useParams();
  const history = useHistory();

  useEffect(() => {
    getMovieDetail();
  }, []);

  function getMovieDetail() {
    setLoading(true);
    fetch(`http://localhost:5000/getMovies/${movieId}`)
      .then((response) => response.json())
      .then((result) => {
        setLoading(false);
        setData(result);
      })
      .catch((error) => {
        setLoading(false);
        console.log("error", error);
      });
  }

  function onClickBook() {
    alert("Ticket Booked");
  }

  return (
    <Container>
      {loading ? (
        <h3>Loading...</h3>
      ) : (
        <>
          <h2>{data.title}</h2>
          <h4>Year: {data.year}</h4>
          <p>
            <img src={data.poster} alt="img" className="img-thumbnail" />
          </p>
          <p>PLOT</p>
          <p>{data.plot}</p>
          <h5>Rating: {data.imdbRating}</h5>
          <h6>Language: {data.language}</h6>
          <h6>Country: {data.country}</h6>
          <br />
          <button
            type="button"
            className="btn btn-primary"
            onClick={onClickBook}
          >
            Book Ticket
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => history.goBack()}
          >
            Go Back
          </button>
        </>
      )}
    </Container>
  );
}
