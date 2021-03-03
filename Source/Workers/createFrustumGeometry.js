/* This file is automatically rebuilt by the Cesium build process. */
define(['./when-f31b6bd1', './FrustumGeometry-ec7859f9', './Transforms-4c2e9144', './Cartesian2-44e93af5', './Check-285f6bfc', './Math-8c161f1c', './RuntimeError-c7c236f3', './ComponentDatatype-d4a0149c', './WebGLConstants-34c08bc0', './GeometryAttribute-91043db9', './GeometryAttributes-e973821e', './Plane-842afcdd', './VertexFormat-ab7dd48c'], function (when, FrustumGeometry, Transforms, Cartesian2, Check, _Math, RuntimeError, ComponentDatatype, WebGLConstants, GeometryAttribute, GeometryAttributes, Plane, VertexFormat) { 'use strict';

  function createFrustumGeometry(frustumGeometry, offset) {
    if (when.defined(offset)) {
      frustumGeometry = FrustumGeometry.FrustumGeometry.unpack(frustumGeometry, offset);
    }
    return FrustumGeometry.FrustumGeometry.createGeometry(frustumGeometry);
  }

  return createFrustumGeometry;

});
