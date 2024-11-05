import { useState, useEffect } from "react";
import { getGitHubAuthUrl } from "@/utils/auth";

export const useAuth = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            setIsLoggedIn(true);
            fetchUser(token);
        }
    }, []);

    const fetchUser = async (token: string) => {
        try {
            const response = await fetch("http://your-backend-url/user", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            if (response.ok) {
                const userData = await response.json();
                setUser(userData);
            }
        } catch {
            throw new Error("Failed to fetch user data");
        }
    };

    const login = () => {
        window.location.href = getGitHubAuthUrl();
    };

    const logout = () => {
        localStorage.removeItem("token");
        setIsLoggedIn(false);
        setUser(null);
    };

    return { isLoggedIn, user, login, logout };
};
