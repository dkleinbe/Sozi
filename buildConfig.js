// Just build for x64 architectures
// and disable code uglify for better debugging
var buildConfig = {
    platforms: [
        "win32-x64"
    ],
    electronVersion: "1.2.0",
    uglifyOptions: {
        compress: false,
        mangle: false,
        beautify: true
    }
};

module.exports = buildConfig;

