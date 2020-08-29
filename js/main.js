// const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const app = new Vue({
	el: '#app',
	data: {
		catalogUrl: 'json/catalogData.json',
		products: [],
		filterProducts: [],
		CartProducts: [],
		searchLine: '',
		imgCatalog: 'https://placehold.it/200x150',
		show: false,
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

		addProduct(product){
			if(this.count === 1){
				let productId = product.id_product;
				let find = this.products.find(product => product.id_product === productId);
				if(find){
					find.quantity++;
				} else {
					let product = {
						id_product: productId,
						price: product.product_price,
						product_name: product.product_name,
						quantity: 1
					};
					this.products = [product];
					this.render();
				}
			} else {
				alert('Error');
			}
		},
		
		removeProduct(product) {
			if(this.count === 1){
				let productId = product.id_product;
				let find = this.products.find(product => product.id_product === productId);
				if(find.quantity > 1){
					find.quantity--;
				} else {
					this.products.splice(this.products.indexOf(find), 1);
					document.querySelector(`.cart-item[data-id="${product.id_product}"]`).remove();
				}
			} else {
				alert('Error');
			}
		},
		
		filtered() {
			const regexp = new RegExp(this.searchLine, 'i');
			this.filterProducts = this.products.filter(product => regexp.test(product.product_name));
			this.filterProducts.forEach(el => {
				const block = document.querySelector(`.product-item[data-id="${el.id_product}"]`);
				if(!this.filterProducts.includes(el)){
					block.classList.add('hidden');
				} else {
					block.classList.remove('hidden');
				}
			})
		},
	},
	mounted(){
		/* this.getJson(`${API + this.catalogUrl}`)
			.then(data => {
				for(let el of data){
					this.products.push(el);
				}
			}); */
		this.getJson(`json/catalogData.json`)
			.then(data => {
				for(let el of data){
					this.products.push(el);
					this.filterProducts.push(el);
				}
			});
		this.getJson(`json/getCart.json`)
		.then(data => {
			this.summa = data.amount;
			this.count = data.result;
		});
	}
})