import AssignmentList from "./AssignmentList.js";

export default {
  components: { AssignmentList },
  template: `
        <section class="space-y-6">
            <assignment-list :assignments="filters.inProgress" title="In Progress"></assignment-list>
            <assignment-list :assignments="filters.completed" title="Completed"></assignment-list>

            <form @submit.prevent="add">
              <div class="border border-gray-600 text-gray-800">
                <input v-model="newAssignment" placeholder="New Assignment..." class="p-2"/>
                <button type="submit" class="bg-white p-2 border-l bg-">Add</button> 
              </div>
            </form>
        </section>
  `,

  data() {
    return {
      assignments: [
        { name: "Finish Tutorial", complete: false, id: 1 },
        { name: "Review Previous CCE Lesson", complete: false, id: 2 },
        { name: "Train model", complete: false, id: 3 },
      ],

      newAssignment: ''
    };
  },

  computed: {
    filters () {
        return {
            inProgress: this.assignments.filter((assignment) => !assignment.complete),
            completed: this.assignments.filter((assignment) => assignment.complete)
        }
    }
  },

  methods: {
    add() {
      this.assignments.push({
        name: this.newAssignment,
        complete: false,
        id: this.assignments.length + 1
      })

      this.newAssignment = ''
    }
  }
};
