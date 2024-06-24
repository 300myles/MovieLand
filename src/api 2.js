

const API_KEY = '1d5b80f4a2cdafc3280ef64abf5de7a7'

async function sleep (ms) {
  let count = localStorage.getItem("sleep-count");
  if (count === 0) {
    count++
    localStorage.setItem("sleep-count", count)
    setTimeout(() => {
      localStorage.removeItem("sleep-count")
    }, 20000)
    return new Promise(resolve => {
      setTimeout(resolve, ms)
    });
  } else {
    return new Promise((resolve, reject) => {
      setTimeout(resolve, 0)
    })
  }
}

export async function trendingMovies (page) {
  await sleep(500);
  try {
     const res = await fetch(`https://api.themoviedb.org/3/trending/movie/day?language=en-US&api_key=${API_KEY}&page=${page}`);
    return res.json
  } catch (err) {
     console.log(err);
    throw new Error("Faild to generate movies")
    
  }
  
}

/*
export async function popularMovies (page) {
  const popular = await fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=1d5b80f4a2cdafc3280ef64abf5de7a7&page=${page}`).then(res => {
      if (!res.ok) {
        throw {
          message: "Failed to generate movies",
          statusText: res.statusText, 
          status: res.status
        }
      }
      return res.json()
    });
  
  return popular;
}
*/

export async function movieData (mid) {
  await sleep(200)
  const url = `https://api.themoviedb.org/3/movie/${mid}?api_key=1d5b80f4a2cdafc3280ef64abf5de7a7`;
  try {
     const res = await fetch(url);
    return res.json
  } catch (error) {
     throw new Error("Failed to generate movies")
  }
  
}

export async function searchMovies (search, page) {
  const url = `https://api.themoviedb.org/3/search/movie?query=${search}&api_key=${API_KEY}&page=${page}`;

  try {
     const res = await fetch(url);
    return res.json();
  } catch (error) {
     throw new Error("Failed to generate movies")
  }
  
}