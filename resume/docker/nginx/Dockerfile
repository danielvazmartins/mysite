FROM nginx:1.13
MAINTAINER  Daniel Vaz Villalobos Martins

# Copia certificado SSL
#RUN mkdir -p /etc/ssl/kmcar
#ADD fullchain.pem /etc/ssl/kmcar/kmcar.ga.crt
#ADD privatekey.pem /etc/ssl/kmcar/kmcar.ga.key

# Copia arquivo de configuracao do nginx
ADD resume.conf /etc/nginx/conf.d/default.conf