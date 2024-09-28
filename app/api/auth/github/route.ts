import { nanoid } from "nanoid";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

const handler = async (): Promise<NextResponse> => {
    const state = nanoid();
    const githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}&redirect_uri=${process.env.GITHUB_REDIRECT_URI}&state=${state}`;

    const response = NextResponse.json({ url: githubAuthUrl });

    cookies().set("github_oauth_state", state, {
        httpOnly: true,
        path: "/",
        maxAge: 3600,
    });

    return response;
};

export const GET = handler;
