<script>
	import {auth} from './firebase'
	import {GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
	import Home from './Home.svelte';
	export let name;
	let resp;
	let username = "";
	let password="";
	let token = "";
	let userSelected = false;
	let welcome = true;

  	const login = async () => {
		try {
			const provider = new  GoogleAuthProvider();
			resp = await signInWithPopup(auth, provider)
			console.log("response: ", resp)
			username = resp.user.email;
			password = resp.user.uid;
			token=resp.user.accessToken;
			name=resp.user.displayName;
			userSelected = true;
			welcome = false
		} catch (error) {
			console.log("ERROR: ", error)
		}
  	};  

</script>


<main>
	<h1>Hello {name}!</h1>
	{#if welcome}
	<p>Universidad Nacional Agraria de Selva - Facultad de Ingeniería en Informática y Sistemas</p>
	<div class="login__container">
	<div class="u-login">
		<span>Bienvenido a <span class="name" style="color: #2ecc71">login con Gmail</span></span>
		<p></p>
			<div class="login__form">
				<span>Usuario: </span><input type="text" class="ipt" placeholder="usuario" autocapitalize="off" autocomplete="username" bind:value={username}/>
				<div class="login__ipt--pass">
					<span>Clave </span><input class="ipt" type="password" autocomplete="current-password" bind:value={password} placeholder="clave" disabled={userSelected}>
					<!--div id="g_id_signin" style></div-->
					
				</div>
				<button on:click={login}>Login Gmail</button>
			</div>
	</div>
	</div>
	{/if}
	{#if userSelected}
	<Home></Home>
	<span>nombre: {name}</span> <p></p>
	<span>correo: {username}</span> <p></p>
	<span>token: {token}</span> <p></p>
	{/if}
</main>

<style>
	.login__container {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	}

	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>