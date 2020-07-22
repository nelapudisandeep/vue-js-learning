let root = new Vue({
    el : '#root',
    data: {
        quote : '',
        author : '',
    },
    mounted(){
        this.getTodo();
    },
    methods : {
        getTodo(){
            let url = `https://random-math-quote-api.herokuapp.com/`;
            fetch(url)
                .then(response=>response.json())
                .then(data=>{
                    console.log(data);
                    this.quote = data.quote;
                    this.author = data.author;
                });
        },
        changeBackground(){
        }
    }
});