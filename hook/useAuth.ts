import { getGitHubAuthUrl } from "@/utils/auth";
import { useState, useEffect } from "react";

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
        } catch (error) {
            console.error("Failed to fetch user data:", error);
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
