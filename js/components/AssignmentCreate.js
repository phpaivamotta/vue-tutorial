export default {
    template: `
        <form @submit.prevent="add">
            <div class="border border-gray-600 text-gray-800">
                <input v-model="newAssignment" placeholder="New Assignment..." class="p-2"/>
                <button type="submit" class="bg-white p-2 border-l bg-">Add</button> 
            </div>
        </form>        
    `,

    data () {
        return {
            newAssignment: ''
        }
    },

    methods: {
        add () {
            this.$emit('add', this.newAssignment)
        
            this.newAssignment = ''
        }
    }
}