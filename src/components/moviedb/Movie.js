import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment/moment";
import MovieInfoPopup from "./MovieInfoPopup";
import Bgcolor from "./bgcolor.module.css";
import Spinner from "react-bootstrap/Spinner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import "bootstrap/dist/css/bootstrap.min.css";
import {
  MainContainer,
  Container,
  Detail,
  Date,
  ImgClass,
  Btn,
} from "./StyleComponent";
import {
  IMG_URL,
  ImageUrl,
  Base_url,
  End_point,
  Lang,
  Api_key,
} from "./Variable";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setPage } from "../../redux/slices/MovieSlice";
import { fetchMovies } from "../../redux/slices/MovieSlice";

const Movie = () => {
  const [indata, setIndata] = useState([]);
  const [show, setShow] = useState(false);

  const Disable = useSelector((state) => state.moviedb.disable);
  const Page = useSelector((state) => state.moviedb.page);
  const movies = useSelector((state) => state.moviedb.movies);
  const loading = useSelector((state) => state.moviedb.loading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies({ page: Page }));
  }, [Page]);

  const loadMore = () => {
    dispatch(setPage(Page + 1));
  };

  
  const movieInfo = (id) => {
    axios
      .get(
        `${Base_url}${End_point}${id}?api_key=${Api_key}&language=${Lang}&page=${Page}`
      )
      .then((infodata) => {
        setShow(true);
        setIndata(infodata.data);
      });
  };

  return (
    <div className="App">
      <MainContainer>
        {!loading ? (
          movies.map((item, index) => {
            return (
              <Container
                className={Bgcolor.bgcolor}
                key={index}
                onClick={() => movieInfo(item.id)}
              >
                <ImgClass
                  src={
                    item.backdrop_path
                      ? `${IMG_URL}${item.backdrop_path}`
                      : ImageUrl
                  }
                  alt="./Images/download.png"
                />
                <Detail>
                  <h3>{item.original_title}</h3>
                  <p>
                    {item.vote_average} <FontAwesomeIcon icon={faStar} />
                  </p>
                </Detail>
                <Date>
                  <p>
                    Release Dtate :{" "}
                    {moment(item.release_date).format("MMM Do YY")}
                  </p>
                </Date>
              </Container>
            );
          })
        ) : (
          <Spinner
            className="loadingdisplay"
            animation="border"
            variant="warning"
          />
        )}
      </MainContainer>
      {!Disable && (
        <Btn disabled={Disable} onClick={loadMore}>
          Load More
        </Btn>
      )}
      <MovieInfoPopup
        show={show}
        onClose={() => setShow(false)}
        indata={indata}
        image_path={IMG_URL}
        ImageUrl={ImageUrl}
      />
    </div>
  );
};

export default Movie;
