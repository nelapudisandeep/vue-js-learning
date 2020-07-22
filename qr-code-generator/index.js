let app = new Vue({
    el : '#app',
    data(){
        return{
            url:'',
            src:'',
            data:[],
        }
    },
    mounted(){
        this.data = JSON.parse(localStorage.url);
    },
    methods:{
        getQrCode(){
            let baseURL = `https://qrtag.net/api/qr_4.png?url=`;
            this.src = baseURL + this.url ;
            this.data.push({
                url:this.url,
                src:this.src
            });
            localStorage.url = JSON.stringify(this.data);
            this.url = '';
        }
    },
});