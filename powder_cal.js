// app2.js
new Vue({
    el: '#powder_cal',
    data: {
        desertQiPrice: localStorage.getItem('desertQiPrice') || 0,
        moonwaterQiPrice: localStorage.getItem('moonwaterQiPrice') || 0,
    },
    computed: {
        desertPowderPrice: function() {
            return (this.desertQiPrice / 3.75).toFixed(2);
        },
        moonwaterPowderPrice: function() {
            return (this.moonwaterQiPrice / 3.4).toFixed(2);
        }
    },
    watch: {
        desertQiPrice: function(newVal) {
            localStorage.setItem('desertQiPrice', newVal);
        },
        moonwaterQiPrice: function(newVal) {
            localStorage.setItem('moonwaterQiPrice', newVal);
        },
    }
});