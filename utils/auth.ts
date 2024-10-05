export const GITHUB_CLIENT_ID = process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID;
export const GITHUB_REDIRECT_URI = `${process.env.NEXT_PUBLIC_GITHUB_REDIRECT_URI}`;

export const getGitHubAuthUrl = () => {
    const params = new URLSearchParams({
        client_id: GITHUB_CLIENT_ID as string,
        redirect_uri: GITHUB_REDIRECT_URI,
        scope: "user:email",
    });
    return `https://github.com/login/oauth/authorize?${params.toString()}`;
};
