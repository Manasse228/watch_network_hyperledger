
/**
 * 
 * @param {org.rolex.transaction.PurchaseMaterialTransaction} pmtx 
 * @transaction
 */
async function purchaseMaterialTransaction(pmtx) {  
   
  const sellerId = pmtx.seller.materialSupplierID;

  pmtx.materials.forEach(function(material) {
        
      return getAssetRegistry('org.rolex.asset.Material')
      .then(function (materialAssetRegistry) {
      var factory = getFactory();
      material.used = pmtx.buyer;
      return materialAssetRegistry.update(material);
      }).catch(function (error) {
      	alert("Error " + error);
      });


  });

}


/**
* 
* @param {org.rolex.transaction.PurchasePackWatchTransaction} pptx 
* @transaction
*/
async function purchasePackWatchTransaction(pptx) {  

  pptx.packWatchs.watchs.forEach(function(watch) {

    return getAssetRegistry('org.rolex.asset.Watch')
      .then(function (watchAssetRegistry) {
      var factory = getFactory();
      watch.retailer = pptx.buyer;
      return watchAssetRegistry.update(watch);
    })
      .catch(function (error) {
      alert("Error " + error);
    });

  });

}

