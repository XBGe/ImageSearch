import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID aH_VgE3QNX9FXhOJshVhoJc18perPoLTk9E6ddw1zWs"
  }
});
