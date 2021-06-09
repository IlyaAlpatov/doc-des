<template>
    <b-field label="Подзаголовок">
        <b-input v-model="innerValue"></b-input>
    </b-field>
</template>

<script>
export default {
    name: 'subtitleInput',
    props: [
        'value'
    ],
    computed: {
        innerValue: {
            get() {
                return this.value;
            },
            set(n) {
                this.$emit('input', n);
            },
        },
    },
}
</script>

<style>

</style>