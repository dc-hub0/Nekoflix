import express from 'express';
import { getMovieByCategory, getMovieDetails, getMovieTrailers, getSimilarMovies, getTrendingMovie } from '../controllers/movie.controller.js';

const router = express.Router();

router.get("/trending", getTrendingMovie);
router.get("/:id/trailer", getMovieTrailers);
router.get("/:id/details", getMovieDetails);
router.get("/:id/similar", getSimilarMovies);
router.get("/:category", getMovieByCategory);

export default router;