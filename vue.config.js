module.exports = {
    devServer: {
        proxy: {
            "/api": {
                ws: true,
                changeOrigin: true,
                target: "https://www.transparencia.am.gov.br/wp-admin/admin-ajax.php"
            }
        }
    }
}