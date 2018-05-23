spa.chat = (function() {
    var
        configMap = {
            main_html: String()
            + '<div style="padding: 1em; color: #ffff;">'
                + 'Say hello to chat'
            + '</div>',
            settable_map: {}
        },
        stateMap = { $container: null },
        jqueryMap = {},
        setJqueryMap, configModule, initModule;

    setJqueryMap = function () {
        $container = stateMap.$container;
        jqueryMap = {
            $container
        }
    }
    configModule = function (input_map) {

    }
}())