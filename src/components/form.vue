<template>
<div>
    <div v-for="(items, index) in questions" class="box">
        <h3 class="title is-4">{{ items.index }}. {{ items.question }}</h3>
        <img :src="require('@/assets/' + questions[index].img)" style="width: 50%; height: auto;" alt="Placeholder image"/>
        <div class="control">
        <label v-for="(a, i) in items.answers" :key="questions.answers" class="radio" style="display: block; padding-top: 0.25%; padding-bottom: 0.25%;">
            <p><input type="radio" :name="items.index" :id="String(items.index)+(i+1)">
            {{ i+1 }}. {{ a }}</p>
        </label>
        </div>
    </div>
</div>
</template>

<script>

    export default {
        props: {
            questions: Array
        },
        mounted() {
            
        }
    }
</script>
