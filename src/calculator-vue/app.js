new Vue({
    el: '#app',
    data: {
        display: ''
    },
    methods: {
        append(char) {
            if (this.display === 'Erro') {
                this.display = '';
            }
            this.display += char;
        },
        clear() {
            this.display = '';
        },
        calculate() {
            try {
                this.display = eval(this.display).toString();
            } catch (e) {
                this.display = 'Erro';
            }
        }
    }
});
