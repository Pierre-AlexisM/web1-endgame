<template>
    <div class="container">
        <div class="innerContainer">
            <h1>{{ title }}</h1>
            <div class="textContainer">
                <p>{{ text }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PopUpArticle',
    props: {
        title: String,
        text: String
    }
}
</script>

<style scoped lang="scss">
    .container {
        @include background-boxes;
        width: 240px;
        height: 320px;
        .innerContainer {
            padding: 16px 8px 16px 16px;
            h1 {
            font-size: rem($mobileH2);
            color: $white;
            font-weight: 600;
            padding:8px 0px 20px 0px;
            }
            .textContainer {
                height: 200px;
                overflow: auto;
                &::-webkit-scrollbar {
                    width: 8px;

                &-track {
                    background-color: $white;
                    border-radius: 10px;
                }
                &-thumb {
                    background-color: $blue;
                    border-radius: 10px;
                }
            }
                p {
                font-size: rem($mobileP);
                color: $white;
                line-height:1.5;
                text-align: left;
                padding-right: 16px;
                }
            }
        }
    }
</style>