/* This file is automatically rebuilt by the Cesium build process. */
define(['./BoxGeometry-3098d293', './when-f31b6bd1', './GeometryOffsetAttribute-4b098ee5', './Check-285f6bfc', './Transforms-4c2e9144', './Cartesian2-44e93af5', './Math-8c161f1c', './RuntimeError-c7c236f3', './ComponentDatatype-d4a0149c', './WebGLConstants-34c08bc0', './GeometryAttribute-91043db9', './GeometryAttributes-e973821e', './VertexFormat-ab7dd48c'], function (BoxGeometry, when, GeometryOffsetAttribute, Check, Transforms, Cartesian2, _Math, RuntimeError, ComponentDatatype, WebGLConstants, GeometryAttribute, GeometryAttributes, VertexFormat) { 'use strict';

  function createBoxGeometry(boxGeometry, offset) {
    if (when.defined(offset)) {
      boxGeometry = BoxGeometry.BoxGeometry.unpack(boxGeometry, offset);
    }
    return BoxGeometry.BoxGeometry.createGeometry(boxGeometry);
  }

  return createBoxGeometry;

});
