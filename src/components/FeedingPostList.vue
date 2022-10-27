<template>
  <div>
    <p class="text-h4">{{$t('home.postsList.title')}}</p>
    <div v-for="post in posts" :key="post._id" data-cy="list-length">
      <v-card class="mx-auto mt-10" max-width="344">
        <v-card-text>
          <p class="text-h6 text--primary">
            {{$t('home.postsList.posts.time')}} {{ post.time }}
          </p>
          <p class="text-h6 text--primary">{{$t('home.postsList.posts.portion')}} {{ post.portion }}</p>
          <p class="text-h6 text--primary">
            {{$t('home.postsList.posts.giver')}} {{ post.person }}
          </p>
          <p class="text-h6 text--primary" v-if="post.comment">
            {{ post.comment }}
          </p>
          <!-- Pour les commentaires <p></p> -->
        </v-card-text>
        <v-card-actions>
          <v-btn
            data-cy="list-button"
            text
            color="deep-purple accent-4"
            @click="deletePost(post._id)"
          >
          {{$t('home.postsList.posts.deleteBtn')}}
          </v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "FeedingPostList",
  computed: {
    ...mapState(["posts"]),
  },
  methods: {
    ...mapActions(["deletePost"]),
  },
};
</script>
