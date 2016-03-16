module.exports = angular.module('trafficOps.private.configure.regions.edit', [])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('trafficOps.private.configure.regions.edit', {
                url: '/{regionId}',
                views: {
                    regionsContent: {
                        templateUrl: 'common/modules/form/region/form.region.tpl.html',
                        controller: 'FormRegionController',
                        resolve: {
                            region: function($stateParams, regionService) {
                                return regionService.getRegion($stateParams.regionId);
                            }
                        }
                    }
                }
            })
        ;
        $urlRouterProvider.otherwise('/');
    });