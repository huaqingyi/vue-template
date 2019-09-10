import { Component, Vue } from 'vue-property-decorator';
import { CreateElement } from 'vue';

@Component
export default class extends Vue {
    public render(h: CreateElement) {
        return (
            <div class='about'>
                <h1>This is an about page</h1>
            </div>
        );
    }
}
