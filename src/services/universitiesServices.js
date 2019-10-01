import baseRequest from "../_core";

const universityService = {
    getUniversity: (id) => baseRequest.get(`/get/searchUniverstyById?id=${id}`),
  };

  export default universityService;