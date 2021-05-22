import http from "../components/HTTPcommon";

class ProductDataService {
  getAll() {
    return http.get("/product");
  }

  getAll() {
    return http.get("/about");
  }

  get(id) {
    return http.get(`/product/${id}`);
  }


  update(id, data) {
    return http.put(`/about/${id}`, data);
  }

  delete(id) {
    return http.delete(`/about/${id}`);
  }

  findByBrand(brand) {
    return http.get(`/product?brand=${brand}`);
  }

  findByBrand(brand) {
    return http.get(`/about?brand=${brand}`);
  }

}

export default new ProductDataService();