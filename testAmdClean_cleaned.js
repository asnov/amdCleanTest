;(function() {
var asn1js = {}, Certificate = {};
asn1js = function (exports) {
  exports.Integer = function () {
    function Integer() {
    }
    return Integer;
  }();
  return exports;
}(asn1js);
Certificate = function (exports) {
  var _asn1js = asn1js;
  var asn1js = _interopRequireWildcard(_asn1js);
  exports.default = function () {
    function Certificate() {
      var int = new asn1js.Integer();
    }
    return Certificate;
  }();
  return exports;
}(Certificate);
}());
