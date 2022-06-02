var path = require('path');

module.exports = {
    mode: 'none',
    entry: './src/index.js', // 웹 자원을 변환하기 위해 필요한 최초 진입점, entry: {...} 로 작성시 MPA(Mulit Page Application에 적합함)
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist') //path.resolve() 코드는 인자롤 넘어온 경로들을 조합하여 유효한 파일 경로를 만들어주는 Node.js Api
    }, //웹팩을 돌리고 난 결과물의 파일 경로
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['css-loader']
            }
        ]
    }
}


/**
 * ? Loader
 * 로더(Loader)는 웹팩이 웹 애플리케이션을 해석할 때 자바스크립트 파일이 아닌 웹 자원(HTML, CSS, Image, 폰트 등)들을 변환할 수 있도록 도와주는 속성
 */