export default ({ command }) => ({
    base: command === 'serve' ? '' : '/build/',
    outDir: 'public/build',
    publicDir: 'fake_dir_so_nothing_gets_copied',
    build: {
        manifest: true,
        rollupOptions: {
            input: 'resources/js/app.js',
        },
    },
    plugins: [
        // for vue
        vue(),
        // for blade 
        {
            name: 'blade',
            handleHotUpdate({ file, server }) {
                if (file.endsWith('.blade.php')) {
                    server.ws.send({
                        type: 'full-reload',
                        path: '*',
                    });
                }
            },
        }
    ],
});
