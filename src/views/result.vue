<template>
    <div>
        <div class="box">
			<p v-if="this.$route.params.is === 'lifestyle-personality-test'" class="title is-1" style="text-align: center; padding-top: 1.5%;">일상생활 속 나의 성격 유형은?</p>
            <p v-else class="title is-1" style="text-align: center; padding-top: 1.5%;">학교 생활 속 나의 유형은?</p>
	    </div>
        <div class="box">
              <p class="title is-3" style="text-align: center; padding-bottom: 0.5%">
                {{ name }}<br>
                {{ desc }}
                </p>  
        </div>
        <div v-if="feature != undefined" class="box">
            <div class="pre-formatted">{{ feature }}</div>
        </div>
    </div>
</template>
<style>
    .pre-formatted {
        text-align: center;
        white-space: pre;
    }
</style>
<script>
    export default {
        name: 'results',
        data() {
            return {
                index: '',
                result: this.$route.params.is,
                name: this.$route.params.id,
                desc: this.$route.params.desc,
                feature: this.$route.params.feature
            }
            
        },
        mounted() {
            console.log(this.$route.params.id)
        }
    }
</script>