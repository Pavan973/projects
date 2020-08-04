new Vue({
    el: '#app',
    data: {
        currentQuote: quotes[0],
        show: false,
        animating: false
    },
    methods: {
         newQuote: function() {
            const num = Math.floor(Math.random() * quotes.length)
           this.currentQuote =quotes[num]
           this.show = !this.show
        }
    },
    //life cycle hooks
    updated: function(){
        this.animating = true
        setTimeout(() =>
        {
         this.animating = false
        },1000)
        console.log('updated')
    }
})
