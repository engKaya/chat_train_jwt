app.controller('indexController',['$scope','indexFactory',($scope,indexFactory)=>{
    indexFactory.connectSocket('http://localhost:3000').then((socket)=>{
        socket.emit('newUser')

        $scope.girisYap = () =>{
            console.log($scope.sifre + " " + $scope.kullaniciAdi)
        }

        $scope.kayitEkrani = () =>{
            window.location.replace('//localhost:3000/kayit')
        }
    }).catch((error)=>{console.log(error)})
}])