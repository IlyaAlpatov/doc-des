<template>
    <b-field label="Заголовок">
        <b-input v-model="innerValue"></b-input>
    </b-field>
</template>

<script>
export default {
    name: 'titleInput',
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