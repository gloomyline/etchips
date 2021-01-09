export default {
  //发票
  async dataapply(form) {
    const response = await axios.get('/chi/invoice/addOrUpdate',{
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