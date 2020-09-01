// const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const app = new Vue({
	el: '#app',
	data: {
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
			this.getJson(`json/addToBasket.json`)
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
		filtered() {
			let regexp = new RegExp(this.userSearch, 'i');
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
	}
})