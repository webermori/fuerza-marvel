var entryPath = './src/assets';
var outputPath = './app';
var prefix = 'frz';

module.exports = {
    sass: {
        src: [
            entryPath + '/sass'
        ],
        outputName: prefix + '-styles.css',
        dest: outputPath + '/css'
    },

    js: {
        src: [
            entryPath + '/js'
        ],
        outputName: prefix + '-app.js',
        dest: outputPath + '/js'
    },

    img: {
        src: [
            entryPath + '/img'
        ],
        dest: outputPath + '/images'
    }
};