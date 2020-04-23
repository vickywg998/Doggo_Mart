export default {
    formatCurrency: function(num) {
        return "$" + num.toFixed(2).toLocaleString();
    }
}

