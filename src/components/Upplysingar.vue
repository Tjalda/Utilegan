<template>
    <div class="content">
        <h1>Upplýsingar</h1>
        <hr>
        <h3>Title</h3>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum porta mauris eget semper. Vestibulum eu odio porta, ornare dolor sit amet, ultrices metus. Praesent blandit, mi a condimentum consectetur, purus odio accumsan neque, eget imperdiet nisl nisi ac nunc. Aenean pretium tortor ex, sit amet egestas dui bibendum sed. Aenean nulla libero, tristique a ipsum sed, varius volutpat leo. Nullam nec feugiat felis. Phasellus consectetur pulvinar tempor. Sed luctus pellentesque scelerisque. Proin fermentum auctor arcu id vulputate. Ut ullamcorper orci in felis blandit posuere. Curabitur pellentesque tellus non ultricies accumsan. Fusce aliquam sit amet leo et blandit. Duis imperdiet sagittis ultrices. Morbi ut lectus sapien. Mauris eu tellus et risus porta blandit in id tellus. Nulla sagittis posuere tempus.<br><br>
            Sed mattis et eros ac lacinia. Quisque non augue odio. Suspendisse ante velit, posuere quis malesuada nec, lobortis elementum nibh. Integer pharetra nisi at lorem fringilla, at blandit sem faucibus. Maecenas tincidunt nulla non nisi pellentesque porta. Suspendisse odio velit, congue id tincidunt ut, molestie et nisl. Proin non congue neque. Mauris convallis vitae justo interdum sollicitudin. Quisque ac lacus dui. Nam maximus id nisl sed commodo. Curabitur vel massa vulputate, elementum nibh sit amet, placerat justo. Pellentesque hendrerit, felis at gravida semper, ex justo molestie diam, non consequat velit sem tempus ligula. Curabitur quis ante sed erat finibus efficitur.<br><br>
        </p>

        <h3>Title</h3>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum porta mauris eget semper. Vestibulum eu odio porta, ornare dolor sit amet, ultrices metus. Praesent blandit, mi a condimentum consectetur, purus odio accumsan neque, eget imperdiet nisl nisi ac nunc. Aenean pretium tortor ex, sit amet egestas dui bibendum sed. Aenean nulla libero, tristique a ipsum sed, varius volutpat leo. Nullam nec feugiat felis. Phasellus consectetur pulvinar tempor. Sed luctus pellentesque scelerisque. Proin fermentum auctor arcu id vulputate. Ut ullamcorper orci in felis blandit posuere. Curabitur pellentesque tellus non ultricies accumsan. Fusce aliquam sit amet leo et blandit. Duis imperdiet sagittis ultrices. Morbi ut lectus sapien. Mauris eu tellus et risus porta blandit in id tellus. Nulla sagittis posuere tempus.<br><br>
            Sed mattis et eros ac lacinia. Quisque non augue odio. Suspendisse ante velit, posuere quis malesuada nec, lobortis elementum nibh. Integer pharetra nisi at lorem fringilla, at blandit sem faucibus. Maecenas tincidunt nulla non nisi pellentesque porta. Suspendisse odio velit, congue id tincidunt ut, molestie et nisl. Proin non congue neque. Mauris convallis vitae justo interdum sollicitudin. Quisque ac lacus dui. Nam maximus id nisl sed commodo. Curabitur vel massa vulputate, elementum nibh sit amet, placerat justo. Pellentesque hendrerit, felis at gravida semper, ex justo molestie diam, non consequat velit sem tempus ligula. Curabitur quis ante sed erat finibus efficitur.<br><br>
        </p>

        <div class="images"><img src="https://picsum.photos/500?random=1"><img src="https://picsum.photos/500?random=2"></div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .content{
        max-width: 75em;
        margin: 0 auto;
        background-color: white;
        text-align: left;
        padding: 3em;
        min-height: 40em;
        line-height: 1.5;
    }
    h1{
        margin-top: -10px;
    }
    p{ 
        padding-top: 0.5em; 
    }
    img{
        width: 100%;
        border: solid black 1px;
        border-radius: 5px;
    }
    .images{
        display: grid;
        grid-gap: 15px;
        grid-template-columns: auto;

    }

    @media screen and (min-width: 37.5em){ .images { grid-template-columns: auto auto; } }
</style>