# revisando-edfisica
Modelo básico para meus blogs.


Mudanças necessárias para cada blog:
- astro.config.mjs
  - mudar o link do site
- rss.xml.js
  - título
  - descrição
  - idioma em <language>
- Footer.astro
  - modificar plataformas sociais (verificar se algum link foge ao padrão de Social.astro)
- Navigation
  - Verificar se o caso de negócio específico precisa de menus extras ou retirar algum menu
- BaseLayout
  - Modificar pageTitle (ver alguma forma de automatizar isso e deixar nas conigurações como em astro.config.mjs)
- about.astro
  - Reescrever o texto da página
- blog.astro
  - Verificar o conteúdo da página adaptando detalhes para cada site.