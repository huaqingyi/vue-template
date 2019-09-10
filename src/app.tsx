import { Component, Vue } from 'vue-property-decorator';
import { CreateElement } from 'vue';

@Component
export default class extends Vue {
    public render(h: CreateElement) {
        return (
            <div id='app'>
                <div id='nav'>
                    <router-link to='/'>Home</router-link> |
                    <router-link to='/about'>About</router-link>
                </div>
                <router-view />
            </div>
        );
    }
}
