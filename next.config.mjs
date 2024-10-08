/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    async rewrites() {
        return [
            {
                source: "/api/:path*",
                destination:
                    "http://ec2-3-36-51-88.ap-northeast-2.compute.amazonaws.com:8080/:path*",
            },
            {
                source: "/oauth2/:path*",
                destination:
                    "http://ec2-3-36-51-88.ap-northeast-2.compute.amazonaws.com:8080/oauth2/:path*",
            },
        ];
    },
};

export default nextConfig;
