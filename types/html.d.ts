// @NOTE type hack to satisfy imports from `.html` files
declare module '*.html' {
  const value: string;
  export default value
}
