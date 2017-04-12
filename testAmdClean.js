define('asn1js', ['require', 'exports'], function (require, exports) {
    exports.Integer = function () {
        function Integer() {
        }

        return Integer;
    }();
});


define('Certificate', ['require', 'exports', 'asn1js'], function (require, exports) {
    var _asn1js = require("asn1js");
    var asn1js = _interopRequireWildcard(_asn1js);

    exports.default = function () {
        function Certificate() {
            var int = new asn1js.Integer();
        }

        return Certificate;
    }();
});
