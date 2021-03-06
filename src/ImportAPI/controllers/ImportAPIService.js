'use strict';
var httpUtil = require('../util/http/http');
var importService = require('../util/import/import');

/**
 * Downloads a specific component
 * Downloads a specific component by component ID
 *
 * componentID String Component ID specifies which component to download 
 * returns File
 **/
exports.getComponent = function(args,res,next) {
  let componentID = args.componentID.value;
  let algorithmID = args.algorithmID.value;

  importService.getComponent(componentID,algorithmID)
  .then((result) => {
    httpUtil.endHttpOK(result,res);
  })
  .catch((error) => {
    httpUtil.endHttpErr(error,res);
  })
}

exports.getComponentPreview = function(args,res,next) {
  let componentID = args.componentID.value;

  importService.getComponentPreview(componentID)
  .then((result) => {
    httpUtil.endHttpOK(result,res);
  })
  .catch((error) => {
    httpUtil.endHttpErr(error,res);
  })
}



/**
 * Gets IDs available for import
 * Gets all the component IDs available for import
 *
 * componentIDs List 
 * returns List
 **/
exports.getComponentIDs = function(args,res,next) {
  let folderID = args.folderID.value;
  
  importService.getComponentIDs(folderID)
  .then((result) => {
    httpUtil.endHttpOK(result,res);
  })
  .catch((error) => {
    httpUtil.endHttpErr(error,res);
  })
}


/**
 * Gets supported operations
 * Gets currently supported operations
 *
 * returns List
 **/
exports.getOperations = function(args,res,next) {
  importService.getOperations()
  .then((result) => {
    httpUtil.endHttpOK(result,res);
  })
  .catch((error) => {
    httpUtil.endHttpErr(error,res);
  })
}

