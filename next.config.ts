/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },   // se usar <Image/>
  basePath: '/Feliz-Aniversario',  // se o site for em https://usuario.github.io/NOME_DO_REPO
};
module.exports = nextConfig;