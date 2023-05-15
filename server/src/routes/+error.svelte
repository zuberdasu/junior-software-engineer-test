<script lang='ts'>
    import { page } from '$app/stores';
</script>


<h1>Oops! Error Occured!</h1>
<p>
    Error handling implementation in Svelte.
</p>
<p>{$page.status}: {$page.error?.message}</p>