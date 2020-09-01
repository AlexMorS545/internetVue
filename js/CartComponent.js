Vue.component('cart', {
	props: ['cartItems', 'img', 'visibility'],
	template: `
			<div class="cart-block" v-show="visibility">
				<p v-if="!cartItems.length">Добавьте товар в корзину</p>
				<cart-item v-for="item of cartItems" :key="item.id_product" :img="img" :cart-item="item">
				</cart-item>
			</div>
	`
});

Vue.component('cart-item', {
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
									<div class="product-price">{{cartItem.quantity*cartItem.product_price}}</div>
									<i class="fas fa-trash" @click="$parent.$emit('remove', cartItem)"></i>
							</div>
						</div>
	`
})