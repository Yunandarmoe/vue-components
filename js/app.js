Vue.component("vote", {
    template: `#vote-template`,    
    data() {
        return {
            count: 0
        }
    },
    methods: {
        incrementCount() {
            this.count++;
        }
    }
}) // 2parameter 1st component name, 2nd object

new Vue({
    el: "#app"
})