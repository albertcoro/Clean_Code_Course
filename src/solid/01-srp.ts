(() => {

    interface Product { 
        id:   number;
        name: string;
    }
    
    class Mailer{
        private masteremail: string = 'test@test.com';

        sendEmail( emailList: string[], template:'to-clients'|'to-admin', message: string ) {
            console.log('Enviando correo a los clientes', emailList, message );
        }
    }

    class ProductService{

        getProduct( id: number ) {
            console.log('Producto: ',{ id, name: 'OLED Tv' });
        }

        saveProduct( product: Product ) {
            console.log('Guardando en base de datos', product );
        }
    }
    // Usualmente, esto es una clase para controlar la vista que es desplegada al usuario
    // Recuerden que podemos tener muchas vistas que realicen este mismo trabajo.
    class ProductBloc {

        private productService: ProductService;
        private mailer: Mailer;

        constructor(productService: ProductService, mailer: Mailer) {
            this.productService = productService;
            this.mailer = mailer;
        }
    
        loadProduct( id: number ) {
            // Realiza un proceso para obtener el producto y retornarlo
            this.productService.getProduct(id);
        }
    
        saveProduct( product: Product ) {
            this.productService.saveProduct(product);
        }
    
        notifyClients() {
            this.mailer.sendEmail(['test@test.com'], 'to-clients', 'Nuevo producto en la tienda');
        }
    
        
    
    }

    class CartBloc {

        private items: Product[] = [];

        onAddToCart( product: Product ) {
            // Agregar al carrito de compras
            console.log('Agregando al carrito ', product );
        }
    }
    
    const productService = new ProductService();
    const mailer = new Mailer();

    const productBloc = new ProductBloc(productService, mailer);
    const cartBloc    = new CartBloc();

    productBloc.loadProduct(10);
    productBloc.saveProduct({ id: 10, name: 'OLED TV' });
    productBloc.notifyClients();
    cartBloc.onAddToCart({ id: 10, name: 'OLED TV' });








})();