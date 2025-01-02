"use server"

import axios from "axios";

export async function GET(request: Request) {
    const res = await axios.get("https://api.themoviedb.org/3/tv/34587/credits?api_key=YOUR_API_KEY")
  
    return Response.json({
      cast: res.data.cast,
    });
}
