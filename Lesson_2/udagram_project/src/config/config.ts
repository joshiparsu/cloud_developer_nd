export const config = {
  "dev": {
    "username": "udagrampjdev",
    "password": "Android$1983",
    "database": "udagrampjdev",
    "host": "udagrampjdev.ceujk9adfmry.us-east-2.rds.amazonaws.com",
    "dialect": "postgres",
    "aws_region": "us-east-2",
    "aws_profile": "default",
    //"aws_media_bucket": "udagram-ruttner-dev"
    "aws_media_bucket": "udagram-pj-dev"
  },
  "prod": {
    "username": "",
    "password": "",
    "database": "udagram_prod",
    "host": "",
    "dialect": "postgres"
  },
  "jwt": {
    "secret": "helloworld"
  }
}
