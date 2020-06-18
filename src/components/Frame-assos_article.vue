<template>
    <div class="container">
        <div class="innerContainer">
            <h1>{{ title }}</h1>
            <p>{{ text }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AssosArticle',
    props: {
        title: String,
        text: String
    }
}
</script>

<style scoped lang="scss">
    .container {
        @include background-boxes;
        border-radius: 0px;
        width: 100%;
        margin-bottom: 10vh;
        .innerContainer {
            padding: 20px;
        }
        h1 {
            font-size: rem($mobileH2);
            color: $white;
            font-weight: 600;
            padding:0px 0px 20px 0px;
        }
        p {
            font-size: rem($mobileP);
            color: $white;
            line-height:1.5;
        }
    }
</style>