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
        spa.util.setConfigMap({
            input_map,
            settable_map: configMap.settable_map,
            config_map: configMap
        });
        return true;
    }
    initModule = function ( $container ) {
        $container.html( configMap.main_html );
        stateMap.$container = $container;
        setJqueryMap();
        return true;
    }
    return {
        configModule,
        initModule
    }
}())