define(["exports","./Transforms-22ee8b28","./Cartesian2-8417ca3d","./Check-d18af7c4","./ComponentDatatype-9204e9f6","./when-208fe5b0","./GeometryAttribute-6b6a6703","./GeometryAttributes-b0b294d8","./Math-4e53b694","./Plane-4498f30c","./VertexFormat-e8cbf5b3"],function(t,v,g,e,w,x,b,M,i,f,u){"use strict";function h(t){this.planes=x.defaultValue(t,[])}var p=[new g.Cartesian3,new g.Cartesian3,new g.Cartesian3];g.Cartesian3.clone(g.Cartesian3.UNIT_X,p[0]),g.Cartesian3.clone(g.Cartesian3.UNIT_Y,p[1]),g.Cartesian3.clone(g.Cartesian3.UNIT_Z,p[2]);var d=new g.Cartesian3,c=new g.Cartesian3,l=new f.Plane(new g.Cartesian3(1,0,0),0);function r(t){t=x.defaultValue(t,x.defaultValue.EMPTY_OBJECT),this.left=t.left,this._left=void 0,this.right=t.right,this._right=void 0,this.top=t.top,this._top=void 0,this.bottom=t.bottom,this._bottom=void 0,this.near=x.defaultValue(t.near,1),this._near=this.near,this.far=x.defaultValue(t.far,5e8),this._far=this.far,this._cullingVolume=new h,this._orthographicMatrix=new v.Matrix4}function n(t){t.top===t._top&&t.bottom===t._bottom&&t.left===t._left&&t.right===t._right&&t.near===t._near&&t.far===t._far||(t._left=t.left,t._right=t.right,t._top=t.top,t._bottom=t.bottom,t._near=t.near,t._far=t.far,t._orthographicMatrix=v.Matrix4.computeOrthographicOffCenter(t.left,t.right,t.bottom,t.top,t.near,t.far,t._orthographicMatrix))}h.fromBoundingSphere=function(t,e){x.defined(e)||(e=new h);var a=p.length,i=e.planes;i.length=2*a;for(var r=t.center,n=t.radius,o=0,s=0;s<a;++s){var f=p[s],u=i[o],l=i[o+1];x.defined(u)||(u=i[o]=new v.Cartesian4),x.defined(l)||(l=i[o+1]=new v.Cartesian4),g.Cartesian3.multiplyByScalar(f,-n,d),g.Cartesian3.add(r,d,d),u.x=f.x,u.y=f.y,u.z=f.z,u.w=-g.Cartesian3.dot(f,d),g.Cartesian3.multiplyByScalar(f,n,d),g.Cartesian3.add(r,d,d),l.x=-f.x,l.y=-f.y,l.z=-f.z,l.w=-g.Cartesian3.dot(g.Cartesian3.negate(f,c),d),o+=2}return e},h.prototype.computeVisibility=function(t){for(var e=this.planes,a=!1,i=0,r=e.length;i<r;++i){var n=t.intersectPlane(f.Plane.fromCartesian4(e[i],l));if(n===v.Intersect.OUTSIDE)return v.Intersect.OUTSIDE;n===v.Intersect.INTERSECTING&&(a=!0)}return a?v.Intersect.INTERSECTING:v.Intersect.INSIDE},h.prototype.computeVisibilityWithPlaneMask=function(t,e){if(e===h.MASK_OUTSIDE||e===h.MASK_INSIDE)return e;for(var a=h.MASK_INSIDE,i=this.planes,r=0,n=i.length;r<n;++r){var o=r<31?1<<r:0;if(!(r<31&&0==(e&o))){var s=t.intersectPlane(f.Plane.fromCartesian4(i[r],l));if(s===v.Intersect.OUTSIDE)return h.MASK_OUTSIDE;s===v.Intersect.INTERSECTING&&(a|=o)}}return a},h.MASK_OUTSIDE=4294967295,h.MASK_INSIDE=0,h.MASK_INDETERMINATE=2147483647,Object.defineProperties(r.prototype,{projectionMatrix:{get:function(){return n(this),this._orthographicMatrix}}});var m=new g.Cartesian3,C=new g.Cartesian3,_=new g.Cartesian3,y=new g.Cartesian3;function F(t){t=x.defaultValue(t,x.defaultValue.EMPTY_OBJECT),this._offCenterFrustum=new r,this.width=t.width,this._width=void 0,this.aspectRatio=t.aspectRatio,this._aspectRatio=void 0,this.near=x.defaultValue(t.near,1),this._near=this.near,this.far=x.defaultValue(t.far,5e8),this._far=this.far}function o(t){var e,a=t._offCenterFrustum;t.width===t._width&&t.aspectRatio===t._aspectRatio&&t.near===t._near&&t.far===t._far||(t._aspectRatio=t.aspectRatio,t._width=t.width,t._near=t.near,t._far=t.far,e=1/t.aspectRatio,a.right=.5*t.width,a.left=-a.right,a.top=e*a.right,a.bottom=-a.top,a.near=t.near,a.far=t.far)}function s(t){t=x.defaultValue(t,x.defaultValue.EMPTY_OBJECT),this.left=t.left,this._left=void 0,this.right=t.right,this._right=void 0,this.top=t.top,this._top=void 0,this.bottom=t.bottom,this._bottom=void 0,this.near=x.defaultValue(t.near,1),this._near=this.near,this.far=x.defaultValue(t.far,5e8),this._far=this.far,this._cullingVolume=new h,this._perspectiveMatrix=new v.Matrix4,this._infinitePerspective=new v.Matrix4}function V(t){var e=t.top,a=t.bottom,i=t.right,r=t.left,n=t.near,o=t.far;e===t._top&&a===t._bottom&&r===t._left&&i===t._right&&n===t._near&&o===t._far||(t._left=r,t._right=i,t._top=e,t._bottom=a,t._near=n,t._far=o,t._perspectiveMatrix=v.Matrix4.computePerspectiveOffCenter(r,i,a,e,n,o,t._perspectiveMatrix),t._infinitePerspective=v.Matrix4.computeInfinitePerspectiveOffCenter(r,i,a,e,n,t._infinitePerspective))}r.prototype.computeCullingVolume=function(t,e,a){var i=this._cullingVolume.planes,r=this.top,n=this.bottom,o=this.right,s=this.left,f=this.near,u=this.far,l=g.Cartesian3.cross(e,a,m);g.Cartesian3.normalize(l,l);var h=C;g.Cartesian3.multiplyByScalar(e,f,h),g.Cartesian3.add(t,h,h);f=_;g.Cartesian3.multiplyByScalar(l,s,f),g.Cartesian3.add(h,f,f);s=i[0];return(s=!x.defined(s)?i[0]=new v.Cartesian4:s).x=l.x,s.y=l.y,s.z=l.z,s.w=-g.Cartesian3.dot(l,f),g.Cartesian3.multiplyByScalar(l,o,f),g.Cartesian3.add(h,f,f),s=i[1],(s=!x.defined(s)?i[1]=new v.Cartesian4:s).x=-l.x,s.y=-l.y,s.z=-l.z,s.w=-g.Cartesian3.dot(g.Cartesian3.negate(l,y),f),g.Cartesian3.multiplyByScalar(a,n,f),g.Cartesian3.add(h,f,f),s=i[2],(s=!x.defined(s)?i[2]=new v.Cartesian4:s).x=a.x,s.y=a.y,s.z=a.z,s.w=-g.Cartesian3.dot(a,f),g.Cartesian3.multiplyByScalar(a,r,f),g.Cartesian3.add(h,f,f),s=i[3],(s=!x.defined(s)?i[3]=new v.Cartesian4:s).x=-a.x,s.y=-a.y,s.z=-a.z,s.w=-g.Cartesian3.dot(g.Cartesian3.negate(a,y),f),s=i[4],(s=!x.defined(s)?i[4]=new v.Cartesian4:s).x=e.x,s.y=e.y,s.z=e.z,s.w=-g.Cartesian3.dot(e,h),g.Cartesian3.multiplyByScalar(e,u,f),g.Cartesian3.add(t,f,f),s=i[5],(s=!x.defined(s)?i[5]=new v.Cartesian4:s).x=-e.x,s.y=-e.y,s.z=-e.z,s.w=-g.Cartesian3.dot(g.Cartesian3.negate(e,y),f),this._cullingVolume},r.prototype.getPixelDimensions=function(t,e,a,i,r){n(this);t=i*(this.right-this.left)/t,e=i*(this.top-this.bottom)/e;return r.x=t,r.y=e,r},r.prototype.clone=function(t){return(t=!x.defined(t)?new r:t).left=this.left,t.right=this.right,t.top=this.top,t.bottom=this.bottom,t.near=this.near,t.far=this.far,t._left=void 0,t._right=void 0,t._top=void 0,t._bottom=void 0,t._near=void 0,t._far=void 0,t},r.prototype.equals=function(t){return x.defined(t)&&t instanceof r&&this.right===t.right&&this.left===t.left&&this.top===t.top&&this.bottom===t.bottom&&this.near===t.near&&this.far===t.far},r.prototype.equalsEpsilon=function(t,e,a){return t===this||x.defined(t)&&t instanceof r&&i.CesiumMath.equalsEpsilon(this.right,t.right,e,a)&&i.CesiumMath.equalsEpsilon(this.left,t.left,e,a)&&i.CesiumMath.equalsEpsilon(this.top,t.top,e,a)&&i.CesiumMath.equalsEpsilon(this.bottom,t.bottom,e,a)&&i.CesiumMath.equalsEpsilon(this.near,t.near,e,a)&&i.CesiumMath.equalsEpsilon(this.far,t.far,e,a)},F.packedLength=4,F.pack=function(t,e,a){return a=x.defaultValue(a,0),e[a++]=t.width,e[a++]=t.aspectRatio,e[a++]=t.near,e[a]=t.far,e},F.unpack=function(t,e,a){return e=x.defaultValue(e,0),(a=!x.defined(a)?new F:a).width=t[e++],a.aspectRatio=t[e++],a.near=t[e++],a.far=t[e],a},Object.defineProperties(F.prototype,{projectionMatrix:{get:function(){return o(this),this._offCenterFrustum.projectionMatrix}}}),F.prototype.computeCullingVolume=function(t,e,a){return o(this),this._offCenterFrustum.computeCullingVolume(t,e,a)},F.prototype.getPixelDimensions=function(t,e,a,i,r){return o(this),this._offCenterFrustum.getPixelDimensions(t,e,a,i,r)},F.prototype.clone=function(t){return(t=!x.defined(t)?new F:t).aspectRatio=this.aspectRatio,t.width=this.width,t.near=this.near,t.far=this.far,t._aspectRatio=void 0,t._width=void 0,t._near=void 0,t._far=void 0,this._offCenterFrustum.clone(t._offCenterFrustum),t},F.prototype.equals=function(t){return!!(x.defined(t)&&t instanceof F)&&(o(this),o(t),this.width===t.width&&this.aspectRatio===t.aspectRatio&&this._offCenterFrustum.equals(t._offCenterFrustum))},F.prototype.equalsEpsilon=function(t,e,a){return!!(x.defined(t)&&t instanceof F)&&(o(this),o(t),i.CesiumMath.equalsEpsilon(this.width,t.width,e,a)&&i.CesiumMath.equalsEpsilon(this.aspectRatio,t.aspectRatio,e,a)&&this._offCenterFrustum.equalsEpsilon(t._offCenterFrustum,e,a))},Object.defineProperties(s.prototype,{projectionMatrix:{get:function(){return V(this),this._perspectiveMatrix}},infiniteProjectionMatrix:{get:function(){return V(this),this._infinitePerspective}}});var E=new g.Cartesian3,O=new g.Cartesian3,P=new g.Cartesian3,z=new g.Cartesian3;function R(t){t=x.defaultValue(t,x.defaultValue.EMPTY_OBJECT),this._offCenterFrustum=new s,this.fov=t.fov,this._fov=void 0,this._fovy=void 0,this._sseDenominator=void 0,this.aspectRatio=t.aspectRatio,this._aspectRatio=void 0,this.near=x.defaultValue(t.near,1),this._near=this.near,this.far=x.defaultValue(t.far,5e8),this._far=this.far,this.xOffset=x.defaultValue(t.xOffset,0),this._xOffset=this.xOffset,this.yOffset=x.defaultValue(t.yOffset,0),this._yOffset=this.yOffset}function S(t){var e=t._offCenterFrustum;t.fov===t._fov&&t.aspectRatio===t._aspectRatio&&t.near===t._near&&t.far===t._far&&t.xOffset===t._xOffset&&t.yOffset===t._yOffset||(t._aspectRatio=t.aspectRatio,t._fov=t.fov,t._fovy=t.aspectRatio<=1?t.fov:2*Math.atan(Math.tan(.5*t.fov)/t.aspectRatio),t._near=t.near,t._far=t.far,t._sseDenominator=2*Math.tan(.5*t._fovy),t._xOffset=t.xOffset,t._yOffset=t.yOffset,e.top=t.near*Math.tan(.5*t._fovy),e.bottom=-e.top,e.right=t.aspectRatio*e.top,e.left=-e.right,e.near=t.near,e.far=t.far,e.right+=t.xOffset,e.left+=t.xOffset,e.top+=t.yOffset,e.bottom+=t.yOffset)}s.prototype.computeCullingVolume=function(t,e,a){var i=this._cullingVolume.planes,r=this.top,n=this.bottom,o=this.right,s=this.left,f=this.near,u=this.far,l=g.Cartesian3.cross(e,a,E),h=O;g.Cartesian3.multiplyByScalar(e,f,h),g.Cartesian3.add(t,h,h);f=P;g.Cartesian3.multiplyByScalar(e,u,f),g.Cartesian3.add(t,f,f);u=z;g.Cartesian3.multiplyByScalar(l,s,u),g.Cartesian3.add(h,u,u),g.Cartesian3.subtract(u,t,u),g.Cartesian3.normalize(u,u),g.Cartesian3.cross(u,a,u),g.Cartesian3.normalize(u,u);s=i[0];return(s=!x.defined(s)?i[0]=new v.Cartesian4:s).x=u.x,s.y=u.y,s.z=u.z,s.w=-g.Cartesian3.dot(u,t),g.Cartesian3.multiplyByScalar(l,o,u),g.Cartesian3.add(h,u,u),g.Cartesian3.subtract(u,t,u),g.Cartesian3.cross(a,u,u),g.Cartesian3.normalize(u,u),s=i[1],(s=!x.defined(s)?i[1]=new v.Cartesian4:s).x=u.x,s.y=u.y,s.z=u.z,s.w=-g.Cartesian3.dot(u,t),g.Cartesian3.multiplyByScalar(a,n,u),g.Cartesian3.add(h,u,u),g.Cartesian3.subtract(u,t,u),g.Cartesian3.cross(l,u,u),g.Cartesian3.normalize(u,u),s=i[2],(s=!x.defined(s)?i[2]=new v.Cartesian4:s).x=u.x,s.y=u.y,s.z=u.z,s.w=-g.Cartesian3.dot(u,t),g.Cartesian3.multiplyByScalar(a,r,u),g.Cartesian3.add(h,u,u),g.Cartesian3.subtract(u,t,u),g.Cartesian3.cross(u,l,u),g.Cartesian3.normalize(u,u),s=i[3],(s=!x.defined(s)?i[3]=new v.Cartesian4:s).x=u.x,s.y=u.y,s.z=u.z,s.w=-g.Cartesian3.dot(u,t),s=i[4],(s=!x.defined(s)?i[4]=new v.Cartesian4:s).x=e.x,s.y=e.y,s.z=e.z,s.w=-g.Cartesian3.dot(e,h),g.Cartesian3.negate(e,u),s=i[5],(s=!x.defined(s)?i[5]=new v.Cartesian4:s).x=u.x,s.y=u.y,s.z=u.z,s.w=-g.Cartesian3.dot(u,f),this._cullingVolume},s.prototype.getPixelDimensions=function(t,e,a,i,r){V(this);var n=1/this.near,e=2*i*a*(this.top*n)/e,t=2*i*a*(this.right*n)/t;return r.x=t,r.y=e,r},s.prototype.clone=function(t){return(t=!x.defined(t)?new s:t).right=this.right,t.left=this.left,t.top=this.top,t.bottom=this.bottom,t.near=this.near,t.far=this.far,t._left=void 0,t._right=void 0,t._top=void 0,t._bottom=void 0,t._near=void 0,t._far=void 0,t},s.prototype.equals=function(t){return x.defined(t)&&t instanceof s&&this.right===t.right&&this.left===t.left&&this.top===t.top&&this.bottom===t.bottom&&this.near===t.near&&this.far===t.far},s.prototype.equalsEpsilon=function(t,e,a){return t===this||x.defined(t)&&t instanceof s&&i.CesiumMath.equalsEpsilon(this.right,t.right,e,a)&&i.CesiumMath.equalsEpsilon(this.left,t.left,e,a)&&i.CesiumMath.equalsEpsilon(this.top,t.top,e,a)&&i.CesiumMath.equalsEpsilon(this.bottom,t.bottom,e,a)&&i.CesiumMath.equalsEpsilon(this.near,t.near,e,a)&&i.CesiumMath.equalsEpsilon(this.far,t.far,e,a)},R.packedLength=6,R.pack=function(t,e,a){return a=x.defaultValue(a,0),e[a++]=t.fov,e[a++]=t.aspectRatio,e[a++]=t.near,e[a++]=t.far,e[a++]=t.xOffset,e[a]=t.yOffset,e},R.unpack=function(t,e,a){return e=x.defaultValue(e,0),(a=!x.defined(a)?new R:a).fov=t[e++],a.aspectRatio=t[e++],a.near=t[e++],a.far=t[e++],a.xOffset=t[e++],a.yOffset=t[e],a},Object.defineProperties(R.prototype,{projectionMatrix:{get:function(){return S(this),this._offCenterFrustum.projectionMatrix}},infiniteProjectionMatrix:{get:function(){return S(this),this._offCenterFrustum.infiniteProjectionMatrix}},fovy:{get:function(){return S(this),this._fovy}},sseDenominator:{get:function(){return S(this),this._sseDenominator}}}),R.prototype.computeCullingVolume=function(t,e,a){return S(this),this._offCenterFrustum.computeCullingVolume(t,e,a)},R.prototype.getPixelDimensions=function(t,e,a,i,r){return S(this),this._offCenterFrustum.getPixelDimensions(t,e,a,i,r)},R.prototype.clone=function(t){return(t=!x.defined(t)?new R:t).aspectRatio=this.aspectRatio,t.fov=this.fov,t.near=this.near,t.far=this.far,t._aspectRatio=void 0,t._fov=void 0,t._near=void 0,t._far=void 0,this._offCenterFrustum.clone(t._offCenterFrustum),t},R.prototype.equals=function(t){return!!(x.defined(t)&&t instanceof R)&&(S(this),S(t),this.fov===t.fov&&this.aspectRatio===t.aspectRatio&&this._offCenterFrustum.equals(t._offCenterFrustum))},R.prototype.equalsEpsilon=function(t,e,a){return!!(x.defined(t)&&t instanceof R)&&(S(this),S(t),i.CesiumMath.equalsEpsilon(this.fov,t.fov,e,a)&&i.CesiumMath.equalsEpsilon(this.aspectRatio,t.aspectRatio,e,a)&&this._offCenterFrustum.equalsEpsilon(t._offCenterFrustum,e,a))};function T(t){var e,a,i=t.frustum,r=t.orientation,n=t.origin,o=x.defaultValue(t.vertexFormat,u.VertexFormat.DEFAULT),t=x.defaultValue(t._drawNearPlane,!0);i instanceof R?(e=0,a=R.packedLength):i instanceof F&&(e=1,a=F.packedLength),this._frustumType=e,this._frustum=i.clone(),this._origin=g.Cartesian3.clone(n),this._orientation=v.Quaternion.clone(r),this._drawNearPlane=t,this._vertexFormat=o,this._workerName="createFrustumGeometry",this.packedLength=2+a+g.Cartesian3.packedLength+v.Quaternion.packedLength+u.VertexFormat.packedLength}T.pack=function(t,e,a){a=x.defaultValue(a,0);var i=t._frustumType,r=t._frustum;return 0===(e[a++]=i)?(R.pack(r,e,a),a+=R.packedLength):(F.pack(r,e,a),a+=F.packedLength),g.Cartesian3.pack(t._origin,e,a),a+=g.Cartesian3.packedLength,v.Quaternion.pack(t._orientation,e,a),a+=v.Quaternion.packedLength,u.VertexFormat.pack(t._vertexFormat,e,a),e[a+=u.VertexFormat.packedLength]=t._drawNearPlane?1:0,e};var k=new R,A=new F,D=new v.Quaternion,I=new g.Cartesian3,q=new u.VertexFormat;function B(t,e,a,i,r,n,o,s){for(var f=t/3*2,u=0;u<4;++u)x.defined(e)&&(e[t]=n.x,e[t+1]=n.y,e[t+2]=n.z),x.defined(a)&&(a[t]=o.x,a[t+1]=o.y,a[t+2]=o.z),x.defined(i)&&(i[t]=s.x,i[t+1]=s.y,i[t+2]=s.z),t+=3;r[f]=0,r[1+f]=0,r[2+f]=1,r[3+f]=0,r[4+f]=1,r[5+f]=1,r[6+f]=0,r[7+f]=1}T.unpack=function(t,e,a){e=x.defaultValue(e,0);var i,r=t[e++];0===r?(i=R.unpack(t,e,k),e+=R.packedLength):(i=F.unpack(t,e,A),e+=F.packedLength);var n=g.Cartesian3.unpack(t,e,I);e+=g.Cartesian3.packedLength;var o=v.Quaternion.unpack(t,e,D);e+=v.Quaternion.packedLength;var s=u.VertexFormat.unpack(t,e,q),t=1===t[e+=u.VertexFormat.packedLength];if(!x.defined(a))return new T({frustum:i,origin:n,orientation:o,vertexFormat:s,_drawNearPlane:t});e=r===a._frustumType?a._frustum:void 0;return a._frustum=i.clone(e),a._frustumType=r,a._origin=g.Cartesian3.clone(n,a._origin),a._orientation=v.Quaternion.clone(o,a._orientation),a._vertexFormat=u.VertexFormat.clone(s,a._vertexFormat),a._drawNearPlane=t,a};var L=new v.Matrix3,N=new v.Matrix4,G=new v.Matrix4,j=new g.Cartesian3,U=new g.Cartesian3,Q=new g.Cartesian3,K=new g.Cartesian3,Y=new g.Cartesian3,J=new g.Cartesian3,W=new Array(3),X=new Array(4);X[0]=new v.Cartesian4(-1,-1,1,1),X[1]=new v.Cartesian4(1,-1,1,1),X[2]=new v.Cartesian4(1,1,1,1),X[3]=new v.Cartesian4(-1,1,1,1);for(var Z=new Array(4),a=0;a<4;++a)Z[a]=new v.Cartesian4;T._computeNearFarPlanes=function(t,e,a,i,r,n,o,s){var e=v.Matrix3.fromQuaternion(e,L),n=x.defaultValue(n,j),o=x.defaultValue(o,U),f=x.defaultValue(s,Q),n=v.Matrix3.getColumn(e,0,n),o=v.Matrix3.getColumn(e,1,o),f=v.Matrix3.getColumn(e,2,f);g.Cartesian3.normalize(n,n),g.Cartesian3.normalize(o,o),g.Cartesian3.normalize(f,f),g.Cartesian3.negate(n,n);var u,l,n=v.Matrix4.computeView(t,f,o,n,N);0===a?(a=i.projectionMatrix,a=v.Matrix4.multiply(a,n,G),l=v.Matrix4.inverse(a,G)):u=v.Matrix4.inverseTransformation(n,G),x.defined(l)?(W[0]=i.near,W[1]=i.far):(W[0]=0,W[1]=i.near,W[2]=i.far);for(var h=0;h<2;++h)for(var p=0;p<4;++p){var d,c,m=v.Cartesian4.clone(X[p],Z[p]);x.defined(l)?(d=1/(m=v.Matrix4.multiplyByVector(l,m,m)).w,g.Cartesian3.multiplyByScalar(m,d,m),g.Cartesian3.subtract(m,t,m),g.Cartesian3.normalize(m,m),c=g.Cartesian3.dot(f,m),g.Cartesian3.multiplyByScalar(m,W[h]/c,m),g.Cartesian3.add(m,t,m)):(x.defined(i._offCenterFrustum)&&(i=i._offCenterFrustum),d=W[h],c=W[h+1],m.x=.5*(m.x*(i.right-i.left)+i.left+i.right),m.y=.5*(m.y*(i.top-i.bottom)+i.bottom+i.top),m.z=.5*(m.z*(d-c)-d-c),m.w=1,v.Matrix4.multiplyByVector(u,m,m)),r[12*h+3*p]=m.x,r[12*h+3*p+1]=m.y,r[12*h+3*p+2]=m.z}},T.createGeometry=function(t){var e=t._frustumType,a=t._frustum,i=t._origin,r=t._orientation,n=t._drawNearPlane,o=t._vertexFormat,s=n?6:5,f=new Float64Array(72);T._computeNearFarPlanes(i,r,e,a,f);var u=24;f[u]=f[12],f[u+1]=f[13],f[u+2]=f[14],f[u+3]=f[0],f[u+4]=f[1],f[u+5]=f[2],f[u+6]=f[9],f[u+7]=f[10],f[u+8]=f[11],f[u+9]=f[21],f[u+10]=f[22],f[u+11]=f[23],f[u+=12]=f[15],f[u+1]=f[16],f[u+2]=f[17],f[u+3]=f[3],f[u+4]=f[4],f[u+5]=f[5],f[u+6]=f[0],f[u+7]=f[1],f[u+8]=f[2],f[u+9]=f[12],f[u+10]=f[13],f[u+11]=f[14],f[u+=12]=f[3],f[u+1]=f[4],f[u+2]=f[5],f[u+3]=f[15],f[u+4]=f[16],f[u+5]=f[17],f[u+6]=f[18],f[u+7]=f[19],f[u+8]=f[20],f[u+9]=f[6],f[u+10]=f[7],f[u+11]=f[8],f[u+=12]=f[6],f[u+1]=f[7],f[u+2]=f[8],f[u+3]=f[18],f[u+4]=f[19],f[u+5]=f[20],f[u+6]=f[21],f[u+7]=f[22],f[u+8]=f[23],f[u+9]=f[9],f[u+10]=f[10],f[u+11]=f[11],n||(f=f.subarray(12));var l,h,p,d,c=new M.GeometryAttributes({position:new b.GeometryAttribute({componentDatatype:w.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:f})});(x.defined(o.normal)||x.defined(o.tangent)||x.defined(o.bitangent)||x.defined(o.st))&&(l=x.defined(o.normal)?new Float32Array(12*s):void 0,h=x.defined(o.tangent)?new Float32Array(12*s):void 0,p=x.defined(o.bitangent)?new Float32Array(12*s):void 0,d=x.defined(o.st)?new Float32Array(8*s):void 0,t=j,i=U,r=Q,e=g.Cartesian3.negate(t,K),a=g.Cartesian3.negate(i,Y),o=g.Cartesian3.negate(r,J),u=0,n&&(B(u,l,h,p,d,o,t,i),u+=12),B(u,l,h,p,d,r,e,i),B(u+=12,l,h,p,d,e,o,i),B(u+=12,l,h,p,d,a,o,e),B(u+=12,l,h,p,d,t,r,i),B(u+=12,l,h,p,d,i,r,e),x.defined(l)&&(c.normal=new b.GeometryAttribute({componentDatatype:w.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:l})),x.defined(h)&&(c.tangent=new b.GeometryAttribute({componentDatatype:w.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:h})),x.defined(p)&&(c.bitangent=new b.GeometryAttribute({componentDatatype:w.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:p})),x.defined(d)&&(c.st=new b.GeometryAttribute({componentDatatype:w.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:d})));for(var m=new Uint16Array(6*s),C=0;C<s;++C){var _=6*C,y=4*C;m[_]=y,m[1+_]=1+y,m[2+_]=2+y,m[3+_]=y,m[4+_]=2+y,m[5+_]=3+y}return new b.Geometry({attributes:c,indices:m,primitiveType:b.PrimitiveType.TRIANGLES,boundingSphere:v.BoundingSphere.fromVertices(f)})},t.FrustumGeometry=T,t.OrthographicFrustum=F,t.PerspectiveFrustum=R});
