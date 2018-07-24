const kit = require('nokit')

module.exports = (task) => {
    task('default', () => {
        kit.mkdirsSync('dist')
        return kit.spawn('pkg', ['--out-path', 'dist', '.'])
    })
}