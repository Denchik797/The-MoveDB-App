<template>
	<div class="actor-personal-info">
		<div class="actor-info">
			<h2>Personal Info</h2>
			<h4>Known For</h4>
			<p>{{info.known_for_department}}</p>
			<h4>Gender</h4>
			<p>{{genders(info.gender)}} </p>
			<h4>Birthday</h4>
			<p>{{info.birthday | release_date}}</p>
			<h4>Place of Birth</h4>
			<p>{{placeOfBirth(info.place_of_birth)}}</p>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Personal-Info',

		props: {
			info: { type: Object, required: true},
		},

		methods: {
			genders (gender) {
				return gender == 1 ? 'Woman': gender == 0 || gender == null ? 'N/A': 'Male' ;
			},

			placeOfBirth (loc) {
				return loc == null ? 'N/A': loc
			},

		},

		computed: {
			
		},
	};
		
	
</script>

<style>
	.actor-info {
		width: 300px;
		height: 300px;
		padding: 10px;
		color: black;
	}

	.actor-info h2 {
		margin-bottom: 10px;
		margin-top: 5px;
	}

	.actor-info h4 {
		margin-top: 20px;
		font-weight: bold;
		font-size: 20px;
	}

	.actor-info p {
		font-size: 16px;
		margin-top: 1px;
		font-weight: bold;
		width: 270px;
	}

</style>