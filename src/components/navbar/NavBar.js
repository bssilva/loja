export default {
  data() {
    return {
      items: [
        {
          src: "https://www.sigacred.com.br/imagens/titulo_prog_fidelidade.png",
        }
      ],
    };
  },
  methods:{
    moveComoFunciona(){
      window.scrollTo(0,500)
    },
    moveLogin(){
      window.scrollTo(0,1000)
    }
  }
};
