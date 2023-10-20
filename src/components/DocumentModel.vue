<template>
    <div v-if="openClose" class="modal fade show" tabindex="-1" aria-labelledby="exampleModalLabel" arial-modal="true"
        role="dialog" style="display:block">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Documento</h5>
                    <button type="button" class="btn-close" @click="openCloseFun()" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <slot>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est incidunt veniam eaque quisquam,
                            quam perferendis dignissimos hic doloribus numquam pariatur illo laudantium ipsam iste! Aperiam
                            quidem voluptatum voluptatem nostrum numquam?</p>
                    </slot>
                </div>
                <div class="modal-footer">
                    <button type="button" @click="openCloseFun()" :class="'btn btn-' + variant">Close</button>

                </div>
            </div>
        </div>
    </div>

    <button class="mt-3" type="button" @click="openCloseFun()" :class="'btn btn-' + variant">Vista previa</button>
</template>

<script>

export default {
    name: 'DocumentModal',
    props: {

        visible: Boolean,
        variant: String,
    },

    data() {
        return {
            openClose: this.visible
        }
    },

    methods: {
        openCloseFun() {
            this.openClose = !this.openClose;
        }
    },
    watch: {
        visible: function (newVal, oldVal) {
            this.openClose = newVal
            console.log('new' + newVal + '==' + oldVal)
        }
    }
}

</script>


<style scoped></style>