const cartItem = {
	props: ['img', 'cartItem'],
	template: `<div class="cart-item">
					<div class="product-block">
							<img :src="img" alt="Some img">
							<div class="product-desc">
									<div class="product-title">{{ cartItem.product_name }}</div>
									<div class="product-quantity">Кол-во: {{ cartItem.quantity }}</div>
									<div class="product-single-price">$ {{ cartItem.product_price }}</div>
							</div>
					</div>
					<div class="price-block">
							<div class="product-price">{{cartItem.quantity*cartItem.product_price}} $</div>
							<i class="fas fa-trash" @click="$emit('remove', cartItem)"></i>
					</div>
				</div>
	`
};
const cart = {
	data() {
		return {
			cartUrl: '/getCart.json',
			cartItems: [],
			showCart: false,
		}
	},
	components: {
		cartItem
	},
	mounted(){
		this.$parent.getJson(`/api/cart`)
			.then(data => {
				for (let item of data.contents){
					this.$data.cartItems.push(item);
				}
			});
	},
	methods: {
		addProduct(item){
			let find = this.cartItems.find(el => el.id_product === item.id_product);
			if(find){
				this.$parent.putJson(`/api/cart/${find.id_product}`, {quantity: 1})
					.then(data => {
						if(data.result === 1){
							find.quantity++
						}
					})
			} else {
				const prod = Object.assign({quantity: 1}, item);
				this.$parent.postJson(`/api/cart`, prod)
					.then(data => {
						if(data.result === 1){
							this.cartItems.push(prod)
						}
					})
			}
		},
		remove(item) {
			if(item.quantity > 1){
				this.$parent.putJson(`/api/cart/${item.id_product}`, {quantity: -1})
					.then(data => {
						if(data.result === 1){
							item.quantity--;
						}
					})
			} else {
				this.$parent.deleteJson(`/api/cart/${item.id_product}`)
					.then(data => {
						if(data.result === 1){
							this.cartItems.splice(this.cartItems.indexOf(item), 1)
						}
					})
			}
		},
	},
	template: `
		<div>
			<button @click="showCart=!showCart" class="btn-cart" type="button"><i class="fas fa-shopping-cart"></i></button>
			<div class="cart-block" v-show="showCart">
				<p class="cart-empty" v-if="!cartItems.length">Ваша корзина пуста</p>
				<cart-item v-for="item of cartItems" :key="item.id_product" :img="item.image" :cart-item="item" @remove="remove">
				</cart-item>
			</div>
		</div>
	`
};
export default cart
