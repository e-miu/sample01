// モジュール読み込み
var http = require('http');

// サーバーオブジェクト作成
var server = http.createServer();	// EventEmitter

// サーバーへのリクエスト受信時の実行される処理(関数)を登録
server.on('request', function (request, response) {
	response.writeHead(200, {'Content-Type': 'text/plain'});	// レスポンスヘッダーの送信 (httpステータス: 200 = OK)
	response.write('miu web server works!');					// レスポンスボディの送信
	response.end();												// すべてのヘッダ、ボディを送信した
});

// サーバーの起動（イベント待機状態を開始）
// port:8124, ip:localhostをlisten
server.listen(8124, 'localhost', function () {
	console.log('Server running at http://localhost:8124/');	// サーバー起動時のログ
});



// 短縮して以下のようにも書ける
// ※createServerの第一引数は、requestイベントリスナー ( server.on('request', function () {...}); とまったく同じ意味 )
/*
http.createServer(function (request, response) {
	response.writeHead(200, {'Content-Type': 'text/plain'});	// レスポンスヘッダーの送信 (httpステータス: 200 = OK)
	response.write('miu web server works!');					// レスポンスボディの送信
	response.end();												// すべてのヘッダ、ボディを送信した
}).listen(8124, function () {
	console.log('Server running at http://localhost:8124/');	// サーバー起動時のログ
});
*/