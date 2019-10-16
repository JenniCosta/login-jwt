export const Token_key = "@airbnb-Token";
export const isAuthenticated = () => localStorage.getItem(Token_key) !== null;
// export const getToken = () => localStorage.getItem(Token_key);
export const login = () => {
    localStorage.setItem(Token_key, );//tokrn);
};
export const logout = () => {
    localStorage.removeItem(Token_key);
}