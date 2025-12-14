import { X, Plus, Minus, ShoppingBag, MessageCircle } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';

const CartDrawer = () => {
  const {
    items,
    isOpen,
    setIsOpen,
    updateQuantity,
    removeFromCart,
    totalPrice,
    getWhatsAppLink,
  } = useCart();

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent className="w-full sm:max-w-md bg-card border-border">
        <SheetHeader className="border-b border-border pb-4">
          <SheetTitle className="font-serif text-2xl text-foreground flex items-center gap-3">
            <ShoppingBag className="w-6 h-6 text-primary" />
            Your Cart
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-[60vh] text-center">
            <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mb-4">
              <ShoppingBag className="w-8 h-8 text-muted-foreground" />
            </div>
            <p className="text-muted-foreground mb-2">Your cart is empty</p>
            <p className="text-sm text-muted-foreground">
              Add some delicious anchaars to get started
            </p>
          </div>
        ) : (
          <div className="flex flex-col h-[calc(100vh-120px)]">
            {/* Cart items */}
            <div className="flex-1 overflow-y-auto py-6 space-y-4">
              {items.map(item => (
                <div
                  key={item.product.id}
                  className="flex gap-4 p-4 bg-muted/30 rounded-xl"
                >
                  {/* Product image */}
                  <div className="w-20 h-20 rounded-lg overflow-hidden bg-muted flex-shrink-0">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Product details */}
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="font-serif text-foreground truncate pr-2">
                        {item.product.name}
                      </h4>
                      <button
                        onClick={() => removeFromCart(item.product.id)}
                        className="text-muted-foreground hover:text-destructive transition-colors p-1"
                        aria-label="Remove item"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      {item.product.weight}
                    </p>

                    <div className="flex justify-between items-center">
                      {/* Quantity controls */}
                      <div className="flex items-center gap-2 bg-background rounded-full p-1">
                        <button
                          onClick={() =>
                            updateQuantity(item.product.id, item.quantity - 1)
                          }
                          className="w-7 h-7 rounded-full flex items-center justify-center hover:bg-muted transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="w-6 text-center text-sm font-medium">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.product.id, item.quantity + 1)
                          }
                          className="w-7 h-7 rounded-full flex items-center justify-center hover:bg-muted transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {/* Item total */}
                      <p className="font-serif text-primary">
                        ₹{item.product.price * item.quantity}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Cart footer */}
            <div className="border-t border-border pt-6 space-y-4">
              {/* Total */}
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Total</span>
                <span className="font-serif text-2xl text-foreground">
                  ₹{totalPrice}
                </span>
              </div>

              <p className="text-xs text-muted-foreground text-center">
                Shipping calculated at checkout
              </p>

              {/* WhatsApp checkout */}
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full flex items-center justify-center gap-3"
              >
                <MessageCircle className="w-5 h-5" />
                Order via WhatsApp
              </a>

              <p className="text-xs text-muted-foreground text-center">
                You'll be redirected to WhatsApp to complete your order
              </p>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;
