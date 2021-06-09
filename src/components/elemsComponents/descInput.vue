<template>
    <b-field label="Описание">
        <b-input maxlength="200" type="textarea" v-model="innerValue"></b-input>
    </b-field>
</template>

<script>
export default {
    name: 'descInput',
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