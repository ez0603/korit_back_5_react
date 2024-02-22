import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';

function ProductPage(props) {
    const params = useParams(); 
    const productId = parseInt(params.productId); // 주소창에 문자열로 들어가기 때문에 parseInt

    const products = useMemo(() => [
        {
            productId: 1,
            productName: "상품1"
        },
        {
            productId: 2,
            productName: "상품2"
        },
        {
            productId: 3,
            productName: "상품3"
        },
    ], []);

    const product = useMemo(() => 
    products.filter(product => 
        product.productId === productId)[0], 
    [productId]);

    return (
        <div>
            <h3>상품번호: { product?.productId }</h3> 
            <h3>상품명: { product?.productName }</h3>
        </div>
    );
}

export default ProductPage;