/* This file is automatically rebuilt by the Cesium build process. */
define(['./PrimitivePipeline-6ba053c6', './createTaskProcessorWorker', './Transforms-4c2e9144', './Cartesian2-44e93af5', './Check-285f6bfc', './when-f31b6bd1', './Math-8c161f1c', './RuntimeError-c7c236f3', './ComponentDatatype-d4a0149c', './WebGLConstants-34c08bc0', './GeometryAttribute-91043db9', './GeometryAttributes-e973821e', './GeometryPipeline-9b06e73b', './AttributeCompression-e3a6496c', './EncodedCartesian3-58bad53b', './IndexDatatype-e20e62f1', './IntersectionTests-0f614e31', './Plane-842afcdd', './WebMercatorProjection-f857ca58'], function (PrimitivePipeline, createTaskProcessorWorker, Transforms, Cartesian2, Check, when, _Math, RuntimeError, ComponentDatatype, WebGLConstants, GeometryAttribute, GeometryAttributes, GeometryPipeline, AttributeCompression, EncodedCartesian3, IndexDatatype, IntersectionTests, Plane, WebMercatorProjection) { 'use strict';

  function combineGeometry(packedParameters, transferableObjects) {
    var parameters = PrimitivePipeline.PrimitivePipeline.unpackCombineGeometryParameters(
      packedParameters
    );
    var results = PrimitivePipeline.PrimitivePipeline.combineGeometry(parameters);
    return PrimitivePipeline.PrimitivePipeline.packCombineGeometryResults(
      results,
      transferableObjects
    );
  }
  var combineGeometry$1 = createTaskProcessorWorker(combineGeometry);

  return combineGeometry$1;

});
