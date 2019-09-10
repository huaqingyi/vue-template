import { Component, Vue } from 'vue-property-decorator';
import { CreateElement } from 'vue';

@Component
export default class extends Vue {
    public render(h: CreateElement) {
        return (
            <div class='home'>
                <img alt='Vue logo' src={require('../../assets/logo.png')} />
            </div>
        );
    }
}
