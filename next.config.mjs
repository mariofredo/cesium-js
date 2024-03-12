import CopyWebpackPlugin from 'copy-webpack-plugin';
import path from 'path';
/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: false,
  webpack: (config, {webpack, isServer}) => {
    if (!isServer) {
      config.plugins.push(
        new CopyWebpackPlugin({
          patterns: [
            {
              from: path.join(
                process.cwd(),
                'node_modules/cesium/Build/Cesium/Workers'
              ),
              to: '../public/Cesium/Workers',
            },
            {
              from: path.join(
                process.cwd(),
                'node_modules/cesium/Build/Cesium/ThirdParty'
              ),
              to: '../public/Cesium/ThirdParty',
            },
            {
              from: path.join(
                process.cwd(),
                'node_modules/cesium/Build/Cesium/Assets'
              ),
              to: '../public/Cesium/Assets',
            },
            {
              from: path.join(
                process.cwd(),
                'node_modules/cesium/Build/Cesium/Widgets'
              ),
              to: '../public/Cesium/Widgets',
            },
          ],
        })
      );
    }
    config.plugins.push(
      new webpack.DefinePlugin({
        CUSTOM_BASE_URL: JSON.stringify('/Cesium'),
      })
    );
    return config;
  },
};

export default nextConfig;
