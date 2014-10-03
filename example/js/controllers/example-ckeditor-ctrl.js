exampleApp.controller('ExampleCkEditorCtrl', ['$scope', '$http', 'filterFilter', function ($scope, $http, filterFilter) {
    
	$scope.markUp = "";
	$scope.plainText = "";

    $scope.ckEditorOptions = {
        toolbar: 'full',
        toolbar_full: [
            {
                name: 'basicstyles',
                items: ['Bold', 'Italic', 'Strike', 'Underline']
            },
            {
                name: 'paragraph',
                items: ['BulletedList', 'NumberedList', 'Blockquote']
            },
            {
                name: 'insert',
                items: ['Table', 'SpecialChar']
            },
            {
                name: 'forms',
                items: ['Outdent', 'Indent']
            },
            {
                name: 'clipboard',
                items: ['Undo', 'Redo']
            }
        ],
        uiColor: '#FAFAFA',
        height: '400px'
    };
}]);