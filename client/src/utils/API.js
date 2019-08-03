import axios from "axios";

export default {
  // Gets all titles
  getTitles: function() {
    return axios.get("/titles");
  },
  // Gets title bassed on search input
  searchTitle: function(input) {
    return axios.get("/titles/search?name=" + input.userInput);
  }
};