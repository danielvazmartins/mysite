# mysite
Site pessoal, com currículo, portifólio, etc

# Criar um projeto novo
ng new 

# Executar para desenvolvimento
ng new myapp --style=scss --skip-tests --skip-git

# Publicar em produção
ng build --aot
scp -r dist/www/ srv-digitalocean:/tmp
- No servidor copiar oconteúdo
rm -rf /usr/local/apps/mysite/resume/*
mv /tmp/www/* /usr/local/apps/mysite/resume

# Google Analytics
https://analytics.google.com/analytics/web

# Projeto
- Layout
- Desenvolvimento (Angular)
- Ícones
- Estrutura de infra (docker, nginx)
- DNS
- SSL
- Analytics
- SEO

# Estrutura do site
## design
Diretório com arquivo de layout e assets utilizados
## under-construction
Página temporário do site em construção
## resume
Página com a versão online do curriculo
