    import React from 'react';
    import './ProductModal.css'; 

    const ProductModal = ({ product, onClose }) => {
    if (!product) return null; 

    return (
        <div className="modal">
        <div className="modal-content">
            <span className="close" onClick={onClose}>close</span>
            <div className="product-detailzs">
            <img src={product.image} alt={product.name} />
            <div>
                <h2>{product.name}</h2>
                <p>Giá: {product.price}</p>
                <p>Miêu tả sản phẩm: {product.description}</p>
            </div>
            </div>
        </div>
        </div>
    );
    };

    export default ProductModal;