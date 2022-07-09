import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
          light: {
            primary: '#4A0A52', // #E53935
            secondary: '#16061C', // #FFCDD2
            // accent: colors.indigo.base, // #3F51B5
          },
        },
    },
});
