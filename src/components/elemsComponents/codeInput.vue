<template>
    <b-field label="Код">
        <b-input type="textarea" v-model="innerValue"></b-input>
    </b-field>
</template>

<script>
export default {
    name: 'codeInput',
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