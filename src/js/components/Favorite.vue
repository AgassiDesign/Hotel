<template>

    <span :class="activeClass" class="simplefavorite-button article-save" :data-postid="post_id" data-siteid="1" data-groupid="1" data-favoritecount="0">
        <i class="fas fa-star"></i> {{ activeClass ? 'Saved' : 'Save'}}
    </span>

    <!-- .article-save -->
</template>

<script>
export default {
    name: 'Favorite',
    data() {
        return {
        };
    },
        props: {
        post_id: {
            type: Number,
            required: true,
        },
    },
    computed: {
        activeClass() {
            const postIdList = (JSON.parse(this.$cookies.get("simplefavorites")));
            if (Object.values(postIdList[0].posts).indexOf(this.post_id) > -1) {
                 return 'active';
            }
            return '';
        }
    },
};
</script>
