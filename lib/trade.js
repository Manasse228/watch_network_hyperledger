/**
 * 
 * @param {org.rolex.transaction.PurchaseMaterialTransaction} pmtx 
 * @transaction
 */
async function purchaseMaterialTransaction(pmtx) {  
   
  const sellerId = pmtx.seller.materialSupplierID;
  let materialTab = [];
   
  pmtx.materials.forEach(function(material) {
    material.used = pmtx.buyer;
    materialTab.push(material);
  });
  
  return getAssetRegistry('org.rolex.asset.Material')
  .then(function (materialAssetRegistry) {
    var factory = getFactory();
    return materialAssetRegistry.updateAll(materialTab);
  })
  .catch(function (error) {
     alert("Error " + error);
  });

}



/**
* 
* @param {org.rolex.transaction.PurchasePackWatchTransaction} pptx 
* @transaction
*/
async function purchasePackWatchTransaction(pptx) {  

  let packWatchTab = [];
  
  pptx.packWatchs.watchs.forEach(function(watch) {
    watch.retailer = pptx.buyer;
    packWatchTab.push(watch);
  });
  
  return getAssetRegistry('org.rolex.asset.Watch')
  .then(function (watchAssetRegistry) {
    var factory = getFactory();
    return watchAssetRegistry.updateAll(packWatchTab);
  })
  .catch(function (error) {
     alert("Error " + error);
  });

}


/**
* 
* @param {org.rolex.transaction.PurchaseWatchTransaction} pwtx 
* @transaction
*/
async function purchaseWatchTransaction(pwtx) {  

  let watchTab = [];
  
  pwtx.watchs.forEach(function(watch) {
    watch.owner = pwtx.buyer;
    watchTab.push(watch);
  });
  
  return getAssetRegistry('org.rolex.asset.Watch')
  .then(function (watchAssetRegistry) {
    var factory = getFactory();
    return watchAssetRegistry.updateAll(watchTab);
  })
  .catch(function (error) {
     alert("Error " + error);
  });

}


/**
* 
* @param {org.rolex.transaction.TradeWatchTransaction} twtx 
* @transaction
*/
async function tradeWatchTransaction(twtx) {  

  let watchTab = [];
  
  twtx.watchs.forEach(function(watch) {
    watch.owner = twtx.newOwner;
    watchTab.push(watch);
  });
  
  return getAssetRegistry('org.rolex.asset.Watch')
  .then(function (watchAssetRegistry) {
    var factory = getFactory();
    return watchAssetRegistry.updateAll(watchTab);
  })
  .catch(function (error) {
     alert("Error " + error);
  });

}


/**
* 
* @param {org.rolex.transaction.TradeRepairWatchTransaction} rwtx 
* @transaction
*/
async function tradeRepairWatchTransaction(rwtx) {  

  let watchTab = [];

  rwtx.watchs.forEach(function(watch) {

    console.log('ici');
    watch.repairers.push(rwtx.repairer);
    console.log('là');
    watchTab.push(watch);
  });
  
  return getAssetRegistry('org.rolex.asset.Watch')
  .then(function (watchAssetRegistry) {
    var factory = getFactory();
    return watchAssetRegistry.updateAll(watchTab);
  })
  .catch(function (error) {
     alert("Error " + error);
  });

}