<script>
    import { onMount } from 'svelte';

    onMount(() => {    
        let loading;
        loading = setTimeout(Loading, 3000);
            function Loading() {
                document.getElementById("loader").style.display = "none";
        }
    });
</script>

<div id="loader" class="animate-bottom" style="display:block;"></div>

