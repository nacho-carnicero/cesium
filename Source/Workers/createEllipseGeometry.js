/* This file is automatically rebuilt by the Cesium build process. */
define(['./Cartesian2-44e93af5', './when-f31b6bd1', './EllipseGeometry-22d32ed0', './Check-285f6bfc', './Math-8c161f1c', './GeometryOffsetAttribute-4b098ee5', './Transforms-4c2e9144', './RuntimeError-c7c236f3', './ComponentDatatype-d4a0149c', './WebGLConstants-34c08bc0', './EllipseGeometryLibrary-2b4f6a27', './GeometryAttribute-91043db9', './GeometryAttributes-e973821e', './GeometryInstance-41dac8f7', './GeometryPipeline-9b06e73b', './AttributeCompression-e3a6496c', './EncodedCartesian3-58bad53b', './IndexDatatype-e20e62f1', './IntersectionTests-0f614e31', './Plane-842afcdd', './VertexFormat-ab7dd48c'], function (Cartesian2, when, EllipseGeometry, Check, _Math, GeometryOffsetAttribute, Transforms, RuntimeError, ComponentDatatype, WebGLConstants, EllipseGeometryLibrary, GeometryAttribute, GeometryAttributes, GeometryInstance, GeometryPipeline, AttributeCompression, EncodedCartesian3, IndexDatatype, IntersectionTests, Plane, VertexFormat) { 'use strict';

  function createEllipseGeometry(ellipseGeometry, offset) {
    if (when.defined(offset)) {
      ellipseGeometry = EllipseGeometry.EllipseGeometry.unpack(ellipseGeometry, offset);
    }
    ellipseGeometry._center = Cartesian2.Cartesian3.clone(ellipseGeometry._center);
    ellipseGeometry._ellipsoid = Cartesian2.Ellipsoid.clone(ellipseGeometry._ellipsoid);
    return EllipseGeometry.EllipseGeometry.createGeometry(ellipseGeometry);
  }

  return createEllipseGeometry;

});
