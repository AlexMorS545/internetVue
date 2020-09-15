const product = {
	props: ['product', 'img'],
	
	template: `<div class="product-item">
					<img :src="img" alt="photo product">
					<h3>{{ product.product_name }}</h3>
					<p>{{ product.product_price }}&#36;</p>
					<button class="buy-btn" @click="$emit('add-product', product)">Купить</button>
				</div>`
};
const products = {
	data() {
		return {
			catalogUrl: '/catalogData.json',
			products: [],
			filterProducts: [],
		}
	},
	components: {
		product
	},
	mounted(){
		this.$parent.getJson(`/api/products`)///api/products
			.then(data => {
				for (let item of data){
					this.$data.products.push(item);
					this.$data.filterProducts.push(item);
				}
			});
	},
	methods: {
		filtered(userSearch) {
			let regexp = new RegExp(userSearch, 'i');
			this.filterProducts = this.products.filter(el => regexp.test(el.product_name));
		}
	},
	
	template: `<div class="products">
					<product v-for="item of filterProducts" 
					:key="item.id_product"
					:img="item.image"
					:product="item"
					@add-product="$parent.$refs.cart.addProduct"></product>
				</div>`
};

export default products