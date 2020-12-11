<template>
    <div>
        <px-assets-table v-bind:assets="assets"/>
    </div>
</template>

<script>
import api from '@/api';
import PxAssetsTable from '@/components/PxAssetsTable';

export default {
    name: 'Home',
    components: {PxAssetsTable},

    data(){
        return{
            assets: []
        }
    },

    created(){
        console.log("Creando componente Home");
        api.getAssets().then(assets => (this.assets = assets))
    }
}
</script>
        PxAssetsTable