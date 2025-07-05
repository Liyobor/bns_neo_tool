// app2.js
new Vue({
    el: '#powder_cal',
    data: {
        desertQiPrice: localStorage.getItem('desertQiPrice') || 0,
    },
    computed: {
        powderPrice: function() {
            return (this.desertQiPrice / 3.75).toFixed(2);
        }
    },
    watch: {
        desertQiPrice: function(newVal) {
            localStorage.setItem('desertQiPrice', newVal);
        },
    }
});