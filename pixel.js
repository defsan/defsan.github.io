const NOT_A_STAFF_ID = 'ysb10vkxrd';
const SUPER_WAND_ID = 'bl51q0kcpq';

const SUPER_DUPER_CLOAK_ID = 'hzwhw8sipq';
const RAINBOW_JACKET_ID = 'd5cscjpq1f';
const VERY_DARK_CLOAK_ID = 'fddalldwsf';

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


function purchase(id, price) {
    let params = {
      value: price,
      quantity: 1,
      currency: 'USD',
      compared_product: 'recommended-banner-shoes',  // custom property
      content_type: 'product',
      content_id: id,
      delivery_category: 'in_store'
    };
  fbq('track', 'Purchase', params);
}

function view(id) {
  fbq('track', 'ViewContent', {
    content_ids: [id],
    content_type: 'product'
  });
}

function add(id) {
  fbq('track', 'AddToCart', {
    content_ids: [id],
    content_type: 'product'
  });
}
// Consolidated id
const OLD_PIXEL_ID='520509209187583';
const CONSOLIDATED_PIXEL_ID='350298423270506';
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', CONSOLIDATED_PIXEL_ID);
fbq('track', 'PageView');
