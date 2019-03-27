# mysite
Site pessoal, com currículo, portifólio, etc

# Criar um projeto novo
ng new 

# Executar para desenvolvimento
ng new myapp --style=scss --skip-tests --skip-git

# Publicar em produção
```bash
# Entrar no diretorio do projeto angular
ng build --aot
# Copiar o conteúdo compilado para o servidor
scp -r dist/PROJETO srv-digitalocean:/tmp
scp -r -i ...\projetos\digitalocean\keys\digitalocean-rsa-private.key .\dist\resume\ root@206.189.67.178:/tmp
# Acessar o servidor via SSH e atualizar o conteúdo novo
rm -rf /usr/local/apps/mysite/resume/*
mv /tmp/www/* /usr/local/apps/mysite/resume
# Reiniciar o docker do nginx
docker restart proxy-nginx
```

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
