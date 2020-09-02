Vue.component('search', {
	props: ['value'],
	template: `<input type="text" id="search" class="search-field" v-bind:value="value"
				v-on:input="$emit('input', $event.target.value)">`
});
