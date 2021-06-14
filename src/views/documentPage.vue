<template>
    <div>
        <div v-if="doc">
            <h1 class="title is-1">{{doc.docName}}</h1>
            <div 
            v-for="(elem, index) in doc.elems" :key="index">
                <div
                v-if="elem.type === 'titleInput'">
                    <h2 class="title is-2">{{elem.value}}</h2>
                </div>
                <div
                v-else-if="elem.type === 'subtitleInput'">
                    <h3 class="subtitle is-3">{{elem.value}}</h3>
                </div>
                <div
                v-else-if="elem.type === 'descInput'">
                    <p>{{elem.value}}</p>
                </div>
                <div
                v-else-if="elem.type === 'codeInput'">
                    <!-- <highlightjs language='javascript' code="var x = 5;" /> -->
                    <pre class="pre"><code>{{elem.value}}</code></pre>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
import hljs from 'highlight.js';

export default {
    name: 'documentPage',
    props: [
        'doc'
    ],
    computed: {

    },
    activated() {
        hljs.highlightAll();
        if (!this.doc) {
            this.$router.push({
                name: 'listPage'            
            });
            }
    }


}
</script>

<style scoped>
    .pre {
        background-color: #282b2e;
    }
</style>