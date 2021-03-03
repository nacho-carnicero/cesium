/* This file is automatically rebuilt by the Cesium build process. */
define(['./when-f31b6bd1', './EllipsoidGeometry-365a63af', './GeometryOffsetAttribute-4b098ee5', './Check-285f6bfc', './Transforms-4c2e9144', './Cartesian2-44e93af5', './Math-8c161f1c', './RuntimeError-c7c236f3', './ComponentDatatype-d4a0149c', './WebGLConstants-34c08bc0', './GeometryAttribute-91043db9', './GeometryAttributes-e973821e', './IndexDatatype-e20e62f1', './VertexFormat-ab7dd48c'], function (when, EllipsoidGeometry, GeometryOffsetAttribute, Check, Transforms, Cartesian2, _Math, RuntimeError, ComponentDatatype, WebGLConstants, GeometryAttribute, GeometryAttributes, IndexDatatype, VertexFormat) { 'use strict';

  function createEllipsoidGeometry(ellipsoidGeometry, offset) {
    if (when.defined(offset)) {
      ellipsoidGeometry = EllipsoidGeometry.EllipsoidGeometry.unpack(ellipsoidGeometry, offset);
    }
    return EllipsoidGeometry.EllipsoidGeometry.createGeometry(ellipsoidGeometry);
  }

  return createEllipsoidGeometry;

});
