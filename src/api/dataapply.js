export default {
  //数据申请
  async dataapply(form) {
    const response = await axios.get('/materialNumber/HomePageSaves',{
      params: {
        userName:form.userName,
        materialNumber:form.materialNumber,
        brandName:form.brandName,
        supplier:form.supplier
      }
    });
    return response;
  },
}