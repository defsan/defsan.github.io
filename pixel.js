function _triggerEvents() {
  var value = Math.floor(Math.random() * Math.floor(100));
  var params = {
    value: value,
    currency: 'USD',
    contents: [
      {
        id: '101',
        quantity: 1
      },
      {
        id: '102',
        quantity: 2
      }],
    compared_product: 'recommended-banner-shoes',  // custom property
    content_type: 'product',
    delivery_category: 'in_store'
  };
  fbq('track', 'Purchase', params);
  fbq('track', 'AddToCart', params);
  fbq('track', 'ViewContent', params, {eventID: new Date()});
  fbq('trackCustom', 'ACustomEvent', {custom_param: 'custom_value'});
  document.getElementById("main").innerHTML = "Triggered";
}


function purchase(price) {
    let params = {
      value: price,
      currency: 'USD',
      contents: [
        {
          id: '101',
          quantity: 1
        }],
      compared_product: 'recommended-banner-shoes',  // custom property
      content_type: 'product',
      delivery_category: 'in_store'
    };
  fbq('track', 'Purchase', params);
}

!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '520509209187583');
fbq('track', 'PageView');


