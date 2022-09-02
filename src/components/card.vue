<template>
	<router-link :to="link" tag="div" class="card">
	<div class="card-image">
	<figure class="image is-4by3">
      	<img :src="require('@/assets/'+imgname)" alt="Placeholder image">
    	</figure>
  </div>
 	<div class="card-content">
 	<div class="media">
		<div class="media-content">
        		<p class="title is-4">{{ testname }}<br></p>
        		<p class="subtitle is-6">제작자 : {{ author }}</p>
      		</div>
    	</div>
	<div class="content">
      	{{ description }}
      	<br>
    	</div>
	</div>
	</router-link>

	
</template>

<script>
    export default {
        name: 'card',
        props: {
			imgname: String,
			testname: String,
            author: String,
            description: String,
			link: String
        }
    }
</script>