<template>
<teleport to='#Modal'>
    <div class="tork-modal" @click.self="showModal">
        <div class="tork-modal-dialog" :class="`tork-modal-${modalSize}`" @click.self="showModal">
            <div class="tork-modal-content">
                <div class="tork-modal-header" :class="title ? 'tork-d-flex tork-justify-space-between tork-items-center': '' ">
                    <h4 v-if="title" class="modal-title">{{ title }}</h4>
                    <button class="tork-btn close-btn" @click.prevent="showModal">&times;</button>
                </div>
                <div class="tork-modal-body">
                    <slot />
                </div>
            </div>
        </div>
    </div>
</teleport>
</template>

<script>
    export default {
        props: {
            showModal: {
                type: Function,
                required: true
            },
            title: {
                type: String,
                default: ""
            },
            modalSize: {
                type: String,
                default: 'md'
            }
           
        },
    }
</script>

<style lang="scss" scoped>
.modal-title {
	font-size: 1.2rem;
	font-weight: 600;
    color: $primary-color;
}
</style>