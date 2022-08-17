<template>
    <div class="card">
	<div class="card-image">
	<figure class="image is-4by3">
      	<img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
    	</figure>
  </div>
 <div class="card-content">
 	<div class="media">
		<div class="media-content">
        		<router-link :to="link" class="title is-4">일상생활 속 나의 성격 유형은?</router-link><br>
        		<p class="subtitle is-6">제작자 : {{ author }}</p>
      		</div>
    	</div>
	<div class="content">
      	{{ description }}
      	<br>
    	</div>
    </div>
    </div>
</template>

<script>
    export default {
        name: 'card',
        props: {
            author: String,
            description: String,
			link: String
        }
    }
</script>