import axios from "axios";

export default {
  // Gets all titles
  getTitles: function() {
    return axios.get("/titles");
  },
  // Saves the article with the given id
  saveArticle: function(articleData) {
    return axios.post("/api/articles", articleData);
  },
  // Remove the article with the given id from saved articles 
  deleteArticle: function(id) {
    return axios.delete("/api/articles/" + id);
  },
};