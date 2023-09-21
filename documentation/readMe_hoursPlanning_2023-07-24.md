# Notes on official development steps for hoursPlanning project

## notes on documentation locations
Changed from trello board to github projects board, created new board for todos

Changed from google drive for design document to documentation folder in root directory

Changed design doc and this readme file to markdown style

## set-up commands and steps taken
```npm create-next-app```

linked git repo

vercel postgres database created "dev_hoursPlanning"

ran prisma commands

```npm install prisma --save-dev```

skipped new ts config file, went with strict: true

```npx prisma init```

added full url from vercel into .env

created test organization table in schema.prisma
ran command to initialize database - created table

```npx prisma db push```

this worked as expected, table viewable in vercel under data tab

