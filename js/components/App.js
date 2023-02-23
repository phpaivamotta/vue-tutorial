import Assignments from './Assignments.js'
import Panel from './Panel.js'

export default {
    components: {Assignments, Panel},
    
    template:`
        <div class="grid gap-6">
            <assignments></assignments>
        
            <panel>
                We're in business.
            </panel>

            <panel>
                <template v-slot:heading>
                    Hello Bitch,
                </template>

                We're in business.
            </panel>

            <panel>
                <template v-slot:heading>
                    Hello Bitch,
                </template>

                We're in business.

                <template v-slot:footer>
                    This is my footer
                </template>
            </panel>

            <panel theme="light">
                <template v-slot:heading>
                    Hello Bitch,
                </template>

                We're in business.

                <template v-slot:footer>
                    This is my footer
                </template>
            </panel>
        </div>
    `,
}