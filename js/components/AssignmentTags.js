export default {
    template: `
    <div class="flex gap-2">
    <button 
      @click="$emit('update:currentTag', tag)"
      v-for="tag in allTags" 
      class="text-sx py-px px-1 border rounded"
      :class="{
        'border-blue-500 text-blue-500': tag === currentTag
      }"
      >{{ tag }}</button>
    </div>
    `,

    props: {
        initialTags: Array,
        currentTag: String
    },

    computed: {
        allTags() {
            return ['all', ...new Set(this.initialTags)]
          },
    }
}