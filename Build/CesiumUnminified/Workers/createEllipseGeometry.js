/**
 * Cesium - https://github.com/CesiumGS/cesium
 *
 * Copyright 2011-2020 Cesium Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Columbus View (Pat. Pend.)
 *
 * Portions licensed separately.
 * See https://github.com/CesiumGS/cesium/blob/master/LICENSE.md for full licensing details.
 */

define(['./Cartesian2-716c2715', './when-208fe5b0', './EllipseGeometry-69d38a91', './Check-d18af7c4', './Math-3ba16bed', './GeometryOffsetAttribute-d63c288d', './Transforms-749d0f94', './RuntimeError-7f634f5d', './ComponentDatatype-549ec0d3', './WebGLConstants-76bb35d1', './EllipseGeometryLibrary-71c56e15', './GeometryAttribute-3fb8f432', './GeometryAttributes-b0b294d8', './GeometryInstance-f51e445e', './GeometryPipeline-8d2f8bbb', './AttributeCompression-69c5b20c', './EncodedCartesian3-7a9c1496', './IndexDatatype-d9b71b2b', './IntersectionTests-64305b2d', './Plane-fa9c3435', './VertexFormat-24041ad5'], function (Cartesian2, when, EllipseGeometry, Check, _Math, GeometryOffsetAttribute, Transforms, RuntimeError, ComponentDatatype, WebGLConstants, EllipseGeometryLibrary, GeometryAttribute, GeometryAttributes, GeometryInstance, GeometryPipeline, AttributeCompression, EncodedCartesian3, IndexDatatype, IntersectionTests, Plane, VertexFormat) { 'use strict';

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
//# sourceMappingURL=createEllipseGeometry.js.map
