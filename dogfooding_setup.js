// Consolidated id
const CONSOLIDATED_PIXEL_ID='1165402817288767';
const CONSOLIDATED_OES_ID='578133580052719';

const PRODUCT1_ID = 'DB_1';
const PRODUCT2_ID = 'DB_2';
const PRODUCT3_ID = 'DB_3';


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

function init(event_source_id) {
  fbq('init', event_source_id);
  fbq('track', 'PageView');
}

!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');

