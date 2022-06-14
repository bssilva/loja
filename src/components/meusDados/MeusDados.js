export default {
  data: () => ({
    notLogin: false,
    client: null
  }), 
  async created(){
    this.client = await this.API.client.getCustomerCpf(sessionStorage.getItem('idCustomer'))
    this.client = this.client[0]
    if(sessionStorage.getItem('establishmentId')){
      this.notLogin = true
    }
  },
};
