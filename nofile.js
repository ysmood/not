const kit = require('nokit')

module.exports = (task) => {
    task('default', async () => {
        kit.mkdirsSync('dist')
        await kit.spawn('pkg', ['--out-path', 'dist', '.'])
        await Promise.all(kit.globSync(['*', '!*.zip'], { cwd: 'dist' }).map((p) => {
            return kit.spawn('zip', ['-9', p + '.zip', p], { cwd: 'dist' })
        }))
    })
}