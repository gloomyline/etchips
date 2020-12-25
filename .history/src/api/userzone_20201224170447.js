export default {
  async mymymy() {
    const response = await axios.get('/chi/member/buyMember',{payType:1,shopNumber:20,token:eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJsbGwyMDIwIiwiZXhwIjoxNjA4ODQzODQxLCJjcmVhdGVkIjoxNjA4ODAwNjQxNDI2LCJhdXRob3JpdGllcyI6W3siYXV0aG9yaXR5IjoiVklQXzAifV19.bW6_HPCBKPtF-34-bb_f88aCKyJAk8qX9WZzC0W3Q-WM8lz3JEgr_tfYPifw_vq0qv452l0chl4AT7RvLeL3FQ});
    return response.data;
  },
}