1- Descrição:
Landing page responsiva temática da saga Velozes & Furiosos, simulando plataforma de streaming com sistema de planos, catálogo de filmes e design moderno. Projeto desenvolvido com arquitetura modular SASS e build automatizado com Gulp.js.

2- Deploy:
Acesse o projeto: https://front-land-page-m21.vercel.app/

3- Tecnologias Utilizadas:
-> HTML5 - Marcação semântica;
-> SASS/SCSS - Pré-processador CSS com arquitetura modular;
-> Gulp.js - Automação de tarefas e build;
-> CSS Grid & Flexbox - Layouts responsivos;
-> Git & GitHub - Versionamento de código;
-> Vercel - Hospedagem e deploy.

4- Funcionalidade:
-> Hero Section - Banner principal com visual impactante;
-> Sistema de Planos - Apresentação de diferentes opções de assinatura;
-> Catálogo de Filmes - Grade responsiva com filmes da saga;
-> Design Responsivo - Adaptável a dispositivos móveis e desktop (breakpoint 768px);
-> Hover Effects - Interações visuais com transformações CSS;
-> Performance Otimizada - Imagens comprimidas com gulp-imagemin.

5- Estrutura SASS modular (7 componentes):
src/styles/
├── _variables.scss      # Variáveis centralizadas (cores, fontes, espaçamentos)
├── _mixins.scss         # Mixins parametrizados reutilizáveis
├── _base.scss           # Reset e estilos base
├── _hero.scss           # Seção hero/banner
├── _plans.scss          # Seção de planos
├── _catalog.scss        # Catálogo de filmes
└── _footer.scss         # Rodapé

6- Sistema de Build com Gulp: (javascript)
// Tarefas automatizadas:
-> Compilação automática de SASS para CSS;
-> Otimização de imagens com gulp-imagemin;
-> Watch mode para desenvolvimento;
-> Minificação de código.

7- Pré-requisitos:
-> Node.js 14+;
-> npm.

8- Autor:
-> GitHub: @KledsonFerreiraFonseca
-> LinkedIn: https://www.linkedin.com/in/kledson-ferreira-fonseca-406464240/
-> Portfólio: em construção.
