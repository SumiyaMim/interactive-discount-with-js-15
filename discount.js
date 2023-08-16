document.getElementById('btn-apply').addEventListener('click', function(){
    // console.log('click');

    const originalPriceElement = document.getElementById('original-price');
    const originalPriceElementString = originalPriceElement.innerText
    const originalPrice = parseFloat(originalPriceElementString);

    // const originalPrice = 1000;
    const discountPercentage = 30;

    const discountAmount = (discountPercentage / 100) * originalPrice;
    const finalPrice = originalPrice - discountAmount;
    // console.log(finalPrice);

    const discountPriceElement= document.getElementById('total-discount');
    discountPriceElement.innerText = finalPrice;
})

document.getElementById('apply-btn').addEventListener('click', function(){
    // console.log('click')
    const couponField = document.getElementById('coupon-field');
    const couponCodeField = couponField.value;

    const originalPriceElement = document.getElementById('original-price');
    const originalPriceElementString = originalPriceElement.innerText
    const originalPrice = parseFloat(originalPriceElementString);

    const discountPriceElement= document.getElementById('discount-price');

    if(couponCodeField === 'DISC30'){
        const discountPercentage = 30;
        const discountAmount = (discountPercentage / 100) * originalPrice;
        const finalPrice = originalPrice - discountAmount;
        // console.log(finalPrice)

        discountPriceElement.innerText = finalPrice;
    }
    else{
        discountPriceElement.innerText = originalPrice;
    }
})
