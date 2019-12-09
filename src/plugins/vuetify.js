import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
   theme:{
       themes:{
        light: {
            
            accent: '#ffb300',
        },
        dark:{
            accent: '#888778',
        }
       }
   }
});
