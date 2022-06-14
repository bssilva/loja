import Vue from 'vue'
import Carousel3d from 'vue-carousel-3d';
Vue.use(Carousel3d);

export default {
  data: () => ({
    notLogin: false,
    prizes: [],
    redemptionSelected: null,
    openModal: false
  }), 
  async created(){
    this.prizes = await this.API.prize.getPrize()
    console.log(this.prizes)
    if(sessionStorage.getItem('establishmentId')){
      this.notLogin = true
    }
  },
  methods:{
    moveComoFunciona(){
      window.scrollTo(0,500)
    },
    moveLogin(){
      window.scrollTo(0,1000)
    },
    resgatar(item){
      this.redemptionSelected = item
      this.openModal = true
    },
    async redemptionItem(){
      let redemption = {
        cpf: sessionStorage.getItem('idCustomer'),
        descriptionPremium: this.redemptionSelected.name,
        value: this.redemptionSelected.value,
        quantity: 1
      }

      const resp = await this.API.redemption.postRedemption(redemption);

      if (resp.status == 201) {
        this.$toasted.global.success({ msg: "Resgate realizado com sucesso" });
        setTimeout(() => {
          location.reload();
        }, 800);
      }
    }
  }
};
