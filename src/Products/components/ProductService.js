import http from "../components/HTTPcommon";

class ProductDataService {
  getAll() {
    return http.get("/about");
  }

  get(id) {
    return http.get(`/product/${id}`);
  }

//   create(data) {
//     return http.post("/tutorials", data);
//   }

  update(id, data) {
    return http.put(`/about/${id}`, data);
  }

  delete(id) {
    return http.delete(`/product/${id}`);
  }

  findByBrand(brand) {
    return http.get(`/about?brand=${brand}`);
  }

}

export default new ProductDataService();