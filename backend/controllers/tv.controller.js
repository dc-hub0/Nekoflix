import { fetchfromTMDB } from "../services/tmdb.service.js";


export async function getTrendingTv(req, res) {
    try {
        const data = await fetchfromTMDB("https://api.themoviedb.org/3/trending/tv/day?language=en-US")
        const randomMovie =  data.results[Math.floor(Math.random() * data.results?.length)];

        res.json({success: true, content: randomMovie})

    }catch (error) {
        res.status(500).json({success: false, message: "Internal server error"})
    }
    
}

export async function getTvTrailers(req, res) {
    const { id } = req.params;
    try {
        const data = await fetchfromTMDB(`https://api.themoviedb.org/3/tv/${id}/videos?language=en-US`)
        // const trailers = data.results.filter((video) => video.type === "Trailer")
        
        res.json({success: true, trailers:data.results})
        
    } catch (error) {
        if (error.message.inculdes("404")) {
            return res.status(404).send(null)
        }

        res.status(500).json({success: false, message: "Internal server error"})
        
}
}

export async function getTvDetails(req, res) {
    const { id } = req.params;
    try {
        const data = await fetchfromTMDB(`https://api.themoviedb.org/3/tv/${id}?language=en-US`)
        res.json({success: true, content: data})
    } catch (error) {
        if (error.message.inculdes("404")) {
            return res.status(404).send(null)
        }
        res.status(500).json({success: false, message: "Internal server error"})
    }
}

export async function getSimilarTvs(req, res) {
    const { id } = req.params;
    try {
        const data = await fetchfromTMDB(`https://api.themoviedb.org/3/tv/${id}/similar?language=en-US`)
        // res.json({success: true, content: data.results})
        res.status(200).json({success: true, similar:data.results});
    } catch (error) {
        res.status(500).json({success: false, message: "Internal server error"})
    }
}

export async function getTvsByCategory(req, res) {
    const { category } = req.params;
    try {
        const data = await fetchfromTMDB(`https://api.themoviedb.org/3/tv/${category}?language=en-US`)
        res.status(200).json({success: true, content:data.results});
    }catch (error) {
        res.status(500).json({success: false, message: "Internal server error"})
    }
}