const app = new Vue({
	el: '#app',
	data: {
		userSearch: '',
	},
	methods: {
		getJson(url){
			return fetch(url)
				.then(result => result.json())
				.catch(error => {
					// console.log(error)
					this.$refs.error.text = error;
				})
		},
		postJson(url, data){
			return fetch(url, {
				method: 'POST',
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify(data)
			})
				.then(result => result.json())
				.catch(error => {
					// console.log(error)
					this.$refs.error.text = error;
				})
		},
		putJson(url, data){
			return fetch(url, {
				method: 'PUT',
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify(data)
			})
				.then(result => result.json())
				.catch(error => {
					// console.log(error)
					this.$refs.error.text = error;
				})
		}
	}
})


/* data: {
	catalogUrl: 'json/catalogData.json',
	products: [],
	filterProducts: [],
	CartProducts: [],
	cartItems: [],
	userSearch: '',
	imgCart: 'https://placehold.it/50x100',
	imgCatalog: 'https://placehold.it/200x150',
	showCart: false,
	summa: 0,
	count: 0,
},
methods: {
	getJson(url){
		return fetch(url)
			.then(result => result.json())
			.catch(error => {
				console.log(error);
			})
	},
	addProduct(item){
		this.getJson(`json/getCart.json`)
			.then(data => {
				if(data.result === 1){
					let find = this.cartItems.find(el => el.id_product === item.id_product);
					if(find){
						find.quantity++;
					} else {
						const prod = Object.assign({quantity: 1}, item);
						this.cartItems.push(prod)
					}
				}
			})
	},
	removeProduct(item) {
		this.getJson(`json/getCart.json`)
			.then(data => {
				if (data.result === 1) {
					if(item.quantity>1){
						item.quantity--;
					} else {
						this.cartItems.splice(this.cartItems.indexOf(item), 1);
					}
				}
			})
	},
	filtered(userSearch) {
		let regexp = new RegExp(userSearch, 'i');
		this.filterProducts = this.products.filter(el => regexp.test(el.product_name));
	},
},
mounted(){
	this.getJson(`${this.catalogUrl}`)
		.then(data => {
			for(let el of data){
				this.$data.products.push(el);
				this.$data.filterProducts.push(el);
			}
		});
	this.getJson(`json/getCart.json`)
	.then(data => {
		this.summa = data.amount;
		this.count = data.result;
		for (let item of data.contents){
			this.$data.cartItems.push(item);
		};
	});
} */