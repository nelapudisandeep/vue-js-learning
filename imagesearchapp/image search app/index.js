const app =  new Vue({
    el : '#app',
    data : {
        title : 'Image search app!',
        images : [],
        searchTerm : '',
        loading : false
    },
    methods:{
        async getImages(){
            let url = `https://nature-image-api.now.sh/search?q=` + this.searchTerm;
            this.loading = true
            if(this.searchTerm){
                const res = await fetch(url);
                const data = await res.json();
                this.images = [];
                const images = data.images;
                console.log(images);
                this.images = images;
            }
            this.loading = false
            this.searchTerm = ''
        }
    }
})