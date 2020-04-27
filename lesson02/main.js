var vueInstance = new Vue({
    el: '#app',
    data: {
        title: 'Áo thun nam thể thao hàng VNXH vải dày mịn - Vải Đốm',
        url: 'https://www.lazada.vn/products/ao-thun-nam-the-thao-hang-vnxk-vai-day-min-vai-dom-i265780948-s382816259.html?exlaz=d_1:mm_150050845_51350205_2010350205::12:1497503216!59440595164!!!pla-296303633664!c!296303633664!382816259!124481249&gclid=EAIaIQobChMIk9uooJGA6QIVxgorCh1XkAMMEAQYASABEgK-FPD_BwE',
        target: '_blank',
        price: 20000,
        sale: 0.1,
        selectedProduct: 1,
        cardNumber : 1,
        listProductDetail: [
            {
                image: './images/red.jpg',
                quantity: 0,
                textColor: 'Màu Đỏ'
            },
            {
                image: './images/blue.jpg',
                quantity: 8,
                textColor: 'Màu Xanh'
            },
            {
                image: './images/black.jpg',
                quantity: 2,
                textColor: 'Màu Đen'
            }
        ],
        listDesc: [
            'Chất liệu: polyester và thun',
            'Thoát mồ hôi tốt',
            'Áo thun cổ tròn thể thao Hiye chuyên được may từ chất liệu nilon thoáng mát',
            'Kết hợp thêm sợi thun tạo độ co giãn giúp người tiêu dùng thoải mái khi mặc',
            'Chất liệu: polyester và thun'
        ],
        description: '<p>M&ocirc; tả: &Aacute;o thun cổ tr&ograve;n thể thao Hiye chuy&ecirc;n được may từ chất liệu nilon tho&aacute;ng m&aacute;t v&agrave; tho&aacute;t mồ h&ocirc;i tốt, kết hợp th&ecirc;m sợi thun tạo độ co gi&atilde;n gi&uacute;p người ti&ecirc;u d&ugrave;ng thoải m&aacute;i khi mặc</p> ',
        testDescription: `<p>Test hjskhfk h</p>
        <p><strong><span style="background-color:#8e44ad">fhsdjkfhsk&nbsp; hsdjkfk&nbsp;</span></strong></p>`
    },
    methods: {
        handleClickColor(e, index) {
            this.selectedProduct = index;
            // console.log(e, index);
        },
        classActive(index) {
            return {
                active: this.selectedProduct === index
            }
        },
        handleClickAddToCart(e) {
            if(this.cardNumber + 1 > this.getProduct.quantity) {
                alert('So luong khong du');
            } else {
                this.cardNumber = this.cardNumber + 1;
            }
            console.log(e.target);
        }
    },
    computed: {
        formatOriginalPrice() {
            var number = this.price;
            return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(number);
        },
        formatFinalPrice() {
            var number = this.price - this.sale*this.price;
            return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(number);
        },
        getProduct() {
            let index = this.selectedProduct;
            return this.listProductDetail[index];
        }
    }
});
