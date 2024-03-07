import 'htmx.org'
import Alpine from 'alpinejs';
import persist from '@alpinejs/persist';

window.Alpine = Alpine;

Alpine.store('user', {
    token: null,

    login(token) {
        this.token = token
    }
})

Alpine.start();

Alpine.plugin(persist);
