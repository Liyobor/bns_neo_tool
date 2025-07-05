// app2.js
new Vue({
    el: '#powder_cal',
    data: {
        itemPrice: localStorage.getItem('itemPrice') || 0,
        itemSellingPrice: localStorage.getItem('itemSellingPrice') || 0,
    },
    computed: {
        // 在這裡定義您的新計算邏輯
        // 這只是一個範例，您可以根據您的需求修改
        totalCost: function() {
            // 範例成本計算：物品A價格 * 5 + 100
            return this.itemPrice * 5 + 100;
        },
        expectedProfit: function() {
            // 範例收益計算：(物品B售價 * 0.95) - 總成本
            return (this.itemSellingPrice * 0.95 - this.totalCost).toFixed(0);
        }
    },
    watch: {
        itemPrice: function(newVal) {
            localStorage.setItem('itemPrice', newVal);
        },
        itemSellingPrice: function(newVal) {
            localStorage.setItem('itemSellingPrice', newVal);
        },
    }
});