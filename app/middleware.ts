import { NextRequest, NextResponse } from "next/server";

export const middleware = (request: NextRequest) => {
    const url = request.nextUrl.clone();

    const encodedPath = url.pathname.slice(1); // 맨 앞의 '/'제거

    if (encodedPath) {
        url.pathname = "/activate";
        url.searchParams.set("token", encodedPath);
        return NextResponse.redirect(url);
    }
};

export const config = {
    matcher: "/:path*",
};
