import request from "@/api";

export const testApi = () => {
    return request.get('/api/blade-auth/oauth/captcha')
};
