<template>
  <div>
    <p class="text-lg-h4">Liste des repas de Shadow</p>
    <div v-for="post in posts" :key="post.index" data-cy="list-length">
      <v-card class="mx-auto mt-10" max-width="344">
        <v-card-text>
          <p class="text-h6 text--primary">Shadow a eu un repas à {{post.time}}</p>
          <p class="text-h6 text--primary">La dose était {{post.quantity}}</p>
          <p class="text-h6 text--primary">
            La personne qui à donnée est {{post.person}}
          </p>
          <!-- Pour les commentaires <p></p> -->
        </v-card-text>
        <v-card-actions>
      <v-btn
        data-cy="list-button"
        text
        color="deep-purple accent-4"
        @click="deletePost(post.index)"
      >
        Supprimer
      </v-btn>
    </v-card-actions>
      </v-card>
    </div>
  </div>
</template>
<script>
export default {
  name: "FeedingPostList",
  data() {
    return {
      posts: [{ time: "17:15", quantity: "petite", person: "Maman" },
      { time: "10:00", quantity: "beaucoup", person: "Mathieu" },
    ],
    };
  },
  methods: {
    deletePost(e){
        this.posts.splice(this.posts.indexOf(e), 1);
    }
  },
};
</script>
