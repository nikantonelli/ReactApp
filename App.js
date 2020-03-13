(function () {
    var Ext = window.Ext4 || window.Ext;

    Ext.define('Niks.Apps.CustomApp', {

        extend: 'Rally.app.App',
        componentCls: 'app',
        listeners: {
            afterrender: function() {
                launchReactApp();       //Provide this function in a file you include in the build
            }
        },
        launch: function() {
        }
    });
})();
